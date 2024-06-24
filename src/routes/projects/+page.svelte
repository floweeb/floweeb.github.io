<script lang="ts">
    // Add any necessary TypeScript types or imports
  
    // Sample projects data
    const projects = [
      { title: 'Project 1', description: 'Description of Project 1' },
      { title: 'Project 2', description: 'Description of Project 2' },
      { title: 'Project 3', description: 'Description of Project 3' },
    ];
  </script>
  
  <h1>Projects</h1>
  <ul>
    {#each projects as project, i}
      <li>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </li>
    {/each}
  </ul>