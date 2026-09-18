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

  let treeId = $state<string | null>(null);
  let state = $state<BountyRunState | null>(null);
  let offered = $state<BountyChoice[]>([]);
  let firstDeal = $state<FirstDeal>(dealFirstSin(treeList));

  function pickFirst(choice: BountyChoice): void {
    const owner = firstDeal.ownerOf(choice.id);
    if (!owner) return;
    treeId = owner.id;
    const fresh = createRun(owner.id, owner.start);
    state = applyPick(owner.nodes, fresh, choice);
    if (state.phase === "playing") {
      offered = offerFor(owner.nodes, state);
    }
  }

  const node = $derived.by(() => {
    if (state === null || treeId === null) return undefined;
    return TREES[treeId]?.nodes[state.nodeId];
  });

  function pick(choice: BountyChoice): void {
    if (state === null || treeId === null) return;
    const meta = TREES[treeId];
    if (!meta) return;
    state = applyPick(meta.nodes, state, choice);
    if (state.phase === "playing") {
      offered = offerFor(meta.nodes, state);
    }
  }

  function restart(): void {
    treeId = null;
    state = null;
    offered = [];
    firstDeal = dealFirstSin(treeList);
  }

  const poster = $derived<PosterResult | null>(
    state !== null && state.phase === "poster" ? computePoster(state) : null,
  );

  // Live poster prices every pick (cheap math, big feedback).
  const livePoster = $derived<PosterResult | null>(
    state !== null && state.phase === "playing" ? computePoster(state) : null,
  );
</script>

<div class="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8">
  {#if state === null}
    <div class="flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-start">
      <div class="order-1 flex w-full flex-col items-center md:max-w-[58%]">
        <div class="mt-4 w-full md:hidden">
          <LivePoster poster={lobbyPoster} state={lobbyRun} />
        </div>
        <div class="mt-6 flex w-full flex-col gap-3">
          {#each firstDeal.offered as option, i (option.id)}
            <ActionCard choice={option} index={i + 1} onPick={pickFirst} />
          {:else}
            <p class="text-center font-bold text-cocoa/60">Dealing the underworld…</p>
          {/each}
        </div>
      </div>
      <div class="order-2 hidden w-full md:block md:flex-1">
        <div class="md:sticky md:top-4">
          <LivePoster poster={lobbyPoster} state={lobbyRun} />
        </div>
      </div>
    </div>
  {:else if state.phase === "playing" && node}
    <div class="flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-start">
      <div class="order-1 flex w-full flex-col items-center md:max-w-[58%]">
        {#if livePoster}
          <div class="mt-4 w-full md:hidden">
            <LivePoster poster={livePoster} {state} />
          </div>
        {/if}

        {#key state.nodeId + state.path.length}
          <div class="animate-round mt-6 flex w-full flex-col gap-3">
            {#each offered as option, i (option.id)}
              <ActionCard choice={option} index={i + 1} onPick={pick} />
            {:else}
              <p class="text-center font-bold text-cocoa/60">Dealing the underworld…</p>
            {/each}
          </div>
        {/key}
      </div>
      <div class="order-2 hidden w-full md:block md:flex-1">
        <div class="md:sticky md:top-4">
          {#if livePoster}
            <LivePoster poster={livePoster} {state} />
          {/if}
        </div>
      </div>
    </div>
  {:else if poster}
    <PosterReveal onRestart={restart} {poster} {state} />
  {/if}
</div>
