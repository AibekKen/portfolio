<template>
  <div class="min-h-screen bg-slate-50">
    <header class="border-b border-slate-200 bg-white">
      <div class="section-container flex items-center justify-between gap-4 py-3.5">
        <BrandMark />
        <p class="text-sm font-semibold text-slate-500">Конструктор демо для рассылки</p>
      </div>
    </header>

    <main class="section-container grid gap-8 py-8 lg:grid-cols-[1fr_400px] lg:items-start">
      <div class="space-y-6">
        <!-- 1. Business -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">1. Бизнес</h2>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Ниша</span>
              <select class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model="nicheId" @change="applyNiche">
                <option v-for="niche in demoNiches" :key="niche.id" :value="niche.id">{{ niche.label }}</option>
              </select>
            </label>
            <div class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Язык переписки</span>
              <div class="flex rounded-xl border border-slate-200 p-1" role="group" aria-label="Язык переписки">
                <button
                  v-for="option in langs"
                  :key="option.code"
                  type="button"
                  :aria-pressed="lang === option.code"
                  :class="['min-h-9 flex-1 rounded-lg text-sm font-bold', lang === option.code ? 'bg-ink text-white' : 'text-slate-500']"
                  @click="setLang(option.code)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Название бизнеса</span>
              <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.trim="biz" type="text" placeholder="Стоматология «Улыбка»">
            </label>
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Во сколько вы им писали</span>
              <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.trim="time" type="text" placeholder="21:40">
            </label>
          </div>
          <p v-if="hasPlaceholders" class="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
            Замените XX XXX на реальные цены из их прайса, сайта или Instagram. Демо работает, только когда показывает их цены.
          </p>
        </section>

        <!-- 2. Conversation -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">2. Переписка</h2>
          <ol class="mt-4 space-y-3">
            <li v-for="(message, index) in msgs" :key="index" class="rounded-xl border border-slate-200 p-3">
              <div class="flex items-center justify-between gap-2">
                <button
                  type="button"
                  class="rounded-full px-3 py-1 text-xs font-bold"
                  :class="message.from === 'client' ? 'bg-[#d9fdd3] text-green-900' : 'bg-cobalt-700/10 text-cobalt-700'"
                  @click="message.from = message.from === 'client' ? 'bot' : 'client'"
                >
                  {{ message.from === 'client' ? 'Клиент' : 'Бот' }}
                </button>
                <button type="button" class="text-xs font-semibold text-slate-400 hover:text-red-700" @click="msgs.splice(index, 1)">Удалить</button>
              </div>
              <textarea v-model="message.text" rows="3" class="mt-2 w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cobalt-600"></textarea>
            </li>
          </ol>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-cobalt-600" @click="msgs.push({ from: 'client', text: '' })">+ Сообщение клиента</button>
            <button type="button" class="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-cobalt-600" @click="msgs.push({ from: 'bot', text: '' })">+ Ответ бота</button>
          </div>
          <label class="mt-4 flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
            <span>Итог в конце переписки</span>
            <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.trim="handoff" type="text">
          </label>
        </section>

        <!-- 3. Link -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">3. Ссылка на демо</h2>
          <div class="mt-4 flex flex-col gap-2 sm:flex-row">
            <input :value="link" readonly class="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600" aria-label="Ссылка на демо">
            <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-cobalt-700 px-5 text-sm font-bold text-white hover:bg-cobalt-800" @click="copy('link', link)">{{ copied === 'link' ? 'Скопировано' : 'Копировать' }}</button>
            <a :href="link" target="_blank" rel="noopener" class="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-ink hover:border-cobalt-600">Открыть</a>
          </div>
          <p class="mt-3 text-sm text-slate-500">
            Для видео откройте ссылку на телефоне и запишите экран: переписка проигрывается сама. Ссылку можно отправить и без видео.
          </p>
        </section>

        <!-- 4. First message -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">4. Первое сообщение</h2>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Ваше имя для подписи</span>
              <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.trim="myName" type="text" placeholder="Имя">
            </label>
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Кому пишете</span>
              <select class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model="kind">
                <option value="slow">Ответили медленно</option>
                <option value="none">Не ответили</option>
                <option value="warm">Знакомому</option>
              </select>
            </label>
            <label v-if="kind === 'slow'" class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Через сколько часов ответили</span>
              <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.number="hours" type="number" min="1" max="99">
            </label>
            <label class="flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
              <span>Их WhatsApp (для кнопки)</span>
              <input class="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-normal text-ink outline-none focus:ring-2 focus:ring-cobalt-600" v-model.trim="phone" type="tel" placeholder="+7 701 000 00 00">
            </label>
          </div>
          <textarea v-model="message" rows="11" class="mt-4 w-full resize-y rounded-xl border border-slate-200 px-3 py-2 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-cobalt-600" aria-label="Текст первого сообщения"></textarea>
          <p class="mt-1 text-xs text-slate-400">Текст можно поправить вручную. Если поменять поля выше, он соберётся заново.</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-cobalt-700 px-5 text-sm font-bold text-white hover:bg-cobalt-800" @click="copy('message', message)">{{ copied === 'message' ? 'Скопировано' : 'Копировать' }}</button>
            <a v-if="phoneDigits" :href="waTo(message)" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-5 text-sm font-bold text-white">Открыть в WhatsApp</a>
          </div>
        </section>

        <!-- 5. Follow-up -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">5. Если не ответили через 2 дня</h2>
          <p class="mt-3 whitespace-pre-line rounded-xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">{{ followUp }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-cobalt-700 px-5 text-sm font-bold text-white hover:bg-cobalt-800" @click="copy('follow', followUp)">{{ copied === 'follow' ? 'Скопировано' : 'Копировать' }}</button>
            <a v-if="phoneDigits" :href="waTo(followUp)" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-5 text-sm font-bold text-white">Открыть в WhatsApp</a>
          </div>
        </section>

        <!-- 6. Objections -->
        <section class="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
          <h2 class="text-lg font-extrabold text-ink">6. Ответы на возражения</h2>
          <ul class="mt-4 divide-y divide-slate-100">
            <li v-for="(item, index) in objections[lang]" :key="item.q" class="py-4 first:pt-0">
              <p class="font-bold text-ink">«{{ item.q }}»</p>
              <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ item.a }}</p>
              <button type="button" class="mt-2 text-xs font-bold text-cobalt-700" @click="copy(`obj${index}`, item.a)">
                {{ copied === `obj${index}` ? 'Скопировано' : 'Копировать ответ' }}
              </button>
            </li>
          </ul>
        </section>
      </div>

      <aside class="lg:sticky lg:top-6">
        <DemoChat ref="chat" :key="msgs.length" :data="demo" :autoplay="false" />
        <button type="button" class="mx-auto mt-4 flex min-h-11 items-center justify-center rounded-full bg-cobalt-700 px-5 text-sm font-bold text-white hover:bg-cobalt-800" @click="chat?.play()">▶ Проиграть переписку</button>
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { encodeDemo, type DemoData, type DemoLang, type DemoMessage } from '~/utils/demoLink'
import { demoNiches, extractPrices, followUpMessage, objections, outreachMessage, type OutreachKind } from '~/utils/demoPresets'

