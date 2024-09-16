<script lang="ts">
    import {fade} from "svelte/transition"
    import projects from "$lib/projects";
	import ProjectCard from "../../component/ProjectCard.svelte";

    // let duration: number = 2000, default_delay: number = 300;
  // Simulate content loading
  let ready: boolean = false;
    setTimeout(() => {
        ready = true;
    }, 100);
</script>

<div>
    <h1 class="text-center font-semibold pb-2">PROJECTS</h1>
    {#each projects as project, index}
        {#if ready}
            <div in:fade={{ duration: 1000, delay: 200 * (2 + index) }}><ProjectCard project={project}/></div>
        {/if}
    {/each}
</div>