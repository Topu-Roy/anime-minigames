<script lang="ts">
  import { TREES } from "../data/trees";
  import { computePoster, type PosterResult } from "../lib/scoring";
  import { applyPick, createRun, dealFirstSin, offerFor, type FirstDeal } from "../lib/run";
  import type { BountyChoice, BountyRunState } from "../lib/types";
  import ActionCard from "./ActionCard.svelte";
  import LivePoster from "./LivePoster.svelte";
  import PosterReveal from "./PosterReveal.svelte";

  // Thin view layer: first sin -> rounds -> poster. All progression lives
  // in lib/run + lib/scoring (headless-tested). Component holds state only.
  // No tree picker: round one deals pooled R1 options, the pick chooses
  // the road (zero spoilers up front).
  const treeList = Object.values(TREES);

  // Lobby shows the same options-plus-poster layout as every round, priced
  // from an empty run (the poster fills in once sins are picked).
  const lobbyRun = createRun("lobby", "lobby");
  const lobbyPoster = computePoster(lobbyRun);

  // Named `run` (not `state`): `$state` rune calls get misparsed by
  // svelte-check as store subscriptions when a `state` variable is in scope.
  // Generic args (not annotations): they preserve the union for narrowing
  // inside $derived closures.
  let treeId = $state<string | null>(null);
  let run = $state<BountyRunState | null>(null);
  let offered = $state<BountyChoice[]>([]);
  let firstDeal = $state<FirstDeal>(dealFirstSin(treeList));

  function pickFirst(choice: BountyChoice): void {
    const owner = firstDeal.ownerOf(choice.id);
    if (!owner) return;
    treeId = owner.id;
    const fresh = createRun(owner.id, owner.start);
    run = applyPick(owner.nodes, fresh, choice);
    if (run.phase === "playing") {
      offered = offerFor(owner.nodes, run);
    }
  }

  const node = $derived.by(() => {
    if (run === null || treeId === null) return undefined;
    return TREES[treeId]?.nodes[run.nodeId];
  });

  function pick(choice: BountyChoice): void {
    if (run === null || treeId === null) return;
    const meta = TREES[treeId];
    if (!meta) return;
    // One-round-deep side memory: previously offered sides stay out of the
    // next deal so stub loops stop cycling the same cards. The trunk
    // continuer is exempt inside dealOptions and may repeat.
    const justOfferedIds = offered.map((o) => o.id);
    run = applyPick(meta.nodes, run, choice);
    if (run.phase === "playing") {
      offered = offerFor(meta.nodes, run, Math.random, justOfferedIds);
    }
  }

  function restart(): void {
    treeId = null;
    run = null;
    offered = [];
    firstDeal = dealFirstSin(treeList);
  }

  const poster = $derived<PosterResult | null>(run !== null && run.phase === "poster" ? computePoster(run) : null);

  // Live poster prices every pick (cheap math, big feedback).
  const livePoster = $derived<PosterResult | null>(
    run !== null && run.phase === "playing" ? computePoster(run) : null,
  );
</script>

<div class="mx-auto flex w-full max-w-2xl flex-col items-center overflow-x-clip px-4 py-6 sm:px-6 sm:py-8">
  {#if run === null}
    <div class="w-full rounded-3xl border-4 border-cocoa bg-paper p-4 shadow-sticker-lg sm:p-6">
      <LivePoster poster={lobbyPoster} state={lobbyRun} />
      <p class="mt-6 text-center font-hand text-2xl text-cocoa">Select an action</p>
      <div class="mt-3 flex w-full flex-col gap-3">
        {#each firstDeal.offered as option, i (option.id)}
          <ActionCard choice={option} index={i + 1} onPick={pickFirst} />
        {:else}
          <p class="text-center font-bold text-cocoa/60">Dealing the underworld…</p>
        {/each}
      </div>
    </div>
  {:else if run.phase === "playing" && node}
    <div class="w-full rounded-3xl border-4 border-cocoa bg-paper p-4 shadow-sticker-lg sm:p-6">
      {#if livePoster}
        <LivePoster poster={livePoster} state={run} />
      {/if}

      {#key run.nodeId + run.path.length}
        <p class="mt-6 text-center font-hand text-2xl text-cocoa">Select an action</p>
        <div class="animate-round mt-3 flex w-full flex-col gap-3">
          {#each offered as option, i (option.id)}
            <ActionCard choice={option} index={i + 1} onPick={pick} />
          {:else}
            <p class="text-center font-bold text-cocoa/60">Dealing the underworld…</p>
          {/each}
        </div>
      {/key}
    </div>
  {:else if poster}
    <PosterReveal onRestart={restart} {poster} state={run} />
  {/if}
</div>
