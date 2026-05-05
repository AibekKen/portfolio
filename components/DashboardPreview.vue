<template>
  <div class="min-w-0">
    <div class="hidden md:block">
      <div class="relative">
        <div class="absolute inset-0 rounded-brand-lg bg-gradient-to-br from-brand-primary/10 to-blue-600/10 blur-xl"></div>
        <div class="card relative bg-white">
          <div class="space-y-6">
            <div class="flex items-start justify-between border-b border-brand-100 pb-4">
              <div>
                <p class="text-sm font-semibold text-brand-primary">CRM dashboard</p>
                <h3 class="mt-1 text-xl font-bold text-brand-900">{{ t('dashboard.title') }}</h3>
              </div>
              <span class="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-900">
                Online
              </span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-brand bg-blue-50 p-4">
                <p class="mb-1 text-sm text-brand-600">{{ t('dashboard.newRequests') }}</p>
                <p class="text-3xl font-bold text-brand-900">24</p>
              </div>
              <div class="rounded-brand bg-green-50 p-4">
                <p class="mb-1 text-sm text-brand-600">{{ t('dashboard.inProgress') }}</p>
                <p class="text-3xl font-bold text-green-600">18</p>
              </div>
              <div class="rounded-brand bg-orange-50 p-4">
                <p class="mb-1 text-sm text-brand-600">{{ t('dashboard.integrations') }}</p>
                <p class="text-3xl font-bold text-orange-600">5</p>
              </div>
              <div class="rounded-brand bg-purple-50 p-4">
                <p class="mb-1 text-sm text-brand-600">{{ t('dashboard.releases') }}</p>
                <p class="text-3xl font-bold text-purple-600">3</p>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="font-semibold text-brand-900">{{ t('dashboard.stageProgress') }}</span>
                <span class="text-brand-600">72%</span>
              </div>
              <div class="h-3 overflow-hidden rounded-full bg-brand-100">
                <div class="h-full w-3/4 rounded-full bg-brand-primary"></div>
              </div>
            </div>

            <div class="grid gap-3">
              <div class="flex items-center justify-between rounded-brand border border-brand-100 p-3">
                <span class="text-sm font-medium text-brand-900">{{ t('dashboard.paymentsApi') }}</span>
                <span class="text-sm text-green-600">{{ t('dashboard.ready') }}</span>
              </div>
              <div class="flex items-center justify-between rounded-brand border border-brand-100 p-3">
                <span class="text-sm font-medium text-brand-900">{{ t('dashboard.userRoles') }}</span>
                <span class="text-sm text-brand-primary">{{ t('dashboard.working') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <div class="card bg-white">
        <div class="space-y-4">
          <div>
            <p class="text-sm font-semibold text-brand-primary">CRM preview</p>
            <h3 class="mt-1 text-xl font-bold text-brand-900">{{ t('dashboard.mobileTitle') }}</h3>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-brand bg-blue-50 p-4 text-center">
              <p class="text-3xl font-bold text-blue-600">24</p>
              <p class="mt-1 text-sm text-brand-600">{{ t('dashboard.requests') }}</p>
            </div>
            <div class="rounded-brand bg-green-50 p-4 text-center">
              <p class="text-3xl font-bold text-green-600">18</p>
              <p class="mt-1 text-sm text-brand-600">{{ t('dashboard.inProgress') }}</p>
            </div>
          </div>
          <div class="rounded-brand border border-brand-100 p-4">
            <div class="mb-2 flex items-center justify-between text-sm">
              <span class="font-semibold text-brand-900">{{ t('dashboard.projectStage') }}</span>
              <span class="text-brand-600">72%</span>
            </div>
            <div class="h-3 overflow-hidden rounded-full bg-brand-100">
              <div class="h-full w-3/4 rounded-full bg-brand-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
