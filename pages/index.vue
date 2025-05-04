<template>
    <section class="index">
        <img class="bg_img" src="@/public/images/index/bg_guy.jpg" />
        <div class="index__wrapper">
            <header>
                <h1 class="index__initials">К.М.</h1>
                <h2 class="index__subheader">АВТОРСКИЕ КАРТИНЫ НА ЗАКАЗ</h2>
            </header>
            <nav class="index__menu">
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
            </nav>
            <div class="index__socials">
                <a
                    href="https://t.me/exaggerate_escapism"
                    class="icon" target="_blank"
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
            </div>
        </div>
    </section>
    <section id="price" class="price">
        <h2 class="price__header">ПРАЙС</h2>
        <div class="formats-line">
            <div class="formats-line__contacts">
                <h3>Для заказа пишите</h3>
                <a
                    href="https://t.me/exaggerate_escapism"
                    class="tg_icon" target="_blank"
                    title="Телеграм"
                >
                    <img src="@/public/images/index/tg.svg" />
                </a>
            </div>
            <div class="formats-line__examples">
                <PricesFormatExample 
                    picSrc="images/index/prices/scissors.png"
                    :price=price.small
                />
                <PricesFormatExample 
                    picSrc="images/index/prices/teeth.png"
                    :price=price.mid
                />
                <PricesFormatExample 
                    picSrc="images/index/prices/flowers.png"
                    :price=price.big
                />
            </div>
        </div>
        <div class="materials">
            <h3>Материалы:</h3>
            <div class="materials__list">
                <div class="item">
                    <p class="title">Темпера</p>
                    <img src="@/public/images/index/prices/tempera.webp" />
                </div>
                <div class="item">
                    <p class="title">Акрил</p>
                    <img src="@/public/images/index/prices/acrylic.webp" />
                </div>
                <div class="item">
                    <p class="title">Пастель</p>
                    <img src="@/public/images/index/prices/pastel.webp" />
                </div>
                <div class="item">
                    <p class="title">Микс</p>
                    <img src="@/public/images/index/prices/mixed.webp" />
                </div>
            </div>
        </div>
    </section>
    <section id="faq" class="faq"></section>
</template>

<script setup lang="ts">
import type Lenis from 'lenis'

definePageMeta({
    layout: 'lenis',
})

const lenis = inject<Ref<Lenis | null>>('lenis');

const price = {
    small: '10 000 - 12 000',
    mid: '17 000',
    big: '25 000',
};

</script>

<style lang="scss">
body {
    --bg-color: #bc7109;
    --accent-color: #ffda8c;

    font-family: 'Montserrat';
}

section {
    position: relative;
    width: 100%;
    z-index: 1;

    img {
        object-fit: contain;
    }
}

.index {
    --indent: 5rem;

    position: fixed;
    height: 100dvh;
    background-color: var(--bg-color);
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

.price {
    height: fit-content;
    background-color: var(--bg-color);
    padding: 3rem;
    
    &__header {
        font-size: 10rem;
        color: var(--accent-color);
        font-size: 18rem;
    }

    h3 {
        font-size: 3.5rem;
        color: var(--accent-color);
    }

    .tg_icon {
        img {
            width: 10rem;
        }
    }

    .formats-line {
        display: flex;
        // justify-content: space-around;
        justify-content: space-between;
        // gap: 5rem;

        .formats-line__contacts {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .formats-line__examples {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
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
            content: url('@/public/mobile/images/index/bg.webp');
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
