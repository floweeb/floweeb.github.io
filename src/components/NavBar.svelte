<script lang="ts">
  import { page } from '$app/stores';
  
  // Function to determine if a link is active
  $: isActive = (path: string) => $page.route.id === path;
</script>

<nav class="bg-blue-500">
  <ul class="flex w-full text-white">
    <li class="flex-1">
      <a href="/" class="block text-center px-4 py-2 hover:bg-blue-300 {isActive('/') ? 'bg-blue-700' : ''}">Home</a>
    </li>
    <li class="flex-1">
      <a href="/projects" class="block text-center px-4 py-2 hover:bg-blue-300 {isActive('/projects') ? 'bg-blue-700' : ''}">Projects</a>
    </li>
  </ul>
</nav>