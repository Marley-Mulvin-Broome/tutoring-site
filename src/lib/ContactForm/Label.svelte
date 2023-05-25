<script lang="ts">
    export let label: string = "";
    export let _for: string = "";
    export let width: string = "70%";
</script>

<label style="--width: {width}" for="{_for}">{label}</label>

<style lang="scss">
    label {
        width: var(--width);
        font-size: 1.2rem;

        margin-bottom: 3px;
    }
</style>