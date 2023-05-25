<script lang="ts">
    import { applyAction, deserialize } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import type { ActionResult, error } from "@sveltejs/kit";
    import EmailInput from "./EmailInput.svelte";
    import MessageInput from "./MessageInput.svelte";
    import SubmitButton from "./SubmitButton.svelte";
    import LoadingBar from "$lib/LoadingBar.svelte";
    import MessageSent from "./MessageSent.svelte";

    // import type { PageData, ActionData } from './$types';

    /** @type {import('./$types').ActionData} */
    export let form: any;

    let submittingForm = false;

    async function handleSubmit(this: HTMLFormElement, event: Event) {
        submittingForm = true;
        const data = new FormData(this);

        const response = await fetch(this.action, {
            method: 'POST',
            body: data,
            headers: {
                'x-sveltekit-action': 'true'
            }
        });

        const result: ActionResult = deserialize(await response.text());

        if (result.type === 'success') {
            // re-run all `load` functions, following the successful update            
            await invalidateAll();
        }

        applyAction(result);
        submittingForm = false;
    }
</script>

<form on:submit|preventDefault={handleSubmit} method="POST" action="?/message">
    {#if form?.success}
        <MessageSent />
    {:else if form?.error}
        <p>An unexpected error occured: {form?.error}</p>
    {:else if submittingForm}
        <LoadingBar/>
    {:else}
    <EmailInput label="Email"/>
    <MessageInput label="Message" rows={10} cols={30}/>
    <!-- <p>Verify you're a human</p> -->
    <SubmitButton label="Send"/>
    {/if}
    

</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
    }
</style>