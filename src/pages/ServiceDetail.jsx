import { Link, Navigate, useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../data/siteData'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import ContactForm from '../components/ui/ContactForm'
import GlassCard from '../components/ui/GlassCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon

  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-gold">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold-light">{service.title}</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end gap-6 justify-between"
          >
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">{service.title}</h1>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">{service.description}</p>
            </div>
            <Button to="/consultation" size="lg">Book Consultation</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="What’s included" align="left" className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((f, i) => (
              <GlassCard key={f} delay={i * 0.04} className="!p-5 flex items-center gap-3">
                <Check className="w-5 h-5 text-gold" />
                <span className="font-medium text-navy">{f}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {service.benefits && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Benefits" title="Why businesses choose this service" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.benefits.map((b, i) => (
                <GlassCard key={b} delay={i * 0.05}>
                  <div className="text-gold font-display text-2xl mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-navy/80">{b}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.process && (
        <section className="py-16 md:py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading light eyebrow="Process" title="How we deliver" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step, i) => (
                <GlassCard key={step} dark delay={i * 0.06} className="!p-5">
                  <div className="text-gold font-semibold text-sm mb-2">Step {i + 1}</div>
                  <p className="text-white/85">{step}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading align="left" eyebrow="Documents" title="What you’ll need" className="mb-6" />
            <ul className="space-y-3">
              {(service.documents || []).map((d) => (
                <li key={d} className="glass rounded-xl px-4 py-3 flex items-start gap-3 text-sm text-navy/80">
                  <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Packages" title="Transparent pricing" className="mb-6" />
            <div className="space-y-4">
              {(service.packages || []).map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-5 border ${
                    pkg.popular
                      ? 'bg-navy text-white border-gold/40'
                      : 'glass border-white/70'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`font-display text-xl font-semibold ${pkg.popular ? 'text-white' : 'text-navy'}`}>
                      {pkg.name}
                    </h3>
                    <span className={`font-semibold ${pkg.popular ? 'text-gold-light' : 'text-gold-dark'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {pkg.items.map((item) => (
                      <li key={item} className={`text-sm ${pkg.popular ? 'text-white/70' : 'text-navy/65'}`}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(service.faqs || []).length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="FAQ" title={`${service.title} — common questions`} />
            <Accordion items={service.faqs} />
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-section-soft">
        <div className="max-w-xl mx-auto px-4">
          <SectionHeading
            eyebrow="Consultation"
            title={`Start your ${service.title} request`}
            subtitle="Tell us a bit about your requirement. We’ll respond with next steps and a clear checklist."
          />
          <ContactForm defaultService={service.title} source={`service:${service.slug}`} />
        </div>
      </section>
    </>
  )
}
