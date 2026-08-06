import { MessageCircle, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../data/siteData'

export default function FloatingButtons() {
  const [open, setOpen] = useState(true)

  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi LEXTAX INDIA, I can't find my field and would like to consult your team.",
  )}`

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${siteConfig.phone}`}
        className="relative w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-xl shadow-navy/30 hover:scale-105 transition"
        aria-label="Call now"
      >
        <span className="absolute inset-0 rounded-full bg-navy animate-pulse-ring" />
        <Phone className="w-5 h-5 relative z-10" />
      </a>

      {open ? (
        <div className="w-[260px] sm:w-[280px] rounded-2xl bg-navy border border-gold/30 shadow-2xl shadow-navy/40 overflow-hidden">
          <div className="flex items-start justify-between gap-2 px-4 pt-3.5 pb-2">
            <h3 className="font-display text-base text-white leading-snug pr-2">
              Can&apos;t find your Field?
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="px-4 text-xs text-white/55 leading-relaxed mb-3">
            Tell us what you need — our desk will guide you on WhatsApp.
          </p>
          <div className="px-4 pb-4">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition shadow-lg shadow-green-900/20"
            >
              <MessageCircle className="w-4 h-4" />
              Consult to our team
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-navy border border-gold/40 text-gold px-4 py-2.5 text-xs font-semibold shadow-xl hover:bg-navy-light transition"
        >
          Need help?
        </button>
      )}
    </div>
  )
}
