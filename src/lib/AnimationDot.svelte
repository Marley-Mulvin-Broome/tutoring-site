
<div class="dot-container">
    <div class="dot"></div>
    <slot></slot>
</div>


<style lang="scss">
    @use "./Global.scss";
    @use "./AnimationDot.scss";

    .dot-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .dot-container:hover {
        .dot {
            animation: dotShine 1s ease-in-out infinite alternate;
        }
    }

    .dot {
        @include AnimationDot.baseDot;
    }

    
</style>