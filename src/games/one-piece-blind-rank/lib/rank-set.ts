// Lineup sampling — own implementation, no imports from other modes.
// Input donors must already be slimmed to RankedCharacter by the caller.

import { TOTAL_SLOTS, type BlindRarity, type RankedCharacter } from "./types";
import { getBracketInfo, truthOrder } from "./brackets";

/** Per-draw rarity odds: gods stay treasure, basics fill the list. */
const RARITY_WEIGHTS: { rarity: BlindRarity; weight: number }[] = [
  { rarity: "god", weight: 10 },
  { rarity: "legend", weight: 20 },
  { rarity: "epic", weight: 30 },
  { rarity: "basic", weight: 40 },
];

function rollRarity(): BlindRarity {
  const total = RARITY_WEIGHTS.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * total;
  for (const entry of RARITY_WEIGHTS) {
    roll -= entry.weight;
    if (roll < 0) return entry.rarity;
  }
  return "basic";
}

/**
 * Draw TOTAL_SLOTS unique donors: each slot rolls rarity at
 * 10/20/30/40, then takes a random unpicked donor of that rarity.
 * Exhausted rarities spill to whatever remains — uniqueness always wins.
 */
export function sampleLineup(donors: RankedCharacter[]): RankedCharacter[] {
  const remaining = [...donors];
  const lineup: RankedCharacter[] = [];
  while (lineup.length < TOTAL_SLOTS && remaining.length > 0) {
    const wanted = rollRarity();
    const pool = remaining.filter((donor) => donor.rarity === wanted);
    const source = pool.length > 0 ? pool : remaining;
    const pick = source[Math.floor(Math.random() * source.length)] as RankedCharacter;
    lineup.push(pick);
    remaining.splice(remaining.indexOf(pick), 1);
  }
  return lineup;
}

export type SlotDetail = {
  slot: number;
  userId: string;
  truthId: string;
  bracketDistance: number;
  points: number;
};

export type ScoreResult = {
  total: number;
  slotScore: number;
  kendallScore: number;
  details: SlotDetail[];
  truthIds: string[];
};

function slotPoints(distance: number): number {
  if (distance === 0) return 1;
  if (distance === 1) return 0.5;
  if (distance === 2) return 0.2;
  return 0;
}

/**
 * Hybrid score (50% slot bracket-distance + 50% bracket-aware Kendall tau).
 * - Slot: per-position bracket distance 0→1, 1→0.5, 2→0.2, else 0, averaged.
 * - Kendall: pairwise order among cross-bracket pairs; same-bracket pairs ignored,
 *   so intra-bracket swaps (Imu↔Joy Boy) cost nothing. Rocks above Imu costs.
 * Returns 0..10 (2 decimals when formatted with toFixed(2)).
 */
export function scorePlacements(userIds: string[], lineupIds: string[]): ScoreResult {
  const truthIds = truthOrder(lineupIds);
  const n = lineupIds.length;

  // Slot portion
  const details: SlotDetail[] = [];
  let slotSum = 0;
  for (let i = 0; i < n; i++) {
    const userId = userIds[i] as string;
    const tid = truthIds[i] as string;
    const d = Math.abs(getBracketInfo(userId).bracketIdx - getBracketInfo(tid).bracketIdx);
    const p = slotPoints(d);
    slotSum += p;
    details.push({ slot: i, userId, truthId: tid, bracketDistance: d, points: p });
  }
  const slotScore = n === 0 ? 1 : slotSum / n;

  // Kendall portion
  const userPos = new Map<string, number>(userIds.map((id, idx) => [id, idx]));
  const truthPos = new Map<string, number>(truthIds.map((id, idx) => [id, idx]));
  let considered = 0;
  let concordant = 0;
  for (let i = 0; i < lineupIds.length; i++) {
    for (let j = i + 1; j < lineupIds.length; j++) {
      const a = lineupIds[i] as string;
      const b = lineupIds[j] as string;
      if (getBracketInfo(a).bracketIdx === getBracketInfo(b).bracketIdx) continue;
      considered += 1;
      const userOrder = (userPos.get(a) as number) < (userPos.get(b) as number);
      const truthOrderDir = (truthPos.get(a) as number) < (truthPos.get(b) as number);
      if (userOrder === truthOrderDir) concordant += 1;
    }
  }
  const kendallScore = considered === 0 ? 1 : concordant / considered;

  const total = 10 * (0.5 * slotScore + 0.5 * kendallScore);
  return { total, slotScore, kendallScore, details, truthIds };
}
