<template>
  <section class="hero relative overflow-hidden bg-cobalt-700 text-white">
    <div class="hero-grid" aria-hidden="true"></div>

    <div class="section-container relative pb-10 pt-12 md:pb-14 md:pt-16 lg:pt-20">
      <div class="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div class="min-w-0">
          <p class="flex items-center gap-2 text-sm font-semibold text-blue-100">
            <span class="h-2 w-2 shrink-0 rounded-full bg-gold-400" aria-hidden="true"></span>
            {{ t('ai.hero.eyebrow') }}
          </p>

          <h1 class="mt-5 max-w-2xl break-words text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            {{ t('ai.hero.title') }}
          </h1>

          <p class="mt-6 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
            {{ t('ai.hero.text') }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              class="inline-flex min-h-13 items-center justify-center rounded-full bg-gold-400 px-7 py-3.5 font-bold text-ink transition-colors hover:bg-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt-700"
              @click="scrollToContact"
            >
              {{ t('ai.hero.primary') }}
            </button>
            <a
              :href="whatsappLink(locale, 'ai')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              @click="trackContactClick"
            >
              <svg class="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.03 4C9.41 4 4.04 9.35 4.04 15.95c0 2.1.55 4.15 1.6 5.95L4 28l6.25-1.64a12.02 12.02 0 0 0 5.78 1.47h.01c6.61 0 11.99-5.35 11.99-11.94C28.03 9.35 22.65 4 16.03 4Zm5.46 14.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.19-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.11 3.2 5.1 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              {{ t('ai.hero.secondary') }}
            </a>
          </div>

          <p class="mt-5 flex items-start gap-2 text-sm text-blue-100">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m5 12 5 5L20 7" />
            </svg>
            {{ t('ai.hero.note') }}
          </p>
        </div>

        <AiDemo class="mx-auto w-full max-w-[540px] lg:max-w-none" />
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 md:mt-16 md:flex-row md:items-center md:gap-8">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
          {{ t('ai.proof.label') }}
        </p>
        <ul class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <li v-for="client in clients" :key="client" class="text-xl font-extrabold tracking-tight text-white">
            {{ client }}
          </li>
        </ul>
        <p class="text-sm text-blue-200 md:ml-auto md:max-w-xs md:text-right">
          {{ t('ai.proof.note') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whatsappLink } from '~/config/site'

const { t, tm, locale } = useI18n()
const { trackContactClick } = useAdsConversion()

const clients = computed(() => tm('ai.proof.clients') as string[])

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  background-image: radial-gradient(60% 70% at 85% 10%, rgba(64, 140, 255, 0.55), transparent 70%),
    radial-gradient(50% 60% at 0% 100%, rgba(5, 28, 82, 0.6), transparent 70%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 70% at 70% 30%, #000 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 70% 30%, #000 20%, transparent 75%);
  pointer-events: none;
}

.min-h-13 {
  min-height: 3.25rem;
}
</style>
