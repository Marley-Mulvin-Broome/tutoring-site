<script lang="ts">
    import { fade } from "svelte/transition";
    import type { CarouselItem } from "./types/carousel";
    import { flip } from "svelte/animate";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    export let items: CarouselItem[];
    export let visibleItems: number = 3;
    export let mobileVisibleItems: number = 1;
    export let carouselHeight: string = "150px";
    export let mobileCarouseHeight: string = "400px";

    let actualVisibleItems = visibleItems;

    let innerWidth: number;

    $: {
        actualVisibleItems = innerWidth < 1000 ? mobileVisibleItems : visibleItems;
    }


    let current: number = 0;

    function moveLeft() {
        current++;

        if (current >= items.length) {
            current = 0;
        }
    }

    function fadeAnim() {
        return {
            duration: 1000,
            css: (t: number) => {
                return `
                    opacity: ${t};
                `;
            }
        };
    }

    function moveRight() {
        current--;

        if (current < 0) {
            current = items.length - 1;
        }

    }

    function getItemsToRender(): CarouselItem[] {
        let itemsToRender: CarouselItem[] = [];

        for (let i = 0; i < actualVisibleItems; i++) {
            let index = current + i;

            if (index >= items.length) {
                index = index - items.length;
            }

            itemsToRender.push(items[index]);
        }

        return itemsToRender;
    }
</script>

<svelte:window bind:innerWidth />

<section class="carousel-container" style="--carouselHeight: {carouselHeight}; --mobileCarouselHeight: {mobileCarouseHeight};">
    <button class="left {current}" on:click|preventDefault={() => moveLeft()}>
    </button>
    {#key actualVisibleItems}
    {#each getItemsToRender() as item (item.id)}
        <div class="selected-{current}" animate:flip="{{duration: 500}}" in:fade>
            <h3>{item.title}</h3>
            {#if item.image}
                <img src="{item.image}" alt="{item.alt}"/>
            {/if}
            <p>{item.description}</p>
        </div>
    {/each}
    {/key}
    <button class="right" on:click|preventDefault={() => moveRight()}></button>
</section>

<style lang="scss">
    @use "$lib/Global.scss";

    .carousel-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0px 50px;

        margin-bottom: 20px;

        @media screen and (max-width: 800px) {
            height: var(--mobileCarouselHeight);

            justify-content: center;
            align-items: center;
        }

        @media screen and (min-width: 800px) {
            height: var(--carouselHeight);

        }


        div {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;

            overflow-y: auto;

            width: 100%;
            height: 100%;

            padding: 20px;

            border-radius: 10px;
        }

        div, h3 {
            margin-bottom: 10px;
        }

        div, img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }

        button {
            position: absolute;
            top: 50%;

            border: none;
            background-color: Global.$accent;
            cursor: pointer;

            width: 35px;
            height: 35px;

            border-radius: 50%;
            

            opacity: 0.8;

            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.45);
            transition: opacity 0.3s;


            &:hover {
                opacity: 1;
                transition: opacity 0.1s;
            }
        }

        .left {
            left: 0px;

            &::after {
                content: "▲";
                display: inline-block;
                transform: rotate(-90deg);
                margin-top: 1px;
                margin-right: 7px;
                color: white;
                font-size: 1.3rem;
                font-weight: bold;
            }
        }

        .right {
            right: 0px;

            &::after {
                content: "▲";
                display: inline-block;
                transform: rotate(90deg);
                margin-top: 1px;
                margin-left: 7px;
                color: white;
                font-size: 1.3rem;
                font-weight: bold;
            }
        }        
    }
</style>