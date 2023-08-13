// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/syamsulamin.github.io/',
    buildAssetsDir: 'assets',
  },
  modules: [
    '@nuxthq/ui'
  ],
})
