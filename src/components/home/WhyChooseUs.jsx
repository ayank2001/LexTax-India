import {
  Clock3,
  Handshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { whyChoose } from '../../data/siteData'

const icons = [Clock3, Wallet, Sparkles, Handshake, ShieldCheck, MapPinned]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose LEXTAX"
          title="Built like a legal-tech platform, delivered like a trusted advisor"
          subtitle="We combine expert professionals with digital workflows so compliance feels modern, measurable and stress-free."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChoose.map((item, i) => {
            const Icon = icons[i]
            return (
              <GlassCard key={item.title} dark delay={i * 0.06} className="!p-6">
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
