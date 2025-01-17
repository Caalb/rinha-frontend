// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/variables.scss'
  ],

  modules: ['@nuxtjs/style-resources'],
  styleResources: { scss: ['./assets/scss/*.scss'] },
})
