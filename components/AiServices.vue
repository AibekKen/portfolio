<template>
  <section id="services" class="bg-slate-50 py-16 md:py-24">
    <div class="section-container">
      <div class="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div class="max-w-3xl">
          <p class="eyebrow">{{ t('ai.services.eyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            {{ t('ai.services.title') }}
          </h2>
        </div>
        <p class="max-w-sm text-base text-slate-600 md:text-lg">
          {{ t('ai.services.subtitle') }}
        </p>
      </div>

      <div class="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-6">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          :class="['tile flex flex-col rounded-[22px] p-6 md:p-8', layout[service.id]?.tile]"
        >
          <span :class="['text-sm font-bold tabular-nums', layout[service.id]?.number]">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 :class="['mt-6 text-2xl font-extrabold leading-tight tracking-tight md:text-[1.7rem]', layout[service.id]?.title]">
            {{ service.title }}
          </h3>
          <p :class="['mt-3 max-w-xl text-base leading-relaxed', layout[service.id]?.text]">
            {{ service.text }}
          </p>
          <div class="mt-auto flex flex-wrap items-center gap-2 pt-6">
            <span
              v-for="tool in service.tools"
              :key="tool"
              :class="['rounded-full px-3 py-1 text-xs font-semibold', layout[service.id]?.chip]"
            >
              {{ tool }}
            </span>
            <NuxtLink
              v-if="service.href"
              :to="service.href.startsWith('#') ? service.href : localePath(service.href)"
              :class="['ml-auto inline-flex items-center gap-1 text-sm font-bold', layout[service.id]?.link]"
            >
              {{ t('ai.services.more') }}
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type AiService = {
  id: string
  title: string
  text: string
  tools: string[]
  href?: string
}

type TileStyle = {
  tile: string
  number: string
  title: string
  text: string
  chip: string
  link: string
}

const light: TileStyle = {
  tile: 'bg-white border border-slate-200',
  number: 'text-cobalt-600',
  title: 'text-ink',
  text: 'text-slate-600',
  chip: 'bg-slate-100 text-slate-700',
  link: 'text-cobalt-700 hover:text-cobalt-900',
}

// Tiles differ in size and tone so the most important offers stand out
const layout: Record<string, TileStyle> = {
  agents: {
    tile: 'bg-gold-200 md:col-span-2 lg:col-span-4 lg:min-h-[19rem]',
    number: 'text-ink/60',
    title: 'text-ink md:text-4xl',
    text: 'text-ink/80 md:text-lg',
    chip: 'bg-white/70 text-ink',
    link: 'text-ink hover:text-cobalt-800',
  },
  bots: { ...light, tile: `${light.tile} lg:col-span-2` },
  rag: { ...light, tile: `${light.tile} lg:col-span-2` },
  local: {
    tile: 'bg-cobalt-900 md:col-span-2 lg:col-span-4 lg:min-h-[19rem]',
    number: 'text-gold-300',
    title: 'text-white md:text-4xl',
    text: 'text-blue-100 md:text-lg',
    chip: 'bg-white/10 text-blue-50',
    link: 'text-gold-300 hover:text-gold-200',
  },
  dev: { ...light, tile: `${light.tile} lg:col-span-3` },
  audit: { ...light, tile: `${light.tile} lg:col-span-3` },
}

const { t, tm } = useI18n()
const localePath = useLocalePath()
const services = computed(() => tm('ai.services.items') as AiService[])
</script>
