<script lang="ts">
  import type { RankedCharacter } from "../lib/types";

  let { character, round }: { character: RankedCharacter; round: number } = $props();
</script>

<div class="w-full overflow-hidden rounded-3xl border-4 border-cocoa bg-white shadow-[8px_8px_0_#3a2a18]">
  <div class="flex flex-row-reverse items-stretch md:block">
    <div class="relative w-28 shrink-0 md:w-full">
      <img
        alt={character.displayName}
        class="aspect-square h-full w-full object-cover object-top md:h-auto"
        draggable="false"
        src={character.imageURL}
      />
      <p
        class="absolute top-2 right-2 rounded-lg border-2 border-cocoa bg-yellow px-2 py-0.5 font-bold tracking-[0.16px] text-cocoa uppercase md:top-3 md:right-3 md:border-[3px] md:px-3 md:py-1 md:text-xs"
      >
        <span class="sm:hidden">{round}/10</span>
        <span class="hidden sm:inline">Round {round}</span>
      </p>
    </div>
    <div class="flex min-w-0 flex-1 flex-col justify-center px-4 py-3 md:items-center md:px-4 md:text-center">
      <p class="truncate font-hand text-2xl leading-tight text-cocoa md:text-3xl md:whitespace-normal">
        {character.displayName}
      </p>
      <p class="text-xs font-bold text-cocoa/50 md:hidden">Tap a slot below ↓</p>
    </div>
  </div>
</div>
