import { motion } from 'framer-motion'
import GlassCard from '../components/ui/GlassCard'
import SectionHeading from '../components/ui/SectionHeading'
import { blogPosts } from '../data/siteData'

export default function Blog() {
  return (
    <>
      <section className="bg-hero-mesh pt-28 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">Resources</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Blog & Guides</h1>
            <p className="mt-4 text-white/70 text-lg max-w-2xl">
              Practical articles written for LEXTAX INDIA clients — incorporation, GST, trademarks, tax and ROC filings.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest" title="Insights from our experts" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <GlassCard key={post.slug} delay={i * 0.05}>
                <span className="text-xs font-semibold tracking-wider uppercase text-gold">{post.category}</span>
                <h2 className="mt-3 font-display text-xl text-navy font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-navy/60">{post.excerpt}</p>
                <p className="mt-5 text-xs text-navy/40">{post.date}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
