<script lang="ts">
  import { isComplete } from "../stores/draft";
  import RoundScreen from "./RoundScreen.svelte";
  import ResultScreen from "./ResultScreen.svelte";
  import NavBar from "../../../components/NavBar.svelte";

  // Embedded contexts (landing page) supply their own chrome.
  export let chrome: boolean = true;
</script>

<!-- Parchment canvas per the Wanted Poster system - no atmospheric
     backdrop. Cards carry their own white surfaces so text stays legible. -->
<div class="relative bg-paper text-cocoa">
  <!-- No round transition here: it lives on the options grid only,
       so the header and Draft Picks table never replay it. -->
  <div class="relative">
    {#if chrome}
      <NavBar />
    {/if}
    {#if $isComplete}
      <ResultScreen />
    {:else}
      <RoundScreen />
    {/if}
  </div>
</div>
