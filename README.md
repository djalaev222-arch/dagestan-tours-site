# Тропы Дагестана — сайт турагентства

Каталог авторских маршрутов по Дагестану с фильтрами, страницей тура и формой заявки.
Визуальное направление — «кинематографичная экспедиция»: тёмная тема, крупная
фотография, шрифты Bricolage Grotesque + Inter + IBM Plex Mono.

Frontend на React (Vite) с анимациями Framer Motion. Backend на Node.js/Express — опционален.

## Структура

```
frontend/   React + Vite + React Router + Framer Motion
backend/    Node.js + Express API (туры, заявки, обращения) — необязательно
```

## Автономный режим

По умолчанию сайт работает без бэкенда:

- каталог берётся из `frontend/src/data/tours.js`;
- фотографии лежат в `frontend/public/photos/` (источник и авторство — `photos/CREDITS.md`);
- формы заявки и обратной связи предлагают отправить сообщение в мессенджер (WhatsApp/Telegram/почта).

Так фронтенд можно задеплоить статикой (GitHub Pages / Vercel / Netlify) без сервера.

## Запуск

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Сайт откроется на `http://localhost:5173/dagestan-tours-site/`.

### Backend (опционально)

Нужен, только если заявки должны уходить на сервер, а не в мессенджер.

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Затем в `frontend/.env` укажите `VITE_API_URL=http://localhost:4000/api` и перезапустите Vite.
Заявки сохраняются в `backend/data/*.jsonl`. Для уведомлений в Telegram задайте в `backend/.env`
`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.

## Что заменить перед реальным запуском

1. **Контакты** — номер, ник Telegram, почта и адрес в `frontend/src/components/booking/contactLinks.js`
   (сейчас плейсхолдеры вида `+7 928 000-00-00`).
2. **Реквизиты** — ИП/ООО, ИНН, адрес в `Footer.jsx` и `PublicOfferPage.jsx`.
3. **Фотографии** — снимки в `frontend/public/photos/` взяты с Wikimedia Commons (CC BY-SA,
   см. `CREDITS.md`). Замените на собственные и обновите/удалите `CREDITS.md`.
4. **Тексты и цены маршрутов** — `frontend/src/data/tours.js` (и `backend/src/data/tours.js`, если
   используется бэкенд).

## Деплой

- Frontend: GitHub Pages (workflow `.github/workflows/deploy.yml`), либо Vercel / Netlify
  (папка `frontend`, сборка `npm run build`, каталог `dist`). Базовый путь задаётся в `vite.config.js`.
- Backend (если нужен): любой Node-хостинг (Railway, Render, VPS с `pm2`). Выставьте
  `ALLOWED_ORIGIN` на домен фронтенда и `VITE_API_URL` при сборке фронтенда.
