<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// hreflang alternates, canonical, og:url/og:locale and <html lang> for the current locale
const i18nHead = useLocaleHead({ dir: false, lang: true, seo: true })

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))
</script>
