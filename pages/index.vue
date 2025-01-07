<template>
  <section class="index">
    <img class="bg_guy" src="~/static/images/index/bg_guy.jpg" />
    <div class="index__wrapper">
      <h1 class="index__initials">К. М.</h1>
      <div class="index__menu">
        <IndexMenuButton 
          svgPath="images/index/price.svg"
          text="Прайс"
          link=""
        />
        <IndexMenuButton 
          svgPath="images/index/chat.svg"
          text="Задать вопрос"
          link="https://t.me/km_creator"
        />
        <IndexMenuButton 
          svgPath="images/index/faq.svg"
          text="F.A.Q."
          link=""
        />
      </div>
      <div class="index__socials">
        <a href="https://t.me/exaggerate_escapism" class="icon" target="_blank">
          <img src="~/static/images/index/tg.svg" />
        </a>
        <a href="https://vk.com/overwhelming_utter_devastation" class="icon" target="_blank">
          <img src="~/static/images/index/vk.svg" />
        </a>
      </div>
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
})
</script>

<style lang="scss">
.index {
  --accent-color: #ffda8c;
  --left-indent: 5rem;

  width: 100%;
  height: 100vh;
  background-color: #bc7109;
  font-family: 'Montserrat';

  .bg_guy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;

    animation: fadeInMove 2s forwards;
  }
  @keyframes fadeInMove {
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

  &__initials {
    color: var(--accent-color);
    font-size: 18rem;
    cursor: default;
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
</style>
