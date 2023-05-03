<!-- path: / -->

<script lang="ts">
    import Block from "../lib/Block.svelte";
</script>
<img width=100% height=200 alt="Marley Banner"/>

<Block center bottomPadding="50px">
    <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis amet, vitae excepturi iste quibusdam minima minus et quos dignissimos, ipsam sed atque aperiam! Modi expedita dolores tempora velit corrupti!</p>
</Block>

<Block>
    <h2 slot="header">What I offer</h2>
    <div slot="content">
        <p>Japanese Tuition</p>
        <p>Computer Science Tuition</p>
    </div>
</Block>

<Block>
    <h2 slot="header">My Achievements</h2>
    <ul slot="content">
        <li>this</li>
        <li>that</li>
        <li>and</li>
        <li>all</li>
    </ul>
</Block>

<Block>
    <h2 slot="header">My experience</h2>
    <ul slot="content">
        <li>this</li>
        <li>that</li>
        <li>and</li>
        <li>all</li>
    </ul>
</Block>

<Block>
    <h2 slot="header">Want to learn more?</h2>
    <p slot="content"><a href='/hire'>Contact me</a> to learn more!</p>

</Block>

<style>
    
</style>
