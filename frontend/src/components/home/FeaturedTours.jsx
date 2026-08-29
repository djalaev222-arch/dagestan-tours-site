import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTours } from '../../hooks/useTours'
import { Reveal } from '../ui/Reveal'
import { TourCard } from '../tours/TourCard'
import { IconArrowRight, IconArrowUpRight } from '../ui/icons'

export function FeaturedTours() {
  const { tours, isLoading } = useTours({})
  const featured = tours.slice(0, 6)
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }, [])

  const scrollByCards = useCallback((direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.featured__slide')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }, [])

  return (
    <section className="section featured section--sunken">
      <div className="container">
        <Reveal className="featured__head">
          <div>
            <p className="mono-label mono-label--accent">Популярные маршруты</p>
            <h2 className="section-title">Что бронируют чаще всего</h2>
          </div>
          <div className="featured__controls">
            <button
              type="button"
              className="featured__arrow"
              aria-label="Предыдущие маршруты"
              onClick={() => scrollByCards(-1)}
              disabled={atStart}
            >
              <IconArrowRight className="featured__arrow-flip" />
            </button>
            <button
              type="button"
              className="featured__arrow"
              aria-label="Следующие маршруты"
              onClick={() => scrollByCards(1)}
              disabled={atEnd}
            >
              <IconArrowRight />
            </button>
          </div>
        </Reveal>

        {isLoading ? (
          <div className="featured__track" aria-hidden="true">
            {[0, 1].map((i) => (
              <div className="featured__slide featured__slide--skeleton" key={i} />
            ))}
          </div>
        ) : (
          <ul className="featured__track" ref={trackRef} onScroll={syncEdges}>
            {featured.map((tour) => (
              <li className="featured__slide" key={tour.id}>
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        )}

        <Link to="/catalog" className="link-line featured__all">
          Весь каталог маршрутов
          <IconArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}
