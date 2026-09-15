<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Character, RoundType } from "../lib/types";
  import { Characters } from "../data/characters-v2";
  import { REAL_ART_CAP_MS } from "../lib/preload";
  import { weaponLabel } from "../lib/draft";

  export let character: Character;
  export let roundType: RoundType;
  export let index: number;
  export let onSelect: (index: number) => void;
  export let onLockRequest: (index: number) => void = () => {};
  export let onLocked: (index: number) => void = () => {};
  // Round reveal: ms this card shuffles once started (0 = already locked).
  export let revealDelay: number = 0;
  // Parent gates start order: card shuffles only after the previous one locks.
  export let canStart: boolean = true;
  // Parent raises this to force-lock cards at or before the clicked index.
  export let lockUpTo: number = -1;
  // Fixed 15-face decoy cast (preloaded before the round starts).
  export let decoyPool: string[] = [];

  const SHUFFLE_TICK_MS = 80;

  let selfLocked = false;
  let started = false;
  let decoyURL = "";
  // Lock needs both: shuffle delay elapsed (or fast-forward requested)
  // AND the real art decoded - a card never lands on a blank frame.
  let delayElapsed = false;
  let lockRequested = false;
  let capExpired = false;
  let realLoaded = !character.imageURL;
  let shuffleTimer: ReturnType<typeof setInterval> | null = null;
  let delayTimer: ReturnType<typeof setTimeout> | null = null;
  let capTimer: ReturnType<typeof setTimeout> | null = null;

  function stopShuffle() {
    if (shuffleTimer !== null) {
      clearInterval(shuffleTimer);
      shuffleTimer = null;
    }
    if (delayTimer !== null) {
      clearTimeout(delayTimer);
      delayTimer = null;
    }
    if (capTimer !== null) {
      clearTimeout(capTimer);
      capTimer = null;
    }
  }

  function lock() {
    selfLocked = true;
    stopShuffle();
  }

  function tryLock() {
    if (selfLocked) return;
    if ((delayElapsed || lockRequested) && (realLoaded || capExpired)) {
      lock();
      onLocked(index);
    }
  }

  function randomDecoy(): string {
    if (decoyPool.length > 0) return decoyPool[Math.floor(Math.random() * decoyPool.length)];
    // Fallback (shouldn't fire - parent always passes a preloaded pool).
    const pool = Characters.filter((c) => c.imageURL && c.id !== character.id);
    return pool[Math.floor(Math.random() * pool.length)]?.imageURL ?? "";
  }

  function start() {
    if (started) return;
    started = true;
    decoyURL = randomDecoy();
    shuffleTimer = setInterval(() => {
      if (!selfLocked) decoyURL = randomDecoy();
    }, SHUFFLE_TICK_MS);
    delayTimer = setTimeout(() => {
      delayElapsed = true;
      tryLock();
    }, revealDelay);
    capTimer = setTimeout(() => {
      capExpired = true;
      tryLock();
    }, revealDelay + REAL_ART_CAP_MS);
  }

  function requestLock() {
    // Fast-forward (click): start shuffling cards that haven't, then lock
    // each as soon as its (already preloaded) art is ready.
    if (!started) start();
    lockRequested = true;
    tryLock();
  }

  onMount(() => {
    if (revealDelay <= 0) {
      selfLocked = true;
      return;
    }
    if (canStart) start();
  });

  onDestroy(stopShuffle);

  // Parent gates sequence order; parent-driven early lock.
  $: if (canStart && !started && !selfLocked && revealDelay > 0) start();
  $: if (lockUpTo >= index && !selfLocked && revealDelay > 0) requestLock();

  $: inReveal = revealDelay > 0;
  $: shuffling = inReveal && started && !selfLocked;
  $: waiting = inReveal && !started && !selfLocked;
  // Card identity fully visible (art + name + round info all locked in).
  $: revealed = !shuffling && !waiting;

  function handleClick() {
    if (shuffling || waiting) {
      onLockRequest(index);
      return;
    }
    onSelect(index);
  }

  $: currentHakiTier =
    roundType === "armament"
      ? character.haki.armament.tier
      : roundType === "observation"
        ? character.haki.observation.tier
        : roundType === "conqueror"
          ? character.haki.conqueror.tier
          : null;

  // Top-left in-image chips: the round's key info at a glance.
  // Body → race, haki rounds → tier, weapon/DF rounds → item name
  // only (no type chips), mind rounds → value.
  $: infoChip =
    roundType === "body"
      ? character.race
      : currentHakiTier && currentHakiTier !== "none"
        ? currentHakiTier
        : roundType === "intelligence"
          ? `INT ${character.baseStats.intelligence}`
          : roundType === "battle_iq"
            ? `BIQ ${character.baseStats.battleIQ}`
            : null;

  // Whether this round shows a name chip at all (even if the name is blank).
  function nameChipWanted(): boolean {
    return (
      (roundType === "devil_fruit" && character.devilFruit.type !== "none") ||
      (roundType === "weapon" && character.weapon.type !== "none")
    );
  }

  // Item name chip (stacked under the info chip): the fruit / weapon
  // name is the whole point of those rounds. Unnamed-but-held weapons use
  // the shared weaponLabel fallback ("Unnamed {type}", never "None");
  // blank fruit names show "Unknown".
  $: nameChip = (() => {
    if (!nameChipWanted()) return null;
    if (roundType === "devil_fruit") {
      const raw = character.devilFruit.englishName;
      return raw.trim() === "" ? "Unknown" : raw;
    }
    return weaponLabel(character);
  })();

  let imageError = false;
