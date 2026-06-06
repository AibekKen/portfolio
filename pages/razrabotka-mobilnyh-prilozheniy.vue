<template>
  <div class="bg-white">
    <header class="sticky top-0 z-50 border-b border-brand-100 bg-white">
      <div class="section-container flex items-center justify-between gap-4 py-4">
        <NuxtLink to="/" class="flex min-w-0 items-center">
          <img
            :src="siteConfig.logo.src"
            :alt="siteConfig.logo.alt"
            class="h-11 w-auto max-w-52 object-contain md:h-12 md:max-w-64"
          />
        </NuxtLink>

        <div class="flex items-center gap-3">
          <a
            :href="siteConfig.contacts.whatsapp.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden min-h-11 items-center rounded-brand border border-brand-primary px-4 text-sm font-bold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white sm:inline-flex"
          >
            WhatsApp
          </a>
          <a href="#lead-form" class="inline-flex min-h-11 items-center rounded-brand bg-brand-primary px-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dark">
            Обсудить приложение
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="overflow-hidden bg-brand-50 py-10 md:py-14 lg:py-16">
        <div class="section-container grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div class="relative z-10">
            <span class="badge">Разработка мобильных приложений под ключ</span>
            <h1 class="mt-5 max-w-4xl text-brand-900">
              Запустим мобильное приложение для заявок, заказов или личного кабинета
            </h1>
            <p class="mt-5 max-w-3xl text-brand-600">
              Проектируем и разрабатываем iOS/Android приложение под ваш бизнес-процесс: от понятного MVP до интеграций с API, CRM, оплатой и уведомлениями.
            </p>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div v-for="item in offerPoints" :key="item" class="flex items-center gap-3 rounded-brand border border-brand-100 bg-white p-3 shadow-sm">
                <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"></span>
                <span class="text-sm font-bold text-brand-700">{{ item }}</span>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                class="inline-flex min-h-12 items-center justify-center rounded-brand bg-brand-primary px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-primary-dark md:px-8 md:py-4"
              >
                Получить план и оценку
              </a>
              <a
                :href="siteConfig.contacts.whatsapp.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-12 items-center justify-center rounded-brand border-2 border-brand-primary bg-white px-6 py-3 text-center font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white md:px-8 md:py-4"
              >
                Написать в WhatsApp
              </a>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-3">
              <div v-for="item in heroProof" :key="item.title" class="rounded-brand border border-brand-100 bg-white p-4 shadow-sm">
                <div class="text-lg font-black text-brand-primary">{{ item.value }}</div>
                <div class="mt-1 text-sm font-semibold text-brand-700">{{ item.title }}</div>
              </div>
            </div>
          </div>

          <div class="relative -mx-4 md:mx-0">
            <MobileAppThreeScene class="w-full" />
          </div>
        </div>
      </section>

      <section class="bg-white py-10 md:py-12">
        <div class="section-container">
          <div class="grid gap-4 md:grid-cols-3">
            <div v-for="item in outcomeCards" :key="item.title" class="rounded-brand-lg border border-brand-100 bg-white p-6 shadow-sm">
              <div class="text-3xl font-black text-brand-primary">{{ item.value }}</div>
              <h2 class="mt-4 text-2xl font-bold text-brand-900">{{ item.title }}</h2>
              <p class="mt-3 text-base text-brand-600">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-brand-900 text-white">
        <div class="section-container">
          <div class="mb-10 max-w-3xl">
            <span class="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-100">Что разрабатываем</span>
            <h2 class="mt-4">
              Не просто приложение, а рабочий канал для клиентов или команды
            </h2>
            <p class="mt-4 text-blue-100">
              Сначала определяем главный сценарий: оставить заявку, оформить заказ, проверить статус, принять задачу, оплатить или вернуться за услугой.
            </p>
          </div>

          <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in appTypes" :key="item.title" class="rounded-brand-lg border border-blue-800 bg-white p-6 text-brand-900 shadow-sm">
              <div class="flex h-11 w-11 items-center justify-center rounded-brand bg-blue-50 text-sm font-black text-brand-primary">
                {{ item.number }}
              </div>
              <h3 class="mt-5 text-2xl font-bold text-brand-900">{{ item.title }}</h3>
              <p class="mt-3 text-brand-600">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-brand-50">
        <div class="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span class="badge">Почему это удобно для бизнеса</span>
            <h2 class="mt-4 text-brand-900">
              Вы видите будущий продукт до старта разработки
            </h2>
            <p class="mt-4 text-brand-600">
              Мы переводим идею в карту экранов, роли пользователей и список функций первой версии. Так проще оценить бюджет, сроки и не строить лишнее.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="item in advantages" :key="item.title" class="rounded-brand border border-brand-100 bg-white p-5 shadow-sm">
              <h3 class="text-xl font-bold text-brand-900">{{ item.title }}</h3>
              <p class="mt-3 text-base text-brand-600">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="section-container">
          <div class="mb-10 max-w-3xl">
            <span class="badge">Процесс</span>
            <h2 class="mt-4 text-brand-900">
              Как проходит разработка мобильного приложения
            </h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="step in processSteps" :key="step.title" class="rounded-brand-lg border border-brand-100 bg-white p-5 shadow-sm">
              <div class="text-sm font-black text-brand-primary">{{ step.number }}</div>
              <h3 class="mt-4 text-xl font-bold text-brand-900">{{ step.title }}</h3>
              <p class="mt-3 text-base text-brand-600">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="overflow-hidden bg-brand-50 py-10 md:py-14">
        <div class="section-container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="relative min-h-[360px] md:min-h-[460px]">
            <MobileAppThreeScene class="absolute inset-0 h-full w-full" />
          </div>
          <div>
            <span class="badge">Что будет на выходе</span>
            <h2 class="mt-4 text-brand-900">
              Первая версия, которую можно показывать пользователям
            </h2>
            <p class="mt-4 text-brand-600">
              Фокусируемся на главном сценарии и стабильной основе: интерфейс, авторизация, данные, интеграции и понятный путь к дальнейшему развитию.
            </p>
            <div class="mt-6 space-y-3">
              <div v-for="item in deliverables" :key="item" class="flex gap-3 rounded-brand border border-brand-100 bg-white p-4 shadow-sm">
                <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary"></span>
                <span class="font-semibold text-brand-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead-form" class="section-padding bg-brand-900">
        <div class="section-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="text-white">
            <span class="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-100">
              Бесплатная первичная оценка
            </span>
            <h2 class="mt-4">
              Опишите приложение, и мы предложим первый план разработки
            </h2>
            <p class="mt-4 text-blue-100">
              Напишите, для кого приложение, какие действия должен выполнять пользователь и есть ли уже сайт, CRM или backend. Ответим с уточняющими вопросами и вариантом следующего шага.
            </p>

            <div class="mt-6 space-y-3 text-blue-100">
              <p class="text-base">WhatsApp: {{ siteConfig.contacts.whatsapp.display }}</p>
              <p class="text-base">Telegram: {{ siteConfig.contacts.telegram.display }}</p>
              <p class="text-base">Email: {{ siteConfig.contacts.email.display }}</p>
            </div>
          </div>

          <div class="rounded-brand-lg bg-white p-5 shadow-xl md:p-8">
            <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
              <div>
                <label for="mobile-app-name" class="mb-2 block text-sm font-semibold text-brand-900">Имя</label>
                <input
                  id="mobile-app-name"
                  v-model.trim="form.name"
                  type="text"
                  placeholder="Как к вам обращаться"
                  class="w-full rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                  :aria-invalid="Boolean(errors.name)"
                />
                <p v-if="errors.name" class="mt-2 text-sm text-red-900">{{ errors.name }}</p>
              </div>

              <div>
                <label for="mobile-app-contact" class="mb-2 block text-sm font-semibold text-brand-900">Телефон, WhatsApp или email</label>
                <input
                  id="mobile-app-contact"
                  v-model.trim="form.contact"
                  type="text"
                  placeholder="+7 777 123 45 67 или email"
                  class="w-full rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                  :aria-invalid="Boolean(errors.contact)"
                />
                <p v-if="errors.contact" class="mt-2 text-sm text-red-900">{{ errors.contact }}</p>
              </div>

              <div>
                <label for="mobile-app-description" class="mb-2 block text-sm font-semibold text-brand-900">Что нужно разработать</label>
                <textarea
                  id="mobile-app-description"
                  v-model.trim="form.description"
                  rows="5"
                  placeholder="Например: приложение для клиентов, личный кабинет, заявки, доставка, каталог, оплата, уведомления..."
                  class="w-full resize-none rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                  :aria-invalid="Boolean(errors.description)"
                ></textarea>
                <p v-if="errors.description" class="mt-2 text-sm text-red-900">{{ errors.description }}</p>
              </div>

              <BaseButton variant="primary" size="md" type="submit" class="w-full" :disabled="isSubmitting">
                {{ isSubmitting ? 'Отправляем...' : 'Получить оценку проекта' }}
              </BaseButton>

              <div v-if="showSuccess" class="rounded-brand border border-green-200 bg-green-50 p-4 text-center text-base text-green-900">
                Спасибо! Заявка отправлена. Мы свяжемся с вами и уточним детали приложения.
              </div>
              <div v-if="submitError" class="rounded-brand border border-red-200 bg-red-50 p-4 text-center text-base text-red-900">
                {{ submitError }}
              </div>
            </form>

            <p class="mt-6 text-center text-xs text-brand-600">
              Данные используются только для связи по этой заявке. Рекламных рассылок не отправляем.
            </p>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="section-container">
          <div class="mb-10 max-w-3xl">
            <span class="badge">FAQ</span>
            <h2 class="mt-4 text-brand-900">
              Частые вопросы перед стартом
            </h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div v-for="item in faq" :key="item.question" class="rounded-brand-lg border border-brand-100 bg-white p-6 shadow-sm">
              <h3 class="text-xl font-bold text-brand-900">{{ item.question }}</h3>
              <p class="mt-3 text-brand-600">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-brand-100 bg-brand-50 py-8">
      <div class="section-container flex flex-col justify-between gap-4 text-sm text-brand-600 md:flex-row">
        <p>© 2026 {{ siteConfig.name }}. Разработка мобильных приложений для бизнеса.</p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/privacy-policy" class="hover:text-brand-primary">Политика приватности</NuxtLink>
          <NuxtLink to="/terms-of-use" class="hover:text-brand-primary">Условия использования</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { siteConfig } from '~/config/site'

