// Run controller tests - full playthroughs without a browser.
// Run: bun test src/games/one-piece-bounty-path

import { describe, expect, test } from "bun:test";
import { PATH_A_NODES, PATH_A_START } from "../data/path-a";
import { PATH_B_NODES, PATH_B_START } from "../data/path-b";
import { PATH_C_NODES, PATH_C_START } from "../data/path-c";
import { PATH_D_NODES, PATH_D_START } from "../data/path-d";
import { PATH_E_NODES, PATH_E_START } from "../data/path-e";
import { PATH_F_NODES, PATH_F_START } from "../data/path-f";
import { PATH_G_NODES, PATH_G_START } from "../data/path-g";
import { TREES } from "../data/trees";
import { computePoster } from "./scoring";
import { applyPick, createRun, dealFirstSin, offerFor } from "./run";
import type { BountyChoice, BountyNode, BountyRunState } from "./types";

function findChoice(nodes: Record<string, BountyNode>, id: string): BountyChoice {
  const found = Object.values(nodes)
    .flatMap((n) => n.choices)
    .find((c) => c.id === id);
  if (!found) throw new Error(`missing choice ${id}`);
  return found;
}

function play(
  nodes: Record<string, BountyNode>,
  treeId: string,
  start: string,
  ids: string[],
  roll = 0.5,
): BountyRunState {
  let state = createRun(treeId, start);
  for (const id of ids) {
    state = applyPick(nodes, state, findChoice(nodes, id), { roll });
  }
  return state;
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

describe("tree registry", () => {
  test("ships exactly the seven confirmed trees", () => {
    expect(Object.keys(TREES).sort()).toEqual([
      "breaker",
      "flame",
      "hunter",
      "liberator",
      "racer",
      "scholar",
      "sky",
    ]);
    for (const meta of Object.values(TREES)) {
      expect(meta.nodes[meta.start]).toBeDefined();
    }
  });

  test("every non-terminal node offers a continuer (no round-one traps)", () => {
    for (const meta of Object.values(TREES)) {
      for (const node of Object.values(meta.nodes)) {
        if (node.terminal === true) continue;
        const offered = offerFor(meta.nodes, createRun(meta.id, node.id), () => 0);
        const continues = offered.some((c) => c.nextNodeId !== null && meta.nodes[c.nextNodeId] !== undefined);
        expect(continues).toBe(true);
      }
    }
  });
});

describe("createRun", () => {
  test("starts clean at the start node", () => {
    const state = createRun("sky", PATH_A_START);
    expect(state.treeId).toBe("sky");
    expect(state.nodeId).toBe(PATH_A_START);
    expect(state.phase).toBe("playing");
    expect(state.path).toHaveLength(0);
    expect(state.note).toBeNull();
  });
});

describe("sky trunk playthrough", () => {
  const ids = ["r1-punch", "r2-outrun", "r3-geyser", "r4b-temple", "r5b-crown"];

  test("punch -> outrun -> geyser -> temple -> crown ends at poster", () => {
    const state = play(PATH_A_NODES, "sky", PATH_A_START, ids);
    expect(state.phase).toBe("poster");
    expect(state.path).toHaveLength(5);
    expect(state.flags).toContain("celestial_crime");
    expect(state.flags).toContain("god_claim");
    const poster = computePoster(state);
    expect(poster.poster).toBeGreaterThan(0);
    expect(poster.poster).toBeLessThanOrEqual(5_000_000_000);
  });

  test("dive alternate reaches the Noah poster", () => {
    const state = play(PATH_A_NODES, "sky", PATH_A_START, [
      "r1-punch",
      "r2-outrun",
      "r3-dive",
      "r4-noah",
      "r5a-save",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("pirate_king_claim");
  });

  test("poster math matches a hand-computed trunk", () => {
    const state = play(PATH_A_NODES, "sky", PATH_A_START, ids, 1);
    // Max rolls: base = 300+50+40+250+1100 = 1740M.
    expect(state.baseSum).toBe(1740);
    const poster = computePoster(state);
    // No trunk combo pairs, no reader: poster = base + avg * 10M.
    expect(poster.combos).toHaveLength(0);
    expect(poster.poster).toBe(Math.floor((1_740_000_000 + poster.average * 10_000_000) * poster.comboMult));
  });
});

describe("scholar trunk playthrough", () => {
  test("records -> Saul -> read -> carry -> scaffold ends at poster", () => {
    const state = play(PATH_B_NODES, "scholar", PATH_B_START, [
      "b1-records",
      "b2-saul",
      "b3-read",
      "b4-loguetown",
      "b5-shout",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("truth_seeker");
    expect(state.flags).toContain("scholar");
    const poster = computePoster(state);
    // Saul is a reader: knowledge counts.
    expect(poster.knowledgeMult).toBe(1.3);
  });
});

describe("liberator trunk playthrough", () => {
  test("ship -> island -> pardon -> escort -> Mariejois ends at poster", () => {
    const state = play(PATH_C_NODES, "liberator", PATH_C_START, [
      "c1-free",
      "c2-fmi",
      "c3-pardon",
      "c4-escort",
      "c5-free",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("liberator");
    expect(state.flags).toContain("royal_escort");
  });
});

describe("hunter trunk playthrough", () => {
  test("graffiti -> board -> king -> obliterate -> war ends at poster", () => {
    const state = play(PATH_D_NODES, "hunter", PATH_D_START, [
      "d1-graffiti",
      "d2-board",
      "d3-king",
      "d4-obliterate",
      "d5-war",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("yonko_blood");
    expect(state.flags).toContain("fleet_killer");
    const poster = computePoster(state);
    // Blood plus sunken fleet: Yonko Slayer pays out.
    expect(poster.combos.map((c) => c.label)).toContain("Yonko Slayer");
    expect(poster.poster).toBeLessThanOrEqual(5_000_000_000);
  });
});

describe("flame trunk playthrough", () => {
  test("oath -> detonate -> run -> extract -> stand ends at poster", () => {
    const state = play(PATH_E_NODES, "flame", PATH_E_START, [
      "e1-oath",
      "e2-detonate",
      "e3-run",
      "e4-extract",
      "e5-stand",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("revolutionary");
    expect(state.flags).toContain("celestial_crime");
    const poster = computePoster(state);
    // Oath plus Holy Land blood: Dragon's Faith pays out.
    expect(poster.combos.map((c) => c.label)).toContain("Dragon's Faith");
    expect(poster.poster).toBeLessThanOrEqual(5_000_000_000);
  });
});

describe("breaker trunk playthrough", () => {
  test("storm -> free -> duel -> shield -> divert ends at poster", () => {
    const state = play(PATH_F_NODES, "breaker", PATH_F_START, [
      "f1-storm",
      "f2-free",
      "f3-duel",
      "f4-shield",
      "f5-divert",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("liberator");
    expect(state.flags).toContain("folk_hero");
    const poster = computePoster(state);
    // Freed cages plus shielded escapees: People's Pirate pays out.
    expect(poster.combos.map((c) => c.label)).toContain("People's Pirate");
    expect(poster.poster).toBeLessThanOrEqual(5_000_000_000);
  });
});

describe("racer trunk playthrough", () => {
  test("steal -> decipher -> read -> run -> claim ends at poster", () => {
    const state = play(PATH_G_NODES, "racer", PATH_G_START, [
      "g1-steal",
      "g2-decipher",
      "g3-read",
      "g4-run",
      "g5-claim",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.flags).toContain("road_copy");
    expect(state.flags).toContain("scholar");
    expect(state.flags).toContain("truth_seeker");
    const poster = computePoster(state);
    // Translator aboard: knowledge counts toward the bounty.
    expect(poster.knowledgeMult).toBe(1.3);
    expect(poster.poster).toBeLessThanOrEqual(5_000_000_000);
  });
});

describe("first sin", () => {
  const registries = Object.values(TREES);

  test("deals three unique pooled R1 options", () => {
    const pool = new Set(
      registries.flatMap((t) => {
        const start = t.nodes[t.start];
        return start ? start.choices.map((c) => c.id) : [];
      }),
    );
    for (let seed = 0; seed < 20; seed++) {
      const deal = dealFirstSin(registries, 3, scriptedRng([seed / 20]));
      expect(deal.offered).toHaveLength(3);
      const ids = deal.offered.map((c) => c.id);
      expect(new Set(ids).size).toBe(3);
      for (const id of ids) expect(pool.has(id)).toBe(true);
    }
  });

  test("every trunk opener routes to its owner tree", () => {
    const deal = dealFirstSin(registries);
    const openers: [string, string][] = [
      ["r1-punch", "sky"],
      ["b1-records", "scholar"],
      ["c1-free", "liberator"],
      ["d1-graffiti", "hunter"],
      ["e1-oath", "flame"],
      ["f1-storm", "breaker"],
      ["g1-steal", "racer"],
    ];
    for (const [choiceId, treeId] of openers) {
      expect(deal.ownerOf(choiceId)?.id).toBe(treeId);
    }
    expect(deal.ownerOf("nope")?.id).toBeUndefined();
  });

  test("a first pick starts a full run in the owner tree", () => {
    const deal = dealFirstSin(registries);
    const owner = deal.ownerOf("d1-graffiti");
    if (!owner) throw new Error("missing owner");
    let state = createRun(owner.id, owner.start);
    state = applyPick(owner.nodes, state, findChoice(PATH_D_NODES, "d1-graffiti"), { roll: 0.5 });
    expect(state.phase).toBe("playing");
    expect(state.nodeId).toBe("yonko-heat");
    expect(state.path).toHaveLength(1);
    for (const id of ["d2-board", "d3-king", "d4-obliterate", "d5-war"]) {
      state = applyPick(owner.nodes, state, findChoice(PATH_D_NODES, id), { roll: 0.5 });
    }
    expect(state.phase).toBe("poster");
  });
});

describe("stub loops", () => {
  test("a side pick banks stats and loops back with its premise", () => {
    let state = createRun("sky", PATH_A_START);
    state = applyPick(PATH_A_NODES, state, findChoice(PATH_A_NODES, "r1-flag"), { roll: 0.5 });
    expect(state.phase).toBe("playing");
    expect(state.nodeId).toBe(PATH_A_START);
    expect(state.note).toContain("Cipher Pol");
    expect(state.path).toHaveLength(1);
    expect(state.baseSum).toBeGreaterThan(0);
  });

  test("looped runs still reach finales", () => {
    let state = createRun("sky", PATH_A_START);
    state = applyPick(PATH_A_NODES, state, findChoice(PATH_A_NODES, "r1-flag"), { roll: 0 });
    state = applyPick(PATH_A_NODES, state, findChoice(PATH_A_NODES, "r1-punch"), { roll: 0 });
    expect(state.phase).toBe("playing");
    expect(state.nodeId).toBe("admiral-inbound");
    expect(state.note).toBeNull();
    expect(state.path).toHaveLength(2);
  });
});

describe("round budget", () => {
  test("eight stub picks force the poster with the caught premise", () => {
    let state = createRun("sky", PATH_A_START);
    const stub = findChoice(PATH_A_NODES, "r1-flag");
    for (let i = 0; i < 8; i++) {
      state = applyPick(PATH_A_NODES, state, stub, { roll: 0 });
    }
    expect(state.phase).toBe("poster");
    expect(state.path).toHaveLength(8);
    expect(state.endPremise).toContain("Marines closed the net");
    expect(state.roundsLeft).toBe(0);
  });

  test("trunk runs finish before the budget runs out", () => {
    const state = play(PATH_A_NODES, "sky", PATH_A_START, [
      "r1-punch",
      "r2-outrun",
      "r3-geyser",
      "r4b-temple",
      "r5b-crown",
    ]);
    expect(state.phase).toBe("poster");
    expect(state.roundsLeft).toBe(3);
    expect(state.endPremise).toBeNull();
  });
});

describe("finished runs", () => {
  test("finished runs ignore further picks", () => {
    const done = play(PATH_A_NODES, "sky", PATH_A_START, [
      "r1-punch",
      "r2-outrun",
      "r3-geyser",
      "r4b-temple",
      "r5b-crown",
    ]);
    const frozen = applyPick(PATH_A_NODES, done, findChoice(PATH_A_NODES, "r1-punch"), { roll: 1 });
    expect(frozen).toBe(done);
  });
});

describe("dangling edges", () => {
  test("unknown next nodes end gracefully", () => {
    const nodes: Record<string, BountyNode> = {
      start: {
        id: "start",
        title: "start",
        prompt: "start",
        choices: [
          {
            id: "broken",
            label: "broken",
            deltas: {},
            bountyMin: 0,
            bountyMax: 0,
            flagsAdded: [],
            nextNodeId: "missing",
            stubPremise: "To be continued",
          },
        ],
      },
    };
    const startNode = nodes["start"];
    if (!startNode?.choices[0]) throw new Error("fixture missing");
    const state = applyPick(nodes, createRun("test", "start"), startNode.choices[0], { roll: 0 });
    expect(state.phase).toBe("poster");
    expect(state.endPremise).toBe("To be continued");
  });
});
