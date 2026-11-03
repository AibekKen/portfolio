<template>
  <footer class="bg-ink py-12 text-white md:py-16">
    <div class="section-container">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p class="text-xl font-extrabold tracking-tight">
            kenzcore <span class="text-gold-300">AI Studio</span>
          </p>
          <p class="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('nav.services') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="service in services" :key="service.id">
              <a :href="`${localePath('/')}${service.href?.startsWith('#') ? service.href : '#services'}`" class="text-slate-300 transition-colors hover:text-white">{{ service.title }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('nav.dev') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="item in devItems" :key="item.title">
              <NuxtLink
                :to="item.href.startsWith('#') ? `${localePath('/')}${item.href}` : localePath(item.href)"
                class="text-slate-300 transition-colors hover:text-white"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('footer.contacts') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a :href="whatsappLink(locale, 'ai')" target="_blank" rel="noopener noreferrer" class="text-slate-300 transition-colors hover:text-white">
                WhatsApp · {{ siteConfig.contacts.whatsapp.display }}
              </a>
            </li>
            <li>
              <a :href="siteConfig.contacts.telegram.href" target="_blank" rel="noopener noreferrer" class="text-slate-300 transition-colors hover:text-white">
                Telegram · {{ siteConfig.contacts.telegram.display }}
              </a>
            </li>
            <li>
              <a :href="siteConfig.contacts.email.href" class="text-slate-300 transition-colors hover:text-white">
                {{ siteConfig.contacts.email.display }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {{ siteConfig.name }}. {{ t('footer.copyright') }}
          <span class="block md:inline">{{ t('footer.legal') }}</span>
        </p>
        <div class="flex flex-wrap gap-5">
          <NuxtLink :to="localePath('/privacy-policy')" class="transition-colors hover:text-white">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms-of-use')" class="transition-colors hover:text-white">{{ t('footer.terms') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig, whatsappLink } from '~/config/site'

type FooterService = { id: string, title: string, href?: string }
type DevItem = { title: string, href: string }

const { t, tm, locale } = useI18n()
const localePath = useLocalePath()
const services = computed(() => tm('ai.services.items') as FooterService[])
const devItems = computed(() => tm('ai.dev.items') as DevItem[])
</script>
