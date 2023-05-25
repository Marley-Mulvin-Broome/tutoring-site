<!-- path: / -->

<script lang="ts">
    import BigList from "$lib/BigList.svelte";
    import Block from "$lib/Block.svelte";
    import Carousel from "$lib/Carousel.svelte";
    import InfoBox from "$lib/InfoBox.svelte";
    import LinkButton from "$lib/LinkButton.svelte";
    import SplitContainer from "$lib/SplitContainer.svelte";
    import type { BigListItem } from "$lib/types/biglist";
    import type { CarouselItem } from "$lib/types/carousel";
    import { fade } from "svelte/transition";

    const carouselItems: CarouselItem[] = [
        {
            // https://www.sbs.com.au/language/japanese/en/podcast-episode/2019-nsw-japanese-speech-contest-wakaba-division/z9hfjnubz
            // add optional link for the title of carousel items
            id: 1,
            title: "Speaking Competition Winner",
            description: "Won the 2019 Japanese Speaking Competition for NSW High Schools in the Wakaba division.",
        },
        {
            id: 2,
            title: "Japanese Language Proficiency Test N1",
            description: "I have passed the JLPT N1, the highest level of the Japanese Language Proficiency Test.",
        },
        {
            id: 3,
            title: "Japanese Cont & Extension Band 6",
            description: "Receiving a 98 and 49 in Japanese Continuers and Extension respectively, I also tied rank 1 internally at my high school.",
        }
    ]

    const experienceItems: BigListItem[] = [
        {
            id: 1,
            title: "Professional Teaching",
            content: "I have been teaching professionally at the Powerhouse Museum as an Educator since March 2022. This has been to children of wide age ranges, and various backgrounds, including those non-neurotypical."
        },
        {
            id: 2,
            title: "Private Tutoring",
            content: "Since 2020, I've been privately tutoring Japanese and Computer Science to students from all over Australia. I've taught students from various skill levels, helping them achieve goals they never thought were possible."
        },
        {
            id: 3,
            title: "Japanese Pitch Accent",
            content: "Japanese pitch accent is a part that most people don't teach, and that the majority of natives don't actively focus on or understand. I can teach you this, making you sound like a native, and help gapping the bridge between being hard to listen to and making peoples jaws drop."
        },
        {
            id: 4,
            title: "Learning Japanese",
            content: "As you can probably tell, I'm not a native. HOWEVER, I know the effective learning methods specifically for Japanese, because I learnt it. I will tell you how to master the langauge and how to reach your goals."
        }
    ]
</script>

<!-- <Banner src="banner.png"></Banner> -->
<div class="full" in:fade>
    <h1>
        Marley Mulvin Broome
    </h1>
    
    <Block center bottomPadding="50px">
        <p slot="content">Fluent Japanese speaker and teacher with years of experiencing not only teaching, but the in the process of learning itself. I'm a teacher who makes themselves obselete, by telling the student how to independently learn.</p>
    </Block>
    
    <Block>
        <h2 slot="header">What I offer</h2>
        <SplitContainer padding="0px" slot="content">
            <InfoBox animationDot slot="left" link="#my-achievements">
                <h3 slot="header">Japanese Tuition</h3>
                <p slot="content">Beginner to advanced Japanese, I can help you with any part of the langauge. JLPT N1, N2, N3, N4, N5, to HSC, I can make you achieve any goal you have ever dreamed of.</p>
            </InfoBox>
            <InfoBox animationDot slot="right" link="/">
                <h3 slot="header">Web Development</h3>
                <p slot="content">If you are looking for my web development services / portfolio, you will have to click me to navigate to another page.</p>
            </InfoBox>
        </SplitContainer>
    </Block>
    
    <Block>
        <h2 id="my-achievements" slot="header">My Achievements</h2>
        
        <Carousel carouselHeight="200px" mobileCarouseHeight="200px" items={carouselItems} slot="content"/>
    </Block>
    
    <Block hideBottom>
        <h2 slot="header">My experience</h2>
        <BigList items={experienceItems} slot="content"/>
    </Block>
    
    <Block center hideBottom>
        <h2 slot="header">Want to learn more?</h2>
        <p slot="content"><LinkButton href="/hire">Contact Me</LinkButton></p>
    </Block>
</div>


<style lang="scss">
    @use "$lib/Global.scss";

    .full {
        width: 100%;
        height: 100%;
    }

    h1 {
        text-align: center;

        font-size: 3em;

        background: linear-gradient(
        to right,
        Global.$accent 20%,
        #f9bb35 30%,
        #f7be43 70%,
        Global.$accent 80%,
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 500% auto;
        animation: textShine 3.5s ease-in-out infinite alternate;

        user-select: none;

        // &::selection {
        //     background: transparent;
        // }
    }

    @keyframes textShine {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }


    h1::after {
        content: " ";
        display: block;
        height: 2px;
        width: 500px;
        background-color: 2px solid Global.$accent;
    }
</style>
