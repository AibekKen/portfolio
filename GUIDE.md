# Kenzcore Studio - Лендинг

Современный адаптивный лендинг на Nuxt 4 для бренда "Kenzcore Studio".

## 🚀 Быстрый старт

### Требования
- Node.js 18+ 
- npm или yarn

### Установка и запуск

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Проект будет доступен на http://localhost:3000/
```

### Сборка для продакшена

```bash
# Собрать проект
npm run build

# Превью production-версии
npm run preview
```

## 📁 Структура проекта

```
portfolio/
├── components/              # Vue компоненты
│   ├── AppHeader.vue       # Шапка с навигацией
│   ├── HeroSection.vue     # Hero секция с dashboard preview
│   ├── ServicesSection.vue # Услуги (3 карточки)
│   ├── ProcessSection.vue  # Процесс работы (stepper)
│   ├── CasesSection.vue    # Примеры работ
│   ├── TrustSection.vue    # Блок доверия
│   ├── TechStackSection.vue# Технологии
│   ├── ContactSection.vue  # CTA блок и форма контакта
│   ├── BaseButton.vue      # Базовый компонент кнопки
│   └── BaseCard.vue        # Базовый компонент карточки
├── pages/
│   └── index.vue           # Главная страница
├── assets/
│   └── styles/
│       └── main.css        # Tailwind CSS директивы и глобальные стили
├── app.vue                 # Root компонент приложения
├── nuxt.config.ts          # Конфиг Nuxt
├── tailwind.config.js      # Конфиг Tailwind CSS
└── postcss.config.js       # PostCSS конфиг
```

## 🎨 Цветовая схема

Все цвета определены в `tailwind.config.js` под `brand` namespace:

```javascript
colors: {
  brand: {
    50: "#f8fafc",        // Светлый фон
    900: "#0f172a",       // Основной текст
    700: "#1e293b",       // Вторичный текст
    600: "#475569",       // Вспомогательный текст
    primary: "#0B63F6",   // Синий акцент
    "primary-dark": "#2563EB",
    dark: "#061B4E",      // Темный синий для CTA
    "dark-alt": "#0B2A6F",
  }
}
```

## ✏️ Где менять данные и ссылки

### 1. **Контакты и социальные сети**

#### WhatsApp
- Файл: `components/HeroSection.vue`, строка ~75
- Файл: `components/ContactSection.vue`, строка ~115
- Заменить: `https://wa.me/77711234567`

```javascript
// Поменять номер:
window.open('https://wa.me/YOUR_PHONE_NUMBER?text=...', '_blank')
```

#### Telegram
- Файл: `components/ContactSection.vue`, строка ~128
- Заменить: `https://t.me/kenzcore_studio` на ваш юзернейм

#### Email
- Файл: `components/ContactSection.vue`, строка ~141
- Заменить: `hello@kenzcore.studio` на реальный email

#### Номер телефона
- Файл: `components/ContactSection.vue`, строка ~154
- Заменить: `+7 (771) 123-45-67` на ваш номер

### 2. **Текст и описание**

#### Badge и основное предложение
- Файл: `components/HeroSection.vue`
  - Badge (строка ~24): "🚀 Software Engineering для бизнеса"
  - H1 (строка ~26): "Разработка CRM и веб-приложений для бизнеса"
  - Description (строка ~30): подробное описание услуг

#### Блок доверия
- Файл: `components/HeroSection.vue` (строка ~44-46)
- Файл: `components/TrustSection.vue` (строка ~34-47)

#### Услуги
- Файл: `components/ServicesSection.vue` (3 карточки с названиями и описаниями)

#### Процесс работы
- Файл: `components/ProcessSection.vue` (4 шага)

#### Примеры работ
- Файл: `components/CasesSection.vue` (3 карточки проектов)

#### Технологии
- Файл: `components/TechStackSection.vue` (список технологий в виде pills)

#### Footer
- Файл: `pages/index.vue` (строка ~189-250)

### 3. **Фото и изображения**

#### Trust block/Фото эксперта
- Файл: `components/TrustSection.vue` (строка ~10)
- Сейчас: placeholder с буквами "АК"
- Замена: Обновить div с классом `bg-gradient-to-br from-brand-primary to-blue-600`
  
```vue
<!-- Вместо градиента можно использовать изображение: -->
<img 
  src="/images/avatar.jpg" 
  alt="Kenzcore Studio"
  class="w-full h-full rounded-brand-lg object-cover"
/>
```

#### OG Image (для социальных сетей)
- Файл: `pages/index.vue` (строка ~67)
- Добавить изображение: `/public/og-image.png`

### 4. **SEO**
- Файл: `pages/index.vue`
  - `title`: Основной заголовок для браузера
  - `description`: Meta description
  - `og:title`, `og:description`, `og:image`: Для соцсетей

## 📞 Подключение реальной отправки формы

В компоненте `components/ContactSection.vue` функция `handleSubmit()` отправляет данные формы. Сейчас там TODO с примерами интеграции.

### Вариант 1: Telegram Bot API (Простой)

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) return

  isSubmitting.value = true

  try {
    const message = `
🔔 Новая заявка!
Имя: ${form.value.name}
Контакт: ${form.value.contact}
Задача: ${form.value.description}
    `.trim()

    // Поменять на реальные данные
    const BOT_TOKEN = 'YOUR_BOT_TOKEN'
    const CHAT_ID = 'YOUR_CHAT_ID'

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }
    )

    if (response.ok) {
      showSuccess.value = true
      form.value = { name: '', contact: '', description: '', consent: false }
    }
  } finally {
    isSubmitting.value = false
  }
}
```

### Вариант 2: Backend endpoint (Рекомендуется)

```typescript
const handleSubmit = async () => {
  if (!form.value.consent) return

  isSubmitting.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      showSuccess.value = true
      form.value = { name: '', contact: '', description: '', consent: false }
    }
  } catch (error) {
    console.error('Ошибка при отправке:', error)
    alert('Ошибка при отправке. Попробуйте позже.')
  } finally {
    isSubmitting.value = false
  }
}
```

Создать файл `server/api/contact.post.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Отправить в Telegram, Email или БД
  console.log('Новая заявка:', body)

  // TODO: Добавить реальную логику отправки

  return { success: true }
})
```

### Вариант 3: Внешний сервис (Formspree, EmailJS)

Используйте ready-to-use сервисы:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Webhook.site](https://webhook.site/)
- [Make.com](https://www.make.com/) / Zapier

## 🎯 Адаптивность

Проект полностью адаптивен:
- **Mobile-first подход**: компоненты сначала оптимизированы для мобильных
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Hamburger меню**: Автоматически скрывается на desktop
- **Упрощенный dashboard**: На мобильном упрощенная версия

## 🔍 Lighthouse оптимизация

- ✅ Семантический HTML
- ✅ Доступные (a11y) кнопки и ссылки
- ✅ Плавные переходы (transition)
- ✅ Оптимизированные изображения (SVG иконки и emoji вместо PNG)
- ✅ Хорошие Core Web Vitals
- ✅ SEO-friendly метаданные

## 🚀 Деплой

### На Vercel (Рекомендуется для Nuxt)
```bash
npm install -g vercel
vercel
```

### На Netlify
```bash
npm run build
# Выгрузить папку .output/public на Netlify
```

### На собственный сервер
```bash
npm run build
# Скопировать папку .output на сервер
# Запустить: node .output/server/index.mjs
```

## 📝 Лицензия

MIT

## 👤 Контакты

- WhatsApp: [Открыть чат](https://wa.me/77711234567)
- Telegram: [@kenzcore_studio](https://t.me/kenzcore_studio)
- Email: hello@kenzcore.studio
