<template>
  <div>
    <AppHeader />
    <main>
      <AiHero />
      <AiUseCases v-reveal />
      <AiServices v-reveal />
      <AiLocalLlm v-reveal />
      <AiCase v-reveal />
      <ProcessSection ns="ai.process" v-reveal />
      <AiDevelopment v-reveal />
      <CasesSection />
      <FaqSection ns="ai.faq" v-reveal />
      <ContactSection topic="ai" v-reveal />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

type AiService = { title: string, text: string }

const { t, tm } = useI18n()

useHead(() => ({
  title: t('ai.seo.title'),
  meta: [
    { name: 'description', content: t('ai.seo.description') },
    { property: 'og:title', content: t('ai.seo.ogTitle') },
    { property: 'og:description', content: t('ai.seo.ogDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${siteConfig.url}${siteConfig.ogImage}` },
  ],
  script: [
    {
      key: 'home-jsonld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}${siteConfig.logoFull}`,
            image: `${siteConfig.url}${siteConfig.ogImage}`,
            description: t('ai.jsonld.description'),
            email: siteConfig.contacts.email.display,
            telephone: siteConfig.phone,
            address: { '@type': 'PostalAddress', addressLocality: 'Almaty', addressCountry: 'KZ' },
            areaServed: 'KZ',
            sameAs: [siteConfig.contacts.telegram.href],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: siteConfig.phone,
              email: siteConfig.contacts.email.display,
              availableLanguage: ['Russian', 'Kazakh', 'English'],
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: t('ai.services.title'),
              itemListElement: (tm('ai.services.items') as AiService[]).map((item) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: item.title, description: item.text },
              })),
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            name: siteConfig.name,
            url: siteConfig.url,
            publisher: { '@id': `${siteConfig.url}/#organization` },
            inLanguage: ['ru-RU', 'kk-KZ', 'en-US'],
          },
        ],
      }),
    },
  ],
}))
</script>
