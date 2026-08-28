import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'

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
          src={`${import.meta.env.BASE_URL}photos/sulak-boat.jpg`}
          alt=""
          width="1920"
          height="1280"
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
          className="mono-label hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          43.0153° N, 46.8203° E · Сулакский каньон
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
          <Button to="/catalog" size="lg" withArrow>
            Смотреть маршруты
          </Button>
          <Button to="/about" size="lg" variant="on-photo">
            Как мы водим
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
