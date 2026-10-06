// Google Tag Manager container, loaded after the page like the Google Ads tag.
// It shares window.dataLayer with gtag, so events pushed before it loads are not lost.
export default defineNuxtPlugin(() => {
  const { gtmId } = useRuntimeConfig().public

  if (!gtmId) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  afterPageLoad(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
    document.head.appendChild(script)
  })
})
