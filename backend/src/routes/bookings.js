import { Router } from 'express'
import { randomUUID } from 'node:crypto'
import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { getTourById } from '../data/tours.js'
import { escapeTelegramHtml, notifyTelegram } from '../lib/telegram.js'

export const bookingsRouter = Router()

const PHONE_PATTERN = /^\+?[0-9\s\-()]{7,20}$/
const DATA_DIR = path.resolve(process.cwd(), 'data')
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.jsonl')

function validateBooking(body) {
  const errors = []

  if (!body.tourId || !getTourById(body.tourId)) {
    errors.push('Не найден выбранный тур')
  }
  if (!body.name || String(body.name).trim().length < 2) {
    errors.push('Укажите имя')
  }
  if (!body.phone || !PHONE_PATTERN.test(String(body.phone).trim())) {
    errors.push('Укажите корректный телефон')
  }
  if (!body.travelersCount || Number(body.travelersCount) < 1 || Number(body.travelersCount) > 30) {
    errors.push('Укажите количество туристов (1-30)')
  }
  if (!body.preferredDate) {
    errors.push('Укажите желаемую дату')
  }

  return errors
}

bookingsRouter.post('/', async (req, res) => {
  const body = req.body ?? {}

  if (body.website) {
    return res.status(200).json({ data: { id: randomUUID(), status: 'received' } })
  }

  const errors = validateBooking(body)
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Ошибка валидации', details: errors })
  }

  const tour = getTourById(body.tourId)
  const booking = {
    id: randomUUID(),
    tourId: tour.id,
    tourTitle: tour.title,
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    email: body.email ? String(body.email).trim() : null,
    travelersCount: Number(body.travelersCount),
    preferredDate: body.preferredDate,
    comment: body.comment ? String(body.comment).trim().slice(0, 1000) : null,
    createdAt: new Date().toISOString(),
    status: 'new'
  }

  await mkdir(DATA_DIR, { recursive: true })
  await appendFile(BOOKINGS_FILE, `${JSON.stringify(booking)}\n`, 'utf8')

  try {
    await notifyTelegram(
      `<b>Новая заявка</b>\n` +
        `Тур: ${escapeTelegramHtml(booking.tourTitle)}\n` +
        `Имя: ${escapeTelegramHtml(booking.name)}\n` +
        `Телефон: ${escapeTelegramHtml(booking.phone)}\n` +
        `Туристов: ${booking.travelersCount}\n` +
        `Дата: ${escapeTelegramHtml(booking.preferredDate)}` +
        (booking.comment ? `\nКомментарий: ${escapeTelegramHtml(booking.comment)}` : '')
    )
  } catch (error) {
    console.error('Не удалось отправить уведомление в Telegram:', error.message)
  }

  res.status(201).json({ data: { id: booking.id, status: booking.status } })
})
