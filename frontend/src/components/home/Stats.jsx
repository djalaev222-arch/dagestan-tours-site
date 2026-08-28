import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const STATS = [
  { value: 1400, suffix: '+', label: 'путешественников в горах Дагестана' },
  { value: 26, suffix: '', label: 'маршрутов пройдено и проверено' },
  { value: 9, suffix: ' лет', label: 'водим группы в горы' },
  { value: 4.9, suffix: '', label: 'средняя оценка после тура', isDecimal: true }
]

function Counter({ value, suffix, isDecimal }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0)

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return
    const duration = 1300
    const start = performance.now()
    let frameId

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, value, shouldReduceMotion])

  return (
    <span ref={ref} className="ledger__value">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="ledger" aria-label="Коротко о нас">
      <div className="container ledger__grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="ledger__item">
            <Counter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
            <span className="ledger__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
