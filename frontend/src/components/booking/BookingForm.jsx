import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createBooking } from '../../api/client'
import { Button } from '../ui/Button'
import { buildContactLinks } from './contactLinks'
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
      setFormState((prev) => ({ ...INITIAL_STATE, consent: prev.consent && false }))
    } catch (error) {
      if (error.isNoBackend) {
        setStatus('no-backend')
        return
      }
      setStatus('error')
      setErrors([error.message])
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="booking-form booking-form--note"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mono-label--accent">Заявка отправлена</p>
        <h3>Свяжемся в течение часа</h3>
        <p>Уточним детали поездки «{tourTitle}» и удобные даты.</p>
        <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>
          Отправить ещё
        </Button>
      </motion.div>
    )
  }

  if (status === 'no-backend') {
    const links = buildContactLinks({
      subject: `Заявка на тур: ${tourTitle}`,
      body: `Здравствуйте! Хочу поехать на маршрут «${tourTitle}».\nИмя: ${formState.name || '—'}\nТелефон: ${formState.phone || '—'}\nТуристов: ${formState.travelersCount}\nЖелаемая дата: ${formState.preferredDate || '—'}\nКомментарий: ${formState.comment || '—'}`
    })
    return (
      <motion.div
        className="booking-form booking-form--note"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mono-label--accent">Почти готово</p>
        <h3>Отправьте заявку в мессенджер</h3>
        <p>Нажмите на удобный способ — сообщение уже заполнено.</p>
        <div className="booking-form__links">
          <a className="btn btn--primary btn--sm" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="btn__label">WhatsApp</span>
          </a>
          <a className="btn btn--ghost btn--sm" href={links.telegram} target="_blank" rel="noopener noreferrer">
            <span className="btn__label">Telegram</span>
          </a>
          <a className="btn btn--ghost btn--sm" href={links.mailto}>
            <span className="btn__label">Почта</span>
          </a>
        </div>
        <button type="button" className="link-line" onClick={() => setStatus('idle')}>
          Назад к форме
        </button>
      </motion.div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="booking-form__title">Заявка на маршрут</h3>
      <p className="booking-form__subtitle">Ответим в течение часа и подберём удобные даты</p>

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
          <span className="booking-form__lh">
            Email <span className="booking-form__opt">необязательно</span>
          </span>
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
        <span className="booking-form__lh">
          Комментарий <span className="booking-form__opt">необязательно</span>
        </span>
        <textarea
          rows="3"
          value={formState.comment}
          onChange={(event) => update({ comment: event.target.value })}
          placeholder="Вопросы по маршруту, особые пожелания"
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
