import { assertSameSiteContactRequest, getContactErrorMessages } from '../utils/contactSecurity'

interface ContactPayload {
  name?: string
  contact?: string
  description?: string
}

interface TelegramResponse {
  ok: boolean
  description?: string
}

const normalizeField = (value: unknown, maxLength: number) => {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export default defineEventHandler(async (event) => {
  assertSameSiteContactRequest(event)
  const messages = getContactErrorMessages(event)

  const body = await readBody<ContactPayload>(event)

  const name = normalizeField(body.name, 120)
  const contact = normalizeField(body.contact, 180)
  const description = normalizeField(body.description, 2000)

  if (name.length < 2 || contact.length < 5 || description.length < 15) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.invalid,
    })
  }

  const config = useRuntimeConfig(event)
  const botToken = config.telegramBotToken
  const telegramId = config.telegramId

  if (!botToken || !telegramId) {
    throw createError({
      statusCode: 500,
      statusMessage: messages.telegramMissing,
    })
  }

  const message = [
    'Новая заявка с сайта Kenzcore Studio',
    '',
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    '',
    'Описание задачи:',
    description,
  ].join('\n')

  const response = await $fetch<TelegramResponse>(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      body: {
        chat_id: telegramId,
        text: message,
        disable_web_page_preview: true,
      },
    },
  )

  if (!response.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: response.description || messages.telegramRejected,
    })
  }

  return { ok: true }
})
