<script lang="ts">
  import { Characters } from "../../one-piece-draft/data/characters-v2";
  import { scorePlacements, sampleLineup } from "../lib/rank-set";
  import { TOTAL_SLOTS, type BlindRankState, type RankedCharacter } from "../lib/types";
  import BlindCard from "./BlindCard.svelte";
  import SlotList from "./SlotList.svelte";

  const donors: RankedCharacter[] = Characters.map((c) => ({
    id: c.id,
    displayName: c.displayName,
    imageURL: c.imageURL,
    rarity: c.rarity,
  }));

  const byId = (id: string) => donors.find((d) => d.id === id) as RankedCharacter;

  function freshState(): BlindRankState {
    return {
      lineup: sampleLineup(donors),
      currentRound: 0,
      placements: Array.from({ length: TOTAL_SLOTS }, (_, slot) => ({ slot, characterId: null, locked: false })),
      phase: "ranking",
    };
  }

  let state = $state<BlindRankState>(freshState());

  const current = $derived(state.lineup[state.currentRound] as RankedCharacter);
  const placedCount = $derived(state.placements.filter((p) => p.characterId !== null).length);

  const userIds = $derived(state.placements.map((p) => p.characterId as string));
  const lineupIds = $derived(state.lineup.map((c) => c.id));
  const result = $derived(state.phase === "done" ? scorePlacements(userIds, lineupIds) : null);

  function placeIn(slot: number): void {
    if (state.phase !== "ranking") return;
    const target = state.placements[slot];
    if (!target || target.characterId !== null) return;
    target.characterId = current.id;
    target.locked = true;
    if (placedCount >= TOTAL_SLOTS) {
      state.phase = "done";
    } else {
      state.currentRound += 1;
    }
  }

  function restart(): void {
    state = freshState();
  }
</script>

<div class="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8">
  {#if state.phase === "ranking"}
    <div class="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:items-start">
      <div class="order-2 w-full md:order-1 md:w-[55%]">
        <SlotList lineup={state.lineup} onSelect={placeIn} placements={state.placements} />
      </div>
      <div class="order-1 w-full md:sticky md:top-4 md:order-2 md:w-auto md:flex-1 md:self-start">
        {#key current.id}
          <div class="animate-round">
            <BlindCard character={current} round={state.currentRound + 1} />
          </div>
        {/key}
        <p class="mt-3 text-center text-sm font-bold text-cocoa/60">
          {placedCount} of {TOTAL_SLOTS} placed - slots lock forever.
        </p>
      </div>
    </div>
  {:else if result}
    <div
      class="w-full max-w-xl rounded-3xl border-4 border-cocoa bg-white p-6 text-center shadow-sticker-lg sm:p-8"
    >
      <p
        class="inline-block -rotate-2 rounded-lg border-3 border-cocoa bg-yellow px-4 py-1 text-sm font-bold tracking-[0.2em] text-cocoa uppercase"
      >
        Final score
      </p>
      <h2 class="mt-3 font-hand text-5xl text-cocoa">{result.total.toFixed(2)} / 10.00</h2>

      <div class="mt-6 flex flex-col gap-2 text-left">
        {#each result.details as detail (detail.slot)}
          {@const user = byId(detail.userId)}
          {@const truth = byId(detail.truthId)}
          <div
            class={`flex items-center gap-3 rounded-2xl border-3 px-3 py-2 shadow-sticker-sm ${detail.bracketDistance <= 1 ? "border-cocoa bg-yellow text-cocoa" : "border-cocoa bg-coral text-white"}`}
          >
            <span class="w-7 shrink-0 text-center font-hand text-2xl">{detail.slot + 1}</span>
            <img
              alt=""
              class="h-10 w-10 shrink-0 rounded-xl border-2 border-cocoa object-cover"
              src={user.imageURL}
            />
            <span class="min-w-0 flex-1 truncate font-bold">{user.displayName}</span>
            <span class="shrink-0 text-right leading-tight">
              <span class="block text-xs font-bold tracking-widest uppercase opacity-60">
                {detail.bracketDistance === 0 ? "Perfect" : "Incorrect"}
              </span>
              <span class="hidden text-xs opacity-60 sm:block">Correct: {truth.displayName}</span>
            </span>
          </div>
        {/each}
      </div>
      <p class="mt-3 text-xs font-bold text-cocoa/50">These rankings are fan-made, not official canon!</p>

      <button
        class="mt-6 rounded-2xl border-4 border-cocoa bg-coral px-8 py-3 text-lg font-bold text-white shadow-sticker-md active:translate-x-1 active:translate-y-1 active:shadow-none"
        onclick={restart}
        type="button"
      >
        Rank again →
      </button>
    </div>
  {/if}
</div>
