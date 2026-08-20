import { IconStar } from './icons'

export function RatingStars({ rating, reviewsCount }) {
  return (
    <span className="rating" aria-label={`Рейтинг ${rating} из 5`}>
      <IconStar />
      <strong>{rating.toFixed(1)}</strong>
      {reviewsCount !== undefined && <span className="rating__count">({reviewsCount})</span>}
    </span>
  )
}