type Form = {
  name: string
  contact: string
  description: string
}

const form = reactive<Form>({
  name: '',
  contact: '',
  description: '',
})

const errors = reactive<Partial<Record<keyof Form, string>>>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')
const csrfToken = ref('')

const offerPoints = [
  'MVP без лишних функций',
  'Интеграция с вашим backend или CRM',
  'Экранная структура до разработки',
  'Форма заявки и быстрый старт обсуждения',
]

const heroProof = [
  { value: 'iOS', title: 'и Android версия' },
  { value: 'MVP', title: 'первая версия продукта' },
  { value: 'API', title: 'интеграции с сервисами' },
]

const outcomeCards = [
  {
    value: '01',
    title: 'Понятный MVP',
    text: 'Определяем первую версию приложения, которую можно запустить быстрее и проверить на реальных пользователях.',
  },
  {
    value: '02',
    title: 'Рабочие сценарии',
    text: 'Проектируем заявки, заказы, статусы, профили, уведомления и роли без хаоса в интерфейсе.',
  },
  {
    value: '03',
    title: 'Основа для роста',
    text: 'Закладываем структуру, чтобы после запуска можно было добавлять новые функции и интеграции.',
  },
]

const appTypes = [
  {
    number: '01',
    title: 'Приложения для клиентов',
    text: 'Личные кабинеты, заказы, записи, каталог, статусы, уведомления и повторные обращения.',
  },
  {
    number: '02',
    title: 'Приложения для сотрудников',
    text: 'Задачи, маршруты, заявки, отчеты, роли и работа с внутренними процессами компании.',
  },
  {
    number: '03',
    title: 'MVP мобильного продукта',
    text: 'Первая версия приложения для проверки идеи, презентации инвесторам или запуска продаж.',
  },
  {
    number: '04',
    title: 'Приложения для доставки',
    text: 'Заказы, статусы, кабинеты клиента, магазина или исполнителя, карты и уведомления.',
  },
  {
    number: '05',
    title: 'Сервисные приложения',
    text: 'Запись на услугу, управление заявками, клиентская история и связь с оператором.',
  },
  {
    number: '06',
    title: 'Интеграция с backend',
    text: 'Подключаем приложение к API, базе данных, CRM, платежам, Telegram или другим сервисам.',
  },
]

