// Blind-rank local types - self-contained by design.
// Only the donor dataset is shared (see characters-v2 in one-piece-draft);
// every type and runtime helper this mode needs lives in this folder.

export type BlindRarity = "basic" | "epic" | "legend" | "god";

/** Slim view of a donor: everything the blind-rank UI needs, nothing it doesn't. */
export type RankedCharacter = {
  id: string;
  displayName: string;
  imageURL: string;
  rarity: BlindRarity;
};

export const TOTAL_SLOTS = 10;

/** Slot index 0..9 maps to displayed rank 1..10. Null = empty. */
export type SlotPlacement = {
  slot: number;
  characterId: string | null;
  locked: boolean;
};

export type BlindRankPhase = "ranking" | "done";

export type BlindRankState = {
  /** The 10 drawn donors, in reveal order. */
  lineup: RankedCharacter[];
  /** Index into lineup of the character currently awaiting placement. */
  currentRound: number;
  placements: SlotPlacement[];
  phase: BlindRankPhase;
};
