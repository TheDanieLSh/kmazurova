<template>
    <div class="works slider-container">
        <div class="works__first works__section slide">
            <div class="cell sadman">
                <img src="/images/works/1-1.webp" />
            </div>
            <div class="cell swampsound">
                <img src="/images/works/1-3.webp" />
            </div>
            <div class="cell weep">
                <img src="/images/works/1-2.webp" />
            </div>
            <div class="cell frogs">
                <img src="/images/works/1-4.webp" />
            </div>
        </div>
        <div class="works__second works__section slide">
            <div class="second-left">
                <div class="second-left__top">
                    <img src="/images/works/2-1.webp" class="lemons" />
                </div>
                <div class="second-left__bottom">
                    <img src="/images/works/2-2.webp" class="scissors" />
                    <img src="/images/works/2-3.webp" class="bluesound" />
                </div>
            </div>
            <img src="/images/works/2-4.webp" class="goosegirl" />
        </div>
        <div class="works__third works__section slide">
            <img src="/images/works/3-1.webp" class="mushhead" />
            <div class="third-right">
                <div class="third-right__top">
                    <img src="/images/works/3-2.webp" class="serious" />
                    <img src="/images/works/3-3.webp" class="redsound" />
                </div>
                <div class="third-right__bottom">
                    <img src="/images/works/3-4.webp" class="alkash" />
                </div>
            </div>
        </div>
        <ThreeWorks class="slide" v-for="image in imagePacks" :images="{
            left: {
                src: image.leftSrc,
                title: image.leftTitle,
            },
            middle: {
                src: image.middleSrc,
                title: image.middleTitle,
            },
            right: {
                src: image.rightSrc,
                title: image.rightTitle,
            },
        }" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'slider'
})

const imagePacks = [
    {
        leftSrc: 'images/works/4-1.webp',
        leftTitle: 'СЛЕПЫЕ',
        middleSrc: 'images/works/4-2.webp',
        middleTitle: 'ПРОИГРЫШ',
        rightSrc: 'images/works/4-3.webp',
        rightTitle: 'ОБГОРЕВШАЯ',
    },
    {
        leftSrc: 'images/works/5-1.webp',
        leftTitle: 'НОСТАЛЬГИЯ',
        middleSrc: 'images/works/5-2.webp',
        middleTitle: 'РАЗГОВОР',
        rightSrc: 'images/works/5-3.webp',
        rightTitle: 'БОРЗАЯ В САДУ',
    },
    {
        leftSrc: 'images/works/6-1.webp',
        leftTitle: 'НОЧЬ',
        middleSrc: 'images/works/6-2.webp',
        middleTitle: 'ТОРЖЕСТВО',
        rightSrc: 'images/works/6-3.webp',
        rightTitle: 'КАРПЫ',
    },
    {
        leftSrc: 'images/works/7-1.webp',
        leftTitle: 'ОСЕНЬ',
        middleSrc: 'images/works/7-2.webp',
        middleTitle: 'МУЗА',
        rightSrc: 'images/works/7-3.webp',
        rightTitle: 'ПРОГУЛКА',
    },
    {
        leftSrc: 'images/works/8-1.webp',
        leftTitle: 'МОР',
        middleSrc: 'images/works/8-2.webp',
        middleTitle: 'ПРОИГРЫШ. 2',
        rightSrc: 'images/works/8-3.webp',
        rightTitle: 'ПИОНЫ',
    },
    {
        leftSrc: 'images/works/9-1.webp',
        leftTitle: 'ЗАВТРА',
        middleSrc: 'images/works/9-2.webp',
        middleTitle: 'ЛИМОНЫ',
        rightSrc: 'images/works/9-3.webp',
        rightTitle: 'ПРИВЯЗАН',
    },
    {
        leftSrc: 'images/works/10-1.webp',
        leftTitle: 'ПРОИГРЫШ. 3',
        middleSrc: 'images/works/10-2.webp',
        middleTitle: 'ГОРОД',
        rightSrc: 'images/works/10-3.webp',
        rightTitle: 'ЛЕТАЛ',
    },
];

</script>

<style lang="scss">

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

        .sadman {
            grid-area: sadman;
        }

        .swampsound {
            grid-area: swampsound;
        }

        .weep {
            grid-area: weep;
            padding: 24px;

            img {
                object-fit: contain;
            }
        }

        .frogs {
            grid-area: frogs;
        }
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

            &__top {
                width: 100%;
                text-align: center;
            }

            &__bottom {
                display: flex;
                align-items: center;
                gap: 20rem;
            }
        }

        .lemons {
            width: 26%;
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
                align-self: center;
                width: 85%;
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