</script>

<button
  class="relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl border-4 border-cocoa bg-white shadow-[4px_4px_0_#3a2a18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none {waiting
    ? 'opacity-60'
    : ''}"
  on:click={handleClick}
>
  {#if revealed && (infoChip || nameChip)}
    <span class="absolute top-3 left-3 z-10 flex max-w-[70%] flex-col items-start gap-1">
      {#if infoChip}
        <span
          class="rounded-lg border-2 border-cocoa bg-yellow px-2 py-0.5 text-[10px] font-bold tracking-widest text-cocoa uppercase"
        >
          {infoChip}
        </span>
      {/if}
      {#if nameChip}
        <span
          class="max-w-full truncate rounded-lg border-2 border-cocoa bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-cocoa"
          title={nameChip}
        >
          {nameChip}
        </span>
      {/if}
    </span>
  {/if}

  <div
    class="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-paper font-hand text-4xl text-cocoa"
  >
    {#if !realLoaded && character.imageURL}
      <!-- Hidden warm-up: card locks only after its real art decodes (1s cap). -->
      <img
        src={character.imageURL}
        alt=""
        aria-hidden="true"
        class="hidden"
        loading="eager"
        on:load={() => {
          realLoaded = true;
          tryLock();
        }}
        on:error={() => {
          realLoaded = true;
          tryLock();
        }}
      />
    {/if}
    {#if shuffling && decoyURL}
      <img src={decoyURL} alt="" class="h-full w-full object-cover" loading="eager" draggable="false" />
    {:else if waiting}
      <span>?</span>
    {:else if character.imageURL && !imageError}
      <img
        src={character.imageURL}
        alt={character.displayName}
        class="h-full w-full object-cover"
        loading="eager"
        on:error={() => (imageError = true)}
      />
    {:else}
      <span>{shuffling ? "?" : character.displayName.charAt(0)}</span>
    {/if}
    <div
      class="text-art-outline pointer-events-none absolute inset-x-0 bottom-0 pb-2 text-center font-hand text-xl leading-[1.1] font-normal text-yellow sm:text-2xl"
    >
      {#if shuffling || waiting}
        ?
      {:else if roundType === "body"}
        {character.fullName}
      {:else}
        {character.displayName}
      {/if}
    </div>
  </div>

  <!-- No below-art labels: name overlays the art, info lives in the
       top-left chip. Card height is art + padding, always stable. -->
</button>
