<template>
  <div>
    <AppHeader />
    <main>
      <section class="hero relative overflow-hidden bg-cobalt-700 text-white">
        <div class="section-container relative pb-14 pt-10 md:pb-20 md:pt-14">
          <NuxtLink
            :to="localePath('/')"
            class="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <span aria-hidden="true">←</span>
            {{ t(`${ns}.back`) }}
          </NuxtLink>

          <div class="mt-10 grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div class="min-w-0">
              <p class="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <span class="h-2 w-2 shrink-0 rounded-full bg-gold-400" aria-hidden="true"></span>
                {{ t(`${ns}.hero.eyebrow`) }}
              </p>
              <h1 class="mt-5 max-w-2xl break-words text-[2.2rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
                {{ t(`${ns}.hero.title`) }}
              </h1>
              <p class="mt-6 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
                {{ t(`${ns}.hero.text`) }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  class="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gold-400 px-7 py-3.5 font-bold text-ink transition-colors hover:bg-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt-700"
                  @click="scrollToContact"
                >
                  {{ t(`${ns}.hero.primary`) }}
                </button>
                <a
                  :href="whatsappLink(locale, 'ai')"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  @click="trackContactClick"
                >
                  {{ t(`${ns}.hero.secondary`) }}
                </a>
              </div>

              <p class="mt-5 flex items-start gap-2 text-sm text-blue-100">
                <svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m5 12 5 5L20 7" />
                </svg>
                {{ t(`${ns}.hero.note`) }}
              </p>
            </div>

            <div class="mx-auto w-full max-w-[540px] lg:max-w-none">
              <slot name="visual" />
            </div>
          </div>
        </div>
      </section>

      <section id="scenarios" class="bg-white py-16 md:py-24">
        <div class="section-container">
          <div class="max-w-3xl">
            <p class="eyebrow">{{ t(`${ns}.scenarios.eyebrow`) }}</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              {{ t(`${ns}.scenarios.title`) }}
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
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{{ t(`${ns}.control.eyebrow`) }}</p>
          <h2 class="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {{ t(`${ns}.control.title`) }}
          </h2>
          <dl class="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in control" :key="item.title" class="border-t border-white/15 py-6">
              <dt class="text-lg font-bold text-white">{{ item.title }}</dt>
              <dd class="mt-2 text-base leading-relaxed text-blue-100">{{ item.text }}</dd>
            </div>
          </dl>
          <div v-if="stack.length" class="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 md:flex-row md:items-baseline md:gap-6">
            <p class="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">{{ t(`${ns}.stack.title`) }}</p>
            <ul class="flex flex-wrap gap-x-5 gap-y-2">
              <li v-for="item in stack" :key="item" class="text-sm font-semibold text-blue-50">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case" class="bg-white py-16 md:py-24" v-reveal>
        <div class="section-container grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p class="eyebrow">{{ t(`${ns}.case.eyebrow`) }}</p>
            <h2 class="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.4rem]">
              {{ t(`${ns}.case.title`) }}
            </h2>
            <p class="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{{ t(`${ns}.case.text`) }}</p>
            <NuxtLink
              :to="`${localePath('/')}#cases`"
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cobalt-700 hover:text-cobalt-900"
            >
              {{ t(`${ns}.case.more`) }}
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>

          <figure v-if="showQuote" class="flex flex-col justify-between rounded-[24px] bg-slate-50 p-7 md:p-10">
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

          <ul v-else class="space-y-4 rounded-[24px] bg-slate-50 p-7 md:p-10">
            <li v-for="point in casePoints" :key="point" class="flex items-start gap-3 text-base font-medium text-slate-700 md:text-lg">
              <svg class="mt-1 h-5 w-5 shrink-0 text-cobalt-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m5 12 5 5L20 7" />
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>
      </section>

      <ProcessSection :ns="`${ns}.process`" v-reveal />
      <FaqSection :ns="`${ns}.faq`" v-reveal />
      <ContactSection topic="ai" :copy-ns="`${ns}.contact`" :default-interest="defaultInterest" v-reveal />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { siteConfig, whatsappLink } from '~/config/site'

type Item = { title: string, text: string }

const props = withDefaults(defineProps<{
  // i18n namespace holding seo, hero, scenarios, control, case, process, faq and contact
  ns: string
  // Route of the page, used for structured data
  path: string
  serviceType: string
  // Index into ai.contact.interests that the form starts with
  defaultInterest?: number
  // Show the Good Deal quote instead of the case points
  showQuote?: boolean
}>(), { defaultInterest: undefined, showQuote: false })

const { t, tm, te, locale } = useI18n()
const localePath = useLocalePath()
const { trackContactClick } = useAdsConversion()

const scenarios = computed(() => tm(`${props.ns}.scenarios.items`) as Item[])
const control = computed(() => tm(`${props.ns}.control.items`) as Item[])
const stack = computed(() => (te(`${props.ns}.stack.title`) ? tm(`${props.ns}.stack.items`) as string[] : []))
const casePoints = computed(() => (te(`${props.ns}.case.points`) ? tm(`${props.ns}.case.points`) as string[] : []))

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

useHead(() => ({
  title: t(`${props.ns}.seo.title`),
  meta: [
    { name: 'description', content: t(`${props.ns}.seo.description`) },
    { property: 'og:title', content: t(`${props.ns}.seo.ogTitle`) },
    { property: 'og:description', content: t(`${props.ns}.seo.ogDescription`) },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${siteConfig.url}${siteConfig.ogImage}` },
  ],
  script: [
    {
      key: 'service-jsonld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: t(`${props.ns}.hero.eyebrow`),
        description: t(`${props.ns}.seo.description`),
        serviceType: props.serviceType,
        url: `${siteConfig.url}${localePath(props.path)}`,
        areaServed: 'KZ',
        provider: { '@id': `${siteConfig.url}/#organization`, name: siteConfig.name },
      }),
    },
  ],
}))
</script>

<style scoped>
.hero {
  background-image: radial-gradient(60% 70% at 85% 10%, rgba(64, 140, 255, 0.55), transparent 70%),
    radial-gradient(50% 60% at 0% 100%, rgba(5, 28, 82, 0.6), transparent 70%);
}
</style>
