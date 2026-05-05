<template>
  <div class="min-h-screen bg-brand-50">
    <AppHeader />
    <main>
      <section class="section-padding">
        <div class="section-container">
          <NuxtLink
            to="/"
            class="mb-8 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-dark"
          >
            {{ backLabel }}
          </NuxtLink>

          <div class="max-w-4xl">
            <span class="badge mb-5">{{ content.eyebrow }}</span>
            <h1 class="mb-5 text-brand-900">{{ content.title }}</h1>
            <p class="max-w-3xl text-brand-600">
              {{ content.description }}
            </p>
            <p class="mt-4 text-sm font-semibold text-brand-500">
              {{ content.updated }}
            </p>
          </div>

          <div class="mt-10 max-w-4xl space-y-5 md:mt-12">
            <section
              v-for="section in content.sections"
              :key="section.title"
              class="rounded-brand-lg border border-brand-100 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 class="mb-4 text-2xl md:text-3xl">{{ section.title }}</h2>
              <div class="space-y-4">
                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="text-brand-600"
                >
                  {{ paragraph }}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { LegalPageContent } from '~/config/legal'

defineProps<{
  content: LegalPageContent
  backLabel: string
}>()
</script>
