import { Reveal } from '../components/ui/Reveal'
import { ContactForm } from '../components/booking/ContactForm'
import { CONTACTS } from '../components/booking/contactLinks'
import { IconMail, IconMapPin, IconMessageCircle, IconPhone } from '../components/ui/icons'
import '../components/booking/booking-form.css'
import './contacts-page.css'

export function ContactsPage() {
  const rows = [
    { label: 'Телефон', icon: <IconPhone />, value: CONTACTS.phoneText, href: `tel:+${CONTACTS.phoneDigits}` },
    { label: 'Почта', icon: <IconMail />, value: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
    { label: 'Мессенджеры', icon: <IconMessageCircle />, value: `Telegram, WhatsApp — по номеру телефона` },
    { label: 'Офис', icon: <IconMapPin />, value: CONTACTS.address }
  ]

  return (
    <div className="contacts-page">
      <div className="container contacts-page__layout">
        <Reveal className="contacts-page__intro">
          <p className="mono-label mono-label--accent">Контакты</p>
          <h1 className="contacts-page__title">Спланируем маршрут вместе</h1>
          <p className="section-lede">
            Напишите в мессенджер или оставьте заявку — обычно отвечаем в течение часа в рабочее время.
          </p>

          <dl className="contacts-page__list">
            {rows.map((row) => (
              <div key={row.label}>
                <dt className="mono-label">{row.label}</dt>
                <dd>
                  {row.href ? (
                    <a href={row.href} className="contacts-page__line">
                      {row.icon}
                      {row.value}
                    </a>
                  ) : (
                    <span className="contacts-page__line">
                      {row.icon}
                      {row.value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
