import defaultPlugins from "./tools/svggo.function.js";

export default async () => {
  const locales = [
    {
      "id": 1,
      "name": "U.S. English",
      "native": "U.S. English",
      "code": "en",
      "regional": "en_US",
      "default": 1,
      "created_at": "2023-01-19T13:45:08.000000Z"
    },
    {
      "id": 2,
      "name": "Spanish",
      "native": "español",
      "code": "es",
      "regional": "es_ES",
      "default": 0,
      "created_at": "2023-01-19T13:45:08.000000Z"
    },
    {
      "id": 3,
      "name": "Russian",
      "native": "русский",
      "code": "ru",
      "regional": "ru_RU",
      "default": 0,
      "created_at": "2023-01-19T13:45:08.000000Z"
    },
    {
      "id": 4,
      "name": "Armenia",
      "native": "Հայերեն",
      "code": "arm",
      "regional": "arm",
      "default": 0,
      "created_at": "2023-01-31T17:33:37.000000Z"
    }
  ]
  // const url = `${process.env.API_URL}/`
  // let locales = {}
  // try {
  //   const {data} = await axios.get('/locales')
  //   locales = data.map(lang => {
  //     return {
  //       ...lang
  //     }
  //   })
  // } catch (e) {
  //   locales =
  //       [
  //         {
  //           "id": 1,
  //           "name": "U.S. English",
  //           "native": "U.S. English",
  //           "code": "en",
  //           "regional": "en_US",
  //           "default": 1,
  //           "created_at": "2022-11-04T14:23:32.000000Z"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Spanish",
  //           "native": "español",
  //           "code": "es",
  //           "regional": "es_ES",
  //           "default": 0,
  //           "created_at": "2022-11-04T14:23:32.000000Z"
  //         },
  //         {
  //           "id": 3,
  //           "name": "Russian",
  //           "native": "русский",
  //           "code": "ru",
  //           "regional": "ru_RU",
  //           "default": 0,
  //           "created_at": "2022-11-04T14:23:32.000000Z"
  //         }
  //       ]
  // }

  return {

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',
    ssr: false,

    server: {
      port: process.env.APP_PORT // default: 3000
    },
    env: {
      API_URL: process.env.API_URL,
      SERVER_URL: process.env.SERVER_URL,
      WS_HOST: process.env.WS_HOST,
      WS_KEY: process.env.WS_KEY,
      WS_PORT: process.env.WS_PORT,
      FORCE_TLS: process.env.FORCE_TLS,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'MP-NY',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
        {hid: 'description', name: 'description', content: ''},
        {name: 'format-detection', content: 'telephone=no'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [

      '~/assets/сss/fonts.scss',
      '~/assets/сss/libs.scss',
      '~/assets/сss/content.scss',
      '~/assets/сss/keyframes.scss',
      '~/assets/сss/simple.scss',
      '~/assets/сss/modules.scss',
      '~/assets/сss/widget/index.scss'
    ],
    svgSprite: {
      // pass costum config
      svgoConfig() {
        return {
          plugins: defaultPlugins()
        }
      }
    },
    styleResources: {
      scss: [
        '~/assets/сss/core.scss',
        './assets/сss/variables.scss',
        './assets/сss/media.scss',
        './assets/сss/data.scss',
        './assets/сss/transitions.scss',

      ],
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
      {
        path: '~/components', // will get any components nested in let's say /components/test too
        pathPrefix: false,
      },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/vue-tippy/vue-tippy.js',
      '~/plugins/vuelidate/vuelidate.js',
      '~/mixins/helpers/prototype/prototypeApi.js',
      '~/mixins/helpers/prototype/prototypePages.js',
      '~/mixins/helpers/prototype/constants.js',
      '~/mixins/helpers/prototype/prototypeCollect.js',
      // '~/mixins/helpers/directive/scroll.js',
      '~/plugins/axios.js',
      '~/plugins/auth.js',
      '~/plugins/lodash',
      '~/plugins/i18n',
      '~/plugins/lightbox',
      '~/plugins/infiniteloading',
      '~/plugins/google-maps',
      '~/plugins/v-mask',
      '~/plugins/vue-chat-scroll',
      // { src: './plugins/echo', mode: 'client' }
    ],


    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      "@nuxtjs/svg",
      '@nuxtjs/date-fns',
      '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/style-resources',
      '@nuxtjs/svg-sprite',
      '@nuxtjs/axios',
      '@nuxtjs/auth-next',
      'vue-screen/nuxt',
      'bootstrap-vue/nuxt',
      'nuxt-google-maps-module',
      '@nuxt/image',
      '@nuxtjs/sentry'
    ],
    maps: {
      key: 'AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E',
      libraries: ['geometry','LatLng']
    },

    image: {
      // Options
      dir: 'assets/img',
      baseURL: 'http://mp.de/storage',
      domains: ['mp.de'],
      screens: {
        small:150,
        thumb:375,
        medium:1024,
        large:1400,
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
      }
    },
      i18n: {
      locales,
      defaultLocale: "en"
    },
    auth: {
      plugins: [ {src:'~/plugins/echo.js',ssr:false } ],
      strategies: {
        laravelSanctum: {
          provider: 'laravel/sanctum',
          url: process.env.API_URL,
          tokenRequired: true,
          tokenType: 'Bearer',
          endpoints: {
            login: {
              url: '/auth/login'
            },
            logout: {
              url: '/auth/logout',
              method: 'get'
            },
            user: {
              url: '/user',
              propertyName: false
            },
          },
        },
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          redirectUri: `${process.env.API_URL}/auth/social/google/callback`,
          responseType: "code",
          codeChallengeMethod: '',
          endpoints: {
            token: `${process.env.API_URL}/auth/social/google/callback`, // somm backend url to resolve your auth with google and give you the token back
            userInfo: `${process.env.API_URL}/user` // the endpoint to get the user info after you recived the token
          },
        },
        facebook: {
          redirectUri: `${process.env.API_URL}/auth/social/facebook/callback`,
          endpoints: {
            userInfo: `https://graph.facebook.com/v6.0/me?fields=id,name,picture${process.env.FACEBOOK_REDIRECT_URI}`
          },
          clientId: process.env.FACEBOOK_CLIENT_ID,
          scope: ['public_profile', 'email']
        }
      },
      redirect: {
        login: '/',
        logout: '/',
        // home: '/auth/registration-done',
        home: false,
        callback: '/'
      },
    },

    bootstrapVue: {
      bootstrapCSS: true, // Or `css: false`
      bootstrapVueCSS: true, // Or `bvCSS: false`
      bootstrapVue: {
        componentPlugins: [
          'ModalPlugin',
        ],
      }
    },

    VueTippy: {
      directive: "tippy", // => v-tippy
      flipDuration: 0,
      popperOptions: {
        modifiers: {
          preventOverflow: {
            enabled: false
          }
        }
      }
    },

    screen: {
      sm: 0,
      lm: 421,
      st: 581,
      lt: 821,
      sd: 1121,
      ld: 1281,
      hd: 1441
    },

    axios: {
      baseURL: process.env.API_URL,
      changeOrigin: true,
      credentials: true
    },

    sentry: {
      dsn: "https://4d161bed84bd4b51a054cfddbb5cf593@o4504690342690816.ingest.sentry.io/4504690343739392",
      disableClientSide: false,
      disableServerSide: false,
      lazy: true,
      config: {
        // Дополнительные настройки Sentry
        // Например, имя вашего приложения
        release: 'my-app@1.0.0'
      }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      standalone: true,
      transpile: [
        'swiper',
        // 'dom7',
      ],
    },
  }
}
