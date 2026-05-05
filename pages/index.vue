<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CasesSection />
      <ProcessSection />
      <TechStackSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { locale, t } = useI18n()

definePageMeta({
  layout: 'default',
})

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
      content: siteConfig.logo.src,
    },
  ],
  htmlAttrs: {
    lang: locale,
  },
})
</script>
