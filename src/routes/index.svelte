<script lang="ts">
    const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];
</script>

<h1>Welcome to my Portfolio</h1>
<p>This is the home page of my portfolio website.</p>

<h2>Featured Projects</h2>
<ul>
    {#each projects as project, i}
        <!-- <li key={i}> -->
         <li>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </li>
    {/each}
</ul>