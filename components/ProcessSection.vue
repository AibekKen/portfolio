<template>
  <section id="process" class="section-padding bg-brand-50">
    <div class="section-container">
      <div class="mb-10 text-center md:mb-14">
        <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
          {{ t('process.title') }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-brand-600 md:text-lg">
          {{ t('process.subtitle') }}
        </p>
      </div>

      <div class="md:hidden">
        <div class="space-y-4">
          <div v-for="(step, index) in steps" :key="step.title" class="group relative overflow-hidden rounded-brand border border-brand-100 bg-white p-5 shadow-sm">
            <div class="pointer-events-none absolute -right-3 -top-7 text-8xl font-black leading-none text-brand-primary/[0.06]">
              {{ step.number }}
            </div>
            <div class="relative flex gap-4">
              <div class="flex flex-col items-center">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-lg shadow-brand-primary/20">
                  {{ step.number }}
                </div>
                <div v-if="index !== steps.length - 1" class="mt-3 h-full min-h-14 w-px bg-brand-primary/20"></div>
              </div>
              <div class="min-w-0 pb-1">
                <span class="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary">
                  {{ step.label }}
                </span>
                <h3 class="mb-2 text-xl font-bold text-brand-900">
                  {{ step.title }}
                </h3>
                <p class="text-base text-brand-600">
                  {{ step.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:grid md:grid-cols-4 md:gap-5">
        <div v-for="(step, index) in steps" :key="step.title" class="group relative overflow-hidden rounded-brand border border-brand-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg">
          <div class="pointer-events-none absolute -right-4 -top-8 text-8xl font-black leading-none text-brand-primary/[0.07] transition-colors duration-200 group-hover:text-brand-primary/10">
            {{ step.number }}
          </div>
          <div v-if="index !== steps.length - 1" class="absolute left-[4.75rem] top-[3.25rem] hidden h-px w-[calc(100%-2.75rem)] bg-gradient-to-r from-brand-primary/30 to-transparent lg:block"></div>
          <div class="relative mb-5 flex items-center gap-3">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white shadow-lg shadow-brand-primary/20">
              {{ step.number }}
            </div>
            <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary">
              {{ step.label }}
            </span>
          </div>
          <h3 class="relative mb-3 text-xl font-bold text-brand-900">
            {{ step.title }}
          </h3>
          <p class="relative text-base text-brand-600">
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ProcessStep = {
  number: string
  label: string
  title: string
  text: string
}

const { t, tm } = useI18n()
const steps = computed(() => tm('process.steps') as ProcessStep[])
</script>
