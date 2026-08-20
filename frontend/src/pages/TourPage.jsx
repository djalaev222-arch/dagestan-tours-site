import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTour } from '../hooks/useTour'
import { TypeBadge, DifficultyBadge } from '../components/ui/Badge'
import { RatingStars } from '../components/ui/RatingStars'
import { PriceTag } from '../components/ui/PriceTag'
import { BookingForm } from '../components/booking/BookingForm'
import { Reveal } from '../components/ui/Reveal'
import { IconCheckCircle, IconClock, IconMapPin, IconUsers, IconXCircle } from '../components/ui/icons'
import './tour-page.css'

export function TourPage() {
  const { id } = useParams()
  const { tour, isLoading, error } = useTour(id)
  const [activeImage, setActiveImage] = useState(0)

  if (isLoading) {
    return <p className="tour-page__state">Загружаем тур…</p>
  }

  if (error || !tour) {
    return (
      <div className="tour-page__state">
        <p>Тур не найден.</p>
        <Link to="/catalog">Вернуться в каталог</Link>
      </div>
    )
  }

  return (
    <div className="tour-page">
      <div className="container">
        <p className="tour-page__breadcrumbs">
          <Link to="/catalog">Каталог</Link> / <span>{tour.title}</span>
        </p>

        <div className="tour-page__gallery">
          <motion.img
            key={tour.gallery[activeImage]}
            src={tour.gallery[activeImage]}
            alt={tour.title}
            className="tour-page__gallery-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          />
          {tour.gallery.length > 1 && (
            <div className="tour-page__gallery-thumbs">
              {tour.gallery.map((src, index) => (
                <button
                  key={src}
                  className={`tour-page__gallery-thumb ${index === activeImage ? 'is-active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Показать фото ${index + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="tour-page__layout">
          <div className="tour-page__main">
            <Reveal>
              <div className="tour-page__badges">
                <TypeBadge type={tour.type} />
                <DifficultyBadge difficulty={tour.difficulty} />
              </div>
              <h1 className="tour-page__title">{tour.title}</h1>
              <div className="tour-page__meta">
                <RatingStars rating={tour.rating} reviewsCount={tour.reviewsCount} />
                <span className="tour-page__meta-item">
                  <IconMapPin />
                  {tour.region}
                </span>
                <span className="tour-page__meta-item">
                  <IconClock />
                  {tour.days} {tour.days === 1 ? 'день' : 'дня'}
                  {tour.nights > 0 ? ` / ${tour.nights} ${tour.nights === 1 ? 'ночь' : 'ночи'}` : ''}
                </span>
                <span className="tour-page__meta-item">
                  <IconUsers />
                  Группа {tour.groupSize}
                </span>
              </div>
              <p className="tour-page__description">{tour.shortDescription}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <section className="tour-page__section">
                <h2>Программа</h2>
                <ol className="tour-page__program">
                  {tour.program.map((day) => (
                    <li key={day.day}>
                      <span className="tour-page__program-day">День {day.day}</span>
                      <div>
                        <h3>{day.title}</h3>
                        <p>{day.details}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal delay={0.15}>
              <section className="tour-page__section tour-page__include-grid">
                <div>
                  <h2>Включено</h2>
                  <ul className="tour-page__list tour-page__list--included">
                    {tour.included.map((item, index) => (
                      <li key={item}>
                        <IconCheckCircle delay={index * 0.06} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>Не включено</h2>
                  <ul className="tour-page__list tour-page__list--excluded">
                    {tour.excluded.map((item, index) => (
                      <li key={item}>
                        <IconXCircle delay={index * 0.06} />
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
              <span className="tour-page__price-note">за человека, выезд из {tour.departureCity}</span>
            </div>
            <BookingForm tourId={tour.id} tourTitle={tour.title} />
          </aside>
        </div>
      </div>
    </div>
  )
}
