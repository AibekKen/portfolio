const csrfCookieName = 'contact_csrf'

type ContactLocale = 'en' | 'ru' | 'kk'

const localizedErrors: Record<ContactLocale, {
  forbidden: string
  invalid: string
  telegramMissing: string
  telegramRejected: string
}> = {
  en: {
    forbidden: 'Request rejected.',
    invalid: 'Invalid form data.',
    telegramMissing: 'Telegram is not configured.',
    telegramRejected: 'Telegram did not accept the message.',
  },
  ru: {
    forbidden: 'Запрос отклонён.',
    invalid: 'Некорректные данные формы.',
    telegramMissing: 'Telegram не настроен.',
    telegramRejected: 'Telegram не принял сообщение.',
  },
  kk: {
    forbidden: 'Сұрау қабылданбады.',
    invalid: 'Форма деректері дұрыс емес.',
    telegramMissing: 'Telegram бапталмаған.',
    telegramRejected: 'Telegram хабарламаны қабылдамады.',
  },
}

export const getContactLocale = (event: Parameters<typeof getHeader>[0]): ContactLocale => {
  const languages = (getHeader(event, 'accept-language') || '')
    .toLowerCase()
    .split(',')
    .map((part) => part.trim().split(';')[0])
    .filter(Boolean)

  for (const language of languages) {
    if (language === 'ru' || language.startsWith('ru-')) {
      return 'ru'
    }

    if (['kk', 'kz'].includes(language) || language.startsWith('kk-') || language.startsWith('kz-')) {
      return 'kk'
    }
  }

  return 'en'
}

export const getContactErrorMessages = (event: Parameters<typeof getHeader>[0]) => {
  return localizedErrors[getContactLocale(event)]
}

const getRequestOrigin = (event: Parameters<typeof getHeader>[0]) => {
  const protocol = getHeader(event, 'x-forwarded-proto') || 'http'
  const host = getHeader(event, 'x-forwarded-host') || getHeader(event, 'host')

  return host ? `${protocol}://${host}` : ''
}

export const createContactCsrfToken = (event: Parameters<typeof setCookie>[0]) => {
  const token = crypto.randomUUID()

  setCookie(event, csrfCookieName, token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: getRequestOrigin(event).startsWith('https://'),
    path: '/',
    maxAge: 60 * 20,
  })

  return token
}

export const assertSameSiteContactRequest = (event: Parameters<typeof getHeader>[0]) => {
  const messages = getContactErrorMessages(event)
  const requestOrigin = getRequestOrigin(event)
  const origin = getHeader(event, 'origin')
  const referer = getHeader(event, 'referer')

  const isSameOrigin = origin
    ? origin === requestOrigin
    : Boolean(referer?.startsWith(`${requestOrigin}/`))

  const csrfToken = getHeader(event, 'x-contact-csrf')
  const csrfCookie = getCookie(event, csrfCookieName)

  if (!requestOrigin || !isSameOrigin || !csrfToken || csrfToken !== csrfCookie) {
    throw createError({
      statusCode: 403,
      statusMessage: messages.forbidden,
    })
  }
}
