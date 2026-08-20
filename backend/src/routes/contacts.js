import { Router } from 'express'
import { randomUUID } from 'node:crypto'
import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { escapeTelegramHtml, notifyTelegram } from '../lib/telegram.js'

export const contactsRouter = Router()

const PHONE_PATTERN = /^\+?[0-9\s\-()]{7,20}$/
const DATA_DIR = path.resolve(process.cwd(), 'data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.jsonl')

function validateContact(body) {
  const errors = []

  if (!body.name || String(body.name).trim().length < 2) {
    errors.push('Укажите имя')
  }
  if (!body.phone || !PHONE_PATTERN.test(String(body.phone).trim())) {
    errors.push('Укажите корректный телефон')
  }
  if (!body.message || String(body.message).trim().length < 5) {
    errors.push('Опишите, какой маршрут вас интересует')
  }

  return errors
}

contactsRouter.post('/', async (req, res) => {
  const body = req.body ?? {}

  if (body.website) {
    return res.status(200).json({ data: { id: randomUUID(), status: 'received' } })
  }

  const errors = validateContact(body)
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Ошибка валидации', details: errors })
  }

  const contact = {
    id: randomUUID(),
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    email: body.email ? String(body.email).trim() : null,
    message: String(body.message).trim().slice(0, 1000),
    createdAt: new Date().toISOString()
  }

  await mkdir(DATA_DIR, { recursive: true })
  await appendFile(CONTACTS_FILE, `${JSON.stringify(contact)}\n`, 'utf8')

  try {
    await notifyTelegram(
      `<b>Новое обращение</b>\n` +
        `Имя: ${escapeTelegramHtml(contact.name)}\n` +
        `Телефон: ${escapeTelegramHtml(contact.phone)}\n` +
        `Сообщение: ${escapeTelegramHtml(contact.message)}`
    )
  } catch (error) {
    console.error('Не удалось отправить уведомление в Telegram:', error.message)
  }

  res.status(201).json({ data: { id: contact.id } })
})
