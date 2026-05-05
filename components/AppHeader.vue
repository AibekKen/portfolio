<template>
  <header class="bg-white border-b border-brand-100 sticky top-0 z-50">
    <nav class="section-container flex items-center justify-between py-4 md:py-5">
      <div class="flex min-w-0 items-center">
        <img
          :src="siteConfig.logo.src"
          :alt="siteConfig.logo.alt"
          class="h-12 w-auto max-w-56 object-contain md:h-14 md:max-w-72"
        />
      </div>

      <div class="hidden md:flex items-center gap-8">
        <a
          href="/#services"
          class="text-brand-700 hover:text-brand-primary font-medium transition-colors"
        >
          {{ t('nav.services') }}
        </a>
        <a
          href="/#cases"
          class="text-brand-700 hover:text-brand-primary font-medium transition-colors"
        >
          {{ t('nav.cases') }}
        </a>
        <a
          href="/#process"
          class="text-brand-700 hover:text-brand-primary font-medium transition-colors"
        >
          {{ t('nav.process') }}
        </a>
        <a
          href="/#contact"
          class="text-brand-700 hover:text-brand-primary font-medium transition-colors"
        >
          {{ t('nav.contact') }}
        </a>
      </div>

      <div class="hidden items-center gap-4 md:flex">
        <div class="flex rounded-brand border border-brand-100 bg-brand-50 p-1" :aria-label="t('nav.languageLabel')" role="group">
          <button
            v-for="option in languageOptions"
            :key="option.code"
            type="button"
            :class="[
              'min-h-9 rounded-[6px] px-3 text-sm font-bold transition-colors',
              locale === option.code ? 'bg-white text-brand-primary shadow-sm' : 'text-brand-600 hover:text-brand-900',
            ]"
            :aria-pressed="locale === option.code"
            @click="setLocale(option.code)"
          >
            {{ option.label }}
          </button>
        </div>
        <BaseButton variant="primary" @click="scrollToContact">
          {{ t('nav.cta') }}
        </BaseButton>
      </div>

      <button
        class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="t('nav.menu')"
      >
        <span :class="['w-6 h-0.5 bg-brand-900 transition-all', isMenuOpen && 'rotate-45 translate-y-2']"></span>
        <span :class="['w-6 h-0.5 bg-brand-900 transition-all', isMenuOpen && 'opacity-0']"></span>
        <span :class="['w-6 h-0.5 bg-brand-900 transition-all', isMenuOpen && '-rotate-45 -translate-y-2']"></span>
      </button>
    </nav>

    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t border-brand-100 px-4 py-4"
      >
        <div class="flex flex-col gap-3">
          <a
            href="/#services"
            class="text-brand-900 font-medium hover:text-brand-primary transition-colors py-3"
            @click="isMenuOpen = false"
          >
            {{ t('nav.services') }}
          </a>
          <a
            href="/#cases"
            class="text-brand-900 font-medium hover:text-brand-primary transition-colors py-3"
            @click="isMenuOpen = false"
          >
            {{ t('nav.cases') }}
          </a>
          <a
            href="/#process"
            class="text-brand-900 font-medium hover:text-brand-primary transition-colors py-3"
            @click="isMenuOpen = false"
          >
            {{ t('nav.process') }}
          </a>
          <a
            href="/#contact"
            class="text-brand-900 font-medium hover:text-brand-primary transition-colors py-3"
            @click="isMenuOpen = false"
          >
            {{ t('nav.contact') }}
          </a>
          <div class="flex rounded-brand border border-brand-100 bg-brand-50 p-1" :aria-label="t('nav.languageLabel')" role="group">
            <button
              v-for="option in languageOptions"
              :key="option.code"
              type="button"
              :class="[
                'min-h-10 flex-1 rounded-[6px] px-3 text-sm font-bold transition-colors',
                locale === option.code ? 'bg-white text-brand-primary shadow-sm' : 'text-brand-600 hover:text-brand-900',
              ]"
              :aria-pressed="locale === option.code"
              @click="setLocale(option.code)"
            >
              {{ option.label }}
            </button>
          </div>
          <BaseButton
            variant="primary"
            class="w-full"
            @click="scrollToContact"
          >
            {{ t('nav.cta') }}
          </BaseButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '~/config/site'
import { languageOptions } from '~/i18n/messages'

const isMenuOpen = ref(false)
const { locale, setLocale, t } = useI18n()
const route = useRoute()
const router = useRouter()

const scrollToContact = () => {
  isMenuOpen.value = false

  if (route.path !== '/') {
    router.push('/#contact')
    return
  }

  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0.125rem;
  background-color: #0B63F6;
  transition: width 200ms ease;
}

a:hover::after {
  width: 100%;
}
</style>
