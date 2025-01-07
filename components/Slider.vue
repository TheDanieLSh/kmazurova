<template>
    <div class="slider-container">
        <div
            class="slide"
            v-for="(PageComponent, index) in pages"
            :key="index"
            :class="{ active: index === currentIndex }"
            :style="{
                transform: index === currentIndex ? 'translateY(0)' : index < currentIndex ? 'translateY(-100%)' : 'translateY(100%)',
                visibility: shouldRenderSlide(index) ? 'visible' : 'hidden',
            }"
        >
            <component :is="PageComponent" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';

import IndexPage from '~/pages/index.vue';
import PricePage from '~/pages/price.vue';
import WorksPage from '~/pages/works.vue';

export default Vue.extend({
    mounted() {
        this.initSlides();
        window.addEventListener('wheel', this.onWheel, { passive: true });
    },
    destroyed() {
        window.removeEventListener('wheel', this.onWheel);
    },
    data() {
        return {
            currentIndex: 0,
            pages: [IndexPage, PricePage, WorksPage],
            isAnimating: false,
        };
    },
    methods: {
        initSlides() {
            const slides = document.querySelectorAll('.slide');
            slides.forEach((slide, index) => {
                gsap.set(slide, {
                    y: index === this.currentIndex ? '0%' : index < this.currentIndex ? '-100%' : '100%',
                });
            });
        },
        onWheel(event: WheelEvent) {
            if (this.isAnimating) return;

            if (event.deltaY > 0) {
                this.changeSlide('next');
            } else {
                this.changeSlide('prev');
            }
        },
        changeSlide(direction: string) {
            const slidesCount = this.pages.length;
            const nextIndex =
                direction === 'next'
                    ? (this.currentIndex + 1) % slidesCount
                    : (this.currentIndex - 1 + slidesCount) % slidesCount;

            this.animateSlide(this.currentIndex, nextIndex, direction);
        },
        animateSlide(currentIndex: number, nextIndex: number, direction: string) {
            const slides = document.querySelectorAll('.slide');

            this.isAnimating = true;

            gsap.to(slides[currentIndex], {
                y: direction === 'next' ? '-100%' : '100%',
                duration: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    this.isAnimating = false;
                    this.currentIndex = nextIndex;
                },
            });

            gsap.fromTo(
                slides[nextIndex],
                { y: direction === 'next' ? '100%' : '-100%' },
                { y: '0%', duration: 1, ease: 'power2.inOut' }
            );
        },
        shouldRenderSlide(index: number): boolean {
            return (
                index === this.currentIndex ||
                index === (this.currentIndex + 1) % this.pages.length ||
                index === (this.currentIndex - 1 + this.pages.length) % this.pages.length
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
        visibility: hidden;
        transition: visibility 0s linear 0.5s;

        &.active {
            visibility: visible;
            transition: visibility 0s;
        }

        section {
            width: 100%;
            height: 100vh;
        }
    }
}
</style>

