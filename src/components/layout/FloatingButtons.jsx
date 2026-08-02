import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteData'

export default function FloatingButtons() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hi LEXTAX INDIA, I would like to know more about your services.',
  )}`

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col gap-3">
      <a
        href={`tel:${siteConfig.phone}`}
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy text-white flex items-center justify-center shadow-xl shadow-navy/30 hover:scale-105 transition"
        aria-label="Call now"
      >
        <span className="absolute inset-0 rounded-full bg-navy animate-pulse-ring" />
        <Phone className="w-5 h-5 relative z-10" />
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-green-900/20 hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  )
}
