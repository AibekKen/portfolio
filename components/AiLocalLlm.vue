<template>
  <section id="local-llm" class="bg-cobalt-950 py-16 text-white md:py-24">
    <div class="section-container">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{{ t('ai.local.eyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {{ t('ai.local.title') }}
          </h2>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
            {{ t('ai.local.text') }}
          </p>

          <h3 class="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
            {{ t('ai.local.stepsTitle') }}
          </h3>
          <ol class="mt-4 space-y-4">
            <li v-for="(step, index) in steps" :key="step" class="flex items-start gap-4">
              <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/25 text-sm font-bold tabular-nums text-white">
                {{ index + 1 }}
              </span>
              <span class="pt-1 text-base font-medium text-blue-50">{{ step }}</span>
            </li>
          </ol>
        </div>

        <div>
          <dl class="grid gap-x-10 sm:grid-cols-2">
            <div v-for="item in benefits" :key="item.title" class="border-t border-white/15 py-6">
              <dt class="text-xl font-bold text-white">{{ item.title }}</dt>
              <dd class="mt-2 text-base leading-relaxed text-blue-100">{{ item.text }}</dd>
            </div>
          </dl>

          <div class="mt-6 rounded-[20px] bg-gold-200 p-6 text-ink md:p-7">
            <p class="text-lg font-extrabold">{{ t('ai.local.honestTitle') }}</p>
            <p class="mt-2 text-base leading-relaxed text-ink/80">{{ t('ai.local.honestText') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Benefit = {
  title: string
  text: string
}

const { t, tm } = useI18n()
const benefits = computed(() => tm('ai.local.items') as Benefit[])
const steps = computed(() => tm('ai.local.steps') as string[])
</script>
