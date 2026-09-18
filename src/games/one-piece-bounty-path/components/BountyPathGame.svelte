<script lang="ts">
  import { TREES } from "../data/trees";
  import { computePoster, type PosterResult } from "../lib/scoring";
  import { applyPick, createRun, offerFor } from "../lib/run";
  import type { BountyChoice, BountyRunState } from "../lib/types";
  import ActionCard from "./ActionCard.svelte";
  import LivePoster from "./LivePoster.svelte";
  import PosterReveal from "./PosterReveal.svelte";

  // Thin view layer: tree select -> rounds -> poster. All progression lives
  // in lib/run + lib/scoring (headless-tested). Component holds state only.
  const treeList = Object.values(TREES);

  let treeId = $state<string | null>(null);
  let state = $state<BountyRunState | null>(null);
  let offered = $state<BountyChoice[]>([]);

  const node = $derived.by(() => {
    if (state === null || treeId === null) return undefined;
    return TREES[treeId]?.nodes[state.nodeId];
  });

  function startRun(id: string): void {
    const meta = TREES[id];
    if (!meta) return;
    treeId = id;
    state = createRun(id, meta.start);
    offered = offerFor(meta.nodes, state);
  }

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
    <p
      class="inline-block -rotate-2 rounded-lg border-3 border-coral bg-white px-4 py-1 text-sm font-bold tracking-[0.2em] text-coral uppercase"
    >
      ★ Pick yer path ★
    </p>
    <h2 class="mt-3 text-center font-hand text-4xl text-cocoa sm:text-5xl">Three roads to infamy</h2>
    <p class="mt-2 text-center text-lg text-cocoa/80">
      Each road walks crime rounds toward one poster. Side sins loop back richer - only finales print.
    </p>
    <div class="mt-6 flex w-full flex-col gap-3">
      {#each treeList as tree, i (tree.id)}
        <button
          class="relative w-full rounded-2xl border-3 border-cocoa bg-white px-4 py-3 text-left shadow-sticker-sm active:translate-x-1 active:translate-y-1 active:shadow-none"
          onclick={() => startRun(tree.id)}
          type="button"
        >
          <span class="flex items-center gap-3 font-bold text-cocoa">
            <span
              aria-hidden="true"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-3 border-cocoa bg-paper font-hand text-2xl"
            >
              {i + 1}
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-hand text-2xl leading-tight">{tree.title}</span>
              <span class="mt-0.5 block text-sm font-normal text-cocoa/70">{tree.flavor}</span>
            </span>
            <span
              aria-hidden="true"
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cocoa bg-paper text-base"
            >
              {tree.icon}
            </span>
            <span aria-hidden="true" class="shrink-0 text-xl">→</span>
          </span>
        </button>
      {/each}
    </div>
  {:else if state.phase === "playing" && node}
    <div class="flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-start">
      <div class="order-1 flex w-full flex-col items-center md:max-w-[55%]">
        <p
          class="inline-block -rotate-2 rounded-lg border-3 border-cocoa bg-yellow px-4 py-1 text-sm font-bold tracking-[0.2em] text-cocoa uppercase"
        >
          🏴‍☠️ {state.roundsLeft}
          {state.roundsLeft === 1 ? "sin" : "sins"} left
        </p>
        <h2 class="mt-3 text-center font-hand text-4xl text-cocoa sm:text-5xl">{node.title}</h2>
        <p class="mt-2 text-center text-lg text-cocoa/80">{node.prompt}</p>
        {#if state.note}
          <p class="mt-2 text-center text-sm font-bold text-coral italic">Meanwhile… {state.note}</p>
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
      <div class="order-2 w-full md:flex-1">
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
