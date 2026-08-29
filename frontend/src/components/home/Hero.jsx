import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { IconArrowRight } from '../ui/icons'

const TITLE_LINES = [['Дагестан'], ['не', 'по', 'путеводителю']]

export function Hero() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 64])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } }
  }
  const word = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: '0.6em' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="hero bleed-top" ref={ref}>
      <motion.div
        className="hero__backdrop"
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <img
          src={`${import.meta.env.BASE_URL}photos/shalbuzdag-slopes.jpg`}
          alt=""
          width="1920"
          height="1282"
          loading="eager"
          fetchPriority="high"
          className="hero__image"
        />
      </motion.div>
      <div className="hero__scrim" aria-hidden="true" />

      <motion.div
        className="container hero__inner"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Маршруты ведут гиды из своих сёл — малыми группами, на внедорожниках, с ночёвками в горных аулах.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/catalog" className="hero-cta">
            <span className="hero-cta__text">Выбрать маршрут</span>
            <span className="hero-cta__badge" aria-hidden="true">
              <IconArrowRight size={20} />
            </span>
          </Link>
          <Link to="/about" className="hero-cta-link">
            <span>Как устроены туры</span>
            <IconArrowRight size={15} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="hero__scroll-track">
          <span className="hero__scroll-dot" />
        </span>
        <span className="mono-label">прокрутите</span>
      </motion.div>
    </section>
  )
}
