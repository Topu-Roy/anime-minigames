<script lang="ts">
  // Shared chrome, but restart acts on the draft game's store (static pages
  // render with showRestart={false}, so the import is inert there).
  import { fade, fly } from "svelte/transition";
  import { LOGO_LOCKUP_URL } from "../lib/brand";
  import { draft } from "../games/one-piece-draft/stores/draft";

  // Hub pages reuse the bar as chrome without the restart action.
  export let showRestart: boolean = true;

  function handleNewDraft() {
    draft.reset();
  }

  // Mobile sheet menu — desktop links stay inline, no JS needed there.
  let menuOpen: boolean = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }

  function closeMenu() {
    menuOpen = false;
    document.body.style.overflow = "";
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") closeMenu();
  }
</script>

<!-- Parchment bar, ink rule, Peralta brand + section links + coral restart. -->
<nav class="w-full border-b-4 border-cocoa bg-paper">
  <div class="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
    <a href="/" class="shrink-0">
      <img alt="Anime Mini Games" class="h-10 w-auto sm:h-12" src={LOGO_LOCKUP_URL} />
    </a>

    <div class="hidden items-center gap-5 text-sm font-bold text-cocoa/70 sm:flex">
      <a href="/one-piece">One Piece</a>
      <a href="/one-piece/draft">Draft</a>
      <a href="/one-piece/draft/characters">Characters</a>
      <a href="/one-piece/draft/how-to-play">Guides</a>
    </div>

    {#if showRestart}
      <button
        class="shrink-0 rounded-2xl border-3 border-cocoa bg-coral px-3 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-sticker-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:px-4 sm:py-1.5 sm:text-xs"
        on:click={handleNewDraft}
      >
        New Draft
      </button>
    {/if}

    <!-- Burger: mobile only, swaps glyph with menu state. -->
    <button
      aria-controls="mobile-nav"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      class="shrink-0 rounded-2xl border-3 border-cocoa bg-white px-3 py-2 text-base font-bold text-cocoa shadow-sticker-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:hidden"
      on:click={toggleMenu}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  <!-- Mobile sheet menu: dimmed backdrop + right slide-in drawer. -->
  {#if menuOpen}
    <div
      aria-hidden="true"
      class="fixed inset-0 z-40 bg-cocoa/60 sm:hidden"
      on:click={closeMenu}
      transition:fade={{ duration: 200 }}
    ></div>
    <div
      class="fixed top-0 right-0 z-50 flex h-dvh w-72 max-w-[80vw] flex-col border-l-4 border-cocoa bg-paper sm:hidden"
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      transition:fly={{ x: 300, duration: 250 }}
    >
      <div class="flex items-center justify-between border-b-4 border-cocoa px-4 py-3">
        <img alt="Anime Mini Games" class="h-8 w-auto" src={LOGO_LOCKUP_URL} />
        <button
          aria-label="Close menu"
          class="shrink-0 rounded-2xl border-3 border-cocoa bg-white px-3 py-1.5 text-base font-bold text-cocoa shadow-sticker-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          on:click={closeMenu}
        >
          ✕
        </button>
      </div>
      <nav class="flex flex-col px-4 py-2 text-base font-bold text-cocoa">
        <a class="border-b border-cocoa/10 py-3" href="/one-piece" on:click={closeMenu}>One Piece</a>
        <a class="border-b border-cocoa/10 py-3" href="/one-piece/draft" on:click={closeMenu}>Draft</a>
        <a class="border-b border-cocoa/10 py-3" href="/one-piece/draft/characters" on:click={closeMenu}
          >Characters</a
        >
        <a class="py-3" href="/one-piece/draft/how-to-play" on:click={closeMenu}>Guides</a>
      </nav>
      <p class="mt-auto px-4 py-4 text-xs font-bold tracking-wider text-cocoa/50 uppercase">
        Free anime minigames
      </p>
    </div>
  {/if}
</nav>

<svelte:window on:keydown={handleKeydown} />
