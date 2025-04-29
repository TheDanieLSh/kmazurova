// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: process.env.ROUTER_BASE,
    head: {
      title: 'Ксения Мазурова — картины на заказ',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Картины на заказ. Живопись с авторским подходом от независимого современного художника. Создание уникального произведения искусства для вашего интерьера.'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: process.env.ROUTER_BASE + 'favicon.ico' }
      ],
    },
  },
  css: [
    '@/assets/styles/global.scss',
  ],
})
