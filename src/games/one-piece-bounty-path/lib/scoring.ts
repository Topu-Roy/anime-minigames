// Bounty math: hidden stat application, combo evaluation, poster pricing.
// Pure functions only (rng injectable) - headless-testable, no Svelte.
// Tunables live here (see docs/graph.md poster formula).

import {
  EMPTY_STATS,
  READER_FLAGS,
  type BountyChoice,
  type BountyDeltas,
  type BountyNode,
  type BountyRunState,
  type BountyStatKey,
  type BountyStats,
} from "./types";

/** Roger cap - no poster exceeds the Pirate King's bounty. */
export const ROGER_CAP = 5_000_000_000;

/** Stat weights in the poster average. Influence unscored (unlocks paths). */
const STAT_WEIGHTS: Record<Exclude<BountyStatKey, "knowledge">, number> = {
  power: 0.3,
  defiance: 0.25,
  notoriety: 0.2,
  cunning: 0.15,
  influence: 0.1,
};

/** Belly per average point. Low enough that round-one posters land
    in the hundreds of millions, not billions (canon first-bounty zone). */
const BELLY_PER_POINT = 10_000_000;

/** Diminishing returns past this percentile - forces tradeoffs. */
const DIMINISH_KNEE = 80;
const DIMINISH_FACTOR = 0.5;

export type ComboRule = {
  needs: string[];
  mult: number;
  label: string;
};

export const COMBO_RULES: ComboRule[] = [
  { needs: ["revolutionary", "celestial_crime"], mult: 1.6, label: "Dragon's Faith" },
  { needs: ["yonko_blood", "fleet_killer"], mult: 1.5, label: "Yonko Slayer" },
  { needs: ["throne_seen", "truth_seeker"], mult: 1.8, label: "Knows Too Much" },
  { needs: ["pluton_plans", "arms_dealer"], mult: 1.4, label: "Merchant of Death" },
  { needs: ["liberator", "folk_hero"], mult: 1.3, label: "People's Pirate" },
  { needs: ["yonko_insult", "pirate_king_claim"], mult: 1.2, label: "Big Mouth" },
];

/** Flat nerf flags (any present applies). */
const NERF_FLAGS: { flag: string; mult: number; label: string }[] = [
  { flag: "snitch", mult: 0.7, label: "Rat" },
  { flag: "selfless", mult: 0.7, label: "Soft Heart" },
];

export function clampStat(value: number): number {
  return Math.max(0, Math.min(100, value));
}

/** Single gate for choice visibility (flags + glyph-reader rule). */
export function isChoiceEligible(choice: BountyChoice, flags: string[]): boolean {
  if (choice.requiresFlags && !choice.requiresFlags.every((f) => flags.includes(f))) return false;
  if (choice.requiresReader && !flags.some((f) => (READER_FLAGS as readonly string[]).includes(f))) return false;
  return true;
}

/** A continuing choice has a live node to travel to. */
export function isContinuer(choice: BountyChoice, nodes: Record<string, BountyNode>): boolean {
  return choice.nextNodeId !== null && nodes[choice.nextNodeId] !== undefined;
}

/** Fisher-Yates with injectable rng (deterministic in tests). */
export function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const upper = shuffled[i] as T;
    const lower = shuffled[j] as T;
    shuffled[i] = lower;
    shuffled[j] = upper;
  }
  return shuffled;
}

/**
 * Deal one round: requirement-gated, then 1 guaranteed continuer (when the
 * node has any) + random fill, order shuffled so the trunk has no tell.
 * Terminal nodes deal straight random (every pick ends the run by design).
 */
export function dealOptions(
  node: BountyNode,
  nodes: Record<string, BountyNode>,
  flags: string[],
  count = 3,
  rng: () => number = Math.random,
): BountyChoice[] {
  const eligible = node.choices.filter((c) => isChoiceEligible(c, flags));
  if (node.terminal) return shuffle(eligible, rng).slice(0, count);
  const continuers = shuffle(
    eligible.filter((c) => isContinuer(c, nodes)),
    rng,
  );
  const sides = shuffle(
    eligible.filter((c) => !isContinuer(c, nodes)),
    rng,
  );
  const anchor = continuers.slice(0, 1);
  const fill = [...continuers.slice(1), ...sides].slice(0, Math.max(0, count - anchor.length));
  return shuffle([...anchor, ...fill], rng);
}

