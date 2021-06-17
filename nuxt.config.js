import colors from "vuetify/es5/util/colors";
const base = "/frontend";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - workinprogress",
    title: "Sichere Zuflucht",
    htmlAttrs: {
      lang: "de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Wir schaffen Zufluchtsorte – für Gewalt erleidende Frauen und Kinder in der Corona-Krise. Sichere-Zuflucht ist ein Plattform, auf der leerstehende Wohnungen, Apartments oder Mietwohnungen den Frauenhäusern als Zuflucht angeboten werden können"
      },
      { property: "og:title", content: "Sichere Zuflucht" },
      {
        property: "og:description",
        content:
          "Wir schaffen Zufluchtsorte – für Gewalt erleidende Frauen und Kinder in der Corona-Krise. Sichere-Zuflucht ist ein Plattform, auf der leerstehende Wohnungen, Apartments oder Mietwohnungen den Frauenhäusern als Zuflucht angeboten werden können"
      },
      {
        property: "og:image",
        content:
          "https://assets-global.website-files.com/5e95aa93bef5360e2788a86e/5e9c77999aae7e1abab9e645_sichere-zuflucht-logo-lang-2.svg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "twitter:description",
        content:
          "Wir schaffen Zufluchtsorte – für Gewalt erleidende Frauen und Kinder in der Corona-Krise. Sichere-Zuflucht ist ein Plattform, auf der leerstehende Wohnungen, Apartments oder Mietwohnungen den Frauenhäusern als Zuflucht angeboten werden können"
      },
      {
        property: "twitter:title",
        content: "Sichere Zuflucht"
      },
      {
        property: "twitter:image",
        content:
          "https://assets-global.website-files.com/5e95aa93bef5360e2788a86e/5e9c77999aae7e1abab9e645_sichere-zuflucht-logo-lang-2.svg"
      },
      { content: "summary_large_image", name: "twitter:card" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: base + "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    options: {
      customProperties: true
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.pink.lighten3, // purple.lighten3,
          accent: colors.pink.darken4, // grey.darken3,
          secondary: colors.yellow.darken3, // amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.teal.darken1
        },
        dark: {
          primary: colors.purple.lighten4,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.teal.darken1
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
