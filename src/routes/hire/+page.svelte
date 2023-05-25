<!-- path: /hire -->

<script lang="ts">
    import AnimationDot from "$lib/AnimationDot.svelte";
    import Block from "$lib/Block.svelte";
    import ContactForm from "$lib/ContactForm/ContactForm.svelte";
    import CuteTable from "$lib/CuteTable.svelte";
    import SplitContainer from "$lib/SplitContainer.svelte";
    import { fade, fly } from "svelte/transition";
    import type { ActionData } from "./$types";

    export let form: ActionData;

    let itemDescription = "Click or tap on an item on the pricing table to get a description of the service.";

    let pricingHeaders: string[] = [
        "Service",
        "Price"
    ];

    let pricingData: any[][] = [
        ["Normal class", "$30/hr"],
        ["Group class", "$20/hr"],
        ["Speaking practice", "$20/hr"],
        ["Proofreading", "$0.05/字"],
        ["Content creation", "Case by case"],
        ["Translation", "Case by case"],
        ["Consultation", "$30/hr"]
    ];

    let hoverData = new Map<string, string>();

    hoverData.set("Normal class", "A high engaging one-on-one class. These will be coupled with various resources to provide you with a unique learning experience, tailored to your needs. There is generally homework provided. These sessions tend to involve a lot of listening and reading practice.");
    hoverData.set("Group class", "A high engaging one-on-multiple class. These will be coupled with various resources, and will be tailored to the needs of the group. There is generally homework provided. These sessions tend to involve a lot of listening and reading practice, alongside group discussions.");
    hoverData.set("Speaking practice", "A one-on-one class focused on speaking. These will help you improve your speaking ability, and will be tailored to your needs. Notes after each session will be provided to further aid your study, highlighting areas of potential improvement.");
    hoverData.set("Proofreading", "I will proofread your writing and correct any mistakes. This is useful for assignments which require a high level of accuracy.");
    hoverData.set("Content creation", "I will create audio or textual content for you to use in your studies and/or teaching. This will be tailored to exactly what you need. However, audio content will be more expensive than textual content - especially when it comes to longer pieces or pieces with multiple speakers.");
    hoverData.set("Translation", "I will translate a document for your, however, this will be done on a case by case basis, as I can only translate documents which I or my colleague have the specialised knowledge to translate. These generally include Computer Science and Medicine related documents.");
    hoverData.set("Consultation", "I will offer you top level advice on how to learn a language independtly, or how to optimise it with a tutor (or how to teach!). These will be generally based on a philosophy of comprehensible input, however, will be tailored to your exact learning or teaching needs.");

    function setDescription(event: CustomEvent) {
        if (!hoverData.has(event.detail.cellText)) return;

        itemDescription = hoverData.get(event.detail.cellText) as string;
        console.log("itemDescription: " + itemDescription)
    }
</script>

<div in:fly="{{x: -1200}}">
    <Block>
        <h2 slot="header">Pricing</h2>
        <SplitContainer slot="content" padding="10px" alignment="start">
            <div slot="left">
                <p>{itemDescription}</p>
            </div>
            <div slot="right">
                <CuteTable headers={pricingHeaders} data={pricingData} width="400px" on:cellClick={setDescription}/>
            </div>
        </SplitContainer>
    </Block>
    
    
    <Block hideBottom>
        <h2 slot="header"><AnimationDot>Contact Me</AnimationDot></h2>
        <ContactForm form={form} slot="content"/>
    </Block>
    
</div>
