import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { blogPosts } from '../../data/siteData'

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Latest articles from the LEXTAX desk"
          subtitle="Practical guides for founders navigating incorporation, GST, IP and annual compliance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((post, i) => (
            <GlassCard key={post.slug} delay={i * 0.07} className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider uppercase text-gold">{post.category}</span>
              <h3 className="mt-3 font-display text-xl text-navy font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-navy/60 flex-1">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-navy/45">{post.date}</span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition"
                >
                  Read <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
