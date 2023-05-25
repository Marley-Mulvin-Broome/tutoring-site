<script lang="ts">
    export let src: string;
</script>

<img {src} alt="Banner"/>

<style>
    img {
        width: 100%;
        height: 10%;
        object-fit: scale-down;
    }
</style>