// Scoring unit tests - poster math is the game's economy, lock it down.
// Run: bun test src/games/one-piece-bounty-path

import { describe, expect, test } from "bun:test";
import {
  applyChoice,
  COMBO_RULES,
  computePoster,
  dealOptions,
  formatBounty,
  freshStats,
  isChoiceEligible,
  ROGER_CAP,
} from "./scoring";
import type { BountyChoice, BountyNode, BountyRunState } from "./types";

function choice(overrides: Partial<BountyChoice> = {}): BountyChoice {
  return {
    id: "test-choice",
    label: "Test choice",
    deltas: {},
    bountyMin: 100,
    bountyMax: 200,
    flagsAdded: [],
    nextNodeId: null,
    ...overrides,
  };
}

function node(id: string, choices: BountyChoice[], terminal = false): BountyNode {
  return { id, title: id, prompt: id, terminal, choices };
}

function runState(overrides: Partial<BountyRunState> = {}): BountyRunState {
  return {
    treeId: "test",
    nodeId: "start",
    stats: freshStats(),
    flags: [],
    baseSum: 0,
    path: [],
    roundsLeft: 8,
    phase: "poster",
    endPremise: null,
    note: null,
    ...overrides,
  };
}

/** Deterministic rng from a fixed sequence (cycles when exhausted). */
function scriptedRng(sequence: number[]): () => number {
  let i = 0;
  return () => {
    const value = sequence[i % sequence.length] as number;
    i += 1;
    return value;
  };
}

describe("applyChoice", () => {
  test("adds deltas and rolls the bounty base", () => {
    const { stats, rolledBase } = applyChoice(freshStats(), { power: 20 }, 100, 200, 0.5);
    expect(stats.power).toBe(20);
    expect(rolledBase).toBe(150);
  });

  test("halves gains past the 80 knee", () => {
    const stats = { ...freshStats(), power: 90 };
    const { stats: next } = applyChoice(stats, { power: 20 }, 0, 0, 0);
    expect(next.power).toBe(100);
  });

  test("clamps to 0..100", () => {
    const { stats } = applyChoice(freshStats(), { power: 1000 }, 0, 0, 0);
    expect(stats.power).toBe(100);
    const { stats: low } = applyChoice(freshStats(), { power: -50 }, 0, 0, 0);
    expect(low.power).toBe(0);
  });
});

describe("isChoiceEligible", () => {
  test("flag gates", () => {
    expect(isChoiceEligible(choice({ requiresFlags: ["a"] }), [])).toBe(false);
    expect(isChoiceEligible(choice({ requiresFlags: ["a"] }), ["a", "b"])).toBe(true);
  });

  test("glyph reads need a reader flag", () => {
    const c = choice({ requiresReader: true });
    expect(isChoiceEligible(c, [])).toBe(false);
    expect(isChoiceEligible(c, ["scholar"])).toBe(true);
    expect(isChoiceEligible(c, ["vegapunk_tech"])).toBe(true);
  });
});

