export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/',
    middleware: 'redirectToPage'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'google-site-verification', content: "ZeiClcfAeb4Ssc-QGjzpPhylmKe2U6-Baks6Fj6AU2A"},
      {hid: 'keywords', name: 'keywords', content: "5c1, الرياضيات, فصل الرياضيات, موريتانيا"},
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: process.env.TITLE
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://g.top4top.io/p_2542ybai71.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://g.top4top.io/p_2542ybai71.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'نتائج فصل الرياضيات'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://g.top4top.io/p_2542ybai71.png'
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
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: process.env.URL,
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2022-12-02T13:30:00.000Z'
      }
    ]
  },
  googleAnalytics: {
    id: 'UA-250977209-1'
  },
  robots: {
    UserAgent: '*',
    Allow: '/'
  }, 
  // pwa for the mobiles
  pwa: {
    manifest: {
      name: process.env.TITLE
    },
    icon: {
      fileName: "icon.png"
    },
    meta: {
      name: "نتائج فصل الرياضيات",
      description: process.env.TEXT,
      theme_color: '#79DC7D',
      lang: 'ar',
      nativeUI: true,
      mobileAppIOS: true
    }
  }
}