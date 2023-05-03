<script lang="ts">
    export let center: boolean = false;
    export let space: string = "0px";
    export let topMargin: string = "0px";
    export let bottomMargin: string = "0px";
    export let bottomPadding: string = "0px";

    let classString = "";

    $: if (center) {
        classString = "center";
    }
</script>

<article style="--space: {space}; --bottomMargin: {bottomMargin}; --topMargin: {topMargin}; --bottomPadding: {bottomPadding};">
    <div class={classString}>
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</article>

<style lang="scss">
    @use './Global.scss';

    article {
        width: 100%;
        margin-top: var(--topMargin);
        margin-bottom: var(--bottomMargin);

        padding-top: 10px;
        padding-bottom: calc(10px + var(--bottomPadding));

        div {
            width: Global.$content-width;
            margin: 0 auto;

            transition: all 0.5s;
        }

        :not(:last-child) {
            margin-bottom: calc(var(--space) + var(--bottomMargin));
        }

        ::after {
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

        ::after {
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