const advantages = [
  {
    title: 'Сначала сценарий',
    text: 'Фиксируем, что пользователь должен сделать в приложении: заказать, оплатить, отправить заявку или выполнить задачу.',
  },
  {
    title: 'Потом экраны',
    text: 'Собираем понятную структуру экранов, состояний, форм и навигации до активной разработки.',
  },
  {
    title: 'Интеграции без шума',
    text: 'Подключаем приложение к API, CRM, оплате, уведомлениям или внутренним сервисам, если это нужно продукту.',
  },
  {
    title: 'Запуск по этапам',
    text: 'Делим работу на понятные шаги: план, разработка, проверка, выпуск и дальнейшие улучшения.',
  },
]

const processSteps = [
  { number: '01', title: 'Разбор задачи', text: 'Уточняем цель приложения, аудиторию, роли и обязательные функции.' },
  { number: '02', title: 'План MVP', text: 'Формируем состав первой версии, экраны, интеграции и порядок работ.' },
  { number: '03', title: 'Разработка', text: 'Собираем интерфейс, подключаем серверную логику и показываем прогресс этапами.' },
  { number: '04', title: 'Запуск', text: 'Проверяем приложение, готовим сборки и помогаем с публикацией или внутренним запуском.' },
]

const deliverables = [
  'Карта экранов и логика первого релиза',
  'Мобильный интерфейс под iOS и Android',
  'Подключение API, данных и пользовательских ролей',
  'Форма заявки, статусные экраны, уведомления или оплата при необходимости',
  'Подготовка к публикации или внутреннему запуску',
]

