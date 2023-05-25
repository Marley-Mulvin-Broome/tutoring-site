<script lang="ts">
    export let href: string = "";
</script>

<a class="link-button" href="{href}">
    <slot></slot>
</a>

<style lang="scss">
    @use "$lib/Global.scss";

    @keyframes rotateUp {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(-90deg);
        }
    }

    @keyframes rotateDown {
        from {
            transform: rotate(-90deg);
        }

        to {
            transform: rotate(0deg);
        }
    }

    .link-button {
        position: relative;
        text-decoration: none;
        color: white;
        background-color: Global.$accent;
        font-size: 1.3rem;
        padding: 5px;
        border-radius: 7px;

        font-weight: 600;

        text-shadow: rgba(255,255,255,0.8) 0px 0px 9px;


        &:hover::after {
            animation: rotateUp 0.3s ease-in-out forwards;
        }

        &::after {
            content: "→";
            display: inline-block;
            animation: rotateDown 0.3s ease-in-out forwards;
        }
    }
</style>