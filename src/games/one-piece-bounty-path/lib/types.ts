// Bounty-path core types - self-contained by design.
// Only art/preload helpers are shared with other modes;
// every type this mode needs lives in this folder.

/** Six bounty stats, percentile 0-100. Influence unscored (unlocks paths). */
export type BountyStats = {
  power: number;
  notoriety: number;
  defiance: number;
  influence: number;
  cunning: number;
  knowledge: number;
};

export type BountyStatKey = keyof BountyStats;

/** Per-choice hidden boosts. Negatives unused except explicit nerfs. */
export type BountyDeltas = Partial<Record<BountyStatKey, number>>;

export type BountyChoice = {
  id: string;
  label: string;
  deltas: BountyDeltas;
  /** Bounty base range in millions of belly - rolled per run (anti-memorize). */
  bountyMin: number;
  bountyMax: number;
  flagsAdded: string[];
  /** Null = terminal stub (mini-poster, full node ships later). */
  nextNodeId: string | null;
  stubPremise?: string;
  /** All listed flags must be present for the choice to appear. */
  requiresFlags?: string[];
  /** Glyph reads need a reader flag (robin_ally/scholar/vegapunk_tech). */
  requiresReader?: boolean;
  /** Zeroes Knowledge at scoring time (sellout/burned paths). */
  zeroKnowledge?: boolean;
  /** Caps Defiance at scoring time (Elder's leash). */
  defianceCap?: number;
  /** Final poster multiplier (soft-hearted endings). */
  finalMult?: number;
};

export type BountyNode = {
  id: string;
  title: string;
  /** One-line situation prompt shown above the options. */
  prompt: string;
  /** Terminal nodes end the run at poster (finales). */
  terminal?: boolean;
  choices: BountyChoice[];
};

export type PathStep = {
  nodeId: string;
  nodeTitle: string;
  /** Full choice snapshot: labels frozen for results, modifiers intact for scoring. */
  choice: BountyChoice;
  /** Rolled bounty base (millions) for this step. */
  rolledBase: number;
};

export type BountyRunState = {
  /** Which confirmed tree this run sails (sky | scholar | liberator). */
  treeId: string;
  nodeId: string;
  stats: BountyStats;
  flags: string[];
  /** Sum of rolled bounty bases (millions). */
  baseSum: number;
  path: PathStep[];
  /** Picks remaining before the Marines close the net (bounds stub loops). */
  roundsLeft: number;
  phase: "playing" | "poster";
  /** Terminal stub premise when the run ends off-trunk. */
  endPremise: string | null;
  /** Side-branch flavor shown above the next deal (stub picks loop back). */
  note: string | null;
};

export const EMPTY_STATS: BountyStats = {
  power: 0,
  notoriety: 0,
  defiance: 0,
  influence: 0,
  cunning: 0,
  knowledge: 0,
};

/** Flags that grant glyph-reading rights (plothole guard). */
export const READER_FLAGS = ["robin_ally", "scholar", "vegapunk_tech"] as const;
