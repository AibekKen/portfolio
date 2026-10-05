declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

// Google Ads tag, loaded after the page so it doesn't slow down the first render.
// Calls made before the script arrives are queued in dataLayer and sent once it loads.
export default defineNuxtPlugin(() => {
  const { googleAdsId } = useRuntimeConfig().public

  if (!googleAdsId) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', googleAdsId)

  afterPageLoad(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`
    document.head.appendChild(script)
  })
})
