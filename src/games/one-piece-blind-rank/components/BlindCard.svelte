<script lang="ts">
  import type { RankedCharacter } from "../lib/types";

  let { character, round }: { character: RankedCharacter; round: number } = $props();
</script>

<div class="w-full md:overflow-hidden md:rounded-3xl md:border-4 md:border-cocoa md:bg-white md:shadow-sticker-lg">
  <!-- Mobile: verbatim draft CharacterCard look — square button-shape,
       top-left chip, full-bleed art, name overlaid on the art. -->
  <div class="mx-auto max-w-70 md:hidden">
    <div
      class="relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl border-4 border-cocoa bg-white shadow-sticker-sm"
    >
      <div
        class="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-paper font-hand text-4xl text-cocoa"
      >
        <img
          src={character.imageURL}
          alt={character.displayName}
          class="h-full w-full object-cover"
          loading="eager"
          draggable="false"
        />
        <div
          class="text-art-outline pointer-events-none absolute inset-x-0 bottom-0 line-clamp-2 px-2 pb-2 text-center font-hand text-3xl leading-[1.1] font-normal text-yellow sm:text-2xl"
        >
          {character.displayName}
        </div>
      </div>

      <!-- No below-art labels: name overlays the art, info lives in the
           top-left chip. Card height is art + padding, always stable. -->
    </div>
  </div>

  <!-- Desktop: unchanged stacked layout (art top, name below). -->
  <div class="hidden md:block">
    <div class="relative w-full">
      <img
        alt={character.displayName}
        class="aspect-square w-full object-cover object-top"
        draggable="false"
        src={character.imageURL}
      />
      <p
        class="absolute top-3 right-3 rounded-lg border-3 border-cocoa bg-yellow px-3 py-1 text-xs font-bold tracking-wide text-cocoa uppercase"
      >
        Round {round}
      </p>
    </div>
    <div class="flex min-w-0 flex-col items-center justify-center px-4 py-3 text-center">
      <p class="truncate font-hand text-2xl leading-tight text-cocoa md:text-3xl md:whitespace-normal">
        {character.displayName}
      </p>
    </div>
  </div>
</div>
