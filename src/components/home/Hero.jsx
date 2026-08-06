import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data/siteData'

const floating = [
  { label: 'GST Filed', delay: 0 },
  { label: 'Trademark Registered', delay: 0.2 },
  { label: 'Company Incorporated', delay: 0.4 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-mesh overflow-hidden pt-32 md:pt-36">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-navy-light/50 blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-light text-xs md:text-sm font-semibold tracking-[0.22em] uppercase mb-4">
              Legal • Tax • Compliance Solutions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-semibold text-white leading-[1.12]">
              A Private platform for{' '}
              <span className="text-gradient-gold">Legal, Tax and Business</span> Services
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Helping Startups, MSMEs & Enterprises manage Legal, Taxation & Compliance under one roof.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm text-white/80">
              {[
                'Company Registration',
                'GST Services',
                'Trademark Registration',
                'Income Tax',
                'Legal Documentation',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/consultation" size="lg">
                Book Consultation
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-8 rounded-full border border-gold/20 animate-pulse-ring" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64 animate-float">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
                  <div className="relative glass-dark rounded-[2rem] w-full h-full flex flex-col items-center justify-center border border-gold/30">
                    <Shield className="w-24 h-24 md:w-28 md:h-28 text-gold" strokeWidth={1.25} />
                    <div className="mt-3 font-display text-xl text-white tracking-wide">LEXTAX</div>
                    <div className="text-gold text-xs tracking-[0.3em] uppercase">India</div>
                  </div>
                </div>
              </div>

              {floating.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + card.delay }}
                  className={`absolute glass-dark rounded-xl px-3 py-2.5 flex items-center gap-2 text-xs md:text-sm text-white border border-gold/20 animate-float-slow ${
                    i === 0
                      ? 'top-6 left-0'
                      : i === 1
                        ? 'top-1/3 -right-2 md:right-0'
                        : 'bottom-16 left-4'
                  }`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  {card.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-dark rounded-2xl px-4 py-5 md:px-6 md:py-6 text-center border border-white/10"
            >
              <div className="font-display text-2xl md:text-3xl lg:text-4xl text-gold-light font-semibold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
