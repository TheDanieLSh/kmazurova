<template>
  <div class="index">
    <div class="index__wrapper">
      <div class="index__initials">К. М.</div>
      <div class="index__menu">
        <IndexMenuButton 
          svgPath="images/index/price.svg"
          text="Прайс"
        />
        <IndexMenuButton 
          svgPath="images/index/chat.svg"
          text="Задать вопрос"
        />
        <IndexMenuButton 
          svgPath="images/index/faq.svg"
          text="F.A.Q."
        />
      </div>
      <div class="index__socials">
        <a href="https://t.me/exaggerate_escapism" class="icon" target="_blank">
          <img src="~/static/images/tg.svg" />
        </a>
        <a href="https://vk.com/overwhelming_utter_devastation" class="icon" target="_blank">
          <img src="~/static/images/vk.svg" />
        </a>
      </div>
    </div>
  </div>
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
  height: 100dvh;
  background-image: url('~@/static/images/km_index_desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__wrapper {
    position: relative;
    margin-left: var(--left-indent);
    display: flex;
    flex-direction: column;
    gap: 5rem;
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
