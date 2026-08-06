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
          eyebrow="Pricing"
          title="Clear packages for common needs"
          subtitle="Transparent starting prices — government fees, if any, are shared upfront before work begins."
        />

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, i) => (
            <GlassCard key={tier.name} delay={i * 0.08} className="relative flex flex-col">
              <h3 className="font-display text-2xl font-semibold text-navy leading-snug">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-navy">{tier.price}</span>
                {tier.note ? <span className="text-navy/50">{tier.note}</span> : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{tier.desc}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-navy/75">{f}</span>
                  </li>
                ))}
              </ul>
              <Button to="/consultation" variant="outline" className="mt-8 w-full">
                Get Started
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
