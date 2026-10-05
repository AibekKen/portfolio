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
