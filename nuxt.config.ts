// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: [
    '@/assets/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  ssr: true,
  router: {
    options: {
      hashMode: false
    }
  },

  app: {
    baseURL: '/MyPortfolio/',
  }
})
