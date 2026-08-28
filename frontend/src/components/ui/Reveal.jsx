import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, delay = 0, as = 'div', className, y = 26 }) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  const variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      variants={variants}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
