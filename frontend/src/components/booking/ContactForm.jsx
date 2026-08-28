import { useState } from 'react'
import { motion } from 'framer-motion'
import { createContactRequest } from '../../api/client'
import { Button } from '../ui/Button'
import { buildContactLinks } from './contactLinks'

const INITIAL_STATE = { name: '', phone: '', email: '', message: '', website: '' }

export function ContactForm() {
  const [formState, setFormState] = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState([])

  const update = (patch) => setFormState((prev) => ({ ...prev, ...patch }))

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setErrors([])

    try {
      await createContactRequest(formState)
      setStatus('success')
      setFormState(INITIAL_STATE)
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
        <p className="mono-label mono-label--accent">Сообщение отправлено</p>
        <h3>Ответим в течение дня</h3>
        <p>Свяжемся по указанному телефону или почте.</p>
        <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>
          Написать ещё
        </Button>
      </motion.div>
    )
  }

  if (status === 'no-backend') {
    const links = buildContactLinks({
      subject: 'Вопрос с сайта «Тропы Дагестана»',
      body: `Здравствуйте!\nИмя: ${formState.name || '—'}\nТелефон: ${formState.phone || '—'}\nСообщение: ${formState.message || '—'}`
    })
    return (
      <motion.div
        className="booking-form booking-form--note"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mono-label--accent">Почти готово</p>
        <h3>Отправьте сообщение в мессенджер</h3>
        <p>Выберите удобный способ — текст уже подставлен.</p>
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
          <input type="text" required value={formState.name} onChange={(event) => update({ name: event.target.value })} />
        </label>
        <label>
          Телефон
          <input type="tel" required value={formState.phone} onChange={(event) => update({ phone: event.target.value })} />
        </label>
      </div>

      <label>
        <span className="booking-form__lh">
          Email <span className="booking-form__opt">необязательно</span>
        </span>
        <input type="email" value={formState.email} onChange={(event) => update({ email: event.target.value })} />
      </label>

      <label>
        Сообщение
        <textarea
          rows="4"
          required
          placeholder="Какой маршрут интересует, сколько человек, примерные даты"
          value={formState.message}
          onChange={(event) => update({ message: event.target.value })}
        />
      </label>

      {errors.length > 0 && (
        <div className="booking-form__errors">
          {errors.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Отправляем…' : 'Отправить сообщение'}
      </Button>
    </form>
  )
}
