export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/MyPortfolio/', // your repo name
  },
  css: ['@/assets/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],
})