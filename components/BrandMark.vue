<template>
  <NuxtLink :to="localePath('/')" class="brand-mark flex shrink-0 items-center gap-2.5" :aria-label="siteConfig.name">
    <span class="relative grid h-9 w-9 place-items-center rounded-[10px] bg-cobalt-700 text-lg font-extrabold leading-none text-white">
      k
      <span class="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true"></span>
    </span>
    <span class="leading-none">
      <span class="block text-[1.15rem] font-extrabold tracking-tight text-ink">kenzcore</span>
      <span class="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cobalt-600">AI Studio</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/site'

const localePath = useLocalePath()
</script>
