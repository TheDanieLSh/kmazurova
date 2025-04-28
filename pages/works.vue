<template>
    <div class="works slider-container">
        <div class="works__first works__section slide">
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
        <div class="works__second works__section slide">
            <div class="second-left">
                <div class="second-left__top">
                    <img src="/images/works/2-1.PNG" class="lemons" />
                </div>
                <div class="second-left__bottom">
                    <img src="/images/works/2-2.PNG" class="scissors" />
                    <img src="/images/works/2-3.JPG" class="bluesound" />
                </div>
            </div>
            <img src="/images/works/2-4.JPG" class="goosegirl" />
        </div>
        <div class="works__third works__section slide">
            <img src="/images/works/3-1.JPG" class="mushhead" />
            <div class="third-right">
                <div class="third-right__top">
                    <img src="/images/works/3-2.JPG" class="serious" />
                    <img src="/images/works/3-3.JPG" class="redsound" />
                </div>
                <div class="third-right__bottom">
                    <img src="/images/works/3-4.JPG" class="alkash" />
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
        leftSrc: '/images/works/4-1.JPG',
        leftTitle: 'СЛЕПЫЕ',
        middleSrc: '/images/works/4-2.JPG',
        middleTitle: 'ПРОИГРЫШ',
        rightSrc: '/images/works/4-3.JPG',
        rightTitle: 'ОБГОРЕВШАЯ',
    },
    {
        leftSrc: '/images/works/5-1.JPG',
        leftTitle: 'НОСТАЛЬГИЯ',
        middleSrc: '/images/works/5-2.JPG',
        middleTitle: 'РАЗГОВОР',
        rightSrc: '/images/works/5-3.JPG',
        rightTitle: 'БОРЗАЯ В САДУ',
    },
    {
        leftSrc: '/images/works/6-1.JPG',
        leftTitle: 'НОЧЬ',
        middleSrc: '/images/works/6-2.JPG',
        middleTitle: 'ТОРЖЕСТВО',
        rightSrc: '/images/works/6-3.JPG',
        rightTitle: 'КАРПЫ',
    },
    {
        leftSrc: '/images/works/7-1.PNG',
        leftTitle: 'ОСЕНЬ',
        middleSrc: '/images/works/7-2.JPG',
        middleTitle: 'МУЗА',
        rightSrc: '/images/works/7-3.JPG',
        rightTitle: 'ПРОГУЛКА',
    },
    {
        leftSrc: '/images/works/8-1.JPG',
        leftTitle: 'МОР',
        middleSrc: '/images/works/8-2.JPG',
        middleTitle: 'ПРОИГРЫШ. 2',
        rightSrc: '/images/works/8-3.JPG',
        rightTitle: 'ПИОНЫ',
    },
    {
        leftSrc: '/images/works/9-1.JPG',
        leftTitle: 'ЗАВТРА',
        middleSrc: '/images/works/9-2.JPG',
        middleTitle: 'ЛИМОНЫ',
        rightSrc: '/images/works/9-3.JPG',
        rightTitle: 'ПРИВЯЗАН',
    },
    {
        leftSrc: '/images/works/10-1.JPG',
        leftTitle: 'ПРОИГРЫШ. 3',
        middleSrc: '/images/works/10-2.PNG',
        middleTitle: 'ГОРОД',
        rightSrc: '/images/works/10-3.JPG',
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