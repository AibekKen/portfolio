// https://nuxt.com/docs/api/configuration/nuxt-config
const googleAdsId = 'AW-18212249649'
const siteUrl = 'https://kenzcore.com'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramId: process.env.TELEGRAM_ID,
    public: {
      googleAdsId,
      // Conversion labels from Google Ads → Goals → Conversions → Tag setup
      googleAdsLeadLabel: '',
      googleAdsContactLabel: '',
    },
  },
  css: ['~/assets/styles/main.css'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // Russian lives at the root; other languages get their own URLs so each version is indexable
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    baseUrl: siteUrl,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'preferred-locale',
      redirectOn: 'root',
      fallbackLocale: 'ru',
    },
    locales: [
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'kk', language: 'kk-KZ', name: 'Қазақша' },
    ],
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512x512.png' }
      ],
    }
  }
})
