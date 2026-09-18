// Run controller: framework-agnostic game progression.
// Pure transitions over plain state (Svelte wraps in $state, tests call directly).
// Single entry for picks, single source for offers - UI layers stay thin.

import { applyChoice, dealOptions, freshStats, isChoiceEligible, isContinuer, shuffle } from "./scoring";
import type { BountyChoice, BountyNode, BountyRunState } from "./types";

export const OFFER_COUNT = 3;

/** Total picks per run: trunk needs 5, wanderers get 3 detours max. */
export const MAX_ROUNDS = 8;

/** Forced-poster premise when the budget runs out mid-scheme. */
export const CAUGHT_PREMISE = "The Marines closed the net before the finale.";

export function createRun(treeId: string, startNodeId: string): BountyRunState {
  return {
    treeId,
    nodeId: startNodeId,
    stats: freshStats(),
    flags: [],
    baseSum: 0,
    path: [],
    roundsLeft: MAX_ROUNDS,
    phase: "playing",
    endPremise: null,
    note: null,
  };
}

/** Current round's offered options (gated + continuer-guaranteed, no picked repeats). */
export function offerFor(
  nodes: Record<string, BountyNode>,
  state: BountyRunState,
  rng: () => number = Math.random,
): BountyChoice[] {
  const node = nodes[state.nodeId];
  if (!node) return [];
  // Exclude already-picked sins so stub loops back to the same node can't
  // re-offer the identical choice (fallback to seen when pool exhausted).
  const pickedIds = state.path.map((step) => step.choice.id);
  return dealOptions(node, nodes, state.flags, OFFER_COUNT, rng, pickedIds);
}

/** Minimal tree shape the first-sin deal needs (matches TreeMeta structurally). */
export type TreeRegistry = {
  id: string;
  nodes: Record<string, BountyNode>;
  start: string;
};

export type FirstDeal = {
  /** Three uniform-random R1 options pooled across every tree (no spoilers). */
  offered: BountyChoice[];
  /** Owner tree + nodes for a dealt choice id (undefined for unknown ids). */
  ownerOf: (choiceId: string) => TreeRegistry | undefined;
};

/**
 * Deal round one: uniform-random options pooled from every tree's start
 * node. No continuer guarantee here (every pick lands somewhere real -
 * trunk or stub loop), so the lobby never spoils which road is which.
 */
export function dealFirstSin(
  trees: TreeRegistry[],
  count: number = OFFER_COUNT,
  rng: () => number = Math.random,
): FirstDeal {
  const owners = new Map<string, TreeRegistry>();
  const pool: BountyChoice[] = [];
  for (const tree of trees) {
    const start = tree.nodes[tree.start];
    if (!start) continue;
    for (const choice of start.choices) {
      if (!isChoiceEligible(choice, [])) continue;
      owners.set(choice.id, tree);
      pool.push(choice);
    }
  }
  return {
    offered: shuffle(pool, rng).slice(0, count),
    ownerOf: (choiceId: string) => owners.get(choiceId),
  };
}

export type PickOptions = {
  /** 0..1 roll into the choice's bounty range. */
  roll?: number;
};

function posterState(
  state: BountyRunState,
  stats: BountyRunState["stats"],
  flags: string[],
  baseSum: number,
  path: BountyRunState["path"],
  roundsLeft: number,
  endPremise: string | null,
): BountyRunState {
  return {
    treeId: state.treeId,
    nodeId: state.nodeId,
    stats,
    flags,
    baseSum,
    path,
    roundsLeft,
    phase: "poster",
    endPremise,
    note: null,
  };
}

/**
 * Apply one pick, returning the next state (input untouched).
 * Terminal finale picks end at poster. Stub picks bank their stats and loop
 * back with their premise as a note. The round budget bounds wanderers:
 * the 8th pick always prints the poster, finale or not.
 * Dangling edges end gracefully with the stub premise.
 */
export function applyPick(
  nodes: Record<string, BountyNode>,
  state: BountyRunState,
  choice: BountyChoice,
  options: PickOptions = {},
): BountyRunState {
  const { roll = Math.random() } = options;
  if (state.phase !== "playing") return state;
  const activeNode = nodes[state.nodeId];
  if (!activeNode) return state;

  const { stats, rolledBase } = applyChoice(state.stats, choice.deltas, choice.bountyMin, choice.bountyMax, roll);

  const flags = [...new Set([...state.flags, ...choice.flagsAdded])];
  const path = [...state.path, { nodeId: state.nodeId, nodeTitle: activeNode.title, choice, rolledBase }];
  const baseSum = state.baseSum + rolledBase;
  const roundsLeft = Math.max(0, state.roundsLeft - 1);

  if (activeNode.terminal === true) {
    return posterState(state, stats, flags, baseSum, path, roundsLeft, null);
  }
  if (roundsLeft <= 0) {
    return posterState(state, stats, flags, baseSum, path, roundsLeft, CAUGHT_PREMISE);
  }
  if (choice.nextNodeId === null) {
    // Side branch: bank everything, loop back with the premise as flavor.
    return {
      treeId: state.treeId,
      nodeId: state.nodeId,
      stats,
      flags,
      baseSum,
      path,
      roundsLeft,
      phase: "playing",
      endPremise: null,
      note: choice.stubPremise ?? null,
    };
  }
  if (isContinuer(choice, nodes)) {
    return {
      treeId: state.treeId,
      nodeId: choice.nextNodeId,
      stats,
      flags,
      baseSum,
      path,
      roundsLeft,
      phase: "playing",
      endPremise: null,
      note: null,
    };
  }
  // Dangling edge (authoring bug): end gracefully with the premise.
  return posterState(state, stats, flags, baseSum, path, roundsLeft, choice.stubPremise ?? null);
}
