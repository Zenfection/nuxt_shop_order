import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    imagekit: {
      urlEndpoint: process.env.NUXT_IMAGEKIT_URL_ENDPOINT,
      publicKey: process.env.NUXT_IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.NUXT_IMAGEKIT_PRIVATE_KEY,
    }
  },
  app: {
    layoutTransition: true,
    pageTransition: true,
  },
  modules: [
    '@formkit/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxt/devtools',
    'nuxt-use-motion',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    [
      'nuxt-cloudflare-analytics',
      {
        token: process.env.NUXT_CLOUDFLARE_ANALYTICS,
      },
    ],
  ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/style/style.css',
    '~/assets/style/custom.css'
  ],
  plugins: [
    {
      src: 'bootstrap/dist/js/bootstrap.min.js',
      mode: 'client'
    }
  ],
  // devtools: {
  //   enabled: true,
  // },
  devServer: {
    port: 8080,
  },
  image: {
    imagekit: {
      baseURL: process.env.NUXT_IMAGEKIT_URL_ENDPOINT,
    }
  },
})