<template>
    <slot />
</template>

<script lang="ts">
import { gsap } from 'gsap';

export default {
    mounted() {
        this.initSlides();
        window.addEventListener('wheel', this.onWheel, { passive: true });
        window.addEventListener('touchstart', this.onTouchStart, { passive: true });
        window.addEventListener('touchend', this.onTouchEnd, { passive: true });
    },
    destroyed() {
        window.removeEventListener('wheel', this.onWheel);
        window.removeEventListener('touchstart', this.onTouchStart);
        window.removeEventListener('touchend', this.onTouchEnd);
    },
    data() {
        return {
            slides: [] as Element[],
            currentIndex: 0,
            isAnimating: false,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
        };
    },
    methods: {
        initSlides() {
            this.slides = [...document.querySelectorAll('.slide')];
            this.slides.forEach((slide, index) => {
                gsap.set(slide, {
                    y: index === this.currentIndex ? '0%' : index < this.currentIndex ? '-100%' : '100%',
                });
            });
        },
        onWheel(event: WheelEvent) {
            if (this.isAnimating) return;

            if (event.deltaY > 0) {
                this.slideScroll('next');
            } else {
                this.slideScroll('prev');
            }
        },
        slideScroll(direction: string) {
            const slidesCount = this.slides.length;
            /* Деление по модулю при вычислении ниже нужно для того чтобы
            не выходить за пределы возможных значений индексов (2 % 3 = 2; 3 % 3 = 0) */
            const nextIndex = direction === 'next' ?
                    (this.currentIndex + 1) % slidesCount
                    : (this.currentIndex - 1 + slidesCount) % slidesCount;

            this.goToSlide(this.currentIndex, nextIndex, direction);
        },
        goToSlide(currentIndex: number, nextIndex: number, direction: string = 'next') {
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
        onTouchStart(event: TouchEvent) {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
        },
        onTouchEnd(event: TouchEvent) {
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
    },
};
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
            height: 100dvh;
        }
    }
}
</style>
