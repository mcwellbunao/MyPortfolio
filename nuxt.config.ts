export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['@/assets/styles.css'],
  modules: ['@nuxtjs/tailwindcss'],

  // ❗️Change this:
  ssr: false, // disable server-side rendering

  // ✅ Add this:
  nitro: {
    preset: 'static'
  },

  app: {
    baseURL: '/MyPortfolio/',
  }
})
