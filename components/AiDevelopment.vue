<template>
  <section id="development" class="bg-slate-50 pt-16 md:pt-24">
    <div class="section-container">
      <div class="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
        <div>
          <p class="eyebrow">{{ t('ai.dev.eyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            {{ t('ai.dev.title') }}
          </h2>
        </div>
        <p class="text-base leading-relaxed text-slate-600 md:text-lg">
          {{ t('ai.dev.text') }}
        </p>
      </div>

      <ul class="mt-10 border-t border-slate-300">
        <li v-for="item in items" :key="item.title" class="border-b border-slate-300">
          <component
            :is="item.href.startsWith('#') ? 'a' : NuxtLink"
            v-bind="item.href.startsWith('#') ? { href: item.href } : { to: localePath(item.href) }"
            class="group grid gap-2 py-6 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10"
          >
            <span class="text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-cobalt-700 md:text-2xl">{{ item.title }}</span>
            <span class="text-base text-slate-600">{{ item.text }}</span>
            <span class="flex items-center gap-2 text-sm font-bold text-cobalt-700">
              {{ t('ai.dev.more') }}
              <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </span>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

type DevItem = {
  title: string
  text: string
  href: string
}

const { t, tm } = useI18n()
const localePath = useLocalePath()
const items = computed(() => tm('ai.dev.items') as DevItem[])
</script>
