<script lang="ts">
  import type { DraftPick } from "../lib/types";
  import { TOTAL_ROUNDS, getRoundType } from "../lib/draft";
  import { Characters } from "../data/characters-v2";
  import { draft } from "../stores/draft";

  export let picks: DraftPick[];

  function handleReset() {
    draft.reset();
  }

  // Reactive: rebuild every time picks changes, or the list never updates.
  $: byRound = new Map(picks.map((p) => [p.round, p]));
  const rounds = Array.from({ length: TOTAL_ROUNDS }, (_, i) => i + 1);

  function getCharImage(id: string): string {
    const char = Characters.find((c) => c.id === id);
    return char?.imageURL ?? "";
  }

  // Badge labels: "body" → "Body", "battle_iq" → "Battle IQ".
  function roundName(roundType: string): string {
    return roundType
      .split("_")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  // Tier colors that read on white paper: coral / ink / forest.
  function rarityText(rarity: DraftPick["rarity"]): string {
    switch (rarity) {
      case "god":
        return "text-coral";
      case "legend":
        return "text-cocoa";
      case "epic":
        return "text-forest";
      default:
        return "";
    }
  }

  let pickImageErrors: Record<number, boolean> = {};
</script>

<div class="w-full max-w-lg rounded-2xl border-4 border-cocoa bg-white shadow-sticker-sm">
  <div class="mb-2 flex items-baseline justify-between px-4 pt-4">
    <h2 class="font-hand text-2xl leading-[1.35] font-normal text-cocoa">Draft Picks</h2>
    <span class="text-xs font-bold tracking-wider text-cocoa/60 uppercase">
      {picks.length}/{TOTAL_ROUNDS}
    </span>
  </div>
  <div class="flex flex-col gap-1 px-4 pb-4">
    {#each rounds as round (round)}
      {@const pick = byRound.get(round)}
      {@const roundType = getRoundType(round)}
      {#if pick}
        <!-- Zones: round name left, avatar+name centered, tier right. -->
        <div class="flex items-center gap-2.5 border-b border-cocoa/20 py-1.5 last:border-b-0">
          <span
            class="w-20 shrink-0 text-center text-[0.625rem] font-bold tracking-wider text-cocoa/60 uppercase sm:w-28"
          >
            {roundName(pick.roundType)}
          </span>
          <div class="flex min-w-0 flex-1 items-center justify-center">
            <div class="flex min-w-0 flex-1 items-center justify-start gap-2">
              <div class="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-cocoa bg-paper">
                {#if getCharImage(pick.characterId) && !pickImageErrors[pick.round]}
                  <img
                    src={getCharImage(pick.characterId)}
                    alt={pick.characterName}
                    class="h-full w-full object-cover"
                    loading="lazy"
                    on:error={() => (pickImageErrors[pick.round] = true)}
                  />
                {:else}
                  <span class="flex h-full w-full items-center justify-center text-xs font-bold text-cocoa">
                    {pick.characterName.charAt(0)}
                  </span>
                {/if}
              </div>
              <span class="min-w-0 truncate text-sm font-bold text-cocoa">
                {pick.characterName}
              </span>
            </div>
          </div>
          <!-- Picked rows always show their tier, basic included. -->
          <span
            class="w-12 shrink-0 text-right text-[0.625rem] font-bold tracking-wider uppercase sm:w-14 {pick.rarity ===
            'basic'
              ? 'text-cocoa/60'
              : rarityText(pick.rarity)}"
          >
            {pick.rarity}
          </span>
        </div>
      {:else}
        <!-- Upcoming pick: ghost row doubles as draft progress. -->
        <div class="flex items-center gap-2.5 border-b border-cocoa/20 py-1.5 opacity-60 last:border-b-0">
          <span
            class="w-20 shrink-0 text-center text-[0.625rem] font-bold tracking-wider text-cocoa/60 uppercase sm:w-28"
          >
            {roundName(roundType)}
          </span>
          <div class="flex min-w-0 flex-1 items-center justify-center">
            <div class="flex min-w-0 flex-1 items-center justify-start gap-2">
              <div
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-cocoa/40 text-xs font-bold text-cocoa/60"
              >
                ?
              </div>
              <span class="min-w-0 truncate text-sm text-cocoa/60"> Awaiting pick </span>
            </div>
          </div>
          <span
            class="w-12 shrink-0 text-right text-[0.625rem] font-bold tracking-wider text-cocoa/60 uppercase sm:w-14"
          >
            --
          </span>
        </div>
      {/if}
    {/each}
  </div>
</div>

{#if picks.length > 0}
  <button
    class="mt-3 rounded-2xl border-3 border-cocoa bg-white px-4 py-3 text-sm font-bold text-cocoa shadow-sticker-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
    on:click={handleReset}
  >
    ↺ Restart draft
  </button>
{/if}
