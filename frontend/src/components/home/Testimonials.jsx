import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import { RatingStars } from '../ui/RatingStars'
import { IconArrowRight } from '../ui/icons'

const REVIEWS = [
  {
    name: 'Марина, Санкт-Петербург',
    tour: 'Гуниб и крепость Шамиля',
    rating: 5,
    text: 'Ехали втроём, гид Ахмед знал историю каждого камня в крепости. Заселение в гостевом доме — простое, но с невероятным видом на плато.'
  },
  {
    name: 'Дмитрий, Москва',
    tour: 'Треккинг на Шалбуздаг',
    rating: 5,
    text: 'Единственный минус — сложно физически. Всё остальное на высшем уровне: снаряжение, темп группы, рассвет на вершине стоил всего.'
  },
  {
    name: 'Алина, Казань',
    tour: 'Сулакский каньон',
    rating: 5,
    text: 'Организация без нервов: встретили в аэропорту, отвезли, привезли обратно к рейсу. Каньон даже лучше, чем на фотографиях.'
  }
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const review = REVIEWS[active]

  function goTo(index) {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  function handlePrev() {
    setDirection(-1)
    setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
  }

  function handleNext() {
    setDirection(1)
    setActive((prev) => (prev + 1) % REVIEWS.length)
  }

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Отзывы туристов</span>
          <h2 className="section-title">Что говорят после маршрута</h2>
        </Reveal>

        <div className="testimonials__card">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <RatingStars rating={review.rating} />
              <p className="testimonials__text">«{review.text}»</p>
              <div className="testimonials__author">
                <strong>{review.name}</strong>
                <span>{review.tour}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button
              type="button"
              className="testimonials__nav"
              onClick={handlePrev}
              aria-label="Предыдущий отзыв"
            >
              <IconArrowRight className="testimonials__nav-icon" />
            </button>

            <div className="testimonials__dots">
              {REVIEWS.map((item, index) => (
                <button
                  key={item.name}
                  className={`testimonials__dot ${index === active ? 'is-active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="testimonials__nav"
              onClick={handleNext}
              aria-label="Следующий отзыв"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
