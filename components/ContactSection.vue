<template>
  <section id="contact" class="section-padding bg-gradient-to-br from-brand-dark via-brand-dark-alt to-blue-900">
    <div class="section-container">
      <div class="mb-10 text-center md:mb-14">
        <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 md:gap-12">
        <div class="rounded-brand-lg bg-white p-5 md:p-8">
          <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="mb-2 block text-sm font-semibold text-brand-900">
                {{ t('contact.nameLabel') }}
              </label>
              <input
                id="name"
                v-model.trim="form.name"
                type="text"
                :placeholder="t('contact.namePlaceholder')"
                class="w-full rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                :aria-invalid="Boolean(errors.name)"
              />
              <p v-if="errors.name" class="mt-2 text-sm text-red-900">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label for="contact-field" class="mb-2 block text-sm font-semibold text-brand-900">
                {{ t('contact.contactLabel') }}
              </label>
              <input
                id="contact-field"
                v-model.trim="form.contact"
                type="text"
                :placeholder="t('contact.contactPlaceholder')"
                class="w-full rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                :aria-invalid="Boolean(errors.contact)"
              />
              <p v-if="errors.contact" class="mt-2 text-sm text-red-900">
                {{ errors.contact }}
              </p>
            </div>

            <div>
              <label for="description" class="mb-2 block text-sm font-semibold text-brand-900">
                {{ t('contact.descriptionLabel') }}
              </label>
              <textarea
                id="description"
                v-model.trim="form.description"
                :placeholder="t('contact.descriptionPlaceholder')"
                rows="5"
                class="w-full resize-none rounded-brand border border-brand-100 px-4 py-3 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-primary"
                :aria-invalid="Boolean(errors.description)"
              ></textarea>
              <p v-if="errors.description" class="mt-2 text-sm text-red-900">
                {{ errors.description }}
              </p>
            </div>

            <BaseButton
              variant="primary"
              size="md"
              type="submit"
              class="w-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? t('contact.submitting') : t('contact.submit') }}
            </BaseButton>

            <transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 scale-95"
              leave-active-class="transition-all duration-300"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="showSuccess"
                class="rounded-brand border border-green-200 bg-green-50 p-4 text-center text-base text-green-900"
              >
                {{ t('contact.success') }}
              </div>
            </transition>

            <transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 scale-95"
              leave-active-class="transition-all duration-300"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="submitError"
                class="rounded-brand border border-red-200 bg-red-50 p-4 text-center text-base text-red-900"
              >
                {{ submitError }}
              </div>
            </transition>
          </form>

          <p class="mt-6 text-center text-xs text-brand-600">
            {{ t('contact.privacy') }}
          </p>
        </div>

        <div class="flex flex-col gap-4 md:gap-5">
          <a
            :href="siteConfig.contacts.whatsapp.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex min-h-24 items-center gap-4 rounded-brand-lg bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-brand bg-[#25D366]/10 text-[#25D366]">
              <svg
                class="h-7 w-7"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.03 4C9.41 4 4.04 9.35 4.04 15.95c0 2.1.55 4.15 1.6 5.95L4 28l6.25-1.64a12.02 12.02 0 0 0 5.78 1.47h.01c6.61 0 11.99-5.35 11.99-11.94C28.03 9.35 22.65 4 16.03 4Zm0 21.8h-.01c-1.74 0-3.45-.47-4.94-1.35l-.36-.21-3.7.97.99-3.6-.23-.37a9.86 9.86 0 0 1-1.51-5.29c0-5.47 4.47-9.92 9.96-9.92 2.66 0 5.16 1.03 7.04 2.9a9.85 9.85 0 0 1 2.92 7.02c-.01 5.46-4.47 9.85-9.96 9.85Zm5.46-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.19-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.11 3.2 5.1 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </div>
            <div>
              <p class="font-semibold text-brand-900">WhatsApp</p>
              <p class="text-base text-brand-600">{{ siteConfig.contacts.whatsapp.display }}</p>
            </div>
          </a>

          <a
            :href="siteConfig.contacts.telegram.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex min-h-24 items-center gap-4 rounded-brand-lg bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-brand bg-[#229ED9]/10 text-[#229ED9]">
              <svg
                class="h-7 w-7"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M27.56 6.62c.37-1.54-.97-2.03-2.11-1.58L4.67 13.06c-1.42.55-1.4 1.34-.24 1.7l5.33 1.66L22.1 8.64c.58-.36 1.12-.17.68.22l-10 9.03-.38 5.66c.55 0 .8-.25 1.1-.55l2.65-2.58 5.52 4.08c1.02.56 1.75.27 2-.95l3.89-16.93Z" />
              </svg>
            </div>
            <div>
              <p class="font-semibold text-brand-900">Telegram</p>
              <p class="text-base text-brand-600">{{ siteConfig.contacts.telegram.display }}</p>
            </div>
          </a>

          <a
            :href="siteConfig.contacts.email.href"
            class="flex min-h-24 items-center gap-4 rounded-brand-lg bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-brand bg-brand-primary/10 text-brand-primary">
              <svg
                class="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                <path d="m22 8-10 6L2 8" />
              </svg>
            </div>
            <div>
              <p class="font-semibold text-brand-900">Email</p>
              <p class="text-base text-brand-600">{{ siteConfig.contacts.email.display }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { siteConfig } from '~/config/site'

interface Form {
  name: string
  contact: string
  description: string
}

const form = reactive<Form>({
  name: '',
  contact: '',
  description: '',
})

const errors = reactive<Partial<Record<keyof Form, string>>>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')
const csrfToken = ref('')
const { t } = useI18n()

const validate = () => {
  errors.name = form.name.length >= 2 ? '' : t('contact.validation.name')
  errors.contact = form.contact.length >= 5 ? '' : t('contact.validation.contact')
  errors.description = form.description.length >= 15 ? '' : t('contact.validation.description')

  return !errors.name && !errors.contact && !errors.description
}

const getSubmitErrorMessage = (error: unknown) => {
  if (
    error &&
    typeof error === 'object' &&
    'data' in error &&
    error.data &&
    typeof error.data === 'object' &&
    'statusMessage' in error.data &&
    typeof error.data.statusMessage === 'string'
  ) {
    return error.data.statusMessage
  }

  return t('contact.submitError')
}

const handleSubmit = async () => {
  if (!validate()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''
  showSuccess.value = false

  try {
    if (!csrfToken.value) {
      const csrf = await $fetch<{ token: string }>('/api/contact-csrf')
      csrfToken.value = csrf.token
    }

    await $fetch('/api/contact', {
      method: 'POST',
      headers: {
        'x-contact-csrf': csrfToken.value,
      },
      body: {
        name: form.name,
        contact: form.contact,
        description: form.description,
      },
    })

    form.name = ''
    form.contact = ''
    form.description = ''
    csrfToken.value = ''
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error: unknown) {
    csrfToken.value = ''
    submitError.value = getSubmitErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
