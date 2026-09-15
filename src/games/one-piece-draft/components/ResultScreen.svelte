<script lang="ts">
  import { draft, finalStats } from "../stores/draft";
  import { Characters } from "../data/characters-v2";
  import { rankBuild } from "../lib/draft";

  $: stats = $finalStats;
  $: picks = $draft.picks;
  $: appearancePick = picks.find((p) => p.roundType === "body");
  $: buildRank = stats ? rankBuild(stats.stats) : null;
  // Hero: the drafted body's face + name (replaces the old text header).
  $: bodyChar = Characters.find((c) => c.id === appearancePick?.characterId);
  let heroError = false;

  function faceOf(id: string | undefined): string {
    if (!id) return "";
    return Characters.find((c) => c.id === id)?.imageURL ?? "";
  }

  // All 8 round donors, resolved by id for the picks strip.
  function pickFace(id: string): string {
    return Characters.find((c) => c.id === id)?.imageURL ?? "";
  }

  function handleNewDraft() {
    draft.reset();
  }
</script>

<div class="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-4 pt-6 sm:px-6">
  <!-- Hero: the drafted body, face + name overlaid (no text header). -->
  {#if bodyChar?.imageURL && !heroError}
    <div
      class="relative mb-8 aspect-square w-full max-w-80 overflow-hidden rounded-2xl border-4 border-cocoa bg-white shadow-sticker-md"
    >
      <img
        src={bodyChar.imageURL}
        alt={bodyChar.displayName}
        class="h-full w-full object-cover"
        loading="eager"
        on:error={() => (heroError = true)}
      />
      <!-- Rank numeral centered on the art. -->
      {#if buildRank}
        <div
          class="text-art-outline pointer-events-none absolute inset-0 flex items-center justify-center font-hand text-7xl leading-none font-normal text-yellow md:text-8xl"
        >
          #{buildRank.rank}
        </div>
      {/if}
      <div
        class="text-art-outline pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3 text-center font-hand text-3xl leading-[1.1] font-normal text-yellow sm:text-4xl"
      >
        {bodyChar.fullName}
      </div>
    </div>
  {/if}

  <!-- Coral sticker CTA with the toy squish. -->
  <button
    class="rounded-2xl border-4 border-cocoa bg-coral px-6 py-4 text-base font-bold text-white shadow-sticker-md active:translate-x-1 active:translate-y-1 active:shadow-none"
    on:click={handleNewDraft}
  >
    Try Again
  </button>

  {#if stats}
    {#if buildRank}
      <!-- Rank panel: forest signature card, gold numeral, ladder pills. -->
      <div
        class="my-8 w-full max-w-lg rounded-3xl border-4 border-cocoa bg-forest p-6 text-center shadow-sticker-lg md:p-8"
      >
        <div class="flex items-baseline justify-center gap-2">
          <span class="font-hand text-6xl leading-none font-normal text-yellow md:text-7xl">
            #{buildRank.rank}
          </span>
          <span class="text-sm font-bold text-white/70">of {buildRank.total}</span>
        </div>
        {#if buildRank.tied.length > 0}
          <p class="mt-2 text-xs font-bold text-white/60">Tied with {buildRank.tied.join(", ")}</p>
        {/if}
        <!-- Ladder faces: above · you · below, rounded, you ringed gold. -->
        <div class="mt-5 flex items-center justify-center gap-3">
          {#if buildRank.above && faceOf(buildRank.above.id)}
            <img
              src={faceOf(buildRank.above.id)}
              alt={buildRank.above.name}
              class="h-12 w-12 rounded-full border border-white/20 object-cover opacity-80"
              loading="lazy"
            />
          {/if}
          {#if bodyChar?.imageURL}
            <img
              src={bodyChar.imageURL}
              alt={bodyChar.displayName}
              class="h-16 w-16 rounded-full border-2 border-mustard object-cover"
              loading="eager"
            />
          {/if}
          {#if buildRank.below && faceOf(buildRank.below.id)}
            <img
              src={faceOf(buildRank.below.id)}
              alt={buildRank.below.name}
              class="h-12 w-12 rounded-full border border-white/20 object-cover opacity-80"
              loading="lazy"
            />
          {/if}
        </div>
        <!-- All 8 round donors, smaller, under the ladder faces. -->
        <div class="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          {#each picks as pick (pick.round)}
            {#if pickFace(pick.characterId)}
              <img
                src={pickFace(pick.characterId)}
                alt={pick.characterName}
                title={`R${pick.round}: ${pick.characterName}`}
                class="h-8 w-8 rounded-full border border-white/20 object-cover"
                loading="lazy"
              />
            {/if}
          {/each}
        </div>
        <div class="mx-auto mt-5 flex max-w-xs flex-col gap-1.5">
          {#if buildRank.above}
            <div
              class="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-4 py-1.5 text-xs font-bold tracking-wider text-white/70 uppercase"
            >
              <span aria-hidden="true">▲</span>
              {buildRank.above.name}
            </div>
          {/if}
          <div
            class="flex items-center justify-center gap-2 rounded-full border-2 border-cocoa bg-mustard px-4 py-1.5 text-xs font-bold tracking-wider text-ink uppercase"
          >
            <span aria-hidden="true">●</span>
            You
          </div>
          {#if buildRank.below}
            <div
              class="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-4 py-1.5 text-xs font-bold tracking-wider text-white/70 uppercase"
            >
              <span aria-hidden="true">▼</span>
              {buildRank.below.name}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  {/if}
</div>
