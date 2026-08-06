import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import GlassCard from '../components/ui/GlassCard'
import { serviceCategories, services } from '../data/siteData'

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">Services</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">
              Legal, tax, documentation & brand — under one roof
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Browse by category, open a service page, then book a consultation online.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat) => {
            const items = services.filter((s) => s.category === cat.id)
            const Icon = cat.icon
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-36">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-navy font-semibold">{cat.label}</h2>
                    <p className="text-sm text-navy/55">{cat.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((s, i) => {
                    const SIcon = s.icon
                    return (
                      <GlassCard key={s.slug} delay={i * 0.04}>
                        <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4">
                          <SIcon className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="font-display text-xl text-navy font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-navy/60 line-clamp-3">{s.description}</p>
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
            )
          })}
        </div>
      </section>
    </>
  )
}
