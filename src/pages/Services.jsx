import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { services } from '../data/siteData'

export default function Services() {
  return (
    <>
      <section className="bg-hero-mesh pt-28 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">Services</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">
              End-to-end legal, tax & compliance solutions
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Choose a service to explore benefits, process, documents, packages and FAQs — then book a consultation online.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="All Services"
            title="Pick the mandate that matches your stage"
            subtitle="Every landing page is built to encourage document readiness, status tracking and expert consultation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <GlassCard key={s.slug} delay={i * 0.04}>
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="font-display text-xl text-navy font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-navy/60 line-clamp-3">{s.description}</p>
                  <ul className="mt-4 space-y-1">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="text-xs text-navy/55">• {f}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark"
                  >
                    View details <ArrowRight className="w-4 h-4" />
                  </Link>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
