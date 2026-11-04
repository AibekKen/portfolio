// A sales demo is packed into the URL hash, so a personalised link needs no
// database and its contents never reach the server.

export type DemoLang = 'ru' | 'kk'

export type DemoMessage = {
  from: 'client' | 'bot'
  text: string
}

export type DemoData = {
  v: 1
  lang: DemoLang
  biz: string
  channel: string
  time: string
  msgs: DemoMessage[]
  handoff: string
}

const toBase64Url = (bytes: Uint8Array) => {
  let binary = ''
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

const fromBase64Url = (value: string) => {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4))
  return Uint8Array.from(binary, (char) => char.charCodeAt(0))
}

// A niche template with only the prices filled in: keeps the link short
export type ShortDemo = {
  v: 2
  n: string
  l: DemoLang
  b: string
  t: string
  p: string[]
}

export const encodeDemo = (data: DemoData | ShortDemo) => toBase64Url(new TextEncoder().encode(JSON.stringify(data)))

export const decodeDemo = (hash: string): DemoData | ShortDemo | null => {
  try {
    const data = JSON.parse(new TextDecoder().decode(fromBase64Url(hash.replace(/^#/, '')))) as DemoData | ShortDemo

    if (data?.v === 1 && Array.isArray(data.msgs) && data.msgs.length) {
      return data
    }

    if (data?.v === 2 && typeof data.n === 'string' && Array.isArray(data.p)) {
      return data
    }

    return null
  } catch {
    return null
  }
}
