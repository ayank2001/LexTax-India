import { motion } from 'framer-motion'
import PricingPreview from '../components/home/PricingPreview'
import Button from '../components/ui/Button'
import ContactForm from '../components/ui/ContactForm'

export default function Pricing() {
  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">Pricing</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">
              Clear packages. Custom quotes when you need them.
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Government fees are always disclosed separately. Share your requirement and we’ll send a quote.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingPreview />

      <section className="pb-20 bg-section-soft">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-3xl text-navy text-center mb-2">Need a custom quote?</h2>
          <p className="text-center text-navy/60 mb-8">Share your entity count and services — we’ll respond with options.</p>
          <ContactForm source="pricing" />
          <div className="text-center mt-6">
            <Button to="/consultation" variant="outline">
              Or Book a consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
