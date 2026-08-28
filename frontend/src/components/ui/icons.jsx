import { motion, useReducedMotion } from 'framer-motion'

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function IconArrowRight({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-arrow ${className}`} aria-hidden="true" {...STROKE}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function IconArrowUpRight({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-arrow ${className}`} aria-hidden="true" {...STROKE}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export function IconPhone({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-bounce ${className}`} aria-hidden="true" {...STROKE}>
      <path d="M21 16.6v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 18.7 18.7 0 0 1-5.7-5.7 19 19 0 0 1-3-8.4A2 2 0 0 1 3.8 2.4h3a2 2 0 0 1 2 1.7c.13.93.35 1.85.67 2.72a2 2 0 0 1-.45 2.11l-1.27 1.27a15.4 15.4 0 0 0 5.7 5.7l1.27-1.27a2 2 0 0 1 2.11-.45c.87.32 1.79.54 2.72.67a2 2 0 0 1 1.7 2.03z" />
    </svg>
  )
}

export function IconMail({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-bounce ${className}`} aria-hidden="true" {...STROKE}>
      <path d="M4 4.8h16a1.2 1.2 0 0 1 1.2 1.2v12a1.2 1.2 0 0 1-1.2 1.2H4A1.2 1.2 0 0 1 2.8 18V6A1.2 1.2 0 0 1 4 4.8z" />
      <polyline points="21.2 6.4 12 13 2.8 6.4" />
    </svg>
  )
}

export function IconMapPin({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-bounce ${className}`} aria-hidden="true" {...STROKE}>
      <path d="M20 10.4c0 6.4-8 11.8-8 11.8s-8-5.4-8-11.8a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10.4" r="2.6" />
    </svg>
  )
}

export function IconMessageCircle({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`icon icon-bounce ${className}`} aria-hidden="true" {...STROKE}>
      <path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4 8.3 8.3 0 0 1-3.8-.9L3 21l1.9-5.8a8.3 8.3 0 0 1-.9-3.7A8.4 8.4 0 0 1 12.5 3a8.4 8.4 0 0 1 8.5 8.5z" />
    </svg>
  )
}

export function IconClock({ size = 15, className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`icon ${className}`}
      aria-hidden="true"
      {...STROKE}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <circle cx="12" cy="12" r="9.2" />
      <motion.polyline
        points="12 7 12 12 15.5 14"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-10px' }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

export function IconUsers({ size = 15, className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`icon ${className}`}
      aria-hidden="true"
      {...STROKE}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <path d="M15.5 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H5.6A3.6 3.6 0 0 0 2 18.2V20" />
      <circle cx="8.6" cy="7.6" r="3.6" />
      <path d="M21.5 20v-1.8a3.6 3.6 0 0 0-2.7-3.5" />
      <path d="M14.9 4.3a3.6 3.6 0 0 1 0 7" />
    </motion.svg>
  )
}

export function IconStar({ size = 15, className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`icon ${className}`}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <path d="M10 1.5l2.6 5.6 6.1.7-4.6 4.2 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.8l6.1-.7z" />
    </motion.svg>
  )
}

export function IconCheckCircle({ size = 17, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`icon ${className}`}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10px' }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="9.3"
        stroke="currentColor"
        strokeWidth="1.6"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay, ease: 'easeOut' }}
      />
      <motion.polyline
        points="7.5 12.3 10.3 15.2 16.5 8.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: delay + (shouldReduceMotion ? 0 : 0.35), ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

export function IconXCircle({ size = 17, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`icon ${className}`}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10px' }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="9.3"
        stroke="currentColor"
        strokeWidth="1.6"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay, ease: 'easeOut' }}
      />
      <motion.line
        x1="14.8"
        y1="9.2"
        x2="9.2"
        y2="14.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: delay + (shouldReduceMotion ? 0 : 0.35), ease: 'easeOut' }}
      />
      <motion.line
        x1="9.2"
        y1="9.2"
        x2="14.8"
        y2="14.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: delay + (shouldReduceMotion ? 0 : 0.55), ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

export function IconMenu({ isOpen, size = 22, className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  const transition = { duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <motion.line
        x1="4"
        y1="8"
        x2="20"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{ originX: 0.5, originY: 0.5 }}
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        transition={transition}
      />
      <motion.line
        x1="4"
        y1="16"
        x2="20"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{ originX: 0.5, originY: 0.5 }}
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        transition={transition}
      />
    </svg>
  )
}
