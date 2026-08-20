# Тропы Дагестана — сайт турагентства

Каталог туров по Дагестану с фильтрами, страницей тура и формой заявки. Frontend на React (Vite) с анимациями Framer Motion, backend на Node.js/Express.

## Структура

```
frontend/   React + Vite + React Router + Framer Motion
backend/    Node.js + Express API (туры, заявки на бронирование, обращения)
```

## Запуск

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Сервер поднимется на `http://localhost:4000`. Заявки сохраняются в `backend/data/*.jsonl`.

Чтобы получать уведомления о новых заявках в Telegram, укажите в `.env`:

```
TELEGRAM_BOT_TOKEN=токен_бота
TELEGRAM_CHAT_ID=id_чата_или_канала
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Сайт откроется на `http://localhost:5173`.

## Что нужно предоставить для реального запуска

1. **Фото туров** — сейчас используются заглушки (picsum.photos). Замените `cover`/`gallery` в `backend/src/data/tours.js` на реальные фото.
2. **Реквизиты** — название ИП/ООО, ИНН, юридический адрес для футера и страницы «Публичная оферта» (`backend/src/data/tours.js`, `frontend/src/pages/PublicOfferPage.jsx`, `Footer.jsx`).
3. **Контакты** — телефон, email, адрес офиса, мессенджеры (сейчас плейсхолдеры вида `+7 (928) 000-00-00`).
4. **Telegram-бот** (опционально) — токен и chat_id для уведомлений о заявках.
5. **Тексты туров** — программы, состав включено/не включено под реальные маршруты агентства.

## Деплой

- Frontend: Vercel / Netlify (папка `frontend`, команда сборки `npm run build`, каталог `dist`).
- Backend: любой Node-хостинг (Railway, Render и т.п.), либо VPS с `pm2`. Не забудьте выставить `ALLOWED_ORIGIN` на реальный домен фронтенда.
