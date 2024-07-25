<script lang="ts">
  import { fade, fly } from 'svelte/transition';

    let ready: boolean = false;
    let duration: number = 1000;
    let default_delay: number = 300;
  // Simulate content loading
  setTimeout(() => {
    ready = true;
  }, 100);
</script>

{#if ready}
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="text-center" in:fade={{ duration: duration }}>
      <h1 class="text-primary-active">
        <span class="text-xl font-bold">Welcome to</span>
        <br>
        <span class="text-3xl font-extrabold">FLOWEEB Inc.</span>
      </h1>
      <p class="mt-2" in:fly={{ y: 20, duration: duration }}>Innovating through code, one project at a time.</p>
    </div>
    
    <div class="mt-8" in:fly={{ y: 20, duration: duration, delay: default_delay }}>
      <h2 class="text-2xl font-bold text-primary-active">About Me</h2>
      <p class="mt-2">Hello! I'm [Your Name], a passionate software engineer with expertise in [Your Key Skills]. With [X] years of experience, I've worked on a variety of projects that have honed my skills in [specific technologies or domains].</p>
    </div>
    
    <div class="mt-8" in:fly={{ y: 20, duration: duration, delay: default_delay * 2 }}>
      <h2 class="text-2xl font-bold text-primary-active">Skills</h2>
      <ul class="list-disc list-inside mt-2">
        <li>Languages: [e.g., TypeScript, JavaScript, Python]</li>
        <li>Frameworks: [e.g., Svelte, React, Node.js]</li>
        <li>Tools: [e.g., Git, Docker, AWS]</li>
        <li>Soft Skills: Problem-solving, Team Collaboration, Agile Methodologies</li>
      </ul>
    </div>
    
    <div class="mt-8" in:fly={{ y: 20, duration: duration, delay: default_delay * 3 }}>
      <h2 class="text-2xl font-bold text-primary-active">Featured Projects</h2>
      <p class="mt-2">While my portfolio is under construction, here are a few highlights of my work:</p>
      <ul class="list-disc list-inside mt-2">
        <li>[Project 1 Name]: Brief description</li>
        <li>[Project 2 Name]: Brief description</li>
        <li>[Project 3 Name]: Brief description</li>
      </ul>
    </div>
    
    <div class="mt-8 text-center" in:fade={{ duration: duration, delay: default_delay * 4 }}>
      <p>Full portfolio coming soon. For inquiries, please contact me at: <a href="mailto:your.email@example.com" class="text-primary-active hover:underline">your.email@example.com</a></p>
    </div>
  </div>
{/if}

<style lang="postcss">
  :global(body) {
    @apply bg-gray-100 text-gray-800;
  }

</style>