// Confirmed tree registry - the only content the game may offer.
// graph.md stays a spare-parts pool (not confirmed, never wired here).

import { PATH_A_NODES, PATH_A_START } from "./path-a";
import { PATH_B_NODES, PATH_B_START } from "./path-b";
import { PATH_C_NODES, PATH_C_START } from "./path-c";
import type { BountyNode } from "../lib/types";

export type TreeMeta = {
  id: string;
  title: string;
  /** One-line flavor for the lobby picker card. */
  flavor: string;
  /** Leading icon chip for the lobby picker card. */
  icon: string;
  nodes: Record<string, BountyNode>;
  start: string;
};

export const TREES: Record<string, TreeMeta> = {
  sky: {
    id: "sky",
    title: "Sky Sinners",
    flavor: "Punch a Celestial Dragon, outrun an Admiral, ride the geyser up.",
    icon: "👊",
    nodes: PATH_A_NODES,
    start: PATH_A_START,
  },
  scholar: {
    id: "scholar",
    title: "Ashen Scholars",
    flavor: "Steal Ohara's records, earn a giant reader, shout it from Roger's scaffold.",
    icon: "📜",
    nodes: PATH_B_NODES,
    start: PATH_B_START,
  },
  liberator: {
    id: "liberator",
    title: "Chain Breakers",
    flavor: "Free a slave ship, win Neptune's pardon, climb Mariejois again.",
    icon: "⛓️",
    nodes: PATH_C_NODES,
    start: PATH_C_START,
  },
};

export const TREE_IDS = Object.keys(TREES);
