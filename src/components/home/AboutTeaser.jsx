import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Legal & tax expertise, delivered as a modern platform"
            subtitle="LEXTAX INDIA helps startups, entrepreneurs, MSMEs and established businesses with end-to-end compliance — from incorporation to GST, trademarks, tax planning and documentation."
            className="mb-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <p className="text-navy/70 leading-relaxed">
              Our goal is to simplify legal and taxation procedures so you can focus on growth while we take
              care of compliance — with transparent pricing, secure documentation and nationwide digital support.
            </p>
            <Button to="/about" variant="outline" className="mt-6">
              Know more about us
            </Button>
            <p className="mt-4 text-xs text-navy/40">
              Prefer to jump in?{' '}
              <Link to="/consultation" className="text-gold-dark font-medium hover:underline">
                Book a free consultation
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
