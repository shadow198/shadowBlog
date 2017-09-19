module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', 'bootstrap/dist/css/bootstrap.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'bootstrap', 'vue-quill-editor'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // plugins: ['~plugins/bootstrap.js', { src: '~plugins/editor.js', ssr: false }]
  // plugins: ['~plugins/bootstrap.js', '~plugins/editor.js']
  plugins: ['~/plugins/bootstrap.js', { src: '~/plugins/edit-quill.js', ssr: false }]
}
