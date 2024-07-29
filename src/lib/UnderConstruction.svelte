<script lang="ts">
    import { fly, fade  } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    let animate_tools = true;
    let duration: number = 2000;

    function toggleEmojis() {
        animate_tools = !animate_tools;
    }

    setInterval(toggleEmojis, 1500); // Switch emojis every second
</script>

<div class="flex justify-center items-center h-12 relative">
    {#if animate_tools}
    <span class="emoji-container"
        in:fly={{ x: 40, duration, easing: quintOut }} out:fade
        > <span class="emoji text-4xl">🔨</span> </span>
    <span class="emoji-container"
        in:fly={{ x: -40, duration, easing: quintOut }} out:fade
        ><span class="emoji wrench text-4xl">🔧</span></span>
    {/if}
</div>

<style>
    .emoji-container{
        position: absolute;
        display: inline-block;

}
    .emoji {
        position: absolute;
        display: inline-block;
    }
    .wrench{
        transform: rotate(-90deg);
    }
</style>
