<script lang="ts">
  import { draft, currentRound, roundOptions, rerollsLeft } from "../stores/draft";
  import { getRoundLabel, getRoundType } from "../lib/draft";
  import { preloadImages, getFixedDecoyURLs, getAllImageURLs } from "../lib/preload";
  import CharacterCard from "./CharacterCard.svelte";
  import RerollButton from "./RerollButton.svelte";
  import DraftPicks from "./DraftPicks.svelte";

  // Round reveal: cards shuffle one at a time (~600ms each), left to right.
  // Each card owns its timers (see CharacterCard); {#key} remounts them per options.
  const LOCK_BASE_MS = 600;

  $: round = $currentRound;
  $: options = $roundOptions;
  $: roundType = getRoundType(round);
  $: label = getRoundLabel(round);
  // Rerolls are a 2-per-draft resource usable in any round, final included.

  // Signature changes on new options (initial + rerolls) → fresh cards.
  $: revealKey = roundType + ":" + options.map((o) => o.id).join(",");
  $: reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sequential reveal: card i shuffles only after card i-1 locks.
  // -1 = none forced. Reset whenever fresh options arrive.
  let lockUpTo = -1;
  let activeIndex = 0;

  // Beat before shuffling: the round fades in (skeleton, then dimmed
  // cards), holds 1s, and only then does card 0 start. Timer cleared
  // on every fresh round so rerolls re-arm the beat.
  let revealReady = false;
  let beatTimer: ReturnType<typeof setTimeout> | null = null;
  const BEAT_MS = 1000;

  // Image warm-up: the round starts once the 15 fixed decoys settle.
  // The 4 real faces warm in the background (not gated) - each card's
  // lock additionally waits for its own art to decode (1s cap), so a
  // card never lands blank. Skeleton grid holds the layout meanwhile.
  // Skeleton mirrors the loaded card shape (art + one text bar) so the
  // swap doesn't shift layout. DF and weapon name+type share one line.
  let preloading = true;
  let loadedCount = 0;
  let loadTotal = 0;
  const decoyPool: string[] = getFixedDecoyURLs();
  // Full-roster background warm runs once (first round) - afterwards every
  // round's real faces are already in cache/SW before their options exist.
  let rosterWarming = false;
  // Freshness guard: stale preloads (rapid rerolls) must not clear the loader.
  let preloadKey = "";
  // Orchestration lives in a plain function (not inline in the reactive
  // statement) so the linter can't mistake cache writes for a render loop.
  function startRound(key: string, motion: boolean) {
    lockUpTo = -1;
    activeIndex = motion ? 99 : 0;
    revealReady = false;
    if (beatTimer !== null) {
      clearTimeout(beatTimer);
      beatTimer = null;
    }

    // Whole roster warms in the background (cache + SW), gated or not.
    // Runs once - all 184 faces download while the player drafts.
    if (!motion && !rosterWarming) {
      rosterWarming = true;
      void preloadImages(getAllImageURLs());
    }

    if (motion) {
      // Nothing animates - reals render eager, no warm-up needed.
      preloading = false;
      revealReady = true;
      return;
    }

    preloadKey = key;
    preloading = true;
    loadedCount = 0;
    loadTotal = decoyPool.length;
    preloadImages(decoyPool, (done) => {
      if (preloadKey !== key) return;
      loadedCount = done;
    }).then(() => {
      if (preloadKey !== key) return;
      preloading = false;
      // Cards are mounted (dimmed "?") - hold the beat, then shuffle.
      beatTimer = setTimeout(() => {
        if (preloadKey !== key) return;
        revealReady = true;
      }, BEAT_MS);
    });
  }
  $: startRound(revealKey, reducedMotion);

  function handleSelect(index: number) {
    draft.pick(index);
  }

  function handleLockRequest(index: number) {
    lockUpTo = Math.max(lockUpTo, index);
    activeIndex = Math.max(activeIndex, index + 1);
  }

  function handleLocked(index: number) {
    activeIndex = Math.max(activeIndex, index + 1);
  }
</script>

<div class="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-6 sm:px-6">
  <!-- Mobile: meta row (round + reroll) on top, title full-width below.
       Desktop: single row, title centered. -->
  <div class="flex w-full flex-col gap-3 pb-6 sm:pb-8">
    <div class="flex w-full items-center justify-between gap-3">
      <p class="shrink-0 text-xs font-bold tracking-wide text-cocoa/60 uppercase">
        Round {round} of 8
      </p>
      <div class="shrink-0">
        <RerollButton />
      </div>
    </div>

    <h1
      class="w-full text-center font-hand text-2xl leading-[1.15] font-normal text-balance text-cocoa sm:mt-1 md:text-3xl"
    >
      {label}
    </h1>
  </div>

  {#key revealKey}
    <!-- Transition scoped to the options area only: header above and
         Draft Picks below never replay it. Key remounts per fresh options. -->
    <div class="animate-round w-full">
      {#if preloading}
        <!-- Loading state: skeleton cards hold the grid shape until art is cached. -->
        <!-- One shared height floor (edge-to-edge square art) on all screens. -->
        <div
          class="grid min-h-40 w-full grid-cols-2 gap-3 sm:gap-6 md:min-h-57.5 md:grid-cols-4"
          aria-busy="true"
          aria-label="Loading characters"
        >
          {#each Array(4) as _, i (i)}
            <div
              class="flex aspect-square w-full flex-col overflow-hidden rounded-2xl border-4 border-cocoa bg-white"
            >
              <div class="aspect-square w-full bg-paper"></div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="grid min-h-40 w-full grid-cols-2 gap-3 sm:gap-6 md:min-h-57.5 md:grid-cols-4">
          {#each options as character, i (character.id)}
            <CharacterCard
              {character}
              {roundType}
              index={i}
              onSelect={handleSelect}
              onLockRequest={handleLockRequest}
              onLocked={handleLocked}
              revealDelay={!reducedMotion ? LOCK_BASE_MS : 0}
              canStart={revealReady && i <= activeIndex}
              {lockUpTo}
              {decoyPool}
            />
          {/each}
        </div>
      {/if}
      <!-- Caption slot always rendered (invisible when idle) so the
         grid never jumps when loading finishes. -->
      <p
        class="mt-3 text-center text-sm font-bold tracking-wider uppercase {preloading
          ? 'text-cocoa/60'
          : 'invisible'}"
      >
        {#if preloading}
          Loading faces… {loadedCount}/{loadTotal}
        {:else}
          &nbsp;
        {/if}
      </p>
    </div>
  {/key}

  <!-- Always visible: ghost rows hold all 8 rounds until picked. -->
  <div class="flex w-full flex-col items-center justify-center gap-2">
    <DraftPicks picks={$draft.picks} />
  </div>
</div>
