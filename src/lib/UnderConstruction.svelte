<script lang="ts">
    import { fly, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    let animate_tools = true;

    function toggleEmojis() {
        animate_tools = !animate_tools;
    }

    setInterval(toggleEmojis, 1000); // Switch emojis every second
</script>

<div class="flex justify-center items-center h-12 relative">
    {#if animate_tools}
    <span class="emoji"
        in:fly={{ x: -50, duration: 1000, easing: quintOut }} 
        out:fly={{ x: 50, duration: 1000, easing: quintOut }}>🔨</span>
    <span class="emoji"
        in:fly={{ y: -50, duration: 1000, easing: quintOut }} 
        out:fly={{ y: 50, duration: 1000, easing: quintOut }} >🔧</span>
    {/if}
    <!-- {#if showHammer}
        <span 
            in:fly={{ x: -50, duration: 1000, easing: quintOut }} 
            out:fly={{ x: 50, duration: 1000, easing: quintOut }}
            class="emoji"
        >🔨</span>
    {:else}
        <span 
            in:fly={{ y: -50, duration: 1000, easing: quintOut }} 
            out:fly={{ y: 50, duration: 1000, easing: quintOut }} 
            class="emoji wrench"
        >🔧</span>
    {/if} -->
</div>

<style>
    .emoji {
        position: absolute;
        display: inline-block;
        transform: rotate(45deg);
    }

    /* .wrench {
        transform: rotate(90deg);
    } */
</style>
