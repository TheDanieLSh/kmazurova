<template>
    <div class="painting-example">
        <img
            class="painting-example__pic"
            :src=picSrc
        />
        <p class="painting-example__price">{{ price }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    picSrc: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
});

</script>

<style lang="scss">
.painting-example {
    width: fit-content;
}
</style>
