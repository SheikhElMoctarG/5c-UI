export default {
  target: 'static',
  router: {
    base: '/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITLE,
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.TEXT},
      { name: 'format-detection', content: 'telephone=yes' },
      {hid: 'og:title', name: 'og:title', content: process.env.TITLE},
      { name: 'google-site-verification', content: "ZeiClcfAeb4Ssc-QGjzpPhylmKe2U6-Baks6Fj6AU2A"},
      {hid: 'keywords', name: 'keywords', content: "5c1, الرياضيات, فصل الرياضيات, موريتانيا"},
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://k.top4top.io/p_25249p2r71.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://k.top4top.io/p_25249p2r71.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: process.env.TITLE
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://k.top4top.io/p_25249p2r71.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'UA-XXX-X'
  }

}
