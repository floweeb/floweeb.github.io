<script lang="ts">
  import { page } from '$app/stores';

  // Function to determine if a link is active
  $: isActive = (path: string) => $page.route.id === path;
</script>

<nav class="bg-blue-500 shadow-md">
  <ul class="flex w-full text-white">
    <li class="flex-1">
      <a href="/" class="block text-center px-4 py-2 {isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-300'}">Home</a>
    </li>
    <li class="flex-1">
      <a href="/projects" class="block text-center px-4 py-2 {isActive('/projects') ? 'bg-blue-700' : 'hover:bg-blue-300'}">Projects</a>
    </li>
  </ul>
</nav>