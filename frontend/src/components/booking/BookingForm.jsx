import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createBooking } from '../../api/client'
import { Button } from '../ui/Button'
import './booking-form.css'

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  travelersCount: 2,
  preferredDate: '',
  comment: '',
  consent: false,
  website: ''
}

export function BookingForm({ tourId, tourTitle }) {
  const [formState, setFormState] = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState([])

  const update = (patch) => setFormState((prev) => ({ ...prev, ...patch }))

  async function handleSubmit(event) {
    event.preventDefault()

    if (!formState.consent) {
      setErrors(['Подтвердите согласие на обработку персональных данных'])
      return
    }

    setStatus('submitting')
    setErrors([])

    try {
      await createBooking({ tourId, ...formState })
      setStatus('success')
      setFormState(INITIAL_STATE)
    } catch (error) {
      setStatus('error')
      setErrors([error.message])
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="booking-form booking-form--success"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3>Заявка отправлена</h3>
        <p>Мы свяжемся с вами в течение часа, чтобы уточнить детали поездки «{tourTitle}».</p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Отправить ещё одну заявку
        </Button>
      </motion.div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="booking-form__title">Оставить заявку на тур</h3>
      <p className="booking-form__subtitle">Свяжемся в течение часа и подберём удобные даты</p>

      <input
        type="text"
        name="website"
        value={formState.website}
        onChange={(event) => update({ website: event.target.value })}
        className="booking-form__honeypot"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="booking-form__row">
        <label>
          Имя
          <input
            type="text"
            required
            value={formState.name}
            onChange={(event) => update({ name: event.target.value })}
            placeholder="Как к вам обращаться"
          />
        </label>
        <label>
          Телефон
          <input
            type="tel"
            required
            value={formState.phone}
            onChange={(event) => update({ phone: event.target.value })}
            placeholder="+7 900 000-00-00"
          />
        </label>
      </div>

      <div className="booking-form__row">
        <label>
          Email (опционально)
          <input
            type="email"
            value={formState.email}
            onChange={(event) => update({ email: event.target.value })}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Туристов
          <input
            type="number"
            min="1"
            max="30"
            required
            value={formState.travelersCount}
            onChange={(event) => update({ travelersCount: event.target.value })}
          />
        </label>
      </div>

      <label>
        Желаемая дата
        <input
          type="date"
          required
          value={formState.preferredDate}
          onChange={(event) => update({ preferredDate: event.target.value })}
        />
      </label>

      <label>
        Комментарий
        <textarea
          rows="3"
          value={formState.comment}
          onChange={(event) => update({ comment: event.target.value })}
          placeholder="Особые пожелания, вопросы по маршруту"
        />
      </label>

      <label className="booking-form__consent">
        <input
          type="checkbox"
          checked={formState.consent}
          onChange={(event) => update({ consent: event.target.checked })}
        />
        <span>
          Согласен на обработку персональных данных согласно{' '}
          <a href="/privacy" target="_blank" rel="noreferrer">
            политике конфиденциальности
          </a>
        </span>
      </label>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            className="booking-form__errors"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {errors.map((message) => (
              <p key={message}>{message}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="submit" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Отправляем…' : 'Отправить заявку'}
      </Button>
    </form>
  )
}
