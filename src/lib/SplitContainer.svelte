<script lang="ts">
    export let padding: string = "50px";
    export let alignment: string = "center";
</script>

<div style="--padding: {padding}; --alignment: {alignment};">
    <slot name="left"></slot>
    <slot name="right"></slot>
</div>
 
<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: var(--alignment);

        padding: 0px var(--padding);

        margin-bottom: 20px;

        @media screen and (max-width: 800px) {
            flex-direction: column;
            align-items: center;
        }
            
    }
</style>