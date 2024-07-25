<script lang="ts">
    import { fade, fly } from 'svelte/transition';
	import UnderConstruction from '$lib/UnderConstruction.svelte';

    let ready: boolean = false;
    let duration: number = 1000, default_delay: number = 300;
    let x: number = 40, y: number = 20
  // Simulate content loading
  setTimeout(() => {
    ready = true;
  }, 100);
</script>

{#if ready}
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="text-center" in:fade={{ duration }}>
        <h1 class="text-primary-active">
            <span class="text-xl sm:text-2xl font-bold">Welcome to</span>
            <br>
            <span class="text-3xl sm:text-4xl font-extrabold">FLOWEEB Inc.</span>
          </h1>
      <p class="mt-2" in:fly={{ x, duration }}>Innovating through code, one project at a time.</p>
    </div>
    
    <div class="mt-8" in:fly={{ y, duration, delay: default_delay }}>
      <h2 class="text-2xl font-bold text-primary-active">About Me</h2>
      <p class="mt-2">Hello! I'm Floyd, a passionate computer scientist with expertise in software development, networking and cyber security. With 6 years of experience, I've worked on a variety of projects that have honed my skills in debugging errors, working with legacy code and making minimal and simply designed software.</p>
    </div>
    
    <div class="mt-8" in:fly={{ y, duration, delay: default_delay * 2 }}>
      <h2 class="text-2xl font-bold text-primary-active">Skills</h2>
      <ul class="list-disc list-inside mt-2">
        {#each ['Languages: Typescript, Golang, Php, C#', 'Frameworks: Svelte, Node.js', 'Tools: Git, Docker', 'Soft Skills: Problem-solving, Team Collaboration, good communication'] as skill}
          <li class="transition-transform duration-200 hover:translate-x-2">{skill}</li>
        {/each}
      </ul>
    </div>
   
<div class="mt-8" in:fly={{ y, duration, delay: default_delay * 3 }}>
    <h2 class="text-2xl font-bold text-primary-active">Featured Project</h2>
    <p class="mt-2">Check out my game demo site:</p>
    <ul class="list-disc list-inside mt-2">
      <li>
        <a href="https://floweeb.github.io/games_demo/" target="_blank" rel="noopener noreferrer" class="text-primary-active hover:underline">
          Games Demo Site
        </a>: A collection of interactive games showcasing my web development skills.
      </li>
    </ul>
  </div>
  
<UnderConstruction/>
    
    <div class="mt-8 text-center" in:fade={{ duration, delay: default_delay * 4 }}>
      <p>Still working on the portfolio. For inquiries, please contact me at: <a href="mailto:floydqaranja@gmail.com" class="text-primary-active hover:underline">floydqaranja@gmail.com</a>.</p>
    </div>
  </div>
{/if}

<style lang="postcss">
  :global(body) {
    @apply bg-gray-100 text-gray-800;
  }

</style>