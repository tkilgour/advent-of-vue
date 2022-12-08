import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createI18n } from 'vue-i18n'

import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  locale: "en",
  messages,
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    "ja-JP": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    de: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    fr: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
  },
});

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.use(i18n)

app.mount('#app')
