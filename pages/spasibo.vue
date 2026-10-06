<template>
  <div class="flex min-h-screen flex-col bg-brand-50">
    <AppHeader />
    <main class="flex flex-1 items-center">
      <section class="section-container section-padding w-full">
        <div class="mx-auto max-w-2xl rounded-brand-lg border border-brand-100 bg-white p-6 text-center shadow-sm md:p-10">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
            <svg viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </div>

          <h1 class="mt-6 text-3xl text-brand-900 md:text-4xl">
            {{ t('thanks.title') }}
          </h1>
          <p class="mt-4 text-brand-600">
            {{ t('thanks.text') }}
          </p>

          <div class="mt-8 text-left">
            <h2 class="text-xl font-bold text-brand-900 md:text-2xl">
              {{ t('thanks.stepsTitle') }}
            </h2>
            <ol class="mt-4 space-y-3">
              <li v-for="(step, index) in steps" :key="step" class="flex gap-3 rounded-brand bg-brand-50 p-4">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                  {{ index + 1 }}
                </span>
                <span class="font-semibold text-brand-700">{{ step }}</span>
              </li>
            </ol>
          </div>

          <p class="mt-8 font-semibold text-brand-900">
            {{ t('thanks.faster') }}
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              :href="siteConfig.contacts.whatsapp.href"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center justify-center"
              @click="trackContactClick"
            >
              WhatsApp
            </a>
            <a
              :href="siteConfig.contacts.telegram.href"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center justify-center"
              @click="trackContactClick"
            >
              Telegram
            </a>
          </div>

          <div class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <NuxtLink :to="`${localePath('/')}#cases`" class="text-brand-primary hover:text-brand-primary-dark">
              {{ t('thanks.cases') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="text-brand-primary hover:text-brand-primary-dark">
              {{ t('thanks.home') }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { t, tm } = useI18n()
const localePath = useLocalePath()
const { trackContactClick } = useAdsConversion()
const steps = computed(() => tm('thanks.steps') as string[])

// Conversion page for Google Ads: keep it out of search results
useHead({
  title: () => t('thanks.seoTitle'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
