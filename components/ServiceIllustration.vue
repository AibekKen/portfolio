<template>
  <div class="relative mx-auto w-full max-w-xl" :aria-label="label" role="img">
    <div class="absolute inset-6 rounded-brand-lg bg-blue-100"></div>

    <div v-if="kind === 'website'" class="relative rounded-brand-lg border border-brand-100 bg-white p-4 shadow-xl md:p-5">
      <div class="mb-4 flex items-center gap-2 border-b border-brand-100 pb-4">
        <span class="h-3 w-3 rounded-full bg-red-400"></span>
        <span class="h-3 w-3 rounded-full bg-amber-400"></span>
        <span class="h-3 w-3 rounded-full bg-green-400"></span>
        <div class="ml-3 h-8 flex-1 rounded-full bg-brand-100"></div>
      </div>

      <div class="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div class="rounded-brand bg-brand-900 p-5 text-white">
          <div class="h-3 w-24 rounded-full bg-blue-300"></div>
          <div class="mt-5 h-5 w-4/5 rounded-full bg-white"></div>
          <div class="mt-3 h-5 w-3/5 rounded-full bg-white"></div>
          <div class="mt-5 space-y-2">
            <div class="h-2.5 w-full rounded-full bg-blue-200"></div>
            <div class="h-2.5 w-5/6 rounded-full bg-blue-200"></div>
            <div class="h-2.5 w-2/3 rounded-full bg-blue-200"></div>
          </div>
          <div class="mt-6 flex gap-3">
            <div class="h-10 w-28 rounded-brand bg-brand-primary"></div>
            <div class="h-10 w-20 rounded-brand border border-blue-300"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="rounded-brand border border-brand-100 bg-brand-50 p-4">
            <div class="flex items-center justify-between">
              <div class="h-3 w-20 rounded-full bg-brand-100"></div>
              <div class="h-8 w-8 rounded-brand bg-green-100"></div>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-2">
              <div class="h-16 rounded-brand bg-blue-100"></div>
              <div class="h-16 rounded-brand bg-green-100"></div>
              <div class="h-16 rounded-brand bg-amber-100"></div>
            </div>
          </div>

          <div class="rounded-brand border border-brand-100 bg-white p-4">
            <div class="h-3 w-24 rounded-full bg-brand-100"></div>
            <div class="mt-4 space-y-2">
              <div class="h-3 rounded-full bg-blue-100"></div>
              <div class="h-3 w-4/5 rounded-full bg-green-100"></div>
              <div class="h-3 w-3/5 rounded-full bg-amber-100"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 grid gap-3 sm:grid-cols-3">
        <div class="h-20 rounded-brand border border-brand-100 bg-white p-3">
          <div class="h-3 w-16 rounded-full bg-brand-100"></div>
          <div class="mt-4 h-8 rounded-brand bg-green-100"></div>
        </div>
        <div class="h-20 rounded-brand border border-brand-100 bg-white p-3">
          <div class="h-3 w-16 rounded-full bg-brand-100"></div>
          <div class="mt-4 h-8 rounded-brand bg-blue-100"></div>
        </div>
        <div class="h-20 rounded-brand border border-brand-100 bg-white p-3">
          <div class="h-3 w-16 rounded-full bg-brand-100"></div>
          <div class="mt-4 h-8 rounded-brand bg-violet-100"></div>
        </div>
      </div>
    </div>

    <div v-else class="relative flex items-center justify-center gap-5 rounded-brand-lg border border-brand-100 bg-white p-5 shadow-xl">
      <div class="hidden w-32 rounded-[28px] border border-brand-100 bg-brand-900 p-3 shadow-lg sm:block">
        <div class="mx-auto mb-3 h-1 w-10 rounded-full bg-blue-300"></div>
        <div class="rounded-[20px] bg-white p-3">
          <div class="h-16 rounded-brand bg-blue-100"></div>
          <div class="mt-3 h-3 w-20 rounded-full bg-brand-100"></div>
          <div class="mt-3 space-y-2">
            <div class="h-8 rounded-brand bg-green-100"></div>
            <div class="h-8 rounded-brand bg-amber-100"></div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-64 rounded-[34px] border border-brand-100 bg-brand-900 p-3 shadow-2xl">
        <div class="mx-auto mb-3 h-1.5 w-14 rounded-full bg-blue-300"></div>
        <div class="rounded-[26px] bg-white p-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="h-3 w-16 rounded-full bg-brand-100"></div>
              <div class="mt-2 h-5 w-28 rounded-full bg-brand-900"></div>
            </div>
            <div class="h-10 w-10 rounded-brand bg-brand-primary"></div>
          </div>

          <div class="mt-5 rounded-brand bg-brand-50 p-3">
            <div class="flex items-end gap-2">
              <div class="h-10 flex-1 rounded-brand bg-blue-200"></div>
              <div class="h-16 flex-1 rounded-brand bg-green-200"></div>
              <div class="h-12 flex-1 rounded-brand bg-amber-200"></div>
              <div class="h-20 flex-1 rounded-brand bg-violet-200"></div>
            </div>
          </div>

          <div class="mt-4 space-y-3">
            <div class="flex items-center gap-3 rounded-brand border border-brand-100 p-3">
              <div class="h-9 w-9 rounded-brand bg-green-100"></div>
              <div class="flex-1">
                <div class="h-3 w-24 rounded-full bg-brand-100"></div>
                <div class="mt-2 h-2.5 w-16 rounded-full bg-blue-100"></div>
              </div>
            </div>
            <div class="flex items-center gap-3 rounded-brand border border-brand-100 p-3">
              <div class="h-9 w-9 rounded-brand bg-amber-100"></div>
              <div class="flex-1">
                <div class="h-3 w-20 rounded-full bg-brand-100"></div>
                <div class="mt-2 h-2.5 w-24 rounded-full bg-green-100"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-4 gap-2">
            <div class="h-10 rounded-brand bg-brand-900"></div>
            <div class="h-10 rounded-brand bg-brand-100"></div>
            <div class="h-10 rounded-brand bg-brand-100"></div>
            <div class="h-10 rounded-brand bg-brand-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  kind: 'website' | 'mobile'
  label: string
}>()
</script>
