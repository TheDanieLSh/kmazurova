<template>
    <div
        class="painting-example"
        :style="{
            '--height': `'${height}'`,
            '--width': `'${width}'`
        }"
    >
        <img :src=picSrc />
        <p class="painting-example__price">{{ price }}₽</p>
    </div>
</template>

<script setup lang="ts">

defineProps({
    picSrc: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        required: true,
    },
});

</script>

<style lang="scss">
.painting-example {
    position: relative;
    width: fit-content;
    font-size: 2rem;

    &::before {
        content: var(--height);
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-90deg) translate(-50%, -50%);
        transform-origin: left center;
        text-align: center;
    }

    &::after {
        content: var(--width);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
        text-align: center;
    }

    &__price {
        text-align: center;
    }
}
</style>
