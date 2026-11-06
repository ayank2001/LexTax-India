import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../ui/ContactForm'
import Button from '../ui/Button'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteData'

export default function ContactCTA() {
  const wa = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <section className="py-20 md:py-28 bg-section-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your compliance goals"
          subtitle="Share a few details and our desk will guide the next step — consultation, filing or a full service bundle."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ContactForm source="homepage" />

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <h3 className="font-display text-2xl text-navy">Reach our support team</h3>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-navy/80 hover:text-gold transition">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold" />
                </span>
                {siteConfig.phone}
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-navy/80 hover:text-gold transition">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-gold" />
                </span>
                WhatsApp Desk
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-navy/80 hover:text-gold transition">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold" />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-navy/80">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold" />
                </span>
                {siteConfig.address}
              </div>
              <p className="text-sm text-navy/50">{siteConfig.hours}</p>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                Full contact page
              </Button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-navy/10 h-56 bg-mist">
              <iframe
                title="LEXTAX INDIA Office Map"
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

            <p className="text-xs text-navy/40">
              Prefer a dedicated booking flow?{' '}
              <Link to="/consultation" className="text-gold-dark font-medium hover:underline">
                Book paid consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
