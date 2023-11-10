// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/ui", "@pinia/nuxt"],
  nitro: {
    preset: "firebase",
    firebase: { nodeVersion: "18", gen: 2, httpsOptions: { region: "us-central1", maxInstances: 3 } }
  }
})

// https://us-central1-feedback-management-404622.cloudfunctions.net/feedback