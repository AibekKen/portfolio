<template>
  <figure class="rounded-[24px] bg-white p-2 text-ink shadow-2xl shadow-cobalt-950/40">
    <figcaption class="px-3 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
      {{ t('landings.whatsappBot.chat.label') }}
    </figcaption>
    <div class="rounded-[18px] bg-[#efeae2] p-4 sm:p-5">
      <p class="flex items-center gap-2 text-xs font-semibold text-slate-600">
        <span class="h-2 w-2 rounded-full bg-green-500" aria-hidden="true"></span>
        {{ t('landings.whatsappBot.chat.channel') }}
      </p>
      <div class="mt-4 space-y-2.5">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['flex', message.from === 'client' ? 'justify-end' : 'justify-start']"
        >
          <p
            :class="[
              'max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug shadow-sm',
              message.from === 'client' ? 'rounded-br-md bg-[#d9fdd3] text-ink' : 'rounded-bl-md bg-white text-ink',
            ]"
          >
            {{ message.text }}
          </p>
        </div>
      </div>
      <p class="mt-4 flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700">
        <svg class="mt-px h-4 w-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m5 12 5 5L20 7" />
        </svg>
        {{ t('landings.whatsappBot.chat.handoff') }}
      </p>
    </div>
  </figure>
</template>

<script setup lang="ts">
type Message = { from: 'client' | 'bot', text: string }

const { t, tm } = useI18n()
const messages = computed(() => tm('landings.whatsappBot.chat.messages') as Message[])
</script>
