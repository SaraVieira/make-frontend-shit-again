module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Make Frontend Shit Again",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Make Frontend Shit Again",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Caveat",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    script: [
      {
        "data-domain": "makefrontendshitagain.party",
        src: "https://analytics.iamsaravieira.com/js/plausible.js",
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  router: {
    middleware: "i18n",
  },
  plugins: ["~/plugins/i18n.js"],
  generate: {
    routes: ["/", "/pt"],
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {},
  },
}
