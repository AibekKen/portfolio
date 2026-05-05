<template>
  <section class="section-padding bg-brand-50">
    <div class="section-container">
      <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <span class="badge mb-4">{{ t('stack.badge') }}</span>
          <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
            {{ t('stack.title') }}
          </h2>
          <p class="mt-4 max-w-2xl text-base text-brand-600 md:text-lg">
            {{ t('stack.subtitle') }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tech in coreTechnologies"
              :key="tech"
              class="rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="group in stackGroups"
            :key="group.title"
            class="rounded-brand border border-brand-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg md:p-6"
          >
            <div :class="['mb-4 flex h-11 w-11 items-center justify-center rounded-brand text-sm font-bold', group.badgeClass]">
              {{ group.short }}
            </div>
            <h3 class="mb-2 text-xl font-bold text-brand-900">
              {{ group.title }}
            </h3>
            <p class="text-base text-brand-600">
              {{ group.text }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type StackGroup = {
  short: string
  badgeClass: string
  title: string
  text: string
  items: string[]
}

const { t, tm } = useI18n()
const coreTechnologies = computed(() => tm('stack.core') as string[])
const stackGroups = computed(() => tm('stack.groups') as StackGroup[])
</script>
