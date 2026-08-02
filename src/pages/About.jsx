import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="bg-hero-mesh pt-28 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
              Compliance clarity for modern Indian businesses
            </h1>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              LEXTAX INDIA is a professional legal and taxation consultancy committed to helping startups,
              entrepreneurs, MSMEs and established businesses with end-to-end compliance and legal solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Simplify procedures. Amplify growth."
              className="mb-6"
            />
            <p className="text-navy/70 leading-relaxed">
              From company incorporation to GST filings, trademark registration, tax planning and legal
              documentation, we provide reliable services backed by experienced professionals. Our goal is
              to simplify legal and taxation procedures so businesses can focus on growth while we take care
              of compliance.
            </p>
            <p className="mt-4 text-navy/70 leading-relaxed">
              Positioned as a digital legal & compliance platform, LEXTAX INDIA pairs expert advisory with
              online document workflows, clear status communication and secure payment-ready journeys —
              without the noise of a traditional consultancy website.
            </p>
            <Button to="/consultation" className="mt-8">
              Book Free Consultation
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Experienced Professionals',
              'Transparent Pricing',
              'Fast Processing',
              'Dedicated Support',
              'Online & Offline Services',
              'Secure Documentation',
            ].map((item, i) => (
              <GlassCard key={item} delay={i * 0.05} className="!p-5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="font-medium text-navy text-sm">{item}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl text-white">Ready to work with LEXTAX INDIA?</h2>
          <p className="text-white/60 mt-3 mb-8">Explore services or talk to our desk today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/services">View Services</Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