/**
 * Apply one choice: diminishing boosts past the knee, rolled bounty base.
 * Returns fresh stats + rolled base (millions).
 */
export function applyChoice(
  stats: BountyStats,
  deltas: BountyDeltas,
  bountyMin: number,
  bountyMax: number,
  roll: number,
): { stats: BountyStats; rolledBase: number } {
  const next: BountyStats = { ...stats };
  for (const [key, delta] of Object.entries(deltas) as [BountyStatKey, number][]) {
    const gain = next[key] >= DIMINISH_KNEE && delta > 0 ? delta * DIMINISH_FACTOR : delta;
    next[key] = clampStat(next[key] + gain);
  }
  const rolledBase = bountyMin + (bountyMax - bountyMin) * roll;
  return { stats: next, rolledBase };
}

export type PosterResult = {
  poster: number;
  average: number;
  baseSumBelly: number;
  comboMult: number;
  knowledgeMult: number;
  combos: { label: string; mult: number }[];
  nerfs: { label: string; mult: number }[];
};

/** Stat key labels for the results breakdown. */
export const STAT_LABELS: Record<BountyStatKey, string> = {
  power: "Power",
  notoriety: "Notoriety",
  defiance: "Defiance",
  influence: "Influence",
  cunning: "Cunning",
  knowledge: "Knowledge",
};

/**
 * Price the final wanted poster from a single run state.
 * Path steps carry full choice snapshots, so modifiers (caps, mults,
 * truth-loss) can never desync from the stats they produced.
 * Knowledge reads need a reader flag; burned/sold truth zeroes it.
 */
export function computePoster(state: BountyRunState): PosterResult {
  const picks = state.path.map((step) => step.choice);
  const hasReader = state.flags.some((f) => (READER_FLAGS as readonly string[]).includes(f));
  const truthLost = picks.some((c) => c.zeroKnowledge);
  const defianceCap = picks.reduce<number | null>(
    (cap, c) => (c.defianceCap != null ? Math.min(cap ?? Infinity, c.defianceCap) : cap),
    null,
  );
  const finalMult = picks.reduce((m, c) => m * (c.finalMult ?? 1), 1);

  const stats: BountyStats = { ...state.stats };
  if (!hasReader || truthLost) stats.knowledge = 0;
  if (defianceCap != null) stats.defiance = Math.min(stats.defiance, defianceCap);

  const average =
    stats.power * STAT_WEIGHTS.power +
    stats.defiance * STAT_WEIGHTS.defiance +
    stats.notoriety * STAT_WEIGHTS.notoriety +
    stats.cunning * STAT_WEIGHTS.cunning +
    stats.influence * STAT_WEIGHTS.influence;

  const knowledgeMult = stats.knowledge > 0 ? 1.3 : 1;

  const combos = COMBO_RULES.filter((rule) => rule.needs.every((f) => state.flags.includes(f))).map((rule) => ({
    label: rule.label,
    mult: rule.mult,
  }));
  const nerfs = NERF_FLAGS.filter((nerf) => state.flags.includes(nerf.flag)).map((nerf) => ({
    label: nerf.label,
    mult: nerf.mult,
  }));

  const comboMult = combos.reduce((m, c) => m * c.mult, 1) * nerfs.reduce((m, n) => m * n.mult, 1) * finalMult;

  const baseSumBelly = Math.round(state.baseSum * 1_000_000);
  const poster = Math.min(
    ROGER_CAP,
    Math.floor((baseSumBelly + average * BELLY_PER_POINT) * comboMult * knowledgeMult),
  );

  return { poster, average, baseSumBelly, comboMult, knowledgeMult, combos, nerfs };
}

/** ฿ 3,456,000,000 - belly formatter for pills and poster. */
export function formatBounty(belly: number): string {
  return `฿ ${new Intl.NumberFormat("en-US").format(Math.round(belly))}`;
}

export function freshStats(): BountyStats {
  return { ...EMPTY_STATS };
}
