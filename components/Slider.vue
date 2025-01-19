<template>
    <div class="slider-container">
        <div
            class="slide"
            v-for="(PageComponent, index) in pages"
            :key="index"
            :class="{ active: index === currentIndex }"
            :style="{
                transform: index === currentIndex ? 'translateY(0)' : index < currentIndex ? 'translateY(-100%)' : 'translateY(100%)',
                // visibility: shouldRenderSlide(index) ? 'visible' : 'hidden',
            }"
        >
            <component :is="PageComponent" :goToSlide="goToSlide" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';

import IndexPage from '~/pages/index.vue';
import WorksPage from '~/pages/works.vue';
import PricePage from '~/pages/price.vue';
import FaqPage from '~/pages/faq.vue';

let scrollables: NodeListOf<Element>;
let viewportHeight: number;
let viewportWidth: number;

export default Vue.extend({
    mounted() {
        this.initSlides();
        window.addEventListener('wheel', this.onWheel, { passive: true });
        window.addEventListener('touchstart', this.onTouchStart, { passive: true });
        window.addEventListener('touchend', this.onTouchEnd, { passive: true });
        scrollables = document.querySelectorAll('.scrollable');
        viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    },
    destroyed() {
        window.removeEventListener('wheel', this.onWheel);
        window.removeEventListener('touchstart', this.onTouchStart);
        window.removeEventListener('touchend', this.onTouchEnd);
    },
    data() {
        return {
            currentIndex: 0,
            pages: [IndexPage, WorksPage, PricePage, FaqPage],
            isAnimating: false,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
        };
    },
    methods: {
        initSlides(): void {
            const slides = document.querySelectorAll('.slide');
            slides.forEach((slide, index) => {
                gsap.set(slide, {
                    y: index === this.currentIndex ? '0%' : index < this.currentIndex ? '-100%' : '100%',
                });
            });
        },
        onWheel(event: WheelEvent): void {
            if (this.isAnimating) return;

            let scrolled = false;

            scrollables.forEach(scrollable => {
                const rect = scrollable.getBoundingClientRect();

                console.log({
                    top: rect.top,
                    bottom: rect.bottom,
                    vH: viewportHeight,
                });

                if (this.isElementInViewport(rect)) {
                    if (event.deltaY > 0) {
                        if (rect.bottom <= viewportHeight) return;
                        this.scroll(scrollable, 'down');
                        scrolled = true;
                    }
                    if (event.deltaY < 0) {
                        if (rect.top >= 0) return;
                        this.scroll(scrollable, 'up');
                        scrolled = true;
                    }
                }

                return;
            });

            if (scrolled) return;

            if (event.deltaY > 0) {
                this.slideScroll('next');
            } else {
                this.slideScroll('prev');
            }
        },
        scroll(scrollable: Element, direction: string): void {
            gsap.to(scrollable, {
                y: direction === 'up' ? '10%' : '-10%',
                duration: 1,
            });
        },
        slideScroll(direction: string): void {
            const slidesCount = this.pages.length;
            /* Деление по модулю при вычислении ниже нужно для того чтобы
            не выходить за пределы возможных значений индексов (2 % 3 = 2; 3 % 3 = 0) */
            const nextIndex = direction === 'next' ?
                (this.currentIndex + 1) % slidesCount
                : (this.currentIndex - 1 + slidesCount) % slidesCount;

            this.goToSlide(this.currentIndex, nextIndex, direction);
        },
        goToSlide(currentIndex: number, nextIndex: number, direction: string = 'next'): void {
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
        // shouldRenderSlide(index: number): boolean {
        //     return (
        //         index === this.currentIndex ||
        //         index === (this.currentIndex + 1) % this.pages.length ||
        //         index === (this.currentIndex - 1 + this.pages.length) % this.pages.length
        //     );
        // },
        onTouchStart(event: TouchEvent): void {
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        },
        onTouchEnd(event: TouchEvent): void {
            this.endX = event.changedTouches[0].clientX;
            this.endY = event.changedTouches[0].clientY;

            const deltaX = this.endX - this.startX;
            const deltaY = this.endY - this.startY;

            if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 30) {
                if (deltaY < 0) {
                    this.slideScroll('next');
                } else {
                    this.slideScroll('prev');
                }
            }
        },
        isElementInViewport(rect: DOMRect): boolean {
            return (
                rect.top <= 0 &&
                rect.bottom >= viewportHeight
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
        // visibility: hidden;
        transition: visibility 0s linear 0.5s;

        &.active {
            visibility: visible;
            transition: visibility 0s;
        }

        section {
            width: 100%;
            min-height: 100dvh;
            height: fit-content;
        }
    }
}
</style>
