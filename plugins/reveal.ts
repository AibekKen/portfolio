import type { Directive } from 'vue'

type RevealElement = HTMLElement & { revealObserver?: IntersectionObserver }

// v-reveal fades an element in when it scrolls into view; v-reveal="120" adds a delay in ms
const reveal: Directive<RevealElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Never hide content that is already on screen or when motion is unwanted
    if (prefersReducedMotion || !('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight) {
      return
    }

    el.classList.add('reveal')

    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }

    el.revealObserver = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        el.classList.add('reveal-visible')
        el.revealObserver?.disconnect()
        // Hand transitions back to the element (e.g. hover effects) once revealed
        el.addEventListener('transitionend', () => {
          el.classList.remove('reveal', 'reveal-visible')
          el.style.removeProperty('--reveal-delay')
        }, { once: true })
      }
    }, { rootMargin: '0px 0px -8% 0px' })

    el.revealObserver.observe(el)
  },
  unmounted(el) {
    el.revealObserver?.disconnect()
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
