<script lang="ts">
  /*
   * One Piece wanted poster replica - SINGLE source of truth.
   * Used by preview/a.astro (static SSR) and the bounty game live poster.
   * Parchment grain, stains, vignette, double ink frame, corner studs,
   * tape-pinned photo (or mystery mark), Rye display type, belly bounty.
   * Default face is Luffy (franchise MC art doubles as upload source).
   */
  const LUFFY_URL =
    "https://res.cloudinary.com/nn2w9isf/image/upload/f_auto,q_auto/v1/anime-draft/franchise/one-piece?_a=BAMAROFG0";

  let {
    name,
    bounty,
    imageURL = LUFFY_URL,
    imageAlt = "",
  }: {
    name: string;
    /** Bounty in belly (e.g. 3000000000). */
    bounty: number;
    /** Null renders the faceless mystery mark (explicit opt-out only). */
    imageURL?: string | null;
    imageAlt?: string;
  } = $props();

  const formatted = $derived(new Intl.NumberFormat("en-US").format(bounty));
</script>

<div class="poster-sheet mx-auto w-full max-w-xs rotate-[0.5deg] p-2 shadow-sticker-lg">
  <div class="relative border-3 border-ink px-3 pt-3 pb-4 text-center outline-2 -outline-offset-8 outline-ink">
    <span aria-hidden="true" class="absolute top-0.5 left-1.5 text-xs text-ink">❖</span>
    <span aria-hidden="true" class="absolute top-0.5 right-1.5 text-xs text-ink">❖</span>
    <span aria-hidden="true" class="absolute bottom-0.5 left-1.5 text-xs text-ink">❖</span>
    <span aria-hidden="true" class="absolute right-1.5 bottom-0.5 text-xs text-ink">❖</span>

    <p class="poster-wanted font-poster text-4xl leading-none tracking-[0.08em] text-ink sm:text-5xl">WANTED</p>
    <p class="mt-0.5 font-poster text-sm tracking-[0.3em] text-ink sm:text-base">DEAD OR ALIVE</p>

    <div class="relative mx-auto mt-2 overflow-hidden border-3 border-ink">
      <span
        aria-hidden="true"
        class="absolute -top-1 left-5 z-10 h-4 w-12 -rotate-12 border border-cocoa/20 bg-yellow/70"
      ></span>
      <span
        aria-hidden="true"
        class="absolute -top-1 right-5 z-10 h-4 w-12 rotate-12 border border-cocoa/20 bg-yellow/70"
      ></span>
      {#if imageURL}
        <img
          alt={imageAlt}
          class="aspect-4/3 w-full object-cover object-top sepia-[0.35]"
          loading="lazy"
          src={imageURL}
        />
      {:else}
        <div class="flex aspect-4/3 w-full items-center justify-center bg-ink/10 font-poster text-7xl text-ink/40">
          ?
        </div>
      {/if}
    </div>

    <p class="poster-name mt-2 font-poster text-lg leading-tight tracking-[0.06em] text-ink sm:text-xl">
      {name}
    </p>

    <p class="poster-bounty mt-1 font-poster text-2xl leading-none text-ink sm:text-3xl">
      ฿{formatted}-
    </p>
  </div>
</div>
