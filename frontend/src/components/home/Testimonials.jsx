import { Reveal } from '../ui/Reveal'
import { IconStar } from '../ui/icons'

const REVIEWS = [
  {
    name: 'Марина',
    city: 'Санкт-Петербург',
    tour: 'Гуниб и крепость Шамиля',
    rating: 5,
    text: 'Гид Ахмед знал историю каждого камня в крепости. Гостевой дом простой, но с невероятным видом на плато.'
  },
  {
    name: 'Дмитрий',
    city: 'Москва',
    tour: 'Треккинг на Шалбуздаг',
    rating: 5,
    text: 'Физически тяжело, но темп группы, снаряжение и рассвет на вершине — всё было на высшем уровне.'
  },
  {
    name: 'Алина',
    city: 'Казань',
    tour: 'Сулакский каньон',
    rating: 5,
    text: 'Встретили в аэропорту, отвезли и вернули к рейсу. Каньон оказался даже лучше, чем на фотографиях.'
  }
]

function Stars({ rating }) {
  return (
    <span className="testimonials__stars" aria-label={`Оценка ${rating} из 5`}>
      {Array.from({ length: rating }).map((_, index) => (
        <IconStar key={index} size={13} />
      ))}
    </span>
  )
}

export function Testimonials() {
  return (
    <section className="section testimonials section--raised">
      <div className="container">
        <Reveal className="testimonials__head">
          <p className="mono-label mono-label--accent">Отзывы</p>
          <h2 className="section-title">Что говорят после маршрута</h2>
          <p className="testimonials__meta">
            Средняя оценка <strong>4.9 из 5</strong> — по 138 отзывам путешественников за 2025 год
          </p>
        </Reveal>

        <ul className="testimonials__grid">
          {REVIEWS.map((review, index) => (
            <Reveal as="li" key={review.name} delay={index * 0.08} className="testimonials__card">
              <Stars rating={review.rating} />
              <p className="testimonials__text">{review.text}</p>
              <footer className="testimonials__author">
                <span className="testimonials__avatar" aria-hidden="true">{review.name.charAt(0)}</span>
                <span className="testimonials__who">
                  <span className="testimonials__name">{review.name}, {review.city}</span>
                  <span className="testimonials__tour">{review.tour}</span>
                </span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
