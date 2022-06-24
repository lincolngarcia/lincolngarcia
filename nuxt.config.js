import {resolve} from 'path'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "lincolngarcia",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/css/sovereign.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.node = {
          fs: "empty",
          child_process: "empty",
          net: "empty",
          tls: "empty"
      };
  }
  },
  publicRuntimeConfig: {
    google: {
      clientId: '200152911760-vlite9ldco8aied4f4u2f4mmhsa2ihiq.apps.googleusercontent.com',
      cookieName: 'idToken'
    },
    firebase: {
      apiKey: "AIzaSyAsQZq3drsnqq1aUyrX9Thp69doraSk22c",
      authDomain: "lincolngarcia-dev.firebaseapp.com",
      projectId: "lincolngarcia-dev",
      storageBucket: "lincolngarcia-dev.appspot.com",
      messagingSenderId: "502808945733",
      appId: "1:502808945733:web:8a6859f7d4f7698c4eaf2c",
      measurementId: "G-RD27N65NDM",
    },
  },
};
