<script>

    import { fade } from "svelte/transition";

</script>
<div class="thanks" in:fade>
    <p id="thank-you">Thanks</p>
    <div class="tick"></div>
</div>

<style lang="scss">
    // make the class tick a clip path of a tick

    .thanks {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5em;
        font-weight: bold;
    }

    .tick {
        width: 100px;
        height: 100px;
        background: rgb(89, 243, 163);  
        clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
        animation: tick 0.5s ease-in-out 0.5s forwards;
    }
</style>