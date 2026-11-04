<template>
  <figure class="rounded-[24px] bg-white p-5 text-ink shadow-2xl shadow-cobalt-950/40 sm:p-6">
    <figcaption class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('landings.localLlm.server.label') }}</figcaption>

    <div class="mt-4 rounded-2xl border-2 border-dashed border-cobalt-600/40 p-4">
      <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cobalt-700">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        {{ t('landings.localLlm.server.insideLabel') }}
      </p>
      <ul class="mt-3 space-y-2">
        <li v-for="part in parts" :key="part.title" class="rounded-xl bg-slate-50 px-4 py-3">
          <p class="text-sm font-bold text-ink">{{ part.title }}</p>
          <p class="text-sm text-slate-600">{{ part.text }}</p>
        </li>
      </ul>
    </div>

    <div class="mt-3 flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-slate-400">
      <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <path d="m4 4 16 16" />
      </svg>
      <p class="text-sm">
        <span class="font-bold text-slate-500 line-through">{{ t('landings.localLlm.server.outside') }}</span>
        <span class="block text-slate-500">{{ t('landings.localLlm.server.outsideNote') }}</span>
      </p>
    </div>
  </figure>
</template>

<script setup lang="ts">
type Part = { title: string, text: string }

const { t, tm } = useI18n()
const parts = computed(() => tm('landings.localLlm.server.parts') as Part[])
</script>
