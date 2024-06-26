<script>
    import "../app.css";
	  import Footer from "../components/Footer.svelte";
    import NavBar from '../components/NavBar.svelte';
  </script>
  
  <NavBar/>
  <div class="bg-gray-100">
    <slot />
  </div>
 <Footer/>