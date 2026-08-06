import { motion } from 'framer-motion'
import ContactForm from '../components/ui/ContactForm'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../data/siteData'

export default function Contact() {
  const wa = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-semibold mb-3">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">
              We’re here when compliance can’t wait
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Call, WhatsApp or send the form — our desk typically responds within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-section-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <ContactForm source="contact-page" />
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 space-y-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-navy hover:text-gold">
                <Phone className="w-5 h-5 text-gold" /> {siteConfig.phone}
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-navy hover:text-gold">
                <MessageCircle className="w-5 h-5 text-gold" /> WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-navy hover:text-gold">
                <Mail className="w-5 h-5 text-gold" /> {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-navy">
                <MapPin className="w-5 h-5 text-gold" /> {siteConfig.address}
              </div>
              <p className="text-sm text-navy/50 pt-2">{siteConfig.hours}</p>
            </div>
            <div className="rounded-2xl overflow-hidden h-72 border border-navy/10 bg-mist">
              <iframe
                title="Office location"
                src={siteConfig.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium text-gold-dark hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
