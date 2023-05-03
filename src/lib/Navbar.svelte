<script lang="ts">
  import { page } from "$app/stores";
  import type { Navpage } from "./types/navpage";

  export let pages: Navpage[];

  $: routeId = $page.route.id;
</script>

<nav>
  {#each pages as page}
    <a class={routeId === page.path ? "selected" : ""} href={page.path}
      >{page.name}</a
    >
  {/each}
</nav>

<style lang="scss">
  @use "../lib/Global.scss";

  nav {
    display: flex;

    // spread out the links centered
    justify-content: space-evenly;

    padding: 15px;
    // box shadow at bottom of nav
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    a {
      color: Global.$accent;
      text-decoration: none;
      font-size: 1.7rem;
      border-bottom: 3px solid transparent;
    }
  }

  a:not(.selected):hover {
    border-bottom: 3px solid Global.$accent;
  }

  a.selected {
    border-bottom: 3px solid Global.$accent;
  }
</style>
