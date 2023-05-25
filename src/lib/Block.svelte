<script lang="ts">
    export let center: boolean = false;
    export let space: string = "0px";
    export let topMargin: string = "0px";
    export let bottomMargin: string = "0px";
    export let bottomPadding: string = "0px";
    export let hideBottom: boolean = false;

    let classString = "";

    $: if (center) {
        classString = "center";
    }
</script>

<article class="{hideBottom ? "hide-bottom" : ""}" style="--space: {space}; --bottomMargin: {bottomMargin}; --topMargin: {topMargin}; --bottomPadding: {bottomPadding};">
    <div class={classString}>
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</article>

<style lang="scss">
    @use './Global.scss';

    article {
        overflow: hidden;
        width: 100%;
        margin-top: var(--topMargin);
        margin-bottom: var(--bottomMargin);

        padding-top: 10px;
        padding-bottom: calc(10px + var(--bottomPadding));

        @media screen and (min-width: Global.$content-width){
            div {
                width: Global.$content-width;
            }
        }

        @media screen and (max-width: Global.$content-width){
            div {
                width: Global.$small-content-width;
            }
        }


        div {
            margin: 0 auto;

            transition: all 0.5s;
        }

        :not(:last-child) {
            margin-bottom: calc(var(--space) + var(--bottomMargin));
        }

        &:not(.hide-bottom)::after {
            content: "";
            position: absolute;
            height: 1px;
            width: 5%;
            left: 45%;
            background-color: Global.$accent;

            transition: all 0.5s;

        }

        transition: all 0.5s;
    }

    article:hover {
        background-color: Global.$highlight;

        &:not(.hide-bottom)::after {
            width: 10%;
            left: 43%;

            transition: all 0.5s;
        }

        transition: all 0.5s;
    }

    .center {
        text-align: center;
    }
</style>