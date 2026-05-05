<template>
  <section id="services" class="section-padding bg-white">
    <div class="section-container">
      <div class="mb-10 text-center md:mb-14">
        <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
          {{ t('services.title') }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-brand-600 md:text-lg">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-3 md:gap-6">
        <BaseCard v-for="service in mainServices" :key="service.title">
          <div class="flex min-h-56 flex-col">
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-brand bg-blue-50 text-xl font-bold text-brand-primary">
              {{ service.number }}
            </div>
            <h3 class="mb-3 text-2xl font-bold text-brand-900">
              {{ service.title }}
            </h3>
            <p class="text-base text-brand-600">
              {{ service.text }}
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tool in service.tools"
                :key="tool"
                class="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Service = {
  number: string
  title: string
  text: string
  tools: string[]
}

const { t, tm } = useI18n()
const mainServices = computed(() => tm('services.items') as Service[])
</script>
