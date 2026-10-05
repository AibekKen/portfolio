<template>
  <div class="flex min-h-screen flex-col bg-brand-50">
    <AppHeader />
    <main class="flex flex-1 items-center">
      <section class="section-container section-padding w-full text-center">
        <p class="text-6xl font-black text-brand-primary md:text-8xl">
          {{ error.statusCode }}
        </p>
        <h1 class="mt-6 text-brand-900">
          {{ isNotFound ? t('error.notFoundTitle') : t('error.genericTitle') }}
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-brand-600">
          {{ isNotFound ? t('error.notFoundText') : t('error.genericText') }}
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BaseButton variant="primary" @click="goHome">
            {{ t('error.home') }}
          </BaseButton>
          <a
            :href="siteConfig.contacts.whatsapp.href"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center justify-center"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { siteConfig } from '~/config/site'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const localePath = useLocalePath()
const isNotFound = computed(() => props.error.statusCode === 404)

useHead({
  title: () => `${isNotFound.value ? t('error.notFoundTitle') : t('error.genericTitle')} — ${siteConfig.name}`,
  meta: [{ name: 'robots', content: 'noindex' }],
})

const goHome = () => clearError({ redirect: localePath('/') })
</script>
