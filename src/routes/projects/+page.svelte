<script lang="ts">
    import projects from "$lib/projects";
	import ProjectCard from "../../component/ProjectCard.svelte";

    // let duration: number = 2000, default_delay: number = 300;
</script>
<div>
    <h1>PROJECTS</h1>
    {#each projects as project}
        <!-- <div in:fade={{ duration, delay: default_delay }} ></div> -->
        <ProjectCard project={project}/>
    {/each}
</div>