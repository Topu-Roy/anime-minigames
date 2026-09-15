<script lang="ts">
  import type { RankedCharacter, SlotPlacement } from "../lib/types";

  let {
    placements,
    lineup,
    onSelect,
  }: {
    placements: SlotPlacement[];
    lineup: RankedCharacter[];
    onSelect: (slot: number) => void;
  } = $props();

  const byId = (id: string | null) => lineup.find((c) => c.id === id);
</script>

<ol class="flex w-full max-w-sm flex-col gap-2">
  {#each placements as placement (placement.slot)}
    {@const donor = byId(placement.characterId)}
    <li>
      {#if donor}
        <div
          class="flex rotate-[0.5deg] items-center gap-3 rounded-2xl border-3 border-cocoa bg-yellow px-3 py-2 text-cocoa shadow-sticker-sm"
        >
          <span class="w-7 shrink-0 text-center font-hand text-2xl">{placement.slot + 1}</span>
          <img
            alt=""
            class="h-10 w-10 shrink-0 rounded-xl border-2 border-cocoa object-cover"
            src={donor.imageURL}
          />
          <span class="min-w-0 flex-1 truncate font-bold">{donor.displayName}</span>
          <span
            class="shrink-0 rounded-lg border-2 border-cocoa bg-forest px-2 py-0.5 text-xs font-bold tracking-widest text-white uppercase"
            >Locked</span
          >
        </div>
      {:else}
        <button
          class="flex w-full items-center gap-3 rounded-2xl border-2 border-dashed border-cocoa/50 bg-white/60 px-3 py-2 text-left text-cocoa shadow-sticker-soft active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          onclick={() => onSelect(placement.slot)}
          type="button"
        >
          <span class="w-7 shrink-0 text-center font-hand text-2xl text-cocoa/40">{placement.slot + 1}</span>
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-cocoa/40 font-hand text-xl text-cocoa/40"
            >+</span
          >
          <span class="min-w-0 flex-1 truncate font-bold text-cocoa/40">Empty - tap to place here</span>
        </button>
      {/if}
    </li>
  {/each}
</ol>
