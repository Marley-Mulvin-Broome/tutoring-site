<script lang="ts">
    import ExternalLinks from "./ExternalLinks.svelte";
    import { Platform } from "./types/externallinks";
    import type { ExternalLink } from "./types/externallinks";

    export let links: ExternalLink[] = [
        {
            platform: Platform.GitHub,
            url: "https://github.com/Marley-Mulvin-Broome"
        },
        {
            platform: Platform.HighschoolTutors,
            url: "https://highschooltutors.com.au/listings/40168"
        },
        {
            platform: Platform.LinkedIn,
            url: "https://www.linkedin.com/in/marleymulvinbroome/"
        },
        {
            platform: Platform.Superprof,
            url: "https://www.superprof.com.au/experienced-language-tutor-and-university-student-teaches-depth-japanese-language-learning-techniques-and-pitch-accent.html"
        },
        {
            platform: Platform.Gmail,
            url: "marley.developer@gmail.com"
        }
    ]
</script>

<footer>
    <ExternalLinks links={links}/>
    <img src="pfp.png" alt="Myself" width="50px" height="50px">
    <p>© 2023 Marley</p>
</footer>

<style lang="scss">
    footer {
        text-align: center;
        line-height: 50px;
        height: 50px;

        margin-top: 20px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
        gap: 10px;
    }
    
    p {
        font-size: 0.8rem;
    }

    img {
        border-radius: 50%;
    }
</style>