<script lang="ts">
  import { page } from '$app/stores';

  const active_class = 'bg-primary-active';
  const n_active_class = 'hover:bg-primary-hover';

  // Function to determine if a link is active
  $: isActive = (path: string) => $page.route.id === path;
</script>

<nav class="bg-primary shadow-xl h-10">
  <ul class="flex w-full text-white">
    <li class="flex-auto px-4 py-2 text-xl cursor-default cool-title">FLOWEEB Inc.</li>
    <li class="flex-1 ">
      <a href="/" class="transition-colors duration-700 block text-center px-4 py-2 {isActive('/') ? active_class : n_active_class}">Home</a>
    </li>
    <li class="flex-1">
      <a href="/projects" class="transition-colors duration-700 block text-center px-4 py-2 {isActive('/projects') ? active_class : n_active_class}">Projects</a>
    </li>
  </ul>
</nav>

<style>
</style>