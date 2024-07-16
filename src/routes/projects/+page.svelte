<script lang="ts">
    import projects from "$lib/projects";
	import ProjectCard from "../../component/ProjectCard.svelte";
</script>
<div>
    <h1>PROJECTS</h1>
    <ProjectCard project={projects[0]} />
    <ProjectCard project={projects[1]} />
    <ProjectCard project={projects[2]} />
</div>