<template>
    <div class="three-works works__section">
        <div class="works-line">
            <div class="titled-work">
                <img :src=images.left.src class="left" />
                <h3>{{ images.left.title }}</h3>
            </div>
            <div class="titled-work">
                <img :src=images.middle.src class="middle" />
                <h3>{{ images.middle.title }}</h3>
            </div>
            <div class="titled-work">
                <img :src=images.right.src class="right" />
                <h3>{{ images.right.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    images: {
        left: {
            src: string,
            title: string,
        };
        middle: {
            src: string,
            title: string,
        };
        right: {
            src: string,
            title: string,
        };
    };
}>();

</script>

<style lang="scss">
.three-works {
    background-color: white;
    display: flex;
    justify-content: center;

    .works-line {
        position: relative;
        width: 97%;
        height: 80%;
        margin-top: 7rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
            "left center right";

        .titled-work {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            h3 {
                color: black;
            }
        }

        .left {
            grid-area: left;
        }

        .middle {
            grid-area: center;
            scale: 85%;
        }

        .right {
            grid-area: right;
        }
    }
}
</style>
