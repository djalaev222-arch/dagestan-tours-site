import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { DifficultyBadge } from '../ui/Badge'
import { PriceTag } from '../ui/PriceTag'
import { RatingStars } from '../ui/RatingStars'
import { IconArrowUpRight } from '../ui/icons'
import './tour-card.css'

export function TourCard({ tour }) {
  const shouldReduceMotion = useReducedMotion()

  function durationText() {
    const days = `${tour.days} ${tour.days === 1 ? 'день' : tour.days < 5 ? 'дня' : 'дней'}`
    return tour.nights > 0 ? `${days} · ${tour.nights} ноч.` : days
  }

  return (
    <motion.article
      className="tour-card"
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/catalog/${tour.id}`} className="tour-card__link">
        <div className="tour-card__media">
          <img src={tour.cover} alt={tour.title} loading="lazy" width="600" height="440" className="tour-card__image" />
          <span className="tour-card__region mono-label">{tour.region}</span>
          <span className="tour-card__go" aria-hidden="true">
            <IconArrowUpRight size={16} />
          </span>
        </div>

        <div className="tour-card__body">
          <div className="tour-card__meta">
            <span className="mono-label">{durationText()}</span>
            <RatingStars rating={tour.rating} reviewsCount={tour.reviewsCount} />
          </div>

          <h3 className="tour-card__title">{tour.title}</h3>
          <p className="tour-card__line">{tour.heroLine}</p>

          <div className="tour-card__foot">
            <PriceTag price={tour.priceFrom} />
            {tour.difficulty === 'hard' && <DifficultyBadge difficulty={tour.difficulty} />}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
