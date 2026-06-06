<template>
  <footer class="bg-brand-900 py-8 text-white md:py-12">
    <div class="section-container">
      <div class="mb-8 grid gap-8 md:grid-cols-4">
        <div>
          <h3 class="mb-3 font-bold">{{ siteConfig.name }}</h3>
          <p class="text-sm text-blue-200">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <div>
          <h4 class="mb-3 font-semibold">{{ t('footer.navigation') }}</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/#services" class="text-blue-200 transition-colors hover:text-white">{{ t('nav.services') }}</a></li>
            <li><a href="/#cases" class="text-blue-200 transition-colors hover:text-white">{{ t('nav.cases') }}</a></li>
            <li><a href="/#process" class="text-blue-200 transition-colors hover:text-white">{{ t('nav.process') }}</a></li>
            <li><a href="/#contact" class="text-blue-200 transition-colors hover:text-white">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="mb-3 font-semibold">{{ t('footer.services') }}</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="service in footerServices" :key="service.title">
              <NuxtLink :to="service.href || '/#services'" class="text-blue-200 transition-colors hover:text-white">{{ service.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-3 font-semibold">{{ t('footer.contacts') }}</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="siteConfig.contacts.whatsapp.href" target="_blank" rel="noopener noreferrer" class="text-blue-200 transition-colors hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a :href="siteConfig.contacts.telegram.href" target="_blank" rel="noopener noreferrer" class="text-blue-200 transition-colors hover:text-white">
                Telegram
              </a>
            </li>
            <li>
              <a :href="siteConfig.contacts.email.href" class="text-blue-200 transition-colors hover:text-white">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-blue-800 pt-6 md:flex-row md:pt-8">
        <p class="text-sm text-blue-200">
          © 2026 {{ siteConfig.name }}. {{ t('footer.copyright') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/privacy-policy" class="text-sm text-blue-200 transition-colors hover:text-white">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/terms-of-use" class="text-sm text-blue-200 transition-colors hover:text-white">{{ t('footer.terms') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

type FooterService = {
  title: string
  href?: string
}

const { t, tm } = useI18n()
const footerServices = computed(() => tm('services.items') as FooterService[])
</script>
