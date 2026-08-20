import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import { toursRouter } from './routes/tours.js'
import { bookingsRouter } from './routes/bookings.js'
import { contactsRouter } from './routes/contacts.js'

const app = express()
const PORT = process.env.PORT || 4000
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173').split(',')

app.use(cors({ origin: ALLOWED_ORIGINS }))
app.use(express.json({ limit: '10kb' }))

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Слишком много заявок. Попробуйте позже.' }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/tours', toursRouter)
app.use('/api/bookings', bookingLimiter, bookingsRouter)
app.use('/api/contacts', bookingLimiter, contactsRouter)

app.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Внутренняя ошибка сервера' })
})

app.listen(PORT, () => {
  console.log(`Backend запущен на http://localhost:${PORT}`)
})
