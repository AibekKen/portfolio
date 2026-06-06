<template>
  <div>
    <AppHeader />

    <main class="bg-white">
      <section class="overflow-hidden bg-brand-50 py-10 md:py-14 lg:py-18">
        <div class="section-container">
          <NuxtLink
            to="/#services"
            class="inline-flex min-h-10 items-center rounded-brand border border-brand-100 bg-white px-4 text-sm font-bold text-brand-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
          >
            {{ t('servicePages.back') }}
          </NuxtLink>

          <div class="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
            <div>
              <span class="badge">{{ page.badge }}</span>
              <h1 class="mt-5 max-w-4xl text-brand-900">
                {{ page.title }}
              </h1>
              <p class="mt-5 max-w-3xl text-brand-600">
                {{ page.text }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  to="/#contact"
                  class="inline-flex min-h-12 items-center justify-center rounded-brand bg-brand-primary px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 md:px-8 md:py-4"
                >
                  {{ t('servicePages.discuss') }}
                </NuxtLink>
                <a
                  :href="siteConfig.contacts.whatsapp.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex min-h-12 items-center justify-center rounded-brand border-2 border-brand-primary bg-white px-6 py-3 text-center font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 md:px-8 md:py-4"
                >
                  WhatsApp
                </a>
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="stat in page.stats"
                  :key="stat.label"
                  class="rounded-brand border border-brand-100 bg-white p-4 shadow-sm"
                >
                  <div class="text-lg font-black text-brand-primary">
                    {{ stat.value }}
                  </div>
                  <div class="mt-1 text-sm font-semibold text-brand-700">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>

            <ServiceIllustration :kind="illustrationKind" :label="page.illustrationLabel" />
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="section-container">
          <div class="grid gap-5 md:grid-cols-2">
            <BaseCard v-for="item in page.scope" :key="item.title">
              <h2 class="text-2xl font-bold text-brand-900 md:text-3xl">
                {{ item.title }}
              </h2>
              <p class="mt-3 text-brand-600">
                {{ item.text }}
              </p>
            </BaseCard>
          </div>
        </div>
      </section>

      <section class="section-padding bg-brand-50">
        <div class="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span class="badge">{{ t('servicePages.processTitle') }}</span>
            <h2 class="mt-4 text-brand-900">
              {{ page.ctaTitle }}
            </h2>
            <p class="mt-4 text-brand-600">
              {{ page.ctaText }}
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(step, index) in page.process"
              :key="step"
              class="flex gap-4 rounded-brand border border-brand-100 bg-white p-5 shadow-sm"
            >
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-brand-primary text-sm font-black text-white">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <p class="text-base font-semibold text-brand-700 md:text-lg">
                {{ step }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="section-container grid gap-8 lg:grid-cols-2">
          <div class="rounded-brand-lg border border-brand-100 bg-white p-6 shadow-sm md:p-8">
            <h2 class="text-3xl font-bold text-brand-900 md:text-4xl">
              {{ t('servicePages.deliverablesTitle') }}
            </h2>
            <ul class="mt-6 space-y-3">
              <li
                v-for="item in page.deliverables"
                :key="item"
                class="flex gap-3 text-base font-semibold text-brand-700 md:text-lg"
              >
                <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-brand-lg border border-brand-100 bg-brand-900 p-6 text-white shadow-sm md:p-8">
            <div class="flex flex-wrap gap-3">
              <span
                v-for="item in page.stack"
                :key="item"
                class="rounded-full border border-blue-700 bg-blue-950 px-4 py-2 text-sm font-bold text-blue-100"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

type ServicePageKey = 'websites' | 'mobileApps'

type ServicePage = {
  badge: string
  title: string
  text: string
  meta: string
  illustrationLabel: string
  stats: { value: string; label: string }[]
  scope: { title: string; text: string }[]
  process: string[]
  deliverables: string[]
  stack: string[]
  ctaTitle: string
  ctaText: string
}

const props = defineProps<{
  pageKey: ServicePageKey
}>()

const { locale, tm, t } = useI18n()
const page = computed(() => tm(`servicePages.${props.pageKey}`) as ServicePage)
const illustrationKind = computed(() => (props.pageKey === 'mobileApps' ? 'mobile' : 'website'))

useHead({
  title: () => `${page.value.title} — ${siteConfig.name}`,
  meta: [
    {
      name: 'description',
      content: () => page.value.meta,
    },
    {
      property: 'og:title',
      content: () => `${page.value.title} — ${siteConfig.name}`,
    },
    {
      property: 'og:description',
      content: () => page.value.meta,
    },
  ],
  htmlAttrs: {
    lang: locale,
  },
})
</script>
