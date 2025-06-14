export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/MyPortfolio/',
    buildAssetsDir: '_nuxt/',
  },
  css: ['@/assets/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    define: {
      'process.env': {}
    }
  }
})