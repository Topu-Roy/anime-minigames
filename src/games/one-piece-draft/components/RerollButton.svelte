<script lang="ts">
  import { draft, rerollsLeft } from "../stores/draft";

  $: rerolls = $rerollsLeft;
  $: canReroll = rerolls > 0;

  function handleReroll() {
    if (canReroll) {
      draft.reroll();
    }
  }
</script>

<!-- White sticker button: ink outline, hard shadow, squish on press. -->
<button
  class="flex items-center gap-1.5 rounded-2xl border-3 border-cocoa bg-white px-3 py-2.5 text-xs font-bold text-cocoa shadow-sticker-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:py-2 sm:text-sm"
  on:click={handleReroll}
  disabled={!canReroll}
  title={canReroll ? "Replace these 4 options" : "No rerolls left"}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
  Reroll · {rerolls}
</button>
