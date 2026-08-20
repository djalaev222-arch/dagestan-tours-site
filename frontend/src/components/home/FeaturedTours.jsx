import { useRef } from 'react'
import { useTours } from '../../hooks/useTours'
import { TourCard } from '../tours/TourCard'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { IconArrowRight } from '../ui/icons'

export function FeaturedTours() {
  const { tours, isLoading } = useTours({})
  const featured = tours.slice(0, 4)
  const scrollerRef = useRef(null)

  function scrollByCard(direction) {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector('.featured__item')
    const amount = card ? card.getBoundingClientRect().width + 16 : scroller.clientWidth * 0.85
    scroller.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="section featured">
      <div className="container">
        <Reveal className="section-head featured__head">
          <div>
            <span className="eyebrow">Популярные маршруты</span>
            <h2 className="section-title">Туры, которые бронируют чаще всего</h2>
          </div>
          <Button to="/catalog" variant="ghost" withArrow>
            Весь каталог
          </Button>
        </Reveal>

        {isLoading ? (
          <p className="featured__loading">Загружаем туры…</p>
        ) : (
          <div className="featured__carousel">
            <div className="featured__grid" ref={scrollerRef}>
              {featured.map((tour, index) => (
                <Reveal key={tour.id} delay={index * 0.08} className="featured__item">
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </div>
            <button
              type="button"
              className="featured__nav featured__nav--prev"
              onClick={() => scrollByCard(-1)}
              aria-label="Предыдущие туры"
            >
              <IconArrowRight />
            </button>
            <button
              type="button"
              className="featured__nav featured__nav--next"
              onClick={() => scrollByCard(1)}
              aria-label="Следующие туры"
            >
              <IconArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
