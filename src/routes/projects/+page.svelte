<script lang="ts">
    import projects from "$lib/projects";
	import ProjectCard from "../../component/ProjectCard.svelte";
    // import { Project } from "$lib/projects";
</script>
<div>
    <h1>PROJECTS</h1>
    <ProjectCard project={projects[0]} />
    <ProjectCard project={projects[1]} />
</div>