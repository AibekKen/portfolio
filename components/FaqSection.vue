<template>
  <section id="faq" class="section-padding bg-white">
    <div class="section-container max-w-4xl">
      <h2 class="mb-8 text-center text-3xl font-bold text-brand-900 md:mb-10 md:text-4xl lg:text-5xl">
        {{ t('faq.title') }}
      </h2>

      <div class="space-y-3">
        <details
          v-for="(item, index) in items"
          :key="item.question"
          class="group rounded-brand border border-brand-100 bg-brand-50 open:bg-white open:shadow-sm"
          :open="index === 0"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-bold text-brand-900 md:text-xl [&::-webkit-details-marker]:hidden">
            {{ item.question }}
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p class="px-5 pb-5 text-brand-600">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type FaqItem = {
  question: string
  answer: string
}

const { t, tm } = useI18n()
const items = computed(() => tm('faq.items') as FaqItem[])

useHead(() => ({
  script: [
    {
      key: 'faq-jsonld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.value.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }),
    },
  ],
}))
</script>
