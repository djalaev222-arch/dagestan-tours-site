import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  { value: 1400, suffix: '+', label: 'туристов провели по Дагестану' },
  { value: 26, suffix: '', label: 'проверенных маршрутов' },
  { value: 9, suffix: ' лет', label: 'работаем гидами в горах' },
  { value: 4.9, suffix: '', label: 'средняя оценка туров', isDecimal: true }
]

function Counter({ value, suffix, isDecimal }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
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
  }, [isInView, value])

  return (
    <span ref={ref} className="stats__value">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stats__item">
            <Counter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
