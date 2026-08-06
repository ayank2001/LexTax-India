import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { serviceCategories, services } from '../../data/siteData'

export default function ServicesGrid() {
  return (
    <section className="bg-section-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Four desks. Complete coverage."
          subtitle="Legal, tax, documentation and brand — organised so you always know where to start."
        />

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {serviceCategories.map((cat, i) => {
            const Icon = cat.icon
            const count = services.filter((s) => s.category === cat.id).length
            return (
              <GlassCard key={cat.id} delay={i * 0.06} className="group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy font-semibold">{cat.label}</h3>
                <p className="mt-2 text-sm text-navy/60 flex-1">{cat.description}</p>
                <p className="mt-3 text-xs text-navy/40">{count} services</p>
                <Link
                  to={`/services#${cat.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:gap-2.5 transition-all"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