const faq = [
  {
    question: 'Сколько стоит разработка мобильного приложения?',
    answer: 'Стоимость зависит от экранов, ролей, интеграций и требований к запуску. После короткого описания задачи мы можем дать ориентир по этапам.',
  },
  {
    question: 'Можно ли начать с MVP?',
    answer: 'Да. Обычно лучше запускать первую версию с главным сценарием, чтобы быстрее проверить спрос и не тратить бюджет на лишние функции.',
  },
  {
    question: 'Вы делаете приложения и для iOS, и для Android?',
    answer: 'Да, можем подготовить приложение под обе платформы и помочь с технической частью выпуска.',
  },
  {
    question: 'Можно подключить приложение к сайту или CRM?',
    answer: 'Да. Подключаем API, личные кабинеты, заявки, оплату, уведомления и другие сервисы, если они нужны продукту.',
  },
]

const validate = () => {
  errors.name = form.name.length >= 2 ? '' : 'Укажите имя.'
  errors.contact = form.contact.length >= 5 ? '' : 'Укажите телефон, WhatsApp или email.'
  errors.description = form.description.length >= 15 ? '' : 'Опишите приложение немного подробнее.'

  return !errors.name && !errors.contact && !errors.description
}

const getSubmitErrorMessage = (error: unknown) => {
  if (
    error &&
    typeof error === 'object' &&
    'data' in error &&
    error.data &&
    typeof error.data === 'object' &&
    'statusMessage' in error.data &&
    typeof error.data.statusMessage === 'string'
  ) {
    return error.data.statusMessage
  }

  return 'Не удалось отправить заявку. Напишите нам в WhatsApp, Telegram или на email.'
}

const handleSubmit = async () => {
  if (!validate()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''
  showSuccess.value = false

  try {
    if (!csrfToken.value) {
      const csrf = await $fetch<{ token: string }>('/api/contact-csrf')
      csrfToken.value = csrf.token
    }

    await $fetch('/api/contact', {
      method: 'POST',
      headers: {
        'x-contact-csrf': csrfToken.value,
      },
      body: {
        name: form.name,
        contact: form.contact,
        description: `Лендинг Google Ads: разработка мобильного приложения\n\n${form.description}`,
      },
    })

    form.name = ''
    form.contact = ''
    form.description = ''
    csrfToken.value = ''
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error: unknown) {
    csrfToken.value = ''
    submitError.value = getSubmitErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}

const canonicalUrl = 'https://kenzcore.studio/razrabotka-mobilnyh-prilozheniy'

useHead({
  title: 'Разработка мобильных приложений под ключ | iOS и Android',
  meta: [
    {
      name: 'description',
      content: 'Разработка мобильных приложений под ключ для бизнеса: MVP, заявки, заказы, личные кабинеты, доставка, интеграции с API и запуск iOS/Android.',
    },
    {
      property: 'og:title',
      content: 'Разработка мобильных приложений для бизнеса',
    },
    {
      property: 'og:description',
      content: 'Создаем мобильные приложения под iOS и Android: от идеи и MVP до запуска, заявок, заказов и интеграций.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
  htmlAttrs: {
    lang: 'ru',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Разработка мобильных приложений',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: canonicalUrl,
          email: siteConfig.contacts.email.display,
        },
        areaServed: ['Kazakhstan', 'Worldwide'],
        serviceType: 'Mobile application development',
        description: 'Разработка мобильных приложений для бизнеса под iOS и Android, MVP и интеграции с API.',
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    },
  ],
})
</script>
