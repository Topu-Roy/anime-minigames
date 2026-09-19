<script lang="ts">
  import WantedPoster from "../../../components/WantedPoster.svelte";
  import type { PosterResult } from "../lib/scoring";
  import type { BountyRunState } from "../lib/types";

  let {
    state,
    poster,
    onRestart,
  }: {
    state: BountyRunState;
    poster: PosterResult;
    onRestart: () => void;
  } = $props();
</script>

<div class="w-full">
  <!-- Wanted poster card -->
  <div class="rotate-[0.5deg] rounded-3xl border-4 border-cocoa bg-paper p-4 text-center shadow-sticker-lg sm:p-8">
    <h2 class="font-hand text-3xl text-cocoa sm:text-4xl">Your final bounty</h2>
    <div class="mt-4">
      <WantedPoster bounty={poster.poster} name="Nameless Pirate" />
    </div>

    {#if poster.combos.length > 0}
      <div class="mt-4 flex flex-wrap justify-center gap-2">
        {#each poster.combos as combo (combo.label)}
          <span class="rounded-full border-2 border-cocoa bg-yellow px-3 py-1 text-xs font-bold text-cocoa">
            👑 {combo.label}
          </span>
        {/each}
      </div>
    {/if}

    {#if poster.nerfs.length > 0}
      <div class="mt-2 flex flex-wrap justify-center gap-2">
        {#each poster.nerfs as nerf (nerf.label)}
          <span class="rounded-full border-2 border-cocoa bg-coral px-3 py-1 text-xs font-bold text-white">
            🏴‍☠️ {nerf.label}
          </span>
        {/each}
      </div>
    {/if}

    <div class="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <button
        class="rounded-2xl border-4 border-cocoa bg-coral px-8 py-3 text-lg font-bold text-white shadow-sticker-md active:translate-x-1 active:translate-y-1 active:shadow-none"
        onclick={onRestart}
        type="button"
      >
        Play again →
      </button>
      <a
        class="rounded-2xl border-4 border-cocoa bg-white px-6 py-3 text-center text-lg font-bold text-cocoa shadow-sticker-md active:translate-x-1 active:translate-y-1 active:shadow-none"
        href="/one-piece"
      >
        Other modes →
      </a>
    </div>

    <!-- Path taken -->
    <div class="mt-6 text-left">
      <h3 class="font-hand text-2xl text-cocoa">Path taken</h3>
      <ol class="mt-2 flex flex-col gap-2">
        {#each state.path as step, index (step.choice.id + index)}
          <li
            class="flex items-center gap-3 rounded-2xl border-3 border-cocoa bg-white px-3 py-2 text-cocoa shadow-sticker-sm"
          >
            <span class="w-7 shrink-0 text-center font-hand text-2xl">{index + 1}</span>
            <span class="min-w-0 flex-1 truncate font-bold">{step.choice.label}</span>
          </li>
        {/each}
      </ol>
    </div>

    {#if state.endPremise}
      <p
        class="mt-4 rounded-2xl border-3 border-cocoa bg-white px-4 py-3 text-left font-bold text-cocoa shadow-sticker-sm"
      >
        To be continued: {state.endPremise}
      </p>
    {/if}
  </div>
</div>
