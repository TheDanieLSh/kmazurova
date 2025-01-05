<template>
  <div class="index">
    <div class="index__wrapper">
      <div class="index__initials">К. М.</div>
      <div class="index__menu">
        <button>
          <div class="sign">
            <svg width="512px" height="512px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5" />
                <path d="M12 6V18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                <path
                  d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                  stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
              </g>
            </svg>
          </div>
          <div class="text">Прайс</div>
        </button>
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

export default Vue.extend({
  name: 'IndexPage',
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

    button {
      --button-size: 6rem;
      --svg-scale: 0.4;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: var(--button-size);
      height: var(--button-size);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.199);
      background-color: black;

      .sign {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: var(--button-size);
        height: 100%;
        transition: all 0.3s ease;

        svg {
          width: calc(var(--button-size) * var(--svg-scale));
          height: calc(var(--button-size) * var(--svg-scale));
          transition: transform 0.3s ease;
        }
      }

      .text {
        position: absolute;
        left: var(--button-size);
        opacity: 0;
        color: white;
        font-size: calc(var(--button-size) * 0.2);
        font-weight: 600;
        white-space: nowrap;
        transition: opacity 0.3s ease;
      }

      &:hover {
        width: calc(var(--button-size) * 2.2);
        border-radius: calc(var(--button-size) / 1.5);

        .sign {
          svg {
            transform: scale(1.2);
          }
        }

        .text {
          opacity: 1;
        }
      }

      &:active {
        transform: translate(0.2rem, 0.2rem);
      }
    }
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
