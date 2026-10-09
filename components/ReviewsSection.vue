<template>
  <section id="reviews" class="section-padding overflow-hidden bg-white">
    <div class="section-container">
      <div class="mb-10 max-w-3xl md:mb-14">
        <span class="badge mb-4">{{ t('reviews.badge') }}</span>
        <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
          {{ t('reviews.title') }}
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <figure
          v-for="review in reviews"
          :key="review.author"
          class="flex flex-col justify-between gap-6 rounded-brand border border-brand-100 bg-brand-50 p-6 shadow-sm md:p-8"
        >
          <blockquote class="text-base leading-relaxed text-brand-900 md:text-lg" lang="ru">
            «{{ review.text }}»
          </blockquote>
          <figcaption class="flex items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-base font-bold text-white" aria-hidden="true">
              {{ review.author.charAt(0) }}
            </span>
            <span>
              <span class="block font-semibold text-brand-900">{{ review.author }}</span>
              <span class="block text-sm text-brand-600">{{ review.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Client quotes are shown in the original language on every locale
const reviews = [
  {
    author: 'Нурбек',
    role: 'Good Deal',
    text: 'Команда Kenzcore Studio встроила ИИ в наш сервис и выполнила все наши требования, и теперь сбор акций идёт автоматически. После запуска продолжают поддерживать проект и быстро откликаются на любые вопросы. С радостью рекомендуем и будем работать дальше!',
  },
  {
    author: 'Алихан',
    role: 'moyadostavka.kz',
    text: 'Заказал у Айбека разработку приложения для службы доставки moyadostavka.kz. Всё работает: курьеры, магазины, админ-панель. Быстро реагирует на правки и доводит задачу до конца. Рекомендую.',
  },
]
</script>
