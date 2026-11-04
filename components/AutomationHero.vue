<template>
  <section class="hero relative overflow-hidden bg-cobalt-700 text-white">
    <div class="section-container relative pb-14 pt-10 md:pb-20 md:pt-14">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
      >
        <span aria-hidden="true">←</span>
        {{ t('automation.back') }}
      </NuxtLink>

      <div class="mt-10 grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div class="min-w-0">
          <p class="flex items-center gap-2 text-sm font-semibold text-blue-100">
            <span class="h-2 w-2 shrink-0 rounded-full bg-gold-400" aria-hidden="true"></span>
            {{ t('automation.hero.eyebrow') }}
          </p>
          <h1 class="mt-5 max-w-2xl break-words text-[2.2rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
            {{ t('automation.hero.title') }}
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
            {{ t('automation.hero.text') }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              class="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gold-400 px-7 py-3.5 font-bold text-ink transition-colors hover:bg-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt-700"
              @click="scrollToContact"
            >
              {{ t('automation.hero.primary') }}
            </button>
            <a
              :href="whatsappLink(locale, 'ai')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              @click="trackContactClick"
            >
              {{ t('automation.hero.secondary') }}
            </a>
          </div>

          <p class="mt-5 flex items-start gap-2 text-sm text-blue-100">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m5 12 5 5L20 7" />
            </svg>
            {{ t('automation.hero.note') }}
          </p>
        </div>

        <!-- One request travelling from the inbox to the CRM -->
        <figure class="mx-auto w-full max-w-[540px] rounded-[24px] bg-white p-5 text-ink shadow-2xl shadow-cobalt-950/40 sm:p-6 lg:max-w-none">
          <figcaption class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('automation.flow.label') }}</figcaption>

          <div class="mt-4 rounded-2xl bg-slate-50 p-4">
            <p class="flex items-center gap-2 text-xs font-bold text-slate-500">
              <svg class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                <path d="m22 8-10 6L2 8" />
              </svg>
              {{ t('automation.flow.inLabel') }}
            </p>
            <p class="mt-2 text-sm leading-relaxed text-slate-700">{{ t('automation.flow.input') }}</p>
          </div>

          <div class="flex justify-center py-2 text-cobalt-600" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          <div class="rounded-2xl border border-cobalt-600/20 bg-cobalt-700/[0.04] p-4">
            <p class="flex items-center gap-2 text-xs font-bold text-cobalt-700">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-ink text-[0.55rem] font-extrabold text-white" aria-hidden="true">AI</span>
              {{ t('automation.flow.agentLabel') }}
            </p>
            <dl class="mt-3 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
              <div v-for="field in fields" :key="field.key" class="min-w-0">
                <dt class="text-xs font-semibold text-slate-500">{{ field.key }}</dt>
                <dd class="font-semibold text-ink">{{ field.value }}</dd>
              </div>
            </dl>
          </div>

          <div class="flex justify-center py-2 text-cobalt-600" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          <div class="flex items-start gap-3 rounded-2xl bg-green-50 p-4">
            <svg class="mt-0.5 h-5 w-5 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m5 12 5 5L20 7" />
            </svg>
            <p class="text-sm font-semibold text-green-900">
              <span class="block text-xs font-bold uppercase tracking-[0.14em] text-green-700">{{ t('automation.flow.outLabel') }}</span>
              {{ t('automation.flow.output') }}
            </p>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whatsappLink } from '~/config/site'

type Field = { key: string, value: string }

const { t, tm, locale } = useI18n()
const localePath = useLocalePath()
const { trackContactClick } = useAdsConversion()
const fields = computed(() => tm('automation.flow.fields') as Field[])

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  background-image: radial-gradient(60% 70% at 85% 10%, rgba(64, 140, 255, 0.55), transparent 70%),
    radial-gradient(50% 60% at 0% 100%, rgba(5, 28, 82, 0.6), transparent 70%);
}
</style>
