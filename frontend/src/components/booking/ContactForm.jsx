import { useState } from 'react'
import { motion } from 'framer-motion'
import { createContactRequest } from '../../api/client'
import { Button } from '../ui/Button'

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
        <h3>Сообщение отправлено</h3>
        <p>Ответим в течение рабочего дня по указанному телефону или почте.</p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Написать ещё раз
        </Button>
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
        Email (опционально)
        <input type="email" value={formState.email} onChange={(event) => update({ email: event.target.value })} />
      </label>

      <label>
        Сообщение
        <textarea
          rows="4"
          required
          placeholder="Какой маршрут интересует, на сколько человек, примерные даты"
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
