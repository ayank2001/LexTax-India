import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/siteData'

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-section-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path from consultation to certificate"
          subtitle="Animated, transparent milestones so you always know where your matter stands."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative glass rounded-2xl p-5 text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-navy text-gold font-display font-semibold flex items-center justify-center mb-4 border border-gold/40">
                  {step.step}
                </div>
                <h3 className="font-semibold text-navy text-sm md:text-base">{step.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-navy/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
