<template>
  <section class="section-padding relative overflow-hidden bg-brand-50">
    <ClientOnly>
      <HeroThreeScene class="absolute inset-0 opacity-40 md:opacity-80" />
    </ClientOnly>
    <div class="section-container relative z-10">
      <div class="grid min-w-0 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div class="flex min-w-0 max-w-[calc(100vw-2rem)] flex-col gap-6 md:max-w-none md:gap-8">
          <div class="badge w-fit">
            {{ t('hero.badge') }}
          </div>

          <h1 class="max-w-full break-words text-3xl font-bold leading-tight text-brand-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {{ t('hero.title') }}
          </h1>

          <p class="max-w-full break-words text-base leading-relaxed text-brand-600 md:text-lg">
            {{ t('hero.text') }}
          </p>

          <div class="min-w-0 rounded-brand border border-brand-100 bg-white p-4">
            <p class="break-words font-semibold text-brand-900">
              {{ t('hero.noteTitle') }}
            </p>
            <p class="mt-1 break-words text-base text-brand-600">
              {{ t('hero.noteText') }}
            </p>
          </div>

          <div class="grid min-w-0 gap-3 pt-2 sm:grid-cols-2">
            <BaseButton variant="primary" size="md" class="w-full max-w-full" @click="scrollToContact">
              {{ t('hero.primary') }}
            </BaseButton>
            <BaseButton variant="secondary" size="md" class="w-full max-w-full" @click="openWhatsApp">
              {{ t('hero.secondary') }}
            </BaseButton>
          </div>
        </div>

        <DashboardPreview />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { t } = useI18n()

const scrollToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const openWhatsApp = () => {
  window.open(siteConfig.contacts.whatsapp.href, '_blank', 'noopener,noreferrer')
}
</script>