const langs: { code: DemoLang, label: string }[] = [
  { code: 'ru', label: 'Русский' },
  { code: 'kk', label: 'Қазақша' },
]

const nicheId = ref(demoNiches[0]!.id)
const lang = ref<DemoLang>('ru')
const biz = ref('')
const time = ref('21:40')
const msgs = ref<DemoMessage[]>([])
const handoff = ref('')

const myName = ref('')
const kind = ref<OutreachKind>('slow')
const hours = ref(14)
const phone = ref('')
const message = ref('')
const copied = ref('')
const origin = ref(siteConfig.url)
const chat = ref<{ play: () => void } | null>(null)

const applyNiche = () => {
  const preset = demoNiches.find((niche) => niche.id === nicheId.value)!.content[lang.value]
  msgs.value = preset.msgs.map((m) => ({ ...m }))
  handoff.value = preset.handoff
}

const setLang = (code: DemoLang) => {
  lang.value = code
  applyNiche()
}

applyNiche()

const demo = computed<DemoData>(() => ({
  v: 1,
  lang: lang.value,
  biz: biz.value || 'Ваш бизнес',
  channel: 'WhatsApp',
  time: time.value,
  msgs: msgs.value.filter((m) => m.text.trim()),
  handoff: handoff.value,
}))

const hasPlaceholders = computed(() => msgs.value.some((m) => /XX/.test(m.text)))
// Short link when only the prices changed, full chat in the link otherwise
const link = computed(() => {
  const prices = extractPrices(nicheId.value, lang.value, msgs.value, handoff.value)
  const payload = prices
    ? { v: 2 as const, n: nicheId.value, l: lang.value, b: demo.value.biz, t: time.value, p: prices }
    : demo.value
  return `${origin.value}/demo/v#${encodeDemo(payload)}`
})
const bizName = computed(() => biz.value || 'вашего бизнеса')
const phoneDigits = computed(() => phone.value.replace(/\D/g, '').replace(/^8(?=\d{10}$)/, '7'))

// Rebuild the message whenever an input changes; manual edits stay until then
watch([lang, kind, hours, myName, link, time], () => {
  message.value = outreachMessage(lang.value, kind.value, {
    biz: bizName.value,
    link: link.value,
    time: time.value,
    hours: hours.value || 1,
    name: myName.value,
  })
}, { immediate: true })

const followUp = computed(() => followUpMessage(lang.value, bizName.value))

const waTo = (text: string) => `https://wa.me/${phoneDigits.value}?text=${encodeURIComponent(text)}`

const copy = async (id: string, text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Clipboard can be blocked; select-and-copy still works from the fields
    return
  }
  copied.value = id
  setTimeout(() => {
    if (copied.value === id) copied.value = ''
  }, 1800)
}

onMounted(() => {
  origin.value = window.location.origin
  try {
    myName.value = localStorage.getItem('demo-builder-name') ?? ''
  } catch {
    // Storage may be unavailable in private mode
  }
})

watch(myName, (value) => {
  try {
    localStorage.setItem('demo-builder-name', value)
  } catch {
    // Remembering the name is only a convenience
  }
})

useHead({
  title: 'Конструктор демо · kenzcore AI Studio',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
