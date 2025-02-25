<template>
  <section class="index">
    <img class="bg_img" src="@/public/images/index/bg_guy.jpg" />
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
          <img src="@/public/images/index/tg.svg" />
        </a>
        <a
          href="https://vk.com/overwhelming_utter_devastation"
          class="icon"
          target="_blank"
          title="Группа в ВК"
        >
          <img src="@/public/images/index/vk.svg" />
        </a>
      </footer>
    </div>
  </section>
  <section class="works">
    <div class="works__first works__section">
      <div class="cell sadman">
        <img src="/images/works/1-1.JPG" />
      </div>
      <div class="cell swampsound">
        <img src="/images/works/1-3.JPG" />
      </div>
      <div class="cell weep">
        <img src="/images/works/1-2.JPG" />
      </div>
      <div class="cell frogs">
        <img src="/images/works/1-4.JPG" />
      </div>
    </div>
    <div class="works__second works__section">
      <div class="second-left">
        <div class="second-left__top">
          <img src="/images/works/2-1.PNG" class="lemons" />
        </div>
        <div class="second-left__bottom">
          <img src="/images/works/2-2.PNG" class="scissors"/>
          <img src="/images/works/2-3.JPG" class="bluesound" />
        </div>
      </div>
      <img src="/images/works/2-4.JPG" class="goosegirl"/>
    </div>
    <div class="works__third works__section">
      <img src="/images/works/3-1.JPG" class="mushhead"/>
      <div class="third-right">
        <div class="third-right__top">
          <img src="/images/works/3-2.JPG" class="serious"/>
          <img src="/images/works/3-3.JPG" class="redsound" />
        </div>
        <div class="third-right__bottom">
          <img src="/images/works/3-4.JPG" class="alkash" />
        </div>
      </div>
    </div>
  </section>
  <section id="price" class="price"></section>
  <section id="faq" class="faq"></section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const lenis = ref<Lenis | null>(null);

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

<style lang="scss">

section {
  position: relative;
  width: 100%;
  z-index: 1;

  img {
    object-fit: contain;
  }
}

.index {
  --accent-color: #ffda8c;
  --indent: 5rem;

  position: fixed;
  height: 100dvh;
  background-color: #bc7109;
  font-family: 'Montserrat';
  z-index: 0;

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
  &__section {
    height: 95dvh;
  }

  &__first {
    top: 100dvh;
    background-color: #5f5f28;
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    grid-template-rows: 1.1fr 1fr;
    grid-template-areas: 
      "sadman swampsound frogs"
      "sadman weep frogs";

    .cell {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .sadman { grid-area: sadman; }
    .swampsound { grid-area: swampsound; }
    .weep {
      grid-area: weep;
      padding: 24px;
      
      img {
        object-fit: contain;
      }
    }
    .frogs { grid-area: frogs; }
  }

  &__second {
    background-color: #1d1f45;
    display: flex;
    justify-content: space-between;
    
    .second-left {
      width: 100%;
      margin: 3rem;
      padding-right: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      &__bottom {
        display: flex;
        align-items: center;
        gap: 20rem;
      }
    }

    .lemons {
      width: 32rem;
    }

    .scissors {
      width: 32rem;
    }

    .bluesound {
      width: 55rem;
    }
  }

  &__third {
    background-color: #c2614e;
    display: flex;
    justify-content: space-between;
    
    .third-right {
      width: 100%;
      margin: 3rem;
      padding-right: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__bottom {
        text-align: center;
      }
    }

    .serious {
      width: 32rem;
    }

    .redsound {
      width: 55rem;
    }

    .alkash {
      width: 55rem;
    }
  }
}

.price {
  height: 100dvh;
  background: linear-gradient(red, white);
}

.faq {
  height: 100dvh;
  background: linear-gradient(orange, white);
}

@media (max-width: 768px) {
  .index {
    --indent: 1rem;

    position: relative;
    background-color: black;

    .bg_img {
      content: url('@/public/mobile/images/index/bg.png');
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
