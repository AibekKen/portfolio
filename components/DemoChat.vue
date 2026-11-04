<template>
  <div class="mx-auto w-full max-w-[380px] overflow-hidden rounded-[28px] border-[6px] border-ink bg-[#efeae2] shadow-2xl shadow-cobalt-950/30">
    <div class="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
      <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20 font-bold" aria-hidden="true">
        {{ (data.biz || '?').trim().charAt(0).toUpperCase() }}
      </span>
      <div class="min-w-0">
        <p class="truncate text-[0.95rem] font-semibold">{{ data.biz || '—' }}</p>
        <p class="text-xs text-white/80">{{ labels.online }} · {{ labels.bot }}</p>
      </div>
    </div>

    <div class="flex min-h-[26rem] flex-col gap-2 px-3 py-4" aria-live="polite">
      <p class="mx-auto mb-1 rounded-lg bg-white/80 px-2.5 py-1 text-[0.7rem] font-semibold text-slate-500">{{ data.channel }} · {{ data.time }}</p>

      <template v-for="(message, index) in data.msgs" :key="index">
        <div v-if="index < shown" :class="['bubble flex', message.from === 'client' ? 'justify-end' : 'justify-start']">
          <p
            :class="[
              'max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-[0.92rem] leading-snug text-ink shadow-sm',
              message.from === 'client' ? 'rounded-br-md bg-[#d9fdd3]' : 'rounded-bl-md bg-white',
            ]"
          >
            {{ nowrapPrices(message.text) }}
          </p>
        </div>
      </template>

      <div v-if="typing" class="bubble flex justify-start">
        <p class="flex items-center gap-2 rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
          <span class="typing" aria-hidden="true"><i></i><i></i><i></i></span>
          {{ labels.typing }}
        </p>
      </div>

      <p v-if="shown >= data.msgs.length && !typing && data.handoff" class="bubble mx-auto mt-2 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-green-800">
        <svg class="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m5 12 5 5L20 7" />
        </svg>
        {{ data.handoff }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DemoData } from '~/utils/demoLink'

const props = withDefaults(defineProps<{ data: DemoData, autoplay?: boolean }>(), { autoplay: true })
const emit = defineEmits<{ done: [] }>()

const nowrapPrices = (text: string) => text.replace(/(\d) (?=\d{3}\b)/g, '$1\u00a0').replace(/ ₸/g, '\u00a0₸')

const labels = computed(() => (props.data.lang === 'kk'
  ? { online: 'желіде', bot: 'ЖИ-бот', typing: 'жазып жатыр' }
  : { online: 'онлайн', bot: 'ИИ-бот', typing: 'печатает' }))

// Everything is visible until the animation starts, so the chat reads fine without JS
const shown = ref(props.data.msgs.length)
const typing = ref(false)
let timers: ReturnType<typeof setTimeout>[] = []

const stop = () => {
  timers.forEach(clearTimeout)
  timers = []
  typing.value = false
}

const play = () => {
  stop()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = props.data.msgs.length
    emit('done')
    return
  }

  shown.value = 0
  let at = 500

  props.data.msgs.forEach((message, index) => {
    if (message.from === 'bot') {
      timers.push(setTimeout(() => (typing.value = true), at))
      at += 1300
    }
    timers.push(setTimeout(() => {
      typing.value = false
      shown.value = index + 1
    }, at))
    at += message.from === 'bot' ? 1600 : 1100
  })

  timers.push(setTimeout(() => emit('done'), at))
}

defineExpose({ play })

onMounted(() => {
  if (props.autoplay) {
    play()
  }
})

onBeforeUnmount(stop)
</script>

<style scoped>
.bubble {
  animation: bubble-in 360ms cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes bubble-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}

.typing {
  display: inline-flex;
  gap: 3px;
}

.typing i {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: #075e54;
  animation: typing-dot 1.1s ease-in-out infinite;
}

.typing i:nth-child(2) {
  animation-delay: 0.15s;
}

.typing i:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typing-dot {
  0%, 60%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-3px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bubble,
  .typing i {
    animation: none;
  }
}
</style>