describe("dealOptions", () => {
  const nodes: Record<string, BountyNode> = {
    start: node("start", [
      choice({ id: "trunk", nextNodeId: "next" }),
      choice({ id: "side-a" }),
      choice({ id: "side-b" }),
      choice({ id: "side-c" }),
    ]),
    next: node("next", []),
    final: node("final", [choice({ id: "f1" }), choice({ id: "f2" }), choice({ id: "f3" })], true),
  };

  test("non-terminal rounds always include a continuer", () => {
    const start = nodes["start"];
    if (!start) throw new Error("fixture missing");
    for (let seed = 0; seed < 200; seed++) {
      const rng = scriptedRng([(seed % 97) / 100, ((seed * 7) % 89) / 100, 0.5, 0.1, 0.9]);
      const offered = dealOptions(start, nodes, [], 3, rng);
      expect(offered).toHaveLength(3);
      expect(offered.some((c) => c.nextNodeId === "next")).toBe(true);
    }
  });

  test("terminal nodes deal straight random", () => {
    const final = nodes["final"];
    if (!final) throw new Error("fixture missing");
    const offered = dealOptions(final, nodes, [], 3, scriptedRng([0.1]));
    expect(offered).toHaveLength(3);
  });

  test("gated choices never appear", () => {
    const gated = node("gated", [
      choice({ id: "open", nextNodeId: "next" }),
      choice({ id: "locked", requiresFlags: ["missing"] }),
    ]);
    const withNodes = { ...nodes, gated };
    for (let seed = 0; seed < 50; seed++) {
      const offered = dealOptions(gated, withNodes, [], 3, scriptedRng([seed / 100]));
      expect(offered.some((c) => c.id === "locked")).toBe(false);
    }
  });

  test("excluded ids drop sides but never the continuer", () => {
    const start = nodes["start"];
    if (!start) throw new Error("fixture missing");
    const offered = dealOptions(start, nodes, [], 3, scriptedRng([0.5]), ["side-a", "trunk"]);
    // Trunk stays findable even when listed; the excluded side rotates out
    // (two unseen sides remain, enough to fill without fallback).
    expect(offered.some((c) => c.id === "trunk")).toBe(true);
    expect(offered.some((c) => c.id === "side-a")).toBe(false);
  });

  test("picked sins stay buried while unpicked sides remain", () => {
    const start = nodes["start"];
    if (!start) throw new Error("fixture missing");
    // side-a picked, side-b offered before: unseen (side-c) alone can't fill
    // the deal, so the fallback rotates unpicked sides - never the picked one.
    const offered = dealOptions(start, nodes, [], 3, scriptedRng([0.5]), ["side-b"], ["side-a"]);
    expect(offered.some((c) => c.id === "trunk")).toBe(true);
    expect(offered.some((c) => c.id === "side-a")).toBe(false);
    expect(offered).toHaveLength(3);
  });

  test("exhausted sides fall back instead of dealing short", () => {
    const start = nodes["start"];
    if (!start) throw new Error("fixture missing");
    const offered = dealOptions(start, nodes, [], 3, scriptedRng([0.5]), ["side-a", "side-b", "side-c"]);
    expect(offered).toHaveLength(3);
    expect(offered.some((c) => c.id === "trunk")).toBe(true);
  });
});

describe("computePoster", () => {
  test("prices base plus weighted average", () => {
    const state = runState({
      stats: { ...freshStats(), power: 100 },
      baseSum: 1000,
    });
    const poster = computePoster(state);
    // avg = 100 * 0.3 = 30 -> 30 * 10M = 300M, base 1B
    expect(poster.poster).toBe(1_300_000_000);
    expect(poster.comboMult).toBe(1);
  });

  test("applies every combo rule", () => {
    for (const rule of COMBO_RULES) {
      const poster = computePoster(runState({ flags: [...rule.needs] }));
      expect(poster.combos.map((c) => c.label)).toContain(rule.label);
    }
  });

  test("stacks combos with nerfs", () => {
    const poster = computePoster(runState({ flags: ["liberator", "folk_hero", "snitch"] }));
    expect(poster.comboMult).toBeCloseTo(1.3 * 0.7, 10);
    expect(poster.nerfs.map((n) => n.label)).toContain("Rat");
  });

  test("knowledge needs a reader", () => {
    const stats = { ...freshStats(), knowledge: 50 };
    const blind = computePoster(runState({ stats }));
    expect(blind.knowledgeMult).toBe(1);
    const reading = computePoster(runState({ stats, flags: ["scholar"] }));
    expect(reading.knowledgeMult).toBe(1.3);
  });

  test("truth loss zeroes knowledge", () => {
    const stats = { ...freshStats(), knowledge: 50 };
    const state = runState({
      stats,
      flags: ["scholar"],
      path: [
        {
          nodeId: "n",
          nodeTitle: "n",
          choice: choice({ id: "sellout", zeroKnowledge: true }),
          rolledBase: 0,
        },
      ],
    });
    expect(computePoster(state).knowledgeMult).toBe(1);
  });

  test("defiance cap and final mult apply", () => {
    const stats = { ...freshStats(), defiance: 90 };
    const state = runState({
      stats,
      path: [
        {
          nodeId: "n",
          nodeTitle: "n",
          choice: choice({ id: "deal", defianceCap: 40, finalMult: 0.7 }),
          rolledBase: 0,
        },
      ],
    });
    const poster = computePoster(state);
    // avg = 40 * 0.25 = 10 -> 100M, * 0.7
    expect(poster.poster).toBe(Math.floor(100_000_000 * 0.7));
  });

  test("never exceeds the Roger cap", () => {
    const poster = computePoster(
      runState({
        stats: { power: 100, notoriety: 100, defiance: 100, influence: 100, cunning: 100, knowledge: 0 },
        baseSum: 100_000,
        flags: ["throne_seen", "truth_seeker", "revolutionary", "celestial_crime"],
      }),
    );
    expect(poster.poster).toBe(ROGER_CAP);
  });
});

describe("formatBounty", () => {
  test("formats belly with the sign", () => {
    expect(formatBounty(3_456_000_000)).toBe("฿ 3,456,000,000");
  });
});
