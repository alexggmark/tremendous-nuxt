
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 2.) use a style for syntax highlighting
    'highlight.js/styles/monokai-sublime.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/api.js',
    { src: '@/plugins/splitting.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-highlightjs'
    ]
    // extendMarkdown: (md) => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-highlightjs'))
    // }
    // highlight (str, lang) {
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return hljs.highlight(lang, str).value
    //     } catch (__) {}
    //     return '' // use external default escaping
    //   }
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
