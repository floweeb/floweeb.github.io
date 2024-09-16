
<script lang="ts">
    // Import the Project interface
    import type { Project } from "$lib/projects";
  
    // Props definition for the ProjectCard component
    export let project: Project;
    
  </script>
  
  <div class="card transition shadow-xl hover:shadow-lg hover:scale-95">
    <div class="header bg-primary">
      <h2>{project.name}</h2>
    </div>
    <div class="content bg-primary-light">
      <p class="description">{project.desc}</p>
      {#if project.url === "/"}
        <a href={project.url} aria-disabled="true" rel="noopener noreferrer" 
        class="button bg-primary hover:bg-primary-hover">Back Home</a>
      {:else}
        <a href={project.url} target="_blank" rel="noopener noreferrer" 
        class="button bg-primary hover:bg-primary-hover">Visit Project</a>
      {/if}
    </div>
  </div>

  <style lang="postcss">
    .card {
      border-radius: 8px;
      overflow: hidden;
      background-color: white;
      margin-bottom: 20px;
    }
  
    .header {
      color: white;
      padding: 12px;
      font-weight: bold;
      text-align: center;
    }
  
    .content {
      padding: 12px;
    }
  
    .description {
      margin-bottom: 10px;
    }
  
    .button {
      display: inline-block;
      padding: 8px 16px;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
  </style>
  