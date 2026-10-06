const storageKey = 'kenz-ad-source'

export type AdSource = {
  channel: 'google_ads'
  keyword?: string
}

// Remembers for this browser tab that the visit came from a Google Ads click,
// so a request sent later from any page can be marked as an ad lead
export const captureAdSource = () => {
  const params = new URLSearchParams(window.location.search)
  const hasClickId = ['gclid', 'gbraid', 'wbraid'].some((key) => params.has(key))
  const isPaidGoogle = params.get('utm_source') === 'google' && params.get('utm_medium') === 'cpc'

  if (!hasClickId && !isPaidGoogle) {
    return
  }

  const source: AdSource = {
    channel: 'google_ads',
    keyword: params.get('utm_term')?.slice(0, 80) || undefined,
  }

  try {
    sessionStorage.setItem(storageKey, JSON.stringify(source))
  } catch {
    // Storage can be unavailable (private mode); the request is still sent without the mark
  }
}

export const useAdSource = () => {
  const getAdSource = (): AdSource | null => {
    try {
      return JSON.parse(sessionStorage.getItem(storageKey) || 'null')
    } catch {
      return null
    }
  }

  return { getAdSource }
}
