<template>
    <slot />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const lenis = ref < Lenis | null > (null);

provide('lenis', lenis);

onMounted(() => {
    lenis.value = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: true,
    })

    const sections = document.querySelectorAll('section');

    let prevSectionsHeight = 0;
    sections.forEach((sec, i) => {
        sec.style.top = `${prevSectionsHeight}px`;
        sec.style.zIndex = String(++i);
        prevSectionsHeight += parseFloat(window.getComputedStyle(sec).height);
    })
})
</script>
