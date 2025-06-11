export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/MyPortfolio/',
    buildAssetsDir: '/MyPortfolio/_nuxt/',
  },
  css: ['@/assets/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],
})