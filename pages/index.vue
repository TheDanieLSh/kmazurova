<template>
  <section class="index">
    <img class="bg_img" src="~/static/images/index/bg_guy.jpg" />
    <div class="index__wrapper">
      <header>
        <h1 class="index__initials">К.М.</h1>
        <h2 class="index__subheader">АВТОРСКИЕ КАРТИНЫ НА ЗАКАЗ</h2>
      </header>
      <main class="index__menu">
        <IndexMenuButton 
          svgPath="images/index/price.svg"
          text="Прайс"
          slide="price"
          :goToSlide="goToSlide"
        />
        <IndexMenuButton 
          svgPath="images/index/chat.svg"
          text="Задать вопрос"
          link="https://t.me/km_creator"
        />
        <IndexMenuButton 
          svgPath="images/index/faq.svg"
          text="F.A.Q."
          slide="faq"
          :goToSlide="goToSlide"
        />
      </main>
      <footer class="index__socials">
        <a
          href="https://t.me/exaggerate_escapism"
          class="icon"
          target="_blank"
          title="Телеграм канал"
        >
          <img src="~/static/images/index/tg.svg" />
        </a>
        <a
          href="https://vk.com/overwhelming_utter_devastation"
          class="icon"
          target="_blank"
          title="Группа в ВК"
        >
          <img src="~/static/images/index/vk.svg" />
        </a>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import IndexMenuButton from '~/components/IndexMenuButton.vue';

export default Vue.extend({
  name: 'IndexPage',

  components: {
    IndexMenuButton,
  },

  props: {
    goToSlide: Function,
  },
})
</script>

<style lang="scss">
.index {
  --accent-color: #ffda8c;
  --left-indent: 5rem;

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
    margin-left: var(--left-indent);
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

@media (max-width: 768px) {
  .index {
    background-color: black;

    .bg_img {
      content: url('~/static/mobile/images/index/bg_frogs.jpg');
      animation: none;
    }
  }
}
</style>
