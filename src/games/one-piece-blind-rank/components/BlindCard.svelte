<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { REAL_ART_CAP_MS } from "../../one-piece-draft/lib/preload";
  import type { RankedCharacter } from "../lib/types";

  let {
    character,
    round,
    decoyPool = [],
    shuffleMs = 600,
  }: { character: RankedCharacter; round: number; decoyPool?: string[]; shuffleMs?: number } = $props();

  // Draft-style reveal: decoy faces cycle until the delay elapses AND
  // the real art decodes (1s cap) - the card never lands blank.
  const SHUFFLE_TICK_MS = 80;

  let shuffling = $state(false);
  let decoyURL = $state("");
  // Warm-up flag (mutable) + prop-derived readiness: no imageURL means
  // nothing to wait for. Split keeps $state free of prop snapshots.
  let artSettled = $state(false);
  let realLoaded = $derived(!character.imageURL || artSettled);
  let delayElapsed = false;
  let capExpired = false;
  const timers: (ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>)[] = [];

  function randomDecoy(): string {
    return decoyPool[Math.floor(Math.random() * decoyPool.length)] ?? "";
  }

  function tryLock() {
    if (shuffling && delayElapsed && (realLoaded || capExpired)) shuffling = false;
  }

  function handleRealSettled() {
    artSettled = true;
    tryLock();
  }

  onMount(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Nothing to shuffle with (no pool, no delay, reduced motion) - lock at once.
    if (reducedMotion || shuffleMs <= 0 || decoyPool.length === 0) return;
    shuffling = true;
    decoyURL = randomDecoy();
    timers.push(
      setInterval(() => {
        if (shuffling) decoyURL = randomDecoy();
      }, SHUFFLE_TICK_MS),
      setTimeout(() => {
        delayElapsed = true;
        tryLock();
      }, shuffleMs),
      setTimeout(() => {
        capExpired = true;
        tryLock();
      }, shuffleMs + REAL_ART_CAP_MS),
    );
  });

  onDestroy(() => {
    for (const timer of timers) {
      clearInterval(timer);
      clearTimeout(timer);
    }
  });
</script>

<div class="w-full md:overflow-hidden md:rounded-3xl md:border-4 md:border-cocoa md:bg-white md:shadow-sticker-lg">
  <!-- Mobile: verbatim draft CharacterCard look — square button-shape,
       top-left chip, full-bleed art, name overlaid on the art. -->
  <div class="mx-auto max-w-70 md:hidden">
    {#if !realLoaded && character.imageURL}
      <!-- Hidden warm-up: the card locks only after its real art decodes (1s cap). -->
      <img
        src={character.imageURL}
        alt=""
        aria-hidden="true"
        class="hidden"
        loading="eager"
        onload={handleRealSettled}
        onerror={handleRealSettled}
      />
    {/if}
    <div
      class="relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl border-4 border-cocoa bg-white shadow-sticker-sm"
    >
      <div
        class="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-paper font-hand text-4xl text-cocoa"
      >
        {#if shuffling && decoyURL}
          <img src={decoyURL} alt="" class="h-full w-full object-cover" loading="eager" draggable="false" />
        {:else}
          <img
            src={character.imageURL}
            alt={character.displayName}
            class="h-full w-full object-cover"
            loading="eager"
            draggable="false"
          />
        {/if}
        <div
          class="text-art-outline pointer-events-none absolute inset-x-0 bottom-0 line-clamp-2 px-2 pb-2 text-center font-hand text-3xl leading-[1.1] font-normal text-yellow sm:text-2xl"
        >
          {#if shuffling}
            ?
          {:else}
            {character.displayName}
          {/if}
        </div>
      </div>

      <!-- No below-art labels: name overlays the art, info lives in the
           top-left chip. Card height is art + padding, always stable. -->
    </div>
  </div>

  <!-- Desktop: unchanged stacked layout (art top, name below). -->
  <div class="hidden md:block">
    <div class="relative w-full">
      {#if shuffling && decoyURL}
        <img alt="" class="aspect-square w-full object-cover object-top" draggable="false" src={decoyURL} />
      {:else}
        <img
          alt={character.displayName}
          class="aspect-square w-full object-cover object-top"
          draggable="false"
          src={character.imageURL}
        />
      {/if}
      <p
        class="absolute top-3 right-3 rounded-lg border-3 border-cocoa bg-yellow px-3 py-1 text-xs font-bold tracking-wide text-cocoa uppercase"
      >
        Round {round}
      </p>
    </div>
    <div class="flex min-w-0 flex-col items-center justify-center px-4 py-3 text-center">
      <p class="truncate font-hand text-2xl leading-tight text-cocoa md:text-3xl md:whitespace-normal">
        {#if shuffling}
          ?
        {:else}
          {character.displayName}
        {/if}
      </p>
    </div>
  </div>
</div>
