<template>
  <section class="index">
    <img class="bg_img" src="~/public/images/index/bg_guy.jpg" />
    <div class="index__wrapper">
      <header>
        <h1 class="index__initials">К.М.</h1>
        <h2 class="index__subheader">АВТОРСКИЕ КАРТИНЫ НА ЗАКАЗ</h2>
      </header>
      <main class="index__menu">
        <IndexMenuButton 
          svgPath="images/index/price.svg"
          text="Прайс"
          @click="lenis?.scrollTo('#price', { duration: 1, easing: (t) => t })"
        />
        <IndexMenuButton 
          svgPath="images/index/chat.svg"
          text="Задать вопрос"
          link="https://t.me/km_creator"
        />
        <IndexMenuButton 
          svgPath="images/index/faq.svg"
          text="F.A.Q."
          @click="lenis?.scrollTo('#faq', { duration: 1, easing: (t) => t })"
        />
      </main>
      <footer class="index__socials">
        <a
          href="https://t.me/exaggerate_escapism"
          class="icon"
          target="_blank"
          title="Телеграм канал"
        >
          <img src="~/public/images/index/tg.svg" />
        </a>
        <a
          href="https://vk.com/overwhelming_utter_devastation"
          class="icon"
          target="_blank"
          title="Группа в ВК"
        >
          <img src="~/public/images/index/vk.svg" />
        </a>
      </footer>
    </div>
  </section>
  <section class="works"></section>
  <section id="price" class="price"></section>
  <section id="faq" class="faq"></section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const lenis = ref<Lenis | null>(null);

onMounted(() => {
  lenis.value = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    syncTouch: true,
  })

  // function raf(time: number) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
})
</script>

<style lang="scss">
.index {
  --accent-color: #ffda8c;
  --indent: 5rem;

  width: 100%;
  height: 100dvh;
  background-color: #bc7109;
  font-family: 'Montserrat';

  .bg_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    object-fit: cover;

    animation: moveIn 2s forwards;
  }
  @keyframes moveIn {
    0% {
      transform: translate(50%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  &__wrapper {
    position: relative;
    margin: 0 var(--indent);
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  header {
    display: flex;
    align-items: baseline;
    gap: 4rem;
  }

  &__initials {
    color: var(--accent-color);
    font-size: 18rem;
    cursor: default;
  }

  &__subheader {
    color: var(--accent-color);
    font-size: 3.5rem;
    cursor: default;

    animation: fadeInMove 0.6s forwards;
    animation-delay: 2s;
    opacity: 0;
  }
  @keyframes fadeInMove {
    0% {
      transform: translate(0, -20%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  &__menu {
    display: flex;
    gap: 2rem;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;

    .icon {
      display: block;
      width: 6rem;
      height: 6rem;
      transition: 0.2s;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &:active {
        transform: translate(0.2rem, 0.2rem);
      }
    }
  }
}

.works {
  width: 100%;
  height: 100dvh;
  background-color: green;
}

.price {
  width: 100%;
  height: 100dvh;
  background-color: red;
}

.works {
  width: 100%;
  height: 100dvh;
  background-color: orange;
}

@media (max-width: 768px) {
  .index {
    --indent: 1rem;

    position: relative;
    background-color: black;

    .bg_img {
      content: url('~/public/mobile/images/index/bg.png');
      animation: none;
    }

    header {
      flex-direction: column;
    }

    &__initials {
      font-size: 10rem;
      color: inherit;
    }

    &__subheader {
      animation: none;
      opacity: 1;
      color: inherit;
    }

    &__menu {
      flex-wrap: wrap;
    }
  }
}
</style>
