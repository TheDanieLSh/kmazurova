<template>
    <a
        class="menu-btn"
        :href="link || '#'"
        :target="link ? '_blank' : '_self'"
        @click="handleClick"
        v-bind:title="link ? 'Чат в телеграм' : `Перейти к странице ${text}`"
    >
        <div class="icon" v-html="svg"></div>
        <div class="text">{{ text }}</div>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

const targetIdx = {
    'index': 0,
    'works': 1,
    'price': 2,
    'faq': 3,
}

type SlideName = keyof typeof targetIdx;

export default Vue.extend({
    name: 'IndexMenuButton',

    props: {
        svgPath: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false,
        },
        slide: {
            type: String as Vue.PropType<SlideName>,
            required: false
        },
        goToSlide: {
            type: Function,
            required: false,
        },
    },

    data() {
        return {
            svg: '',
            targetIdx,
        };
    },

    mounted() {
        this.loadSVG();
    },

    methods: {
        async loadSVG() {
            try {
                const response = await this.$axios.get(this.svgPath, { responseType: 'text' });
                this.svg = response.data;
            } catch (error) {
                console.error('Ошибка при загрузке SVG:', error);
            }
        },
        handleClick(e: MouseEvent) {
            if (this.link) return;

            if (this.goToSlide && this.slide) {
                e.preventDefault();
                this.goToSlide(0, this.targetIdx[this.slide]);
            }
        },
    }
});
</script>

<style lang="scss">
.menu-btn {
    --button-size: 6rem;
    --svg-scale: 0.6;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: var(--button-size);
    height: var(--button-size);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.199);
    background-color: black;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: var(--button-size);
        height: 100%;
        transition: all 0.4s ease;

        svg {
            width: calc(var(--button-size) * var(--svg-scale));
            height: calc(var(--button-size) * var(--svg-scale));
            transition: transform 0.3s ease;
        }
    }

    .text {
        position: relative;
        opacity: 0;
        color: white;
        font-size: calc(var(--button-size) * 0.2);
        font-weight: 600;
        white-space: nowrap;
        transition: opacity 0.4s ease, max-width 0.4s ease;
        max-width: 0;
    }

    &:hover {
        width: calc(var(--button-size) * 2.7);
        border-radius: calc(var(--button-size) / 1.5);
        padding-right: 2rem;

        .icon {
            svg {
                transform: scale(1.2);
            }
        }

        .text {
            opacity: 1;
            max-width: 10rem;
        }
    }

    &:active {
        transform: translate(0.2rem, 0.2rem);
    }
}

@media (max-width: 768px) {
    .menu-btn {
        --button-size: 5.5rem;

        background-color: #bc7109;
        width: calc(var(--button-size) * 2.7);
        border-radius: calc(var(--button-size) / 1.5);
        padding-right: 2rem;

        .text {
            color: black;
            opacity: 1;
            max-width: 10rem;
        }
    }
}
</style>
