<template>
  <div class="index">
    <div class="index__wrapper">
      <div class="index__initials">К. М.</div>
      <div class="index__socials">
        <a
          href="https://t.me/exaggerate_escapism"
          class="icon"
          target="_blank"
        >
          <img src="~/static/images/tg.svg" />
        </a>
        <a
          href="https://vk.com/overwhelming_utter_devastation"
          class="icon"
          target="_blank"
        >
          <img src="~/static/images/vk.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss">
  .index {
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
    }

    &__initials {
      color: #ffda8c;
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
      }
    }
  }
</style>
