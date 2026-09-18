<script lang="ts">
  import { STAT_LABELS, formatBounty, type PosterResult } from "../lib/scoring";
  import type { BountyRunState } from "../lib/types";

  let {
    state,
    poster,
    onRestart,
  }: {
    state: BountyRunState;
    poster: PosterResult;
    onRestart: () => void;
  } = $props();

  // Compact belly for the per-step list (full format reserved for the poster number).
  function formatCompact(belly: number): string {
    if (belly >= 1_000_000_000) return `฿${(belly / 1_000_000_000).toFixed(2)}B`;
    return `฿${Math.round(belly / 1_000_000)}M`;
  }

  const statEntries = $derived(
    (Object.entries(STAT_LABELS) as [keyof typeof state.stats, string][]).map(([key, label]) => ({
      key,
      label,
      value: state.stats[key],
    })),
  );

  const averageBase = $derived(state.path.length > 0 ? poster.baseSumBelly / state.path.length : 0);
</script>

<div class="w-full">
  <!-- Wanted poster card -->
  <div class="rotate-[0.5deg] rounded-3xl border-4 border-cocoa bg-paper p-6 text-center shadow-sticker-lg sm:p-8">
    <p
      class="inline-block -rotate-2 rounded-lg border-3 border-cocoa bg-coral px-6 py-1 font-hand text-3xl tracking-[0.2em] text-white uppercase"
    >
      Wanted
    </p>
    <p class="mt-2 text-xs font-bold tracking-[0.3em] text-cocoa/60 uppercase">Dead or alive</p>

    <h2 class="mt-4 font-hand text-4xl text-cocoa sm:text-5xl">{formatBounty(poster.poster)}</h2>

    {#if poster.combos.length > 0}
      <div class="mt-4 flex flex-wrap justify-center gap-2">
        {#each poster.combos as combo (combo.label)}
          <span class="rounded-full border-2 border-cocoa bg-yellow px-3 py-1 text-xs font-bold text-cocoa">
            👑 {combo.label} ×{combo.mult}
          </span>
        {/each}
      </div>
    {/if}

    {#if poster.nerfs.length > 0}
      <div class="mt-2 flex flex-wrap justify-center gap-2">
        {#each poster.nerfs as nerf (nerf.label)}
          <span class="rounded-full border-2 border-cocoa bg-coral px-3 py-1 text-xs font-bold text-white">
            🏴‍☠️ {nerf.label} ×{nerf.mult}
          </span>
        {/each}
      </div>
    {/if}

    <!-- Stat breakdown -->
    <div class="mt-6 flex flex-col gap-2 text-left">
      {#each statEntries as stat (stat.key)}
        <div class="flex items-center gap-3">
          <span class="w-24 shrink-0 text-sm font-bold text-cocoa">{stat.label}</span>
          <div class="h-4 flex-1 overflow-hidden rounded-full border-2 border-cocoa bg-white">
            <div class="h-full rounded-full bg-coral" style={`width: ${Math.round(stat.value)}%`}></div>
          </div>
          <span class="w-10 shrink-0 text-right text-sm font-bold text-cocoa">
            {Math.round(stat.value)}
          </span>
        </div>
      {/each}
    </div>

    <!-- Path taken -->
    <div class="mt-6 text-left">
      <h3 class="font-hand text-2xl text-cocoa">Path taken</h3>
      <ol class="mt-2 flex flex-col gap-2">
        {#each state.path as step, index (step.choice.id + index)}
          <li
            class="flex items-center gap-3 rounded-2xl border-3 border-cocoa bg-white px-3 py-2 text-cocoa shadow-sticker-sm"
          >
            <span class="w-7 shrink-0 text-center font-hand text-2xl">{index + 1}</span>
            <span class="min-w-0 flex-1 truncate font-bold">{step.choice.label}</span>
            <span class="shrink-0 text-sm font-bold text-cocoa/70">
              {formatCompact(step.rolledBase * 1_000_000)}
            </span>
          </li>
        {/each}
      </ol>
      <p class="mt-3 text-sm font-bold text-cocoa/70">
        Base sum {formatBounty(poster.baseSumBelly)} · average {formatBounty(averageBase)}
      </p>
      <p class="mt-1 text-sm font-bold text-cocoa/70">
        Combo ×{poster.comboMult.toFixed(2)} · Knowledge ×{poster.knowledgeMult.toFixed(2)}
      </p>
    </div>

    {#if state.endPremise}
      <p
        class="mt-4 rounded-2xl border-3 border-cocoa bg-white px-4 py-3 text-left font-bold text-cocoa shadow-sticker-sm"
      >
        To be continued: {state.endPremise}
      </p>
    {/if}

    <p class="mt-4 text-xs font-bold tracking-[0.3em] text-cocoa/50 uppercase">⚓ Marine issue ⚓</p>

    <button
      class="mt-4 rounded-2xl border-4 border-cocoa bg-coral px-8 py-3 text-lg font-bold text-white shadow-sticker-md active:translate-x-1 active:translate-y-1 active:shadow-none"
      onclick={onRestart}
      type="button"
    >
      Sail again →
    </button>
  </div>
</div>
