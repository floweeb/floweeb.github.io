<!-- AnimatedEmojis.svelte -->
<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
  
    let showHammer = true;
  
    function toggleEmojis() {
      showHammer = !showHammer;
    }
  
    setInterval(toggleEmojis, 1000); // Switch emojis every second
  </script>
  
  <div class="flex justify-center items-center h-12">
    {#if showHammer}
      <span in:scale={{ duration: 500, easing: quintOut }} out:fade>🔨</span>
    {:else}
        <span in:scale={{ duration: 500, easing: quintOut }} out:fade class="wrench">
        🔧
    </span>
    {/if}
  </div>

  <style>
    .wrench {
      display: inline-block;
      transform: rotate(90deg);
    }
  </style>