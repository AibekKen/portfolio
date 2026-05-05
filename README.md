# Kenzcore Studio - Лендинг

[![Nuxt](https://img.shields.io/badge/Nuxt-4.4.4-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5.33-4FC08D?style=flat&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwind-css)](https://tailwindcss.com)

Современный адаптивный лендинг на **Nuxt 4** для бренда "Kenzcore Studio". 

**Разработка CRM и веб-приложений для бизнеса** — это основной офер сайта.

## ✨ Возможности

- ✅ **Mobile-first** адаптивный дизайн
- ✅ **Nuxt 4** с SSR для лучшего SEO
- ✅ **Vue 3 Composition API** + TypeScript
- ✅ **Tailwind CSS** для быстрой разработки
- ✅ **Встроенная форма контакта** с валидацией
- ✅ **SEO оптимизация** (meta, og:, schema)
- ✅ **Чистый компонентный код**, легко расширяемый
- ✅ **Lighthouse-friendly** (Performance, Accessibility, SEO)

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- npm / pnpm / yarn

### Установка

```bash
# Клонировать репозиторий
cd /path/to/kenzcore-studio

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Сайт будет доступен на **http://localhost:3000/**

## 📦 Структура проекта

```
portfolio/
├── components/           # Vue компоненты
│   ├── AppHeader.vue
│   ├── HeroSection.vue
│   ├── ServicesSection.vue
│   ├── ProcessSection.vue
│   ├── CasesSection.vue
│   ├── TrustSection.vue
│   ├── TechStackSection.vue
│   ├── ContactSection.vue
│   ├── BaseButton.vue
│   └── BaseCard.vue
├── pages/
│   └── index.vue         # Главная страница
├── assets/styles/
│   └── main.css          # Tailwind CSS
├── server/api/           # API endpoints (если нужны)
├── nuxt.config.ts
├── tailwind.config.js
├── app.vue              # Root компонент
├── GUIDE.md             # Полная документация
├── QUICKSTART.md        # Чек-лист для быстрых правок
└── INTEGRATIONS.md      # Примеры интеграций
```

## 📝 Важные ссылки в коде

| Что менять | Где | Файл |
|-----------|-----|------|
| **WhatsApp номер** | Две секции | `HeroSection.vue`, `ContactSection.vue` |
| **Telegram юзернейм** | Contact | `ContactSection.vue` |
| **Email адрес** | Contact | `ContactSection.vue`, `pages/index.vue` |
| **Имя эксперта** | Hero, Trust | `HeroSection.vue`, `TrustSection.vue` |
| **Основной офер** | H1 | `HeroSection.vue` |
| **Фото/Trust block** | About | `TrustSection.vue` |
| **Технологии** | Tech Stack | `TechStackSection.vue` |

**Полную инструкцию см. в [GUIDE.md](./GUIDE.md)**

## 🔗 Подключение формы контакта

В `components/ContactSection.vue` есть TODO-комментарий с примерами интеграций:

**Быстрый вариант (Telegram Bot):**
```typescript
const BOT_TOKEN = 'YOUR_BOT_TOKEN'
const CHAT_ID = 'YOUR_CHAT_ID'

const response = await fetch(
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
  { /* ... */ }
)
```

Подробнее см. [INTEGRATIONS.md](./INTEGRATIONS.md)

## 🎨 Цветовая схема

Все цвета в `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: "#0B63F6",
    dark: "#061B4E",
    900: "#0f172a",
    // ...
  }
}
```

## 📱 Адаптивность

- **Mobile-first CSS** — сначала проектируется мобильная версия
- **Hamburger меню** на мобильных устройствах
- **Упрощенный dashboard** на мобильном
- Breakpoints: `md: 768px`, `lg: 1024px`

## 🔍 SEO оптимизация

```typescript
useHead({
  title: 'Kenzcore Studio — разработка CRM...',
  meta: [
    { name: 'description', content: '...' },
    { property: 'og:image', content: '/og-image.png' }
  ]
})
```

Находится в `pages/index.vue`

## 🚀 Сборка для продакшена

```bash
# Собрать проект
npm run build

# Локальный preview
npm run preview
```

## 🌐 Деплой

### На Vercel (Рекомендуется)
```bash
npm install -g vercel
vercel
```

### На Netlify
```bash
npm run build
# Выгрузить .output/public папку
```

### На собственный сервер
```bash
npm run build
# Запустить: node .output/server/index.mjs
```

## 📚 Документация

- **[GUIDE.md](./GUIDE.md)** — Полная инструкция по настройке и развитию
- **[QUICKSTART.md](./QUICKSTART.md)** — Чек-лист с таблицей для быстрых правок
- **[INTEGRATIONS.md](./INTEGRATIONS.md)** — Примеры кода для подключения форм

## 💡 Технологический стек

- **Nuxt 4.4.4** — Full-stack Vue framework
- **Vue 3** — Progressive JavaScript framework
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS 3** — Utility-first CSS
- **Composition API** — Modern Vue API
- **Vite** — Lightning fast build tool

## 📞 Контакты

- **WhatsApp**: [wa.me/77711234567](https://wa.me/77711234567)
- **Telegram**: [@kenzcore_studio](https://t.me/kenzcore_studio)
- **Email**: hello@kenzcore.studio

## 📄 Лицензия

MIT

---

## 🤔 Первые шаги после клонирования

1. ✅ Установить зависимости: `npm install`
2. 📝 Обновить контакты (WhatsApp, Telegram, Email)
3. 👤 Заменить фото/avatar
4. 🔗 Подключить форму к API (Telegram Bot или Backend)
5. 📱 Протестировать на мобильном (F12 → Toggle device toolbar)
6. ⚡ Проверить Lighthouse (F12 → Lighthouse)
7. 🚀 Задеплоить на Vercel

**Вопросы?** Читайте документацию в [GUIDE.md](./GUIDE.md)

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
