import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { industries } from '../../data/siteData'

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Compliance fluency across sectors"
          subtitle="From cloud kitchens to manufacturing floors — we adapt filings and documentation to how your industry actually operates."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {industries.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl px-3 py-5 text-center border border-navy/5"
            >
              <span className="text-sm font-medium text-navy">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
