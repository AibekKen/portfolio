<template>
  <section id="use-cases" class="bg-white py-16 md:py-24">
    <div class="section-container">
      <div class="max-w-3xl">
        <p class="eyebrow">{{ t('ai.useCases.eyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          {{ t('ai.useCases.title') }}
        </h2>
      </div>

      <div class="mt-10 hidden grid-cols-[9rem_1fr_1fr] gap-8 border-b border-slate-200 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 md:grid">
        <span></span>
        <span>{{ t('ai.useCases.problemLabel') }}</span>
        <span class="text-cobalt-600">{{ t('ai.useCases.solutionLabel') }}</span>
      </div>

      <ul class="mt-6 md:mt-0">
        <li
          v-for="item in items"
          :key="item.tag"
          class="grid gap-3 border-b border-slate-200 py-6 md:grid-cols-[9rem_1fr_1fr] md:gap-8 md:py-7"
        >
          <span class="w-fit self-start rounded-full bg-cobalt-700/[0.07] px-3 py-1 text-xs font-bold text-cobalt-700 md:mt-1">
            {{ item.tag }}
          </span>
          <p class="text-base leading-relaxed text-slate-500 md:text-lg">
            <span class="mb-1 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400 md:hidden">{{ t('ai.useCases.problemLabel') }}</span>
            {{ item.problem }}
          </p>
          <p class="text-base font-semibold leading-relaxed text-ink md:text-lg">
            <span class="mb-1 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cobalt-600 md:hidden">{{ t('ai.useCases.solutionLabel') }}</span>
            {{ item.solution }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
type UseCase = {
  tag: string
  problem: string
  solution: string
}

const { t, tm } = useI18n()
const items = computed(() => tm('ai.useCases.items') as UseCase[])
</script>
