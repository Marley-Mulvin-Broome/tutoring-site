<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { fade } from "svelte/transition";
    import LoadingBar from "$lib/LoadingBar.svelte";

  import '$lib/localisation/localisation.ts';

  const navPages = [
    {
      name: "Home",
      path: "/",
      selected: false,
    },
    {
      name: "Hire Me",
      path: "/hire",
      selected: false,
    },
    {
      name: "Course Materials",
      path: "/content",
      selected: false,
    },
  ];
</script>

<Navbar pages={navPages} />
<slot />
<Footer />




