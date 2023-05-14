// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: 'Zen Shop Order',
      siteDescription: 'Welcome to my awesome ZenShop!',
      language: 'en',
    },
    provinceVN: process.env.NUXT_API_PROVINCE_VN,
    baseUrl: {
      production: process.env.NUXT_API_URL,
      development: process.env.NUXT_API_URL_LOCAL,
    },
  },
  app: {
    head: {
      script: [
        {
          src: 'assets/icon/icon-zen.min.js',
        },
      ],
    },
    layoutTransition: true,
    // pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@formkit/nuxt',
    [
      '@nuxt/image-edge',
      {
        // ? https://v1.image.nuxtjs.org
        imagekit: {
          baseURL: process.env.IMAGEKIT_URL_ENDPOINT,
        },
      },
    ],
    '@nuxt/devtools',
    'nuxt-use-motion',
    '@nuxtjs/device',
    '@hypernym/nuxt-anime',
    'nuxt-icon',
    'nuxt-swiper',
    [
      '@productdevbook/chatwoot',
      {
        // ? https://github.com/productdevbookcom/chatwoot
        init: {
          websiteToken: process.env.NUXT_CHATWOOT_WEBSITE_TOKEN,
        },
        settings: {
          locale: 'vi',
          position: 'right',
          launcherTitle: 'Xin Chào!',
        },
      },
    ],
    [
      '@pinia/nuxt',
      {
        // ? https://pinia.vuejs.org/ssr/nuxt.html
        autoImports: ['defineStore'],
      },
    ],
    [
      '@pinia-plugin-persistedstate/nuxt',
      {
        // ? https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
        cookieOptions: {
          sameSite: 'strict',
        },
        storage: 'cookies',
      },
    ],
    '@nuxtjs/fontaine',
    ['@nuxtjs/supabase', {}],
    [
      'nuxt-typed-router',
      {
        // ? https://nuxt-typed-router.vercel.app
      },
    ],

    //! Enable when project is ready
    // ['@unlighthouse/nuxt', {
    //   //? https://unlighthouse.dev/integrations/nuxt
    //   scanner: {
    //     device: 'desktop',
    //   }
    // }],
    // ['nuxt-cloudflare-analytics', {
    //   //? https://github.com/hamlogic/nuxt-cloudflare-analytics
    //   token: process.env.NUXT_CLOUDFLARE_ANALYTICS,
    // },
    // ],
  ],
  extends: [
    'nuxt-seo-kit', // ? https://github.com/harlan-zw/nuxt-seo-kit
  ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/style/style.css',
    '~/assets/style/custom.css',
  ],
  plugins: ['~/plugins/bootstrap.client.ts'],
  devServer: {
    port: 8080, // ? default: 3000
  },
  imports: {
    dirs: ['stores', 'services'], // ? custom auto import
  },
})
