import { Link } from 'react-router-dom'
import { useTours } from '../../hooks/useTours'
import { Reveal } from '../ui/Reveal'
import { PriceTag } from '../ui/PriceTag'
import { IconArrowUpRight } from '../ui/icons'

function formatDuration(tour) {
  const days = `${tour.days} ${tour.days === 1 ? 'день' : tour.days < 5 ? 'дня' : 'дней'}`
  if (tour.nights === 0) return days
  return `${days} · ${tour.nights} ${tour.nights === 1 ? 'ночь' : tour.nights < 5 ? 'ночи' : 'ночей'}`
}

export function FeaturedTours() {
  const { tours, isLoading } = useTours({})
  const featured = tours.slice(0, 4)

  return (
    <section className="section featured section--sunken">
      <div className="container">
        <Reveal className="featured__head">
          <div>
            <p className="mono-label mono-label--accent">Популярные маршруты</p>
            <h2 className="section-title">Что бронируют чаще всего</h2>
          </div>
          <Link to="/catalog" className="link-line">
            Весь каталог
            <IconArrowUpRight size={15} />
          </Link>
        </Reveal>

        {isLoading ? (
          <div className="featured__list">
            {[0, 1, 2, 3].map((i) => (
              <div className="featured__row featured__row--skeleton" key={i} />
            ))}
          </div>
        ) : (
          <ol className="featured__list">
            {featured.map((tour, index) => (
              <Reveal as="li" key={tour.id} delay={index * 0.05}>
                <Link to={`/catalog/${tour.id}`} className="featured__row">
                  <span className="featured__index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="featured__media">
                    <img src={tour.cover} alt={tour.title} loading="lazy" width="640" height="420" />
                  </div>
                  <div className="featured__content">
                    <p className="featured__meta mono-label">
                      {tour.region} · {formatDuration(tour)}
                    </p>
                    <h3 className="featured__title">{tour.title}</h3>
                    <p className="featured__line">{tour.heroLine}</p>
                    <div className="featured__foot">
                      <PriceTag price={tour.priceFrom} />
                      <span className="featured__cta">
                        Подробнее
                        <IconArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
