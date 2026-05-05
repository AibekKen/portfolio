# 🚀 Деплой Kenzcore Studio

Инструкции по запуску сайта в продакшене на разные платформы.

## 1️⃣ Vercel (Рекомендуется для Nuxt)

Vercel — создатель Nuxt. Самый простой и быстрый способ.

### Шаг 1: Подготовить репозиторий

```bash
# Если еще нет git репо
git init
git add .
git commit -m "Initial commit"

# Создать репо на GitHub
# https://github.com/new
```

### Шаг 2: Деплоить на Vercel

```bash
# Установить Vercel CLI
npm install -g vercel

# Деплоить
vercel

# Выбрать "Yes" для всех вопросов
```

Или просто зайти на [vercel.com](https://vercel.com) и импортировать репо.

### Шаг 3: Добавить domain (если нужен)

1. На Vercel: Project Settings → Domains
2. Добавить domain
3. У провайдера домена обновить DNS указатели

### Преимущества
- ✅ Бесплатный SSL
- ✅ Автоматические деплои при push
- ✅ Edge functions для API
- ✅ Встроенная аналитика
- ✅ CDN в 350+ городах

---

## 2️⃣ Netlify

Альтернатива Vercel, тоже очень хороша.

### Шаг 1: Подготовить репо (GitHub/GitLab)

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Шаг 2: Подключить к Netlify

1. Зайти на [netlify.com](https://netlify.com)
2. Нажать "Add new site"
3. Выбрать репо
4. Настройки:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
5. Нажать Deploy

### Преимущества
- ✅ Бесплатный SSL
- ✅ Встроенная форма обработки (Netlify Forms)
- ✅ Serverless functions
- ✅ Автоматические деплои

---

## 3️⃣ Собственный VPS сервер (Digital Ocean, Linode, AWS)

Для большего контроля и масштабирования.

### Шаг 1: Арендовать сервер

- [Digital Ocean](https://digitalocean.com) — $4-6/месяц
- [Linode](https://linode.com) — $5/месяц
- [AWS EC2](https://aws.amazon.com) — от $5/месяц

### Шаг 2: Подключиться и установить Node.js

```bash
# Подключиться по SSH
ssh root@YOUR_SERVER_IP

# Установить Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установить git
sudo apt-get install -y git
```

### Шаг 3: Клонировать и запустить проект

```bash
# Создать папку
mkdir -p /var/www/kenzcore-studio
cd /var/www/kenzcore-studio

# Клонировать репо
git clone https://github.com/YOUR_USERNAME/portfolio.git .

# Установить зависимости
npm install

# Собрать проект
npm run build
```

### Шаг 4: Настроить PM2 для автозапуска

```bash
# Установить PM2
sudo npm install -g pm2

# Запустить приложение
pm2 start .output/server/index.mjs --name "kenzcore-studio"

# Сохранить автозапуск
pm2 startup
pm2 save
```

### Шаг 5: Настроить Nginx как reverse proxy

```bash
# Установить Nginx
sudo apt-get install -y nginx

# Создать конфиг
sudo nano /etc/nginx/sites-available/kenzcore-studio
```

Содержимое конфига:
```nginx
server {
    listen 80;
    server_name kenzcore.studio;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активировать конфиг
sudo ln -s /etc/nginx/sites-available/kenzcore-studio /etc/nginx/sites-enabled/

# Проверить синтаксис
sudo nginx -t

# Перезагрузить Nginx
sudo systemctl restart nginx
```

### Шаг 6: Установить SSL (Let's Encrypt)

```bash
# Установить Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Создать сертификат
sudo certbot --nginx -d kenzcore.studio

# Сертификат обновляется автоматически
```

### Шаг 7: Обновление кода

```bash
cd /var/www/kenzcore-studio
git pull origin main
npm install
npm run build
pm2 restart kenzcore-studio
```

---

## 4️⃣ Docker контейнер

Для еще большей гибкости.

### Шаг 1: Создать Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

### Шаг 2: Создать docker-compose.yml

```yaml
version: '3'
services:
  kenzcore-studio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Шаг 3: Запустить

```bash
docker-compose up -d
```

---

## 📊 Сравнение способов деплоя

| Платформа | Цена | Сложность | Масштабируемость | Рекомендуется |
|-----------|------|-----------|-----------------|----------------|
| **Vercel** | Бесплатно+ | ⭐ Очень просто | ⭐⭐⭐⭐⭐ | ✅ Для большинства |
| **Netlify** | Бесплатно+ | ⭐ Очень просто | ⭐⭐⭐⭐ | ✅ Хороший выбор |
| **VPS (Digital Ocean)** | $5-10/мес | ⭐⭐⭐ Сложно | ⭐⭐⭐⭐⭐ | ⭐ Для больших проектов |
| **AWS/Google Cloud** | Переменная | ⭐⭐⭐⭐ Очень сложно | ⭐⭐⭐⭐⭐ | ⭐ Для enterprise |
| **Docker** | От $5/мес | ⭐⭐⭐ Сложно | ⭐⭐⭐⭐⭐ | ⭐ Для систем |

**Рекомендация для начина**: **Vercel** — бесплатно, просто, быстро.

---

## ✅ Чек-лист перед деплоем

- [ ] Обновлены все контакты (WhatsApp, Telegram, Email)
- [ ] Добавлено реальное фото/avatar
- [ ] Подключена форма контакта (API или Telegram Bot)
- [ ] Проверено на мобильном (F12 → Toggle device toolbar)
- [ ] Проверено в Lighthouse (оценка 90+)
- [ ] Обновлены meta теги в `pages/index.vue`
- [ ] Добавлена og:image для соцсетей
- [ ] Отсутствуют console.error в браузере
- [ ] Проверены все ссылки (внутренние и внешние)
- [ ] Проверена форма контакта на реальном API

## 🚨 После деплоя

1. **Проверить SEO**
   ```bash
   # Убедиться, что сайт индексируется Google
   # https://search.google.com/search-console
   ```

2. **Настроить analytics**
   ```javascript
   // Добавить Google Analytics в nuxt.config.ts
   export default defineNuxtConfig({
     // ...
     modules: ['@nuxtjs/google-analytics'],
     googleAnalytics: {
       id: 'G-XXXXXXXXXX' // Ваш GA4 ID
     }
   })
   ```

3. **Мониторинг ошибок**
   - [Sentry](https://sentry.io) — для отслеживания ошибок
   - [LogRocket](https://logrocket.com) — для аналитики пользователей

4. **Резервная копия**
   ```bash
   # Если не используете GitHub
   # Периодически делайте бэкап папки
   tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/kenzcore-studio/
   ```

---

## 🎯 Быстрый старт с Vercel

Самый быстрый способ (5 минут):

1. Откройте https://vercel.com/import
2. Импортируйте GitHub репо
3. Нажмите Deploy
4. Готово! 🎉

---

## 💡 Полезные команды

```bash
# Сборка для продакшена
npm run build

# Локальный preview production-версии
npm run preview

# Проверка ошибок TypeScript
npm run typecheck

# Очистка кеша и переустановка
rm -rf .nuxt node_modules && npm install

# Размер бандла
npm run build -- --analyze
```

---

## 📞 Помощь

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Nuxt Deployment: https://nuxt.com/docs/getting-started/deployment
