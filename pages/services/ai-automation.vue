<template>
  <div>
    <AppHeader />
    <main>
      <AutomationHero />

      <section id="scenarios" class="bg-white py-16 md:py-24">
        <div class="section-container">
          <div class="max-w-3xl">
            <p class="eyebrow">{{ t('automation.scenarios.eyebrow') }}</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              {{ t('automation.scenarios.title') }}
            </h2>
          </div>
          <ol class="mt-10 grid border-t border-slate-200 md:grid-cols-2 md:gap-x-12">
            <li v-for="(item, index) in scenarios" :key="item.title" class="flex gap-5 border-b border-slate-200 py-7">
              <span class="pt-1 text-sm font-bold tabular-nums text-cobalt-600">{{ String(index + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="text-xl font-extrabold tracking-tight text-ink md:text-2xl">{{ item.title }}</h3>
                <p class="mt-2 text-base leading-relaxed text-slate-600">{{ item.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="control" class="bg-cobalt-950 py-16 text-white md:py-24" v-reveal>
        <div class="section-container">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{{ t('automation.control.eyebrow') }}</p>
          <h2 class="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {{ t('automation.control.title') }}
          </h2>
          <dl class="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in control" :key="item.title" class="border-t border-white/15 py-6">
              <dt class="text-lg font-bold text-white">{{ item.title }}</dt>
              <dd class="mt-2 text-base leading-relaxed text-blue-100">{{ item.text }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="case" class="bg-white py-16 md:py-24" v-reveal>
        <div class="section-container grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p class="eyebrow">{{ t('automation.case.eyebrow') }}</p>
            <h2 class="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.4rem]">
              {{ t('automation.case.title') }}
            </h2>
            <p class="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{{ t('automation.case.text') }}</p>
            <NuxtLink
              :to="`${localePath('/')}#cases`"
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cobalt-700 hover:text-cobalt-900"
            >
              {{ t('automation.case.more') }}
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
          <figure class="flex flex-col justify-between rounded-[24px] bg-slate-50 p-7 md:p-10">
            <span class="text-6xl font-extrabold leading-none text-gold-400" aria-hidden="true">“</span>
            <blockquote class="-mt-4 text-lg font-medium leading-relaxed text-ink md:text-xl" lang="ru">
              {{ t('ai.case.quote') }}
            </blockquote>
            <figcaption class="mt-8 flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-full bg-cobalt-700 font-bold text-white" aria-hidden="true">
                {{ t('ai.case.author').charAt(0) }}
              </span>
              <span>
                <span class="block font-bold text-ink">{{ t('ai.case.author') }}</span>
                <span class="block text-sm text-slate-500">{{ t('ai.case.role') }}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <ProcessSection ns="automation.process" v-reveal />
      <FaqSection ns="automation.faq" v-reveal />
      <ContactSection topic="ai" copy-ns="automation.contact" :default-interest="3" v-reveal />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

type Item = { title: string, text: string }

const { t, tm } = useI18n()
const localePath = useLocalePath()
const scenarios = computed(() => tm('automation.scenarios.items') as Item[])
const control = computed(() => tm('automation.control.items') as Item[])

useHead(() => ({
  title: t('automation.seo.title'),
  meta: [
    { name: 'description', content: t('automation.seo.description') },
    { property: 'og:title', content: t('automation.seo.ogTitle') },
    { property: 'og:description', content: t('automation.seo.ogDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${siteConfig.url}${siteConfig.ogImage}` },
  ],
  script: [
    {
      key: 'automation-jsonld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: t('automation.hero.eyebrow'),
        description: t('automation.seo.description'),
        serviceType: 'AI business process automation',
        url: `${siteConfig.url}${localePath('/services/ai-automation')}`,
        areaServed: 'KZ',
        provider: { '@id': `${siteConfig.url}/#organization`, name: siteConfig.name },
      }),
    },
  ],
}))
</script>
