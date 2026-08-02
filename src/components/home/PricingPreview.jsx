import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'
import { pricingTiers } from '../../data/siteData'

export default function PricingPreview() {
  return (
    <section className="py-20 md:py-28 bg-section-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing Preview"
          title="Packages that scale with ambition"
          subtitle="Start lean, grow into retainers — every quote stays transparent on professional and government fees."
        />

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, i) => (
            <GlassCard
              key={tier.name}
              delay={i * 0.08}
              hover={!tier.popular}
              className={`relative flex flex-col ${
                tier.popular
                  ? '!bg-navy !border-gold/40 text-white shadow-2xl shadow-navy/30 scale-[1.02]'
                  : ''
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wide bg-gold text-navy px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-display text-2xl font-semibold ${
                  tier.popular ? 'text-white' : 'text-navy'
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-4xl font-semibold ${tier.popular ? 'text-gold-light' : 'text-navy'}`}>
                  {tier.price}
                </span>
                <span className={tier.popular ? 'text-white/50' : 'text-navy/50'}>{tier.note}</span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${tier.popular ? 'text-white/65' : 'text-navy/60'}`}>
                {tier.desc}
              </p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? 'text-gold' : 'text-gold-dark'}`} />
                    <span className={tier.popular ? 'text-white/80' : 'text-navy/75'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/consultation"
                variant={tier.popular ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                Get Started
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
