<template>
  <LegalPage :content="content" :back-label="t('legal.back')" />
</template>

<script setup lang="ts">
import { termsOfUseContent, type LegalLocale } from '~/config/legal'
import { siteConfig } from '~/config/site'

const { locale, t } = useI18n()

const content = computed(() => {
  const currentLocale = locale.value as LegalLocale

  return termsOfUseContent[currentLocale] ?? termsOfUseContent.en
})

useHead({
  title: () => `${content.value.title} — ${siteConfig.name}`,
  meta: [
    {
      name: 'description',
      content: () => content.value.description,
    },
  ],
  htmlAttrs: {
    lang: locale,
  },
})
</script>
