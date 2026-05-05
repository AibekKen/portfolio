<template>
  <section id="cases" class="section-padding bg-white">
    <div class="section-container">
      <div class="mb-10 text-center md:mb-14">
        <h2 class="text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl">
          {{ t('cases.title') }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-brand-600 md:text-lg">
          {{ t('cases.subtitle') }}
        </p>
      </div>

      <div class="cases-scroll -mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-3 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div class="flex gap-5 md:gap-6">
          <BaseCard class="flex w-[82vw] max-w-sm shrink-0 snap-start sm:w-80 md:w-[22rem] lg:w-[24rem]">
            <div class="flex h-full min-h-[25rem] w-full flex-col">
              <button
                type="button"
                class="group mb-5 h-32 overflow-hidden rounded-brand bg-brand-50 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                :aria-label="t('cases.aria.openMonitoring')"
                @click="openMonitoringModal"
              >
                <img
                  :src="monitoringCase.cover.src"
                  :alt="monitoringCase.cover.alt"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                >
              </button>
              <h3 class="mb-4 text-2xl font-bold text-brand-900">
                {{ monitoringCase.title }}
              </h3>
              <ul class="mb-5 space-y-3 text-base text-brand-600">
                <li v-for="point in monitoringCase.cardPoints" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
              <BaseButton class="mt-auto w-full" size="sm" @click="openMonitoringModal">
                {{ t('cases.details') }}
              </BaseButton>
            </div>
          </BaseCard>

          <BaseCard class="flex w-[82vw] max-w-sm shrink-0 snap-start sm:w-80 md:w-[22rem] lg:w-[24rem]">
            <div class="flex h-full min-h-[25rem] w-full flex-col">
              <button
                type="button"
                class="group mb-5 h-32 overflow-hidden rounded-brand bg-brand-50 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                :aria-label="t('cases.aria.openCourier')"
                @click="openCourierModal"
              >
                <img
                  :src="courierCase.cover.src"
                  :alt="courierCase.cover.alt"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                >
              </button>
              <h3 class="mb-4 text-2xl font-bold text-brand-900">
                {{ courierCase.title }}
              </h3>
              <ul class="mb-5 space-y-3 text-base text-brand-600">
                <li v-for="point in courierCase.cardPoints" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
              <BaseButton class="mt-auto w-full" size="sm" @click="openCourierModal">
                {{ t('cases.details') }}
              </BaseButton>
            </div>
          </BaseCard>

          <BaseCard class="flex w-[82vw] max-w-sm shrink-0 snap-start sm:w-80 md:w-[22rem] lg:w-[24rem]">
            <div class="flex h-full min-h-[25rem] w-full flex-col">
              <button
                type="button"
                class="group mb-5 h-32 overflow-hidden rounded-brand bg-slate-950 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                :aria-label="t('cases.aria.openB2b')"
                @click="openB2bModal"
              >
                <div class="flex h-full flex-col justify-between p-4 text-white transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>B2B Portal</span>
                    <span>{{ t('cases.b2bPreviewLimit') }}</span>
                  </div>
                  <div class="grid grid-cols-[1fr_0.7fr] gap-3">
                    <div class="space-y-2">
                      <div class="h-2 w-24 rounded-full bg-white/80" />
                      <div class="h-2 w-16 rounded-full bg-cyan-300" />
                      <div class="h-2 w-20 rounded-full bg-white/35" />
                    </div>
                    <div class="rounded bg-white/10 p-2">
                      <div class="mb-2 h-2 w-12 rounded-full bg-emerald-300" />
                      <div class="h-8 rounded border border-white/20 bg-white/10" />
                    </div>
                  </div>
                </div>
              </button>
              <h3 class="mb-4 text-2xl font-bold text-brand-900">
                {{ b2bCase.title }}
              </h3>
              <ul class="mb-5 space-y-3 text-base text-brand-600">
                <li v-for="point in b2bCase.cardPoints" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
              <BaseButton class="mt-auto w-full" size="sm" @click="openB2bModal">
                {{ t('cases.details') }}
              </BaseButton>
            </div>
          </BaseCard>

          <BaseCard
            v-for="item in cases"
            :key="item.title"
            class="flex w-[82vw] max-w-sm shrink-0 snap-start sm:w-80 md:w-[22rem] lg:w-[24rem]"
          >
            <div class="flex h-full min-h-[25rem] w-full flex-col">
              <button
                type="button"
                :class="['group mb-5 h-32 overflow-hidden rounded-brand text-left focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2', item.previewClass]"
                :aria-label="t('cases.aria.openPrototype', { title: item.title })"
                @click="openPrototypeModal(item)"
              >
                <div class="flex h-full flex-col gap-2 p-3 transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="flex items-center justify-between gap-2 text-[10px] font-semibold">
                    <span class="truncate">{{ item.previewTitle }}</span>
                    <span class="shrink-0 rounded-full bg-white/80 px-2 py-0.5 text-[9px]">
                      {{ item.previewStatus }}
                    </span>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      v-for="stat in item.previewStats"
                      :key="stat.label"
                      class="rounded bg-white/70 px-2 py-1.5"
                    >
                      <p class="text-[9px] font-medium opacity-65">
                        {{ stat.label }}
                      </p>
                      <p class="mt-0.5 text-sm font-bold leading-none">
                        {{ stat.value }}
                      </p>
                    </div>
                  </div>
                  <div class="space-y-1 rounded bg-white/70 p-2 text-[10px]">
                    <div
                      v-for="row in item.previewRows"
                      :key="row.name"
                      class="grid grid-cols-[1fr_auto] items-center gap-2"
                    >
                      <span class="truncate font-medium">{{ row.name }}</span>
                      <span class="shrink-0 font-semibold opacity-75">{{ row.value }}</span>
                    </div>
                  </div>
                </div>
              </button>
              <h3 class="mb-4 text-2xl font-bold text-brand-900">
                {{ item.title }}
              </h3>
              <ul class="mb-5 space-y-3 text-base text-brand-600">
                <li v-for="point in item.points" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
              <BaseButton class="mt-auto w-full" size="sm" @click="openPrototypeModal(item)">
                {{ t('cases.details') }}
              </BaseButton>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isMonitoringModalOpen"
        class="fixed inset-0 z-[9999] flex items-end justify-center overscroll-contain bg-brand-900/70 p-0 md:items-center md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="monitoring-case-title"
        @click.self="closeMonitoringModal"
      >
        <div class="max-h-[92vh] w-full overflow-y-auto rounded-t-brand-lg bg-white shadow-2xl md:max-w-6xl md:rounded-brand-lg">
          <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-100 bg-white px-5 py-4 md:px-8 md:py-6">
            <div>
              <h3 id="monitoring-case-title" class="text-2xl font-bold text-brand-900 md:text-3xl">
                {{ monitoringCase.title }}
              </h3>
            </div>
            <button
              type="button"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-900"
              :aria-label="t('cases.aria.close')"
              @click="closeMonitoringModal"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div class="space-y-6">
              <p class="text-base text-brand-600 md:text-lg">
                {{ monitoringCase.description }}
              </p>

              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="item in monitoringCase.metrics"
                  :key="item.label"
                  class="rounded-brand border border-brand-100 bg-brand-50 p-4"
                >
                  <p class="text-xl font-bold text-brand-900">
                    {{ item.value }}
                  </p>
                  <p class="mt-1 text-sm text-brand-600">
                    {{ item.label }}
                  </p>
                </div>
              </div>

              <ul class="space-y-3 text-base text-brand-600">
                <li v-for="point in monitoringCase.points" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="min-w-0">
              <figure class="overflow-hidden rounded-brand border border-brand-100 bg-white shadow-sm">
                <div class="relative bg-brand-50">
                  <img
                    :src="activeMonitoringImage.src"
                    :alt="activeMonitoringImage.alt"
                    class="h-56 w-full object-contain md:h-[430px]"
                    loading="lazy"
                  >
                  <div class="absolute inset-y-0 left-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.previousScreenshot')"
                      @click="showPreviousMonitoringImage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.nextScreenshot')"
                      @click="showNextMonitoringImage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                </div>
                <figcaption class="px-4 py-3 text-sm font-semibold text-brand-700">
                  {{ activeMonitoringImage.caption }}
                  <span class="font-normal text-brand-500">
                    {{ activeMonitoringImageIndex + 1 }} / {{ monitoringCase.value.images.length }}
                  </span>
                </figcaption>
              </figure>

              <div class="mt-3 flex gap-3 overflow-x-auto pb-1">
                <button
                  v-for="(image, index) in monitoringCase.value.images"
                  :key="image.src"
                  type="button"
                  :class="[
                    'h-16 w-24 shrink-0 overflow-hidden rounded-brand border-2 bg-brand-50 transition-colors',
                    index === activeMonitoringImageIndex ? 'border-brand-primary' : 'border-transparent hover:border-brand-200',
                  ]"
                  :aria-label="t('cases.aria.showScreenshot', { caption: image.caption })"
                  @click="activeMonitoringImageIndex = index"
                >
                  <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover" loading="lazy">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <div
        v-if="isCourierModalOpen"
        class="fixed inset-0 z-[9999] flex items-end justify-center overscroll-contain bg-brand-900/70 p-0 md:items-center md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="courier-case-title"
        @click.self="closeCourierModal"
      >
        <div class="max-h-[92vh] w-full overflow-y-auto rounded-t-brand-lg bg-white shadow-2xl md:max-w-6xl md:rounded-brand-lg">
          <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-100 bg-white px-5 py-4 md:px-8 md:py-6">
            <div>
              <h3 id="courier-case-title" class="text-2xl font-bold text-brand-900 md:text-3xl">
                {{ courierCase.title }}
              </h3>
            </div>
            <button
              type="button"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-900"
              :aria-label="t('cases.aria.close')"
              @click="closeCourierModal"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div class="space-y-6">
              <p class="text-base text-brand-600 md:text-lg">
                {{ courierCase.description }}
              </p>

              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="item in courierCase.metrics"
                  :key="item.label"
                  class="rounded-brand border border-brand-100 bg-brand-50 p-4"
                >
                  <p class="text-xl font-bold text-brand-900">
                    {{ item.value }}
                  </p>
                  <p class="mt-1 text-sm text-brand-600">
                    {{ item.label }}
                  </p>
                </div>
              </div>

              <ul class="space-y-3 text-base text-brand-600">
                <li v-for="point in courierCase.points" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="min-w-0">
              <figure class="overflow-hidden rounded-brand border border-brand-100 bg-white shadow-sm">
                <div class="relative bg-brand-50">
                  <img
                    :src="activeCourierImage.src"
                    :alt="activeCourierImage.alt"
                    class="h-56 w-full object-contain md:h-[430px]"
                    loading="lazy"
                  >
                  <div class="absolute inset-y-0 left-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.previousScreenshot')"
                      @click="showPreviousCourierImage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.nextScreenshot')"
                      @click="showNextCourierImage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                </div>
                <figcaption class="px-4 py-3 text-sm font-semibold text-brand-700">
                  {{ activeCourierImage.caption }}
                  <span class="font-normal text-brand-500">
                    {{ activeCourierImageIndex + 1 }} / {{ courierCase.value.images.length }}
                  </span>
                </figcaption>
              </figure>

              <div class="mt-3 flex gap-3 overflow-x-auto pb-1">
                <button
                  v-for="(image, index) in courierCase.value.images"
                  :key="image.src"
                  type="button"
                  :class="[
                    'h-16 w-24 shrink-0 overflow-hidden rounded-brand border-2 bg-brand-50 transition-colors',
                    index === activeCourierImageIndex ? 'border-brand-primary' : 'border-transparent hover:border-brand-200',
                  ]"
                  :aria-label="t('cases.aria.showScreenshot', { caption: image.caption })"
                  @click="activeCourierImageIndex = index"
                >
                  <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover" loading="lazy">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <div
        v-if="isB2bModalOpen"
        class="fixed inset-0 z-[9999] flex items-end justify-center overscroll-contain bg-brand-900/70 p-0 md:items-center md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="b2b-case-title"
        @click.self="closeB2bModal"
      >
        <div class="max-h-[92vh] w-full overflow-y-auto rounded-t-brand-lg bg-white shadow-2xl md:max-w-6xl md:rounded-brand-lg">
          <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-100 bg-white px-5 py-4 md:px-8 md:py-6">
            <div>
              <h3 id="b2b-case-title" class="text-2xl font-bold text-brand-900 md:text-3xl">
                {{ b2bCase.title }}
              </h3>
            </div>
            <button
              type="button"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-900"
              :aria-label="t('cases.aria.close')"
              @click="closeB2bModal"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div class="space-y-6">
              <p class="text-base text-brand-600 md:text-lg">
                {{ b2bCase.description }}
              </p>

              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="item in b2bCase.metrics"
                  :key="item.label"
                  class="rounded-brand border border-brand-100 bg-brand-50 p-4"
                >
                  <p class="text-xl font-bold text-brand-900">
                    {{ item.value }}
                  </p>
                  <p class="mt-1 text-sm text-brand-600">
                    {{ item.label }}
                  </p>
                </div>
              </div>

              <ul class="space-y-3 text-base text-brand-600">
                <li v-for="point in b2bCase.points" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="min-w-0">
              <figure class="overflow-hidden rounded-brand border border-brand-100 bg-white shadow-sm">
                <div class="relative h-56 bg-brand-50 md:h-[430px]">
                  <div class="h-full overflow-hidden bg-slate-50">
                    <div class="border-b border-slate-200 bg-slate-950 px-4 py-3 text-white">
                      <div class="flex items-center justify-between gap-4">
                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                            Counterparty portal
                          </p>
                          <p class="mt-1 text-lg font-bold">
                            {{ activeB2bPage.title }}
                          </p>
                        </div>
                        <button type="button" class="rounded bg-cyan-400 px-3 py-2 text-sm font-bold text-slate-950">
                          {{ activeB2bPage.action }}
                        </button>
                      </div>
                    </div>

                    <div class="grid gap-4 p-4 md:grid-cols-[0.9fr_1.1fr]">
                      <div class="space-y-3">
                        <div class="rounded-brand border border-slate-200 bg-white p-4">
                          <p class="text-sm font-semibold text-slate-500">
                            {{ activeB2bPage.summaryLabel }}
                          </p>
                          <p class="mt-2 text-2xl font-bold text-slate-950">
                            {{ activeB2bPage.summaryValue }}
                          </p>
                          <div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div class="h-full rounded-full bg-cyan-500" :style="{ width: activeB2bPage.progress }" />
                          </div>
                          <div class="mt-3 flex justify-between text-xs font-semibold text-slate-500">
                            <span>{{ activeB2bPage.summaryLeft }}</span>
                            <span>{{ activeB2bPage.summaryRight }}</span>
                          </div>
                        </div>

                        <div class="rounded-brand border border-slate-200 bg-white p-4">
                          <p class="text-sm font-semibold text-slate-500">
                            {{ activeB2bPage.asideTitle }}
                          </p>
                          <div class="mt-3 grid gap-2">
                            <button
                              v-for="action in activeB2bPage.asideActions"
                              :key="action"
                              type="button"
                              class="rounded border border-slate-200 px-3 py-2 text-left text-sm font-semibold text-slate-800"
                            >
                              {{ action }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="overflow-hidden rounded-brand border border-slate-200 bg-white">
                        <div class="grid grid-cols-[1fr_0.8fr_0.8fr] border-b border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold uppercase text-slate-500">
                          <span>{{ activeB2bPage.tableHeaders[0] }}</span>
                          <span>{{ activeB2bPage.tableHeaders[1] }}</span>
                          <span>{{ activeB2bPage.tableHeaders[2] }}</span>
                        </div>
                        <div
                          v-for="row in activeB2bPage.rows"
                          :key="row.name"
                          class="grid grid-cols-[1fr_0.8fr_0.8fr] items-center border-b border-slate-100 px-3 py-3 text-sm last:border-b-0"
                        >
                          <span class="font-semibold text-slate-900">{{ row.name }}</span>
                          <span class="text-slate-700">{{ row.middle }}</span>
                          <span class="font-semibold text-slate-900">{{ row.value }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute inset-y-0 left-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.previousB2b')"
                      @click="showPreviousB2bPage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.nextB2b')"
                      @click="showNextB2bPage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                </div>
                <figcaption class="px-4 py-3 text-sm font-semibold text-brand-700">
                  {{ activeB2bPage.title }}
                  <span class="font-normal text-brand-500">
                    {{ activeB2bPageIndex + 1 }} / {{ b2bCase.value.pages.length }}
                  </span>
                </figcaption>
              </figure>

              <div class="mt-3 flex gap-3 overflow-x-auto pb-1">
                <button
                  v-for="(page, index) in b2bCase.value.pages"
                  :key="page.title"
                  type="button"
                  :class="[
                    'h-16 w-24 shrink-0 overflow-hidden rounded-brand border-2 bg-slate-50 transition-colors',
                    index === activeB2bPageIndex ? 'border-brand-primary' : 'border-transparent hover:border-brand-200',
                  ]"
                  :aria-label="t('cases.aria.showPage', { title: page.title })"
                  @click="activeB2bPageIndex = index"
                >
                  <div class="h-full text-left">
                    <div class="h-3 bg-slate-950 px-1">
                      <div class="h-full w-8 rounded-sm bg-cyan-300/80" />
                    </div>
                    <div class="grid h-[calc(100%-0.75rem)] grid-cols-[0.8fr_1fr] gap-1 p-1">
                      <div class="space-y-1">
                        <div class="h-3 rounded-sm bg-white" />
                        <div class="h-5 rounded-sm bg-white" />
                      </div>
                      <div class="space-y-1 rounded-sm bg-white p-1">
                        <div
                          v-for="row in page.rows.slice(0, 3)"
                          :key="row.name"
                          class="h-1 rounded-full bg-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <div
        v-if="activePrototypeCase"
        class="fixed inset-0 z-[9999] flex items-end justify-center overscroll-contain bg-brand-900/70 p-0 md:items-center md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prototype-case-title"
        @click.self="closePrototypeModal"
      >
        <div class="max-h-[92vh] w-full overflow-y-auto rounded-t-brand-lg bg-white shadow-2xl md:max-w-6xl md:rounded-brand-lg">
          <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-100 bg-white px-5 py-4 md:px-8 md:py-6">
            <div>
              <h3 id="prototype-case-title" class="text-2xl font-bold text-brand-900 md:text-3xl">
                {{ activePrototypeCase.title }}
              </h3>
            </div>
            <button
              type="button"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-900"
              :aria-label="t('cases.aria.close')"
              @click="closePrototypeModal"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div class="space-y-6">
              <p class="text-base text-brand-600 md:text-lg">
                {{ activePrototypeCase.description }}
              </p>

              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="metric in activePrototypeCase.metrics"
                  :key="metric.label"
                  class="rounded-brand border border-brand-100 bg-brand-50 p-4"
                >
                  <p class="text-xl font-bold text-brand-900">
                    {{ metric.value }}
                  </p>
                  <p class="mt-1 text-sm text-brand-600">
                    {{ metric.label }}
                  </p>
                </div>
              </div>

              <ul class="space-y-3 text-base text-brand-600">
                <li v-for="point in activePrototypeCase.detailPoints" :key="point" class="flex gap-2">
                  <span class="font-bold text-brand-primary">-</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="min-w-0">
              <figure class="overflow-hidden rounded-brand border border-brand-100 bg-white shadow-sm">
                <div class="relative h-56 bg-brand-50 md:h-[430px]">
                  <div class="h-full overflow-hidden">
                    <div :class="['border-b px-4 py-3', activePrototypePage.panelClass]">
                      <div class="flex items-center justify-between gap-4">
                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide opacity-75">
                            {{ activePrototypePage.panelEyebrow }}
                          </p>
                          <p class="mt-1 text-lg font-bold">
                            {{ activePrototypePage.title }}
                          </p>
                        </div>
                        <button type="button" class="rounded bg-white px-3 py-2 text-sm font-bold text-slate-950 shadow-sm">
                          {{ activePrototypePage.panelAction }}
                        </button>
                      </div>
                    </div>

                    <div class="grid gap-4 bg-slate-50 p-4 md:grid-cols-[0.9fr_1.1fr]">
                      <div class="space-y-3">
                        <div class="rounded-brand border border-slate-200 bg-white p-4">
                          <p class="text-sm font-semibold text-slate-500">
                            {{ activePrototypePage.summaryLabel }}
                          </p>
                          <p class="mt-2 text-2xl font-bold text-slate-950">
                            {{ activePrototypePage.summaryValue }}
                          </p>
                          <div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              class="h-full rounded-full bg-brand-primary"
                              :style="{ width: activePrototypePage.summaryProgress }"
                            />
                          </div>
                          <div class="mt-3 flex justify-between text-xs font-semibold text-slate-500">
                            <span>{{ activePrototypePage.summaryLeft }}</span>
                            <span>{{ activePrototypePage.summaryRight }}</span>
                          </div>
                        </div>

                        <div class="rounded-brand border border-slate-200 bg-white p-4">
                          <p class="text-sm font-semibold text-slate-500">
                            {{ activePrototypePage.sectionsTitle }}
                          </p>
                          <div class="mt-3 grid gap-2">
                            <div
                              v-for="section in activePrototypePage.sections"
                              :key="section"
                              class="rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800"
                            >
                              {{ section }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="overflow-hidden rounded-brand border border-slate-200 bg-white">
                        <div class="grid grid-cols-[1fr_0.8fr_0.8fr] border-b border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold uppercase text-slate-500">
                          <span>{{ activePrototypePage.tableHeaders[0] }}</span>
                          <span>{{ activePrototypePage.tableHeaders[1] }}</span>
                          <span>{{ activePrototypePage.tableHeaders[2] }}</span>
                        </div>
                        <div
                          v-for="row in activePrototypePage.rows"
                          :key="row.name"
                          class="grid grid-cols-[1fr_0.8fr_0.8fr] items-center border-b border-slate-100 px-3 py-3 text-sm last:border-b-0"
                        >
                          <span class="font-semibold text-slate-900">{{ row.name }}</span>
                          <span class="text-slate-700">{{ row.middle }}</span>
                          <span class="font-semibold text-slate-900">{{ row.value }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute inset-y-0 left-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.previousCasePage')"
                      @click="showPreviousPrototypePage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3">
                    <button
                      type="button"
                      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-sm transition-colors hover:bg-white"
                      :aria-label="t('cases.aria.nextCasePage')"
                      @click="showNextPrototypePage"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                </div>
                <figcaption class="px-4 py-3 text-sm font-semibold text-brand-700">
                  {{ activePrototypePage.title }}
                  <span class="font-normal text-brand-500">
                    {{ activePrototypePageIndex + 1 }} / {{ activePrototypeCase.pages.length }}
                  </span>
                </figcaption>
              </figure>

              <div class="mt-3 flex gap-3 overflow-x-auto pb-1">
                <button
                  v-for="(page, index) in activePrototypeCase.pages"
                  :key="page.title"
                  type="button"
                  :class="[
                    'h-16 w-24 shrink-0 overflow-hidden rounded-brand border-2 bg-slate-50 transition-colors',
                    index === activePrototypePageIndex ? 'border-brand-primary' : 'border-transparent hover:border-brand-200',
                  ]"
                  :aria-label="t('cases.aria.showPage', { title: page.title })"
                  @click="activePrototypePageIndex = index"
                >
                  <div class="h-full text-left">
                    <div :class="['h-3 px-1', page.panelClass]">
                      <div class="h-full w-8 rounded-sm bg-white/70" />
                    </div>
                    <div class="grid h-[calc(100%-0.75rem)] grid-cols-[0.8fr_1fr] gap-1 bg-slate-50 p-1">
                      <div class="space-y-1">
                        <div class="h-3 rounded-sm bg-white" />
                        <div class="h-5 rounded-sm bg-white" />
                      </div>
                      <div class="space-y-1 rounded-sm bg-white p-1">
                        <div
                          v-for="row in page.rows.slice(0, 3)"
                          :key="row.name"
                          class="h-1 rounded-full bg-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const { t, tm } = useI18n()

type ImageCase = {
  title: string
  description: string
  cover: { src: string; alt: string; caption: string }
  metrics: { value: string; label: string }[]
  points: string[]
  cardPoints: string[]
  images: { src: string; alt: string; caption: string }[]
}

type B2bCase = {
  title: string
  description: string
  metrics: { value: string; label: string }[]
  points: string[]
  cardPoints: string[]
  pages: B2bPage[]
}

type B2bPage = {
  tab: string
  title: string
  action: string
  summaryLabel: string
  summaryValue: string
  progress: string
  summaryLeft: string
  summaryRight: string
  asideTitle: string
  asideActions: string[]
  tableHeaders: [string, string, string]
  rows: { name: string; middle: string; value: string }[]
}

const monitoringCase = computed(() => tm('cases.monitoring') as ImageCase)
const courierCase = computed(() => tm('cases.courier') as ImageCase)
const b2bCase = computed(() => tm('cases.b2b') as B2bCase)
const cases = computed(() => tm('cases.prototypes') as PrototypeCase[])

const isMonitoringModalOpen = ref(false)
const activeMonitoringImageIndex = ref(0)
const isCourierModalOpen = ref(false)
const activeCourierImageIndex = ref(0)
const isB2bModalOpen = ref(false)
const activeB2bPageIndex = ref(0)
const activePrototypeCase = ref<PrototypeCase | null>(null)
const activePrototypePageIndex = ref(0)
const activeMonitoringImage = computed(() => monitoringCase.value.images[activeMonitoringImageIndex.value])
const activeCourierImage = computed(() => courierCase.value.images[activeCourierImageIndex.value])
const activeB2bPage = computed(() => b2bCase.value.pages[activeB2bPageIndex.value])
const activePrototypePage = computed(() => activePrototypeCase.value?.pages[activePrototypePageIndex.value] ?? emptyPrototypePage)
const isAnyCaseModalOpen = computed(
  () => isMonitoringModalOpen.value || isCourierModalOpen.value || isB2bModalOpen.value || Boolean(activePrototypeCase.value),
)
let lockedScrollY = 0

const openMonitoringModal = () => {
  isMonitoringModalOpen.value = true
}

const closeMonitoringModal = () => {
  isMonitoringModalOpen.value = false
}

const openCourierModal = () => {
  isCourierModalOpen.value = true
}

const closeCourierModal = () => {
  isCourierModalOpen.value = false
}

const openB2bModal = () => {
  activeB2bPageIndex.value = 0
  isB2bModalOpen.value = true
}

const closeB2bModal = () => {
  isB2bModalOpen.value = false
}

const openPrototypeModal = (caseItem: PrototypeCase) => {
  activePrototypePageIndex.value = 0
  activePrototypeCase.value = caseItem
}

const closePrototypeModal = () => {
  activePrototypeCase.value = null
}

const showPreviousMonitoringImage = () => {
  activeMonitoringImageIndex.value =
    (activeMonitoringImageIndex.value - 1 + monitoringCase.value.images.length) % monitoringCase.value.images.length
}

const showNextMonitoringImage = () => {
  activeMonitoringImageIndex.value = (activeMonitoringImageIndex.value + 1) % monitoringCase.value.images.length
}

const showPreviousCourierImage = () => {
  activeCourierImageIndex.value =
    (activeCourierImageIndex.value - 1 + courierCase.value.images.length) % courierCase.value.images.length
}

const showNextCourierImage = () => {
  activeCourierImageIndex.value = (activeCourierImageIndex.value + 1) % courierCase.value.images.length
}

const showPreviousB2bPage = () => {
  activeB2bPageIndex.value = (activeB2bPageIndex.value - 1 + b2bCase.value.pages.length) % b2bCase.value.pages.length
}

const showNextB2bPage = () => {
  activeB2bPageIndex.value = (activeB2bPageIndex.value + 1) % b2bCase.value.pages.length
}

const showPreviousPrototypePage = () => {
  if (!activePrototypeCase.value) {
    return
  }

  activePrototypePageIndex.value =
    (activePrototypePageIndex.value - 1 + activePrototypeCase.value.pages.length) % activePrototypeCase.value.pages.length
}

const showNextPrototypePage = () => {
  if (!activePrototypeCase.value) {
    return
  }

  activePrototypePageIndex.value = (activePrototypePageIndex.value + 1) % activePrototypeCase.value.pages.length
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMonitoringModal()
    closeCourierModal()
    closeB2bModal()
    closePrototypeModal()
    return
  }

  if (!isAnyCaseModalOpen.value) {
    return
  }

  if (event.key === 'ArrowLeft') {
    if (isCourierModalOpen.value) {
      showPreviousCourierImage()
    } else if (isB2bModalOpen.value) {
      showPreviousB2bPage()
    } else if (activePrototypeCase.value) {
      showPreviousPrototypePage()
    } else if (isMonitoringModalOpen.value) {
      showPreviousMonitoringImage()
    }
  }

  if (event.key === 'ArrowRight') {
    if (isCourierModalOpen.value) {
      showNextCourierImage()
    } else if (isB2bModalOpen.value) {
      showNextB2bPage()
    } else if (activePrototypeCase.value) {
      showNextPrototypePage()
    } else if (isMonitoringModalOpen.value) {
      showNextMonitoringImage()
    }
  }
}

watch(isAnyCaseModalOpen, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  if (isOpen) {
    lockedScrollY = window.scrollY
    document.documentElement.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${lockedScrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
    window.scrollTo(0, lockedScrollY)
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }

  document.documentElement.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})

type PrototypeCase = {
  title: string
  previewTitle: string
  previewStatus: string
  previewClass: string
  previewStats: { label: string; value: string }[]
  previewRows: { name: string; value: string }[]
  category?: string
  points: string[]
  description: string
  story?: { title: string; text: string }[]
  metrics: { value: string; label: string }[]
  detailPoints: string[]
  pages: PrototypePage[]
}

type PrototypePage = {
  tab: string
  title: string
  panelClass: string
  panelEyebrow: string
  panelAction: string
  summaryLabel: string
  summaryValue: string
  summaryProgress: string
  summaryLeft: string
  summaryRight: string
  sectionsTitle: string
  sections: string[]
  tableHeaders: [string, string, string]
  rows: { name: string; middle: string; value: string }[]
}

const emptyPrototypePage: PrototypePage = {
  tab: '',
  title: '',
  panelClass: 'border-brand-900 bg-brand-900 text-white',
  panelEyebrow: '',
  panelAction: '',
  summaryLabel: '',
  summaryValue: '',
  summaryProgress: '0%',
  summaryLeft: '',
  summaryRight: '',
  sectionsTitle: '',
  sections: [],
  tableHeaders: ['', '', ''],
  rows: [],
}

</script>

<style scoped>
.cases-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.cases-scroll::-webkit-scrollbar {
  display: none;
}
</style>
