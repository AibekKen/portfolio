# Чек-лист для быстрого старта

Эта таблица поможет вам быстро обновить все необходимые данные.

## ☑️ Данные для быстрой замены

| Что менять | Где найти | Текущее значение | Ваше значение |
|-----------|-----------|-----------------|---------------|
| **WhatsApp номер** | `components/HeroSection.vue:75` `components/ContactSection.vue:115` | `77711234567` | |
| **Telegram** | `components/ContactSection.vue:128` | `kenzcore_studio` | |
| **Email** | `components/ContactSection.vue:141` `pages/index.vue:219` | `hello@kenzcore.studio` | |
| **Номер телефона** | `components/ContactSection.vue:154` `pages/index.vue:223` | `+7 (771) 123-45-67` | |
| **Имя эксперта** | `components/HeroSection.vue:44` `components/TrustSection.vue:34` | `Kenzcore Studio` | |
| **Должность** | `components/HeroSection.vue:46` | `Технический партнёр для бизнеса` | |
| **Инициалы** | `components/HeroSection.vue:41` `components/TrustSection.vue:12` | `АК` | |
| **H1 заголовок** | `components/HeroSection.vue:26` | `Разработка CRM и веб-приложений для бизнеса` | |
| **Основной офер** | `components/HeroSection.vue:31` | `Помогаю запускать и развивать IT-продукты...` | |
| **Стек технологий** | `components/TechStackSection.vue` | Angular, TypeScript, Vue/Nuxt... | |

## 🎨 Цвета (если нужна замена)

Отредактируйте `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: "#0B63F6",      // Синий акцент
    dark: "#061B4E",         // Темный синий
    900: "#0f172a",          // Основной текст
    // Добавьте свои цвета...
  }
}
```

Используйте классы: `text-brand-primary`, `bg-brand-dark`, `border-brand-100`

## 🖼️ Добавление фото

### Trust block в TrustSection
Замените в `components/TrustSection.vue` строку ~10:

```vue
<!-- Вместо этого: -->
<div class="w-full aspect-square rounded-brand-lg bg-gradient-to-br from-brand-primary to-blue-600 ...">
  АК
</div>

<!-- На это: -->
<img 
  src="/images/my-photo.jpg" 
  alt="Kenzcore Studio"
  class="w-full aspect-square rounded-brand-lg object-cover shadow-lg"
/>
```

### OG Image для соцсетей
1. Сохраните изображение в `public/og-image.png`
2. Обновлено в `pages/index.vue` (уже указано)

## 📝 Кейсы (примеры работ)

Отредактируйте `components/CasesSection.vue`:

```vue
<!-- Case 1 -->
<h3 class="text-xl font-bold text-brand-900 mb-3">
  Ваше название проекта   <!-- ← Измените -->
</h3>
<ul class="text-brand-600 text-sm space-y-2 flex-grow mb-6">
  <li class="flex gap-2">
    <span class="text-brand-primary">✓</span>
    <span>Функция 1</span>  <!-- ← Добавьте свои -->
  </li>
  <li class="flex gap-2">
    <span class="text-brand-primary">✓</span>
    <span>Функция 2</span>
  </li>
</ul>
```

## 🔗 Навигационные ссылки

Все ссылки на разделы работают по якорям:
- `#services` → ServicesSection
- `#cases` → CasesSection  
- `#trust` → TrustSection
- `#contact` → ContactSection

Обновлять нужно только в `AppHeader.vue` и `pages/index.vue` footer при добавлении новых разделов.

## 📧 Форма контакта

Все поля формы находятся в `components/ContactSection.vue`:

```vue
<input
  v-model="form.name"
  placeholder="Ваше имя"    <!-- ← Измените текст-->
/>
```

Функция `handleSubmit()` (строка ~93) — здесь подключайте API.

## 🚀 Быстрые команды

```bash
# Запустить dev-сервер
npm run dev

# Проверить ошибки TypeScript
npm run typecheck

# Собрать для продакшена
npm run build

# Превью production-версии локально
npm run preview

# Очистить кеш
npm run clean
```

## 💡 Советы

1. **Не забудьте про мобильный вид** — откройте DevTools (F12) и проверьте на iPhone SE/14
2. **Lighthouse** — встроенный инструмент в Chrome DevTools, помогает проверить SEO и производительность
3. **Telegram Bot** — самый простой способ получать заявки: создайте бота через @BotFather
4. **Responsive изображения** — используйте `<img srcset>` или `<picture>` для разных размеров экранов

## 🐛 Если что-то не работает

1. Очистите кеш: `rm -rf .nuxt node_modules && npm install`
2. Перезагрузите сервер (остановите и заново `npm run dev`)
3. Проверьте ошибки в браузере (F12 → Console)
4. Убедитесь, что вы находитесь в правильной папке: `cd /path/to/kenzcore-studio`

## 📞 Когда сайт готов

1. Обновите все контакты и данные (см. таблицу выше)
2. Добавьте реальное фото
3. Подключите форму к API (Telegram Bot или Backend)
4. Проверьте на мобильной
5. Запустите Lighthouse (F12 → Lighthouse)
6. Задеплойте на Vercel или свой сервер
