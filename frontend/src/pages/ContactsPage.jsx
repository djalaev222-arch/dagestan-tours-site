import { Reveal } from '../components/ui/Reveal'
import { ContactForm } from '../components/booking/ContactForm'
import { IconMail, IconMapPin, IconMessageCircle, IconPhone } from '../components/ui/icons'
import '../components/booking/booking-form.css'
import './contacts-page.css'

export function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="container contacts-page__layout">
        <Reveal>
          <span className="eyebrow">Контакты</span>
          <h1 className="section-title">Давайте спланируем маршрут</h1>
          <p className="section-lede">Пишите в мессенджер или оставьте заявку — обычно отвечаем в течение часа.</p>

          <dl className="contacts-page__list">
            <div>
              <dt>Телефон</dt>
              <dd>
                <a href="tel:+79280000000" className="contacts-page__line">
                  <IconPhone />
                  +7 (928) 000-00-00
                </a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:info@tropy-dagestana.ru" className="contacts-page__line">
                  <IconMail />
                  info@tropy-dagestana.ru
                </a>
              </dd>
            </div>
            <div>
              <dt>Офис</dt>
              <dd className="contacts-page__line">
                <IconMapPin />
                Махачкала, ул. Даниялова, 12
              </dd>
            </div>
            <div>
              <dt>Мессенджеры</dt>
              <dd className="contacts-page__line">
                <IconMessageCircle />
                Telegram, WhatsApp — по номеру телефона
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
