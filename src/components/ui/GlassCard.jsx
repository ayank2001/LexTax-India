import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  dark = false,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`${dark ? 'glass-dark' : 'glass'} rounded-2xl p-6 md:p-8 ${
        hover ? 'transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
