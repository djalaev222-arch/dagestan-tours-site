import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TypeBadge, DifficultyBadge } from '../ui/Badge'
import { PriceTag } from '../ui/PriceTag'
import { RatingStars } from '../ui/RatingStars'
import { IconClock, IconMapPin } from '../ui/icons'
import './tour-card.css'

export function TourCard({ tour }) {
  return (
    <motion.article
      className="tour-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/catalog/${tour.id}`} className="tour-card__link">
        <div className="tour-card__image-wrap">
          <img src={tour.cover} alt={tour.title} loading="lazy" className="tour-card__image" />
          <div className="tour-card__badges">
            <TypeBadge type={tour.type} />
            <DifficultyBadge difficulty={tour.difficulty} />
          </div>
        </div>

        <div className="tour-card__body">
          <div className="tour-card__meta">
            <span className="tour-card__region">
              <IconMapPin />
              {tour.region}
            </span>
            <RatingStars rating={tour.rating} reviewsCount={tour.reviewsCount} />
          </div>

          <h3 className="tour-card__title">{tour.title}</h3>
          <p className="tour-card__description">{tour.shortDescription}</p>

          <div className="tour-card__footer">
            <span className="tour-card__duration">
              <IconClock />
              {tour.days} {tour.days === 1 ? 'день' : 'дня'}
              {tour.nights > 0 ? ` / ${tour.nights} ${tour.nights === 1 ? 'ночь' : 'ночи'}` : ''}
            </span>
            <PriceTag price={tour.priceFrom} />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
