<script lang="ts">
    import { goto } from "$app/navigation";

    export let link: string = "#";
    export let animationDot: boolean = false;

    import AnimationDot from "./AnimationDot.svelte";

    function navigateToLink() {
        if (link.startsWith("#")) {
            document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
            return;
        }

        goto(link);
    }
</script>

<div on:click|preventDefault="{() => navigateToLink()}" on:keydown={() => {}}>
    {#if animationDot}
        <AnimationDot><slot name="header"></slot></AnimationDot>
    {:else}
        <slot name="header"></slot>
    {/if}
    
    <slot name="content"></slot>
</div>

<style lang="scss">
    @use "$lib/Global.scss";
    @use "./Glow.scss";

    div {
        padding: 5px 10px 5px 10px;
        margin: 5px;

        border-radius: 5px;
        transition: all 0.5s ease-out;
        // animation: ambientGlow 1s ease-in-out infinite alternate;

        &:not(:hover) {
            animation: ambientGlow 1s ease-in-out infinite alternate;
        }

        &:hover {
            // box-shadow: -1px 0px 31px 18px rgba(255, 143, 255, 0.28);
            cursor: pointer;

            opacity: Global.$highemphasis;

            animation: ambientTransition 0.5s ease-in-out forwards;

            transition: all 0.5s ease-out;
        }
    }
</style>