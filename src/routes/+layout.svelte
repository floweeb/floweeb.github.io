<script>
    import "../app.css";
	  import Footer from "../components/Footer.svelte";
    import NavBar from '../components/NavBar.svelte';
  </script>
  
  <NavBar/>
  <div class="bg-gray-100 main-container">
    <slot />
  </div>
 <Footer/>

 <style>
  /* Global styles */
  :global(body) {
    background-color: #f3f4f6; /* bg-gray-100 */
    margin: 0;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-container {
    display: flex;
    flex: 1; /* Fill remaining space */
    justify-content: center;
    align-items: flex-start; /* Adjust as needed */
    padding: 1rem; /* Adjust padding for content spacing */
  }
</style>