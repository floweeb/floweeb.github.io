<script lang="ts">
    import projects from "$lib/projects";
	import ProjectCard from "../../component/ProjectCard.svelte";
</script>
<div>
    <h1>PROJECTS</h1>
    {#each projects as project}
        <ProjectCard project={project}/>
    {/each}
</div>