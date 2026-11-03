<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
    <nav class="section-container flex items-center justify-between gap-6 py-3.5">
      <BrandMark />

      <div class="hidden items-center gap-7 whitespace-nowrap lg:flex">
        <a
          v-for="link in links"
          :key="link.hash"
          :href="`${localePath('/')}#${link.hash}`"
          class="nav-link text-[0.95rem] font-medium text-slate-600 transition-colors hover:text-ink"
        >
          {{ t(link.label) }}
        </a>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <div class="flex rounded-full border border-slate-200 p-0.5" :aria-label="t('nav.languageLabel')" role="group">
          <NuxtLink
            v-for="option in languageOptions"
            :key="option.code"
            :to="switchLocalePath(option.code)"
            :hreflang="option.code"
            :class="[
              'flex min-h-8 items-center rounded-full px-2.5 text-xs font-bold transition-colors',
              locale === option.code ? 'bg-ink text-white' : 'text-slate-500 hover:text-ink',
            ]"
            :aria-current="locale === option.code ? 'true' : undefined"
          >
            {{ option.label }}
          </NuxtLink>
        </div>
        <button
          type="button"
          class="inline-flex min-h-11 items-center rounded-full bg-cobalt-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2"
          @click="scrollToContact"
        >
          {{ t('nav.cta') }}
        </button>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-slate-100 lg:hidden"
        :aria-label="t('nav.menu')"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span :class="['h-0.5 w-5 bg-ink transition-transform', isMenuOpen && 'translate-y-2 rotate-45']"></span>
        <span :class="['h-0.5 w-5 bg-ink transition-opacity', isMenuOpen && 'opacity-0']"></span>
        <span :class="['h-0.5 w-5 bg-ink transition-transform', isMenuOpen && '-translate-y-2 -rotate-45']"></span>
      </button>
    </nav>

    <transition
      enter-active-class="transition duration-200 ease-out"
      leave-active-class="transition duration-150 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden">
        <a
          v-for="link in links"
          :key="link.hash"
          :href="`${localePath('/')}#${link.hash}`"
          class="block border-b border-slate-100 py-3.5 text-base font-semibold text-ink"
          @click="isMenuOpen = false"
        >
          {{ t(link.label) }}
        </a>
        <div class="mt-4 flex rounded-full border border-slate-200 p-1" :aria-label="t('nav.languageLabel')" role="group">
          <NuxtLink
            v-for="option in languageOptions"
            :key="option.code"
            :to="switchLocalePath(option.code)"
            :hreflang="option.code"
            :class="[
              'flex min-h-10 flex-1 items-center justify-center rounded-full text-sm font-bold transition-colors',
              locale === option.code ? 'bg-ink text-white' : 'text-slate-500',
            ]"
            :aria-current="locale === option.code ? 'true' : undefined"
          >
            {{ option.label }}
          </NuxtLink>
        </div>
        <button
          type="button"
          class="mt-3 flex min-h-12 w-full items-center justify-center rounded-full bg-cobalt-700 font-semibold text-white"
          @click="scrollToContact"
        >
          {{ t('nav.cta') }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { languageOptions } from '~/i18n/messages'

const links = [
  { hash: 'services', label: 'nav.services' },
  { hash: 'cases', label: 'nav.cases' },
  { hash: 'process', label: 'nav.process' },
  { hash: 'development', label: 'nav.dev' },
  { hash: 'faq', label: 'nav.faq' },
]

const isMenuOpen = ref(false)
const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const scrollToContact = () => {
  isMenuOpen.value = false

  // Any page with its own contact form scrolls to it; the rest go to the home page form
  const element = document.getElementById('contact')

  if (!element) {
    router.push(`${localePath('/')}#contact`)
    return
  }

  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 2px;
  background: #e3a512;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
