// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    provinceVN: process.env.NUXT_API_PROVINCE_VN,
    backend: process.env.MODE === 'development'
        ? 'http://localhost:3000'
        : process.env.NUXT_BACKEND_API
  },
  app: {
    head: {
      "script": [
        {
          "src": "assets/icon/icon-zen.min.js",
        },
      ],
    },
    layoutTransition: true,
    pageTransition: true,
  },
  modules: [
    '@formkit/nuxt',
    ['@nuxt/image-edge', {
      imagekit: {
        baseURL: process.env.NUXT_IMAGEKIT_URL_ENDPOINT,
      }
    }],
    '@nuxtjs/robots',
    '@nuxt/devtools',
    'nuxt-use-motion',
    '@nuxtjs/device',
    '@hypernym/nuxt-anime',
    'nuxt-icon',
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore',
      ],
    }],
    '@nuxtjs/fontaine',
    '@formkit/auto-animate',
    ['nuxt-cloudflare-analytics', {
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
    '~/plugins/bootstrap.client.ts',
    
  ],
  devServer: {
    port: 8080,
  },
  imports: {
    dirs: [
      'stores',
      'services',
      'utils',
    ]
  },
})