<script lang="ts">
  import WantedPoster from "../../../components/WantedPoster.svelte";
  import type { PosterResult } from "../lib/scoring";
  import type { BountyRunState } from "../lib/types";

  let {
    state,
    poster,
  }: {
    state: BountyRunState;
    poster: PosterResult;
  } = $props();
</script>

<div class="w-full md:sticky md:top-4">
  <WantedPoster bounty={poster.poster} name="Nameless Pirate" />

  {#if poster.combos.length > 0}
    <div class="mt-3 flex flex-wrap justify-center gap-1">
      {#each poster.combos as combo (combo.label)}
        <span class="rounded-full border-2 border-cocoa bg-yellow px-2 py-0.5 text-[11px] font-bold text-cocoa">
          👑 {combo.label}
        </span>
      {/each}
    </div>
  {/if}

  <p class="mt-2 text-center text-xs font-bold text-cocoa/60">
    {state.roundsLeft}
    {state.roundsLeft === 1 ? "sin" : "sins"} left
  </p>
</div>
