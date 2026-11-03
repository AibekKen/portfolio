<template>
  <section id="cases" class="bg-white py-16 md:py-24">
    <div class="section-container">
      <div class="max-w-3xl">
        <p class="eyebrow">{{ t('ai.projects.eyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          {{ t('ai.projects.title') }}
        </h2>
      </div>

      <!-- Jasyr leads: it is the studio's own live product -->
      <article class="mt-10 grid gap-10 overflow-hidden rounded-[28px] bg-cobalt-900 p-7 text-white md:mt-14 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-12">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{{ t('ai.projects.jasyr.tag') }}</p>
          <h3 class="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-[2.1rem]">
            {{ t('ai.projects.jasyr.title') }}
          </h3>
          <p class="mt-4 text-base leading-relaxed text-blue-100 md:text-lg">
            {{ t('ai.projects.jasyr.text') }}
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="point in jasyrPoints" :key="point" class="flex items-start gap-3 text-base text-blue-50">
              <svg class="mt-1 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m5 12 5 5L20 7" />
              </svg>
              {{ point }}
            </li>
          </ul>
          <a
            href="https://jasyr.app"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-400 px-6 font-bold text-ink transition-colors hover:bg-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt-900"
          >
            {{ t('ai.projects.jasyr.link') }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="rounded-[22px] bg-white p-5 text-ink md:p-7" lang="ru">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{{ t('ai.projects.jasyr.beforeLabel') }}</p>
          <p class="mt-2 rounded-xl bg-red-50 px-4 py-3 font-mono text-sm leading-relaxed text-red-900 md:text-[0.95rem]">
            {{ t('ai.projects.jasyr.before') }}
          </p>
          <div class="my-4 flex items-center gap-3 text-cobalt-600" aria-hidden="true">
            <span class="h-px flex-1 bg-slate-200"></span>
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            <span class="h-px flex-1 bg-slate-200"></span>
          </div>
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{{ t('ai.projects.jasyr.afterLabel') }}</p>
          <p class="mt-2 rounded-xl bg-green-50 px-4 py-3 font-mono text-sm leading-relaxed text-green-900 md:text-[0.95rem]">
            {{ t('ai.projects.jasyr.after') }}
          </p>
          <p class="mt-4 text-xs text-slate-400">{{ t('ai.projects.jasyr.note') }}</p>
        </div>
      </article>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <article v-for="project in sideProjects" :key="project.key" class="flex flex-col rounded-[24px] bg-slate-50 p-7 md:p-8">
          <p class="eyebrow">{{ project.tag }}</p>
          <h3 class="mt-3 text-xl font-extrabold leading-tight tracking-tight text-ink md:text-2xl">
            {{ project.title }}
          </h3>
          <p class="mt-3 text-base leading-relaxed text-slate-600">
            {{ project.text }}
          </p>
          <p v-if="project.sources" class="mt-4 text-sm font-bold text-cobalt-700">
            {{ project.sources }}
          </p>
          <ul class="mt-5 space-y-2.5">
            <li v-for="point in project.points" :key="point" class="flex items-start gap-3 text-[0.95rem] text-slate-700">
              <svg class="mt-1 h-4 w-4 shrink-0 text-cobalt-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m5 12 5 5L20 7" />
              </svg>
              {{ point }}
            </li>
          </ul>
          <div class="mt-auto flex flex-wrap gap-2 pt-6">
            <span v-for="tool in project.tools" :key="tool" class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {{ tool }}
            </span>
          </div>
        </article>
      </div>

      <div class="mt-16 grid gap-10 md:mt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p class="eyebrow">{{ t('ai.projects.clientEyebrow') }} · {{ t('ai.case.client') }}</p>
          <h3 class="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.1rem]">
            {{ t('ai.case.title') }}
          </h3>
          <ul class="mt-8 space-y-4">
            <li v-for="point in points" :key="point" class="flex items-start gap-3 text-base font-medium text-slate-700 md:text-lg">
              <svg class="mt-1 h-5 w-5 shrink-0 text-cobalt-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m5 12 5 5L20 7" />
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>

        <figure class="flex flex-col justify-between rounded-[24px] bg-slate-50 p-7 md:p-10">
          <span class="text-6xl font-extrabold leading-none text-gold-400" aria-hidden="true">“</span>
          <blockquote class="-mt-4 text-lg font-medium leading-relaxed text-ink md:text-xl" lang="ru">
            {{ t('ai.case.quote') }}
          </blockquote>
          <figcaption class="mt-8 flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-cobalt-700 font-bold text-white" aria-hidden="true">
              {{ t('ai.case.author').charAt(0) }}
            </span>
            <span>
              <span class="block font-bold text-ink">{{ t('ai.case.author') }}</span>
              <span class="block text-sm text-slate-500">{{ t('ai.case.role') }}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <figure class="mt-6 grid gap-4 rounded-[24px] border border-slate-200 p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-8">
        <blockquote class="text-base leading-relaxed text-slate-700 md:text-lg" lang="ru">
          «{{ t('ai.case.secondQuote') }}»
        </blockquote>
        <figcaption class="flex items-center gap-3 md:justify-end">
          <span class="grid h-10 w-10 place-items-center rounded-full bg-slate-100 font-bold text-ink" aria-hidden="true">
            {{ t('ai.case.secondAuthor').charAt(0) }}
          </span>
          <span class="whitespace-nowrap">
            <span class="block font-bold text-ink">{{ t('ai.case.secondAuthor') }}</span>
            <span class="block text-sm text-slate-500">{{ t('ai.case.secondRole') }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
type SideProject = {
  key: string
  tag: string
  title: string
  text: string
  sources?: string
  points: string[]
  tools: string[]
}

const { t, tm } = useI18n()
const points = computed(() => tm('ai.case.points') as string[])
const jasyrPoints = computed(() => tm('ai.projects.jasyr.points') as string[])
const sideProjects = computed(() => (['probei', 'pdd'] as const).map((key) => ({
  key,
  ...(tm(`ai.projects.${key}`) as Omit<SideProject, 'key'>),
})))
</script>
