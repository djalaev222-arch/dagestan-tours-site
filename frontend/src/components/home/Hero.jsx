import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Sulak_Canyon_in_Dagestan.jpg"
          alt=""
          width="2048"
          height="1365"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__backdrop-gradient" />
      </div>

      <div className="container hero__inner">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Туры по Дагестану
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Горы, каньоны, древние города — без туристических троп
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Маршруты ведут гиды из своих сёл — малыми группами, без шаблона.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button to="/catalog" size="lg" withArrow>
            Смотреть туры
          </Button>
          <Button to="/about" size="lg" variant="ghost">
            Как мы работаем
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
