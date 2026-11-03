<template>
  <div
    class="rounded-[24px] bg-white p-2 text-ink shadow-2xl shadow-cobalt-950/40"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div class="px-2 pb-2 pt-3">
      <p class="px-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{{ t('ai.demo.label') }}</p>
      <div class="mt-3 flex gap-1 rounded-2xl bg-slate-100 p-1" role="tablist" :aria-label="t('ai.demo.tabsLabel')">
        <button
          v-for="(scenario, index) in scenarios"
          :id="`demo-tab-${scenario.id}`"
          :key="scenario.id"
          type="button"
          role="tab"
          :aria-selected="active === index"
          :aria-controls="`demo-panel-${scenario.id}`"
          :tabindex="active === index ? 0 : -1"
          :class="[
            'min-h-10 flex-1 rounded-xl px-2 py-1.5 text-center text-xs font-bold leading-tight transition-colors sm:text-[0.8rem]',
            active === index ? 'bg-white text-cobalt-700 shadow-sm' : 'text-slate-500 hover:text-ink',
          ]"
          @click="select(index)"
          @keydown.right.prevent="focusTab(index + 1)"
          @keydown.left.prevent="focusTab(index - 1)"
        >
          {{ scenario.tab }}
        </button>
      </div>
    </div>

    <div
      :id="`demo-panel-${current.id}`"
      role="tabpanel"
      :aria-labelledby="`demo-tab-${current.id}`"
      class="min-h-[19.5rem] rounded-[18px] bg-slate-50 p-4 sm:p-5"
    >
      <p class="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <span class="h-2 w-2 rounded-full bg-green-500" aria-hidden="true"></span>
        {{ current.channel }}
      </p>

      <div class="mt-4 space-y-3">
        <div class="flex justify-end">
          <p :class="['bubble max-w-[85%] rounded-2xl rounded-br-md bg-cobalt-700 px-4 py-3 text-sm leading-snug text-white sm:text-[0.95rem]', phase >= 0 && 'is-in']">
            {{ current.question }}
          </p>
        </div>

        <div class="flex items-start gap-2.5">
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-[0.65rem] font-extrabold text-white" aria-hidden="true">AI</span>
          <div class="min-w-0 max-w-[88%]">
            <p v-if="phase === 1" class="flex items-center gap-2 rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
              <span class="typing" aria-hidden="true"><i></i><i></i><i></i></span>
              {{ t('ai.demo.typing') }}
            </p>
            <p v-else :class="['bubble rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-snug text-ink shadow-sm sm:text-[0.95rem]', phase >= 2 && 'is-in']">
              {{ current.answer }}
            </p>
          </div>
        </div>

        <p :class="['bubble ml-10 inline-flex max-w-[calc(100%-2.5rem)] items-start gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600', phase >= 3 && 'is-in']">
          <svg v-if="current.id === 'local'" class="h-4 w-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <svg v-else-if="current.id === 'rag'" class="h-4 w-4 shrink-0 text-cobalt-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5M9 13h6M9 17h6" />
          </svg>
          <svg v-else class="h-4 w-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m5 12 5 5L20 7" />
          </svg>
          <span>{{ current.meta }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Scenario = {
  id: string
  tab: string
  channel: string
  question: string
  answer: string
  meta: string
}

const { t, tm } = useI18n()
const scenarios = computed(() => tm('ai.demo.scenarios') as Scenario[])

const active = ref(0)
// 0 question, 1 typing, 2 answer, 3 meta. Server render shows the finished dialog.
const phase = ref(3)
const paused = ref(false)
const interacted = ref(false)
const current = computed(() => scenarios.value[active.value] ?? scenarios.value[0]!)

let timers: ReturnType<typeof setTimeout>[] = []
let rotation: ReturnType<typeof setInterval> | undefined
let reducedMotion = false

const clearTimers = () => {
  timers.forEach(clearTimeout)
  timers = []
}

const play = () => {
  clearTimers()

  if (reducedMotion) {
    phase.value = 3
    return
  }

  phase.value = 0
  timers.push(setTimeout(() => (phase.value = 1), 450))
  timers.push(setTimeout(() => (phase.value = 2), 1500))
  timers.push(setTimeout(() => (phase.value = 3), 1900))
}

const select = (index: number) => {
  interacted.value = true
  active.value = index
  play()
}

const focusTab = (index: number) => {
  const count = scenarios.value.length
  const next = (index + count) % count
  select(next)
  document.getElementById(`demo-tab-${scenarios.value[next]!.id}`)?.focus()
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    return
  }

  // Cycle through the examples until the visitor picks one
  rotation = setInterval(() => {
    if (interacted.value || paused.value || document.hidden) {
      return
    }

    active.value = (active.value + 1) % scenarios.value.length
    play()
  }, 7000)
})

onBeforeUnmount(() => {
  clearTimers()
  clearInterval(rotation)
})
</script>

<style scoped>
.bubble {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 320ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.bubble.is-in {
  opacity: 1;
  transform: none;
}

.typing {
  display: inline-flex;
  gap: 3px;
}

.typing i {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: #0a47c2;
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
  .bubble {
    transition: none;
  }

  .typing i {
    animation: none;
  }
}
</style>
