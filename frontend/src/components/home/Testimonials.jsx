import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import { IconArrowRight } from '../ui/icons'

const REVIEWS = [
  {
    name: 'Марина, Санкт-Петербург',
    tour: 'Гуниб и крепость Шамиля',
    text: 'Гид Ахмед знал историю каждого камня в крепости. Гостевой дом простой, но с невероятным видом на плато.'
  },
  {
    name: 'Дмитрий, Москва',
    tour: 'Треккинг на Шалбуздаг',
    text: 'Физически тяжело, но темп группы, снаряжение и рассвет на вершине — всё было на высшем уровне.'
  },
  {
    name: 'Алина, Казань',
    tour: 'Сулакский каньон',
    text: 'Встретили в аэропорту, отвезли и вернули к рейсу. Каньон оказался даже лучше, чем на фотографиях.'
  }
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const review = REVIEWS[active]

  function go(next) {
    setDirection(next > active ? 1 : -1)
    setActive((next + REVIEWS.length) % REVIEWS.length)
  }

  return (
    <section className="section testimonials section--raised">
      <div className="container testimonials__inner">
        <Reveal>
          <p className="mono-label">Отзывы · {String(active + 1).padStart(2, '0')} / {String(REVIEWS.length).padStart(2, '0')}</p>
        </Reveal>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={active}
            className="testimonials__quote"
            initial={{ opacity: 0, y: direction * 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="testimonials__text">{review.text}</p>
            <footer className="testimonials__author">
              <span>{review.name}</span>
              <span className="testimonials__tour">{review.tour}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="testimonials__controls">
          <button type="button" onClick={() => go(active - 1)} aria-label="Предыдущий отзыв" className="testimonials__nav">
            <IconArrowRight className="testimonials__nav-flip" />
          </button>
          <button type="button" onClick={() => go(active + 1)} aria-label="Следующий отзыв" className="testimonials__nav">
            <IconArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
