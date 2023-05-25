<script lang="ts">
    export let label: string = "";
</script>

<button type="submit">{label}</button>

<style lang="scss">
    @use './../Global.scss';
    @use './../Glow.scss';

    button {
        width: 70%;
        font-size: 1.2rem;

        padding: 4px;

        background-color: Global.$accent;
        border: none;
        border-radius: 2px;
        caret-color: white;
        caret-shape: block;

        color: white;

        margin-bottom: 10px;

        cursor: pointer;

        transition: all 0.5s ease-in-out;

        &:focus {
            outline: none;
        }

        &:hover {
            box-shadow: -1px 0px 31px 18px rgba(255, 143, 255, 0.28);
            transition: all 0.5s ease-in-out;
        }
    }
</style>