<script lang="ts">
    import type { ExternalLink } from "./types/externallinks";
    import { Platform } from "./types/externallinks";

    export let links: ExternalLink[] = [];
    
    const platformIcons = new Map<string, string>();
    platformIcons.set(Platform.GitHub, "github-mark.svg");
    platformIcons.set(Platform.HighschoolTutors, "HighschoolTutors.ico");
    platformIcons.set(Platform.LinkedIn, "Linkedin.png");
    platformIcons.set(Platform.Superprof, "Superprof.png");
    platformIcons.set(Platform.Gmail, "Gmail.png");
</script>

<nav>
    <p>Links</p>
    {#each links as link}
        {#if link.platform === Platform.Gmail}
        <a href="mailto:{link.url}" target="_blank" rel="noopener noreferrer">
            <img src={platformIcons.get(link.platform)} alt={link.platform} width="50px" height="50px"/>
        </a>
        {:else}
        <a href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={platformIcons.get(link.platform)} alt={link.platform} width="50px" height="50px"/>
        </a>
        {/if}
    {/each}
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;

        height: 100%;

        & a {
            height: 100%;
        }
    }
</style>