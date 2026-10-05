declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const useAdsConversion = () => {
  const { googleAdsId, googleAdsLeadLabel, googleAdsContactLabel } = useRuntimeConfig().public

  const track = (label: string) => {
    if (!import.meta.client || !googleAdsId || !label || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('event', 'conversion', {
      send_to: `${googleAdsId}/${label}`,
    })
  }

  return {
    // Form submitted successfully — the primary conversion for bidding
    trackLead: () => track(googleAdsLeadLabel),
    // Click on WhatsApp / Telegram / email — secondary conversion
    trackContactClick: () => track(googleAdsContactLabel),
  }
}
