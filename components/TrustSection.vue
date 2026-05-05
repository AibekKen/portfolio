<template>
  <section id="trust" class="section-padding overflow-hidden bg-brand-50">
    <div class="section-container">
      <div class="mb-10 max-w-3xl md:mb-14">
        <span class="badge mb-4">{{ t('trust.badge') }}</span>
        <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
          {{ t('trust.title') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base text-brand-600 md:text-lg">
          {{ t('trust.subtitle') }}
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-[1.05fr_1.4fr] lg:items-stretch">
        <div class="relative overflow-hidden rounded-brand-lg bg-brand-900 p-6 text-white shadow-lg md:p-8">
          <div class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-primary/30 blur-3xl"></div>
          <div class="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-brand-primary via-white/40 to-transparent"></div>

          <div class="relative flex h-full flex-col justify-between gap-8">
            <div>
              <p class="text-sm font-bold uppercase tracking-wide text-blue-200">
                {{ t('trust.panelLabel') }}
              </p>
              <p class="mt-5 text-2xl font-bold leading-tight md:text-3xl">
                {{ t('trust.panelTitle') }}
              </p>
              <p class="mt-4 text-base text-blue-100">
                {{ t('trust.panelText') }}
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div v-for="proof in proofPoints" :key="proof.value" class="rounded-brand border border-white/10 bg-white/10 p-4">
                <p class="text-2xl font-bold">
                  {{ proof.value }}
                </p>
                <p class="mt-1 text-sm leading-snug text-blue-100">
                  {{ proof.label }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid auto-rows-fr gap-5 md:grid-cols-2">
          <div
            v-for="item in items"
            :key="item.title"
            class="group relative flex min-h-64 overflow-hidden rounded-brand border border-brand-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg md:p-6"
          >
            <div class="pointer-events-none absolute -right-5 -top-8 text-8xl font-black leading-none text-brand-primary/[0.06] transition-colors duration-200 group-hover:text-brand-primary/10">
              {{ item.number }}
            </div>
            <div class="relative flex h-full flex-col">
              <div :class="['mb-5 flex h-12 w-12 items-center justify-center rounded-brand text-sm font-bold', item.badgeClass]">
                {{ item.short }}
              </div>
              <h3 class="mb-3 text-xl font-bold text-brand-900">
                {{ item.title }}
              </h3>
              <p class="text-base text-brand-600">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ProofPoint = {
  value: string
  label: string
}

type TrustItem = {
  number: string
  short: string
  badgeClass: string
  title: string
  text: string
}

const { t, tm } = useI18n()
const proofPoints = computed(() => tm('trust.proofPoints') as ProofPoint[])
const items = computed(() => tm('trust.items') as TrustItem[])
</script>
