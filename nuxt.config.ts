// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/robots',
    '@nuxt/devtools',
    [
      'nuxt-cloudflare-analytics',
      {
        token: 'your-token',
      },
    ],
  ],
  devtools: {
    enabled: true,
  }
})
