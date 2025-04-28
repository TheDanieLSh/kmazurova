<template>
    <div class="three-works works__section">
        <div class="pics-line">
            <div class="work-image">
                <img :src=images.left.src class="left" />
            </div>
            <div class="work-image">
                <img :src=images.middle.src class="middle" />
            </div>
            <div class="work-image">
                <img :src=images.right.src class="right" />
            </div>
        </div>
        <div class="names-line">
            <h3 class="work-name">{{ images.left.title }}</h3>
            <h3 class="work-name">{{ images.middle.title }}</h3>
            <h3 class="work-name">{{ images.right.title }}</h3>
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
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    .pics-line {
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

        .work-image {
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

    .names-line {
        display: flex;
        justify-content: space-between;
        width: 73%;

        .work-name {
            color: black;
            font-size: 3rem;
            font-family: 'Montserrat';
            font-weight: bold;
        }
    }
}
</style>
