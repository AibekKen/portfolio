<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    leave-active-class="transition duration-200 ease-in"
    enter-from-class="translate-y-full opacity-0"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pt-3 backdrop-blur lg:hidden"
      style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))"
    >
      <div class="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          :href="whatsappLink(locale, topic)"
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-bold text-white"
          @click="trackContactClick"
        >
          <svg class="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16.03 4C9.41 4 4.04 9.35 4.04 15.95c0 2.1.55 4.15 1.6 5.95L4 28l6.25-1.64a12.02 12.02 0 0 0 5.78 1.47h.01c6.61 0 11.99-5.35 11.99-11.94C28.03 9.35 22.65 4 16.03 4Zm5.46 14.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.19-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.11 3.2 5.1 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
          WhatsApp
        </a>
        <button
          type="button"
          class="flex min-h-12 items-center justify-center rounded-full bg-cobalt-700 px-3 text-center text-sm font-bold leading-tight text-white"
          @click="goToContact"
        >
          {{ t('nav.cta') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { whatsappLink } from '~/config/site'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const { trackContactClick } = useAdsConversion()

const scrolledPastHero = ref(false)
const contactInView = ref(false)
const visible = computed(() => scrolledPastHero.value && !contactInView.value)

// App development pages keep their own WhatsApp greeting
const topic = computed(() => (/mobile-apps|websites|razrabotka/.test(route.path) ? 'apps' : 'ai'))

// The app development landing names its form differently
const findForm = () => document.getElementById('contact') ?? document.getElementById('lead-form')

// Measured on every scroll: the page mounts after this bar, so watching the form
// from the moment the bar mounts can miss it entirely
const onScroll = () => {
  scrolledPastHero.value = window.scrollY > 520
  const form = findForm()?.getBoundingClientRect()
  contactInView.value = Boolean(form && form.top < window.innerHeight && form.bottom > 0)
}

const goToContact = () => {
  const contact = findForm()

  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' })
    return
  }

  router.push(`${localePath('/')}#contact`)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

// Pages swap without a reload, so re-check once the new page is on screen
watch(() => route.fullPath, () => nextTick(onScroll))

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
