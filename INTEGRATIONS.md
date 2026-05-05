# Примеры интеграций для формы контакта

## 1️⃣ Telegram Bot API (Самый простой вариант)

### Шаг 1: Создать бота в Telegram

1. Откройте чат с [@BotFather](https://t.me/botfather)
2. Отправьте: `/newbot`
3. Придумайте название: `Kenzcore Studio Leads`
4. Придумайте юзернейм: `kenzcore_studio_bot`
5. BotFather выдаст вам `BOT_TOKEN`, например: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`
6. Напишите вашему боту первое сообщение
7. Откройте: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
8. Найдите `chat_id` в ответе

### Шаг 2: Обновить код формы

Отредактируйте `components/ContactSection.vue`, функция `handleSubmit()`:

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) {
    alert('Пожалуйста, согласитесь с обработкой данных')
    return
  }

  isSubmitting.value = true

  try {
    const BOT_TOKEN = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11' // ← Поменяйте!
    const CHAT_ID = '123456789' // ← Поменяйте!

    const message = `
🔔 *Новая заявка на Kenzcore Studio*

👤 Имя: ${form.value.name}
📞 Контакт: ${form.value.contact}
📝 Задача:
${form.value.description}

---
Время: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      }
    )

    if (response.ok) {
      showSuccess.value = true
      form.value = { name: '', contact: '', description: '', consent: false }
      
      // Скрыть сообщение через 5 секунд
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Ошибка при отправке')
    }
  } catch (error) {
    console.error('Ошибка:', error)
    alert('Ошибка при отправке заявки. Попробуйте позже.')
  } finally {
    isSubmitting.value = false
  }
}
```

### Шаг 3: Тестирование

1. Откройте http://localhost:3000
2. Заполните и отправьте форму
3. Проверьте Telegram — должно прийти сообщение

---

## 2️⃣ Backend Endpoint (Node.js + Express)

### Шаг 1: Создать API в Nuxt

Создайте файл `server/api/contact.post.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Валидация
  if (!body.name || !body.contact || !body.description) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Не все поля заполнены'
    })
  }

  try {
    // Вариант 1: Отправить в Telegram
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    const message = `
🔔 *Новая заявка на Kenzcore Studio*

👤 Имя: ${body.name}
📞 Контакт: ${body.contact}
📝 Задача:
${body.description}

---
Время: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      }
    )

    if (!telegramResponse.ok) {
      throw new Error('Ошибка при отправке в Telegram')
    }

    // Вариант 2: Сохранить в БД (если подключена)
    // await db.contact.create({ ...body })

    // Вариант 3: Отправить email (если настроена)
    // await sendEmail({ to: 'hello@kenzcore.studio', body })

    return { success: true, message: 'Заявка отправлена' }
  } catch (error) {
    console.error('Ошибка при обработке заявки:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка при обработке заявки'
    })
  }
})
```

### Шаг 2: Обновить .env

Создайте файл `.env` в корне проекта:

```bash
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=123456789
```

Добавьте в `.gitignore`:
```
.env
.env.local
```

### Шаг 3: Обновить форму

Отредактируйте `components/ContactSection.vue`:

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) {
    alert('Пожалуйста, согласитесь с обработкой данных')
    return
  }

  isSubmitting.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      showSuccess.value = true
      form.value = { name: '', contact: '', description: '', consent: false }

      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Ошибка:', error)
    alert('Ошибка при отправке заявки. Попробуйте позже.')
  } finally {
    isSubmitting.value = false
  }
}
```

---

## 3️⃣ EmailJS (Для отправки email)

### Шаг 1: Установить EmailJS

```bash
npm install @emailjs/browser
```

### Шаг 2: Обновить форму

```typescript
import emailjs from '@emailjs/browser'

// В setup():
emailjs.init('YOUR_PUBLIC_KEY') // Получить на emailjs.com

const handleSubmit = async () => {
  if (!form.value.consent) return

  isSubmitting.value = true

  try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: 'hello@kenzcore.studio',
      from_name: form.value.name,
      from_email: form.value.contact,
      message: form.value.description
    })

    showSuccess.value = true
    form.value = { name: '', contact: '', description: '', consent: false }
  } catch (error) {
    alert('Ошибка при отправке')
  } finally {
    isSubmitting.value = false
  }
}
```

---

## 4️⃣ Formspree (No-code решение)

### Шаг 1: Создать форму на Formspree

1. Зайдите на https://formspree.io
2. Создайте новую форму
3. Скопируйте endpoint

### Шаг 2: Обновить форму

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) return

  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.contact,
        message: form.value.description
      })
    })

    if (response.ok) {
      showSuccess.value = true
      form.value = { name: '', contact: '', description: '', consent: false }
    }
  } catch (error) {
    alert('Ошибка при отправке')
  } finally {
    isSubmitting.value = false
  }
}
```

---

## 5️⃣ Webhook.site (Для тестирования)

Отличный способ протестировать форму перед подключением реального API:

1. Откройте https://webhook.site
2. Скопируйте URL (например: `https://webhook.site/abc123...`)
3. Обновите форму:

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) return

  isSubmitting.value = true

  try {
    await fetch('https://webhook.site/YOUR_UNIQUE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    showSuccess.value = true
    form.value = { name: '', contact: '', description: '', consent: false }
  } catch (error) {
    console.log('Request sent to webhook')
  } finally {
    isSubmitting.value = false
  }
}
```

---

## 🔒 Безопасность

- ✅ Никогда не кладите API ключи в код (используйте `.env`)
- ✅ На backend проверяйте CORS и rate limiting
- ✅ Валидируйте данные и на клиенте, и на сервере
- ✅ Используйте HTTPS в продакшене
- ✅ Не показывайте реальные ошибки пользователю

## 📊 Какой вариант выбрать?

| Вариант | Плюсы | Минусы | Для кого |
|---------|-------|--------|----------|
| Telegram Bot | Просто, бесплатно, уведомления в реальном времени | Нет истории, нет аналитики | Малый бизнес |
| Backend (Node.js) | Полный контроль, можно сохранять в БД | Нужен сервер | Масштабируемые проекты |
| EmailJS | Просто, интеграция с email | Ограничения на бесплатном плане | Если нужен email |
| Formspree | No-code, надежно | Меньше контроля | Не хочу писать код |
| Webhook.site | Для тестирования | Не для продакшена | Разработка и тестирование |

**Рекомендация**: Начните с Telegram Bot (вариант 1) — это самый быстрый способ!
