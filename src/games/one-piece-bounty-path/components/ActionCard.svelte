<script lang="ts">
  import { iconFor } from "./card-art";
  import type { BountyChoice } from "../lib/types";

  let {
    choice,
    index = 1,
    onPick,
  }: {
    choice: BountyChoice;
    index?: number;
    onPick: (choice: BountyChoice) => void;
  } = $props();
</script>

<button
  class="relative w-full rounded-2xl border-3 border-cocoa bg-white px-4 py-3 text-left shadow-sticker-sm active:translate-x-1 active:translate-y-1 active:shadow-none"
  onclick={() => onPick(choice)}
  type="button"
>
  <span class="flex items-center gap-3 font-bold text-cocoa">
    <span
      aria-hidden="true"
      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cocoa bg-paper text-base"
    >
      {iconFor(choice.label)}
    </span>
    <span class="min-w-0 flex-1">{choice.label}</span>
  </span>
</button>
