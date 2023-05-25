<script lang="ts">
    import type { BigListItem } from "./types/biglist";

    export let items: BigListItem[];
</script>

<ul>
    {#each items as item}
        <li>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </li>
    {/each}
</ul>

<style lang="scss">
    @use "$lib/Global.scss";

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;

        flex-direction: row;
        justify-content: space-evenly;
        align-items: start;
        flex-wrap: wrap;
        flex-grow: 1;

        li {
            width: 40%;

            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            border-radius: 10px;

            margin: 10px;

            h3 {
                margin: 0;
                &::before {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background-color: Global.$accent;
                    
                    left: -15px;
                    top: 5px;
                }
            }

            
        }
    }
</style>