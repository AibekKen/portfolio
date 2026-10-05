<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ServicesSection v-reveal />
      <TrustSection v-reveal />
      <CasesSection v-reveal />
      <ProcessSection v-reveal />
      <TechStackSection v-reveal />
      <ContactSection v-reveal />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { t } = useI18n()

useHead({
  title: () => t('seo.title'),
  meta: [
    {
      name: 'description',
      content: () => t('seo.description'),
    },
    {
      property: 'og:title',
      content: () => t('seo.ogTitle'),
    },
    {
      property: 'og:description',
      content: () => t('seo.ogDescription'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: `${siteConfig.url}${siteConfig.ogImage}`,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}${siteConfig.logoFull}`,
            email: siteConfig.contacts.email.display,
            telephone: siteConfig.phone,
            areaServed: 'KZ',
            sameAs: [siteConfig.contacts.telegram.href],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: siteConfig.phone,
              email: siteConfig.contacts.email.display,
              availableLanguage: ['Russian', 'Kazakh', 'English'],
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            name: siteConfig.name,
            url: siteConfig.url,
            publisher: { '@id': `${siteConfig.url}/#organization` },
            inLanguage: ['ru-RU', 'en-US', 'kk-KZ'],
          },
        ],
      }),
    },
  ],
})
</script>
