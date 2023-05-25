<script lang="ts">
    import Label from "./Label.svelte";

    export let label: string = "";
    export let cols: number = 30;
    export let rows: number = 10;
</script>

<Label label={label} _for="formMessage"/>
<textarea name="formMessage" id="formMessage" cols="{cols}" rows="{rows}" required></textarea>

<style lang="scss">
    @use './../Global.scss';

    textarea {
        width: 70%;
        font-size: 1.1rem;

        background-color: Global.$bg;
        border: none;
        border-radius: 3px;
        padding: 4px;
        // border-bottom: 3px solid Global.$disabledAccent;
        caret-color: white;
        caret-shape: block;

        color: white;

        margin-bottom: 10px;
    }
    
    textarea:focus {
        outline: none;
        // border-bottom: 3px solid Global.$accent;
    }
</style>