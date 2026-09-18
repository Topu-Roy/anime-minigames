// Confirmed tree registry - the only content the game may offer.
// graph.md stays a spare-parts pool (not confirmed, never wired here).

import { PATH_A_NODES, PATH_A_START } from "./path-a";
import { PATH_B_NODES, PATH_B_START } from "./path-b";
import { PATH_C_NODES, PATH_C_START } from "./path-c";
import { PATH_D_NODES, PATH_D_START } from "./path-d";
import { PATH_E_NODES, PATH_E_START } from "./path-e";
import { PATH_F_NODES, PATH_F_START } from "./path-f";
import { PATH_G_NODES, PATH_G_START } from "./path-g";
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
    flavor: "Seven sins, one crime the whole sea will remember.",
    icon: "👊",
    nodes: PATH_A_NODES,
    start: PATH_A_START,
  },
  scholar: {
    id: "scholar",
    title: "Ashen Scholars",
    flavor: "Some books burn. Some books bite back.",
    icon: "📜",
    nodes: PATH_B_NODES,
    start: PATH_B_START,
  },
  liberator: {
    id: "liberator",
    title: "Chain Breakers",
    flavor: "No port safe. No chain unbroken.",
    icon: "⛓️",
    nodes: PATH_C_NODES,
    start: PATH_C_START,
  },
  hunter: {
    id: "hunter",
    title: "Yonko Hunters",
    flavor: "Four Emperors. One big mouth.",
    icon: "⚔️",
    nodes: PATH_D_NODES,
    start: PATH_D_START,
  },
  flame: {
    id: "flame",
    title: "Revolutionary Flame",
    flavor: "Baltigo calls. Answer with fire.",
    icon: "🔥",
    nodes: PATH_E_NODES,
    start: PATH_E_START,
  },
  breaker: {
    id: "breaker",
    title: "Impel Breakers",
    flavor: "The drowned prison has thin walls tonight.",
    icon: "🔓",
    nodes: PATH_F_NODES,
    start: PATH_F_START,
  },
  racer: {
    id: "racer",
    title: "Laugh Tale Racers",
    flavor: "Four red stones. One last island.",
    icon: "🗺️",
    nodes: PATH_G_NODES,
    start: PATH_G_START,
  },
};

export const TREE_IDS = Object.keys(TREES);
