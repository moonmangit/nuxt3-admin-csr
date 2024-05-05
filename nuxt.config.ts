// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  components: {
    dirs: [
      {
        path: "@/components/elements",
        prefix: "el",
      },
      {
        path: "@/components/parts",
        prefix: "part",
      },
      {
        path: "@/components/utils",
        prefix: "util",
      },
    ],
  },
  googleFonts: {
    families: {
      "Noto Sans Thai": [400, 700],
    },
  },
});
