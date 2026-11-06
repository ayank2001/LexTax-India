import { motion } from 'framer-motion'
import ContactForm from '../components/ui/ContactForm'
import { CheckCircle2 } from 'lucide-react'

export default function Consultation() {
  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">
              Paid Consultation · ₹99
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold leading-tight">
              Book a conversation with the LEXTAX desk
            </h1>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Pay a ₹99 consultation fee to lock your booking. We’ll recommend the right filings,
              timelines and package for your matter.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                '₹99 fee via Cashfree (cards, UPI & more)',
                'Booking confirmed only after payment',
                'Clear document checklist',
                'Transparent fee outline & pan-India support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/85">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <ContactForm source="consultation" requirePayment />
        </div>
      </section>
    </>
  )
}
