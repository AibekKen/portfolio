import { siteConfig } from '../../config/site'

// Keep in sync with nuxt.config i18n locales (Russian is the unprefixed default)
const locales = [
  { code: 'ru', hreflang: 'ru-RU', prefix: '' },
  { code: 'en', hreflang: 'en-US', prefix: '/en' },
  { code: 'kk', hreflang: 'kk-KZ', prefix: '/kk' },
]

const pages: { path: string, locales?: string[], priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/razrabotka-mobilnyh-prilozheniy', locales: ['ru'], priority: '0.9' },
  { path: '/services/mobile-apps', priority: '0.8' },
  { path: '/services/websites', priority: '0.6' },
  { path: '/privacy-policy', priority: '0.2' },
  { path: '/terms-of-use', priority: '0.2' },
]

const toUrl = (prefix: string, path: string) => `${siteConfig.url}${prefix}${path === '/' && prefix ? '' : path}`

export default defineEventHandler((event) => {
  const entries = pages.flatMap((page) => {
    const pageLocales = locales.filter((locale) => !page.locales || page.locales.includes(locale.code))
    const alternates = pageLocales.length > 1
      ? [
          ...pageLocales.map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale.hreflang}" href="${toUrl(locale.prefix, page.path)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${toUrl('', page.path)}"/>`,
        ].join('\n')
      : ''

    return pageLocales.map((locale) => [
      '  <url>',
      `    <loc>${toUrl(locale.prefix, page.path)}</loc>`,
      alternates,
      `    <priority>${page.priority}</priority>`,
      '  </url>',
    ].filter(Boolean).join('\n'))
  })

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
  ].join('\n')
})
