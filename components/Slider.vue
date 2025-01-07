<template>
    <div class="slider-container">
        <div class="slide" v-for="(PageComponent, index) in pages" :key="index" :style="{
            transform: index === currentIndex ? 'translateY(0)' : index < currentIndex ? 'translateY(-100%)' : 'translateY(100%)',
        }">
            <component :is="PageComponent" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';

import IndexPage from '~/pages/index.vue';
import AboutPage from '~/pages/about.vue';

export default Vue.extend({
    mounted() {
        window.addEventListener('wheel', this.onWheel, { passive: true });
    },
    destroyed() {
        window.removeEventListener('wheel', this.onWheel);
    },
    data() {
        return {
            currentIndex: 0, // Текущий индекс слайда
            pages: [IndexPage, AboutPage], // Список компонентов-страниц
        };
    },
    methods: {
        onWheel(event: WheelEvent) {
            if (event.deltaY > 0) {
                this.changeSlide('next'); // Скроллинг вниз
            } else {
                this.changeSlide('prev'); // Скроллинг вверх
            }
        },
        changeSlide(direction: string) {
            const slidesCount = this.pages.length;
            const nextIndex =
                direction === 'next'
                    ? (this.currentIndex + 1) % slidesCount
                    : (this.currentIndex - 1 + slidesCount) % slidesCount;

            this.animateSlide(this.currentIndex, nextIndex, direction);
            this.currentIndex = nextIndex;
        },
        animateSlide(currentIndex: number, nextIndex: number, direction: string) {
            const slides = document.querySelectorAll('.slide');

            // GSAP анимация текущего слайда
            gsap.to(slides[currentIndex], {
                y: direction === 'next' ? '-100%' : '100%',
                duration: 1,
                ease: 'power2.inOut',
            });

            // GSAP анимация следующего слайда
            gsap.fromTo(
                slides[nextIndex],
                { y: direction === 'next' ? '100%' : '-100%' },
                { y: '0%', duration: 1, ease: 'power2.inOut' }
            );
        },
    },
});
</script>

<style lang="scss">
.slider-container {
    position: relative;
    width: 100%;
    height: 100dvh;

    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        section {
            width: 100%;
            height: 100vh;
        }
    }
}
</style>
