import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { IconArrowRight } from '../ui/icons'

const TITLE_LINES = [['Дагестан'], ['не', 'по', 'путеводителю']]

export function Hero() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  }
  const word = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: '0.6em' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="hero" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Малые группы · гиды из местных сёл
          </motion.p>

          <motion.h1 className="hero__title" variants={container} initial="hidden" animate="visible">
            {TITLE_LINES.map((line, lineIndex) => (
              <span className="hero__title-line" key={lineIndex}>
                {line.map((w, i) => (
                  <span className="hero__word" key={i}>
                    <motion.span className="hero__word-inner" variants={word}>
                      {w}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Маршруты по горам, каньонам и древним городам — малыми группами, на внедорожниках, с ночёвками в аулах.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.57, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/catalog" className="hero-cta">
              <span className="hero-cta__text">Выбрать маршрут</span>
              <span className="hero-cta__badge" aria-hidden="true">
                <IconArrowRight size={17} />
              </span>
            </Link>
            <Link to="/about" className="hero-cta-link">
              <span>Как устроены туры</span>
              <IconArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__figure"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__frame">
            <motion.img
              src={`${import.meta.env.BASE_URL}photos/shalbuzdag-slopes.jpg`}
              alt="Снежные вершины и зелёные склоны горного Дагестана"
              width="1920"
              height="1282"
              loading="eager"
              fetchPriority="high"
              className="hero__image"
              style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
            />
          </div>
          <div className="hero__badge">
            <strong>9&nbsp;лет</strong>
            <span>водим группы в горах</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
