import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useTour } from '../hooks/useTour'
import { RatingStars } from '../components/ui/RatingStars'
import { PriceTag } from '../components/ui/PriceTag'
import { BookingForm } from '../components/booking/BookingForm'
import { Reveal } from '../components/ui/Reveal'
import { IconCheckCircle, IconClock, IconMapPin, IconUsers, IconXCircle } from '../components/ui/icons'
import './tour-page.css'

const DIFFICULTY_TEXT = { easy: 'Лёгкий', medium: 'Средний', hard: 'Сложный' }

function durationText(tour) {
  const days = `${tour.days} ${tour.days === 1 ? 'день' : tour.days < 5 ? 'дня' : 'дней'}`
  return tour.nights > 0
    ? `${days} · ${tour.nights} ${tour.nights === 1 ? 'ночь' : tour.nights < 5 ? 'ночи' : 'ночей'}`
    : days
}

export function TourPage() {
  const { id } = useParams()
  const { tour, isLoading, error } = useTour(id)
  const shouldReduceMotion = useReducedMotion()

  if (isLoading) {
    return (
      <div className="tour-page__state">
        <p className="mono-label">Загружаем маршрут…</p>
      </div>
    )
  }

  if (error || !tour) {
    return (
      <div className="tour-page__state">
        <p>Маршрут не найден.</p>
        <Link to="/catalog" className="link-line">
          Вернуться в каталог
        </Link>
      </div>
    )
  }

  const extraImages = tour.gallery.filter((src) => src !== tour.cover).slice(0, 3)

  return (
    <div className="tour-page">
      <header className="tour-hero bleed-top">
        <div className="tour-hero__media" aria-hidden="true">
          <motion.img
            src={tour.cover}
            alt=""
            initial={shouldReduceMotion ? undefined : { scale: 1.12 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="tour-hero__scrim" />
        </div>

        <div className="container tour-hero__inner">
          <Link to="/catalog" className="tour-hero__back mono-label">
            ← Каталог
          </Link>
          <p className="mono-label tour-hero__coords">{tour.coords}</p>
          <h1 className="tour-hero__title">{tour.title}</h1>
          <div className="tour-hero__meta">
            <span>
              <IconMapPin /> {tour.region}
            </span>
            <span>
              <IconClock /> {durationText(tour)}
            </span>
            <span>
              <IconUsers /> {tour.groupSize}
            </span>
            <span>{DIFFICULTY_TEXT[tour.difficulty] || tour.difficulty}</span>
            <RatingStars rating={tour.rating} reviewsCount={tour.reviewsCount} />
          </div>
        </div>
      </header>

      <div className="container tour-page__layout">
        <div className="tour-page__main">
          <Reveal>
            <p className="tour-page__intro">{tour.intro}</p>
          </Reveal>

          {extraImages.length > 0 && (
            <Reveal delay={0.05} className="tour-page__gallery">
              {extraImages.map((src) => (
                <img key={src} src={src} alt={tour.title} loading="lazy" width="800" height="560" />
              ))}
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <section className="tour-page__section">
              <h2 className="tour-page__h2">
                <span className="mono-label">Программа</span>
                По дням
              </h2>
              <ol className="tour-page__program">
                {tour.program.map((day) => (
                  <li key={day.day}>
                    <span className="tour-page__program-day">
                      День <span>{day.day}</span>
                    </span>
                    <div>
                      <h3>{day.title}</h3>
                      <p>{day.details}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className="tour-page__section tour-page__includes">
              <div>
                <h2 className="tour-page__h2">
                  <span className="mono-label">В стоимости</span>
                  Включено
                </h2>
                <ul className="tour-page__list tour-page__list--in">
                  {tour.included.map((item, index) => (
                    <li key={item}>
                      <IconCheckCircle delay={index * 0.05} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="tour-page__h2">
                  <span className="mono-label">Оплачивается отдельно</span>
                  Не включено
                </h2>
                <ul className="tour-page__list tour-page__list--out">
                  {tour.excluded.map((item, index) => (
                    <li key={item}>
                      <IconXCircle delay={index * 0.05} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>
        </div>

        <aside className="tour-page__sidebar">
          <div className="tour-page__price-card">
            <PriceTag price={tour.priceFrom} />
            <span className="tour-page__price-note">за человека · выезд из {tour.departureCity}</span>
            <span className="tour-page__price-season mono-label">Сезон: {tour.season}</span>
          </div>
          <BookingForm tourId={tour.id} tourTitle={tour.title} />
        </aside>
      </div>
    </div>
  )
}
