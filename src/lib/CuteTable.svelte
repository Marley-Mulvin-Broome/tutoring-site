<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let headers: string[] = [];
    export let data: any[][] = [];
    export let width: string = "100%";

    let previousCell: HTMLElement | null = null;

    function cellClick(event: Event) {
        if (event.target === null) return;

        const element = event.target as HTMLElement;

        element.classList.add("selected");

        if (previousCell !== null && previousCell !== element) {
            previousCell.classList.remove("selected");
        }

        previousCell = element;

        dispatch("cellClick", {
            cellText: element.innerText
        });
    }
</script>

<table style="--tableWidth: {width};">
    <thead>
        <tr>
            {#each headers as header (header)}
                <th>{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row (row)}
            <tr>
                {#each row as cell (cell)}
                    <td on:click|preventDefault={cellClick} on:keydown={() => {}}>{cell}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    @use './Global.scss';
    @use './AnimationDot.scss';

    @mixin circle {
        content: "";
        @include AnimationDot.baseDot;
        left: -10px;
        top: 40%;
        position: absolute;
    }

    table {
        width: var(--tableWidth);
    }

    thead {
        opacity: 0.8;
    }

    th, td {
        padding: 10px;
    }

    th {
        background-color: Global.$accent;
        border-right: 3px transparent solid;
    }

    tbody tr {
        position: relative;

        &:hover {
            opacity: 0.8;
            cursor: pointer;
            user-select: none;

            td:nth-child(1):before {
                @include circle;
            }
        }

            
    }

    :global(td.selected:nth-child(1):before) {
        @include circle;
    }
</style>