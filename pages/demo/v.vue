<template>
  <div class="min-h-screen bg-slate-50">
    <header class="border-b border-slate-200 bg-white">
      <div class="section-container flex items-center justify-between py-3.5">
        <BrandMark />
        <a
          :href="whatsappLink(lang, 'ai')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-10 items-center rounded-full bg-cobalt-700 px-4 text-sm font-semibold text-white"
          @click="trackContactClick"
        >
          {{ labels.contact }}
        </a>
      </div>
    </header>

    <main class="section-container py-8 md:py-12">
      <div v-if="data" class="mx-auto max-w-md">
        <p class="text-center text-xs font-bold uppercase tracking-[0.16em] text-cobalt-600">{{ labels.eyebrow }}</p>
        <h1 class="mt-2 text-center text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
          {{ labels.title(data.biz) }}
        </h1>

        <div class="mt-6">
          <DemoChat ref="chat" :data="data" />
        </div>

        <button
          type="button"
          class="mx-auto mt-4 flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-slate-600 hover:text-ink"
          @click="chat?.play()"
        >
          <span aria-hidden="true">↻</span>
          {{ labels.replay }}
        </button>

        <div class="mt-6 rounded-[22px] bg-white p-6 shadow-sm">
          <p class="text-base leading-relaxed text-slate-700">{{ labels.pitch }}</p>
          <div class="mt-5 grid gap-2 sm:grid-cols-2">
            <a
              :href="whatsappLink(lang, 'ai')"
              target="_blank"
              rel="noopener noreferrer"
              class="flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-4 font-bold text-white"
              @click="trackContactClick"
            >
              {{ labels.cta }}
            </a>
            <NuxtLink
              :to="lang === 'kk' ? '/kk/services/whatsapp-bot' : '/services/whatsapp-bot'"
              class="flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-4 font-semibold text-ink hover:border-cobalt-600"
            >
              {{ labels.more }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <p v-else-if="broken" class="mx-auto max-w-md text-center text-slate-600">
        Ссылка на пример повреждена. Напишите нам, и мы пришлём её заново.
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { whatsappLink } from '~/config/site'
import type { DemoData } from '~/utils/demoLink'
import { resolveDemo } from '~/utils/demoPresets'

const { trackContactClick } = useAdsConversion()

// The demo lives in the URL hash, which only the browser can read
const data = ref<DemoData | null>(null)
const broken = ref(false)
const chat = ref<{ play: () => void } | null>(null)
const lang = computed(() => data.value?.lang ?? 'ru')

const labels = computed(() => (lang.value === 'kk'
  ? {
      eyebrow: 'ЖИ-бот мысалы',
      title: (biz: string) => `${biz}: ЖИ-бот клиенттеріңізге осылай жауап берер еді`,
      replay: 'Қайта көру',
      pitch: 'Бот тәулік бойы WhatsApp, Telegram және Instagram-да жауап береді, сіздің прайсыңызды біледі және дайын өтінімдерді менеджерге береді. Айына 20 000 ₸-ден, іске қосу ақысыз.',
      cta: 'Осындай бот керек',
      more: 'Толығырақ',
      contact: 'Жазу',
    }
  : {
      eyebrow: 'Пример ИИ-бота',
      title: (biz: string) => `${biz}: так ИИ-бот ответил бы вашим клиентам`,
      replay: 'Посмотреть ещё раз',
      pitch: 'Бот отвечает круглосуточно в WhatsApp, Telegram и Instagram, знает ваш прайс и передаёт готовые заявки менеджеру. От 20 000 ₸ в месяц, без оплаты за запуск.',
      cta: 'Хочу такого бота',
      more: 'Подробнее',
      contact: 'Написать',
    }))

onMounted(() => {
  data.value = resolveDemo(window.location.hash)
  broken.value = !data.value
})

useHead({
  title: 'Пример ИИ-бота для вашего бизнеса · kenzcore AI Studio',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: 'Как ИИ-бот ответил бы вашим клиентам' },
    { property: 'og:description', content: 'Пример переписки ИИ-бота kenzcore AI Studio по вашим ценам.' },
    { property: 'og:image', content: 'https://kenzcore.com/brand/og-ai-studio.jpg' },
  ],
})
</script>
