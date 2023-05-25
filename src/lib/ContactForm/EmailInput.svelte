<script lang="ts">
    import Label from "./Label.svelte";

    export let label: string = "";
</script>
<Label width="70%" label={label} _for="emailAddress"/>
<input type="email" name="emailAddress" id="emailAddress" required>



<style lang="scss">
    @use './../Global.scss';

    input {
        width: 70%;
        font-size: 1.1rem;

        background-color: transparent;
        border: none;
        border-bottom: 3px solid Global.$disabledAccent;
        caret-color: white;
        caret-shape: block;

        color: white;

        margin-bottom: 10px;

        padding: 3px;
    }
    
    input:focus {
        outline: none;
        border-bottom: 3px solid Global.$accent;
    }
</style>
