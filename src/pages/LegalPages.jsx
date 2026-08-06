function PolicyLayout({ title, children }) {
  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">{title}</h1>
          <p className="text-white/50 text-sm mt-3">Last updated: August 2026</p>
        </div>
      </section>
      <section className="py-16 bg-section-soft">
        <div className="max-w-3xl mx-auto px-4 prose-navy space-y-6 text-navy/75 leading-relaxed">
          {children}
        </div>
      </section>
    </>
  )
}

export function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>
        LEXTAX INDIA respects your privacy. This policy explains how we collect, use and safeguard information
        shared through our website forms, consultations and service engagements.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Information we collect</h2>
      <p>
        We may collect your name, phone number, email address, business details and documents you voluntarily
        share to fulfil service requests. Analytics tools may collect anonymised usage data.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">How we use information</h2>
      <p>
        Information is used to respond to inquiries, deliver services, send status updates and improve our
        platform experience. We do not sell personal data.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Contact</h2>
      <p>
        For privacy requests, email{' '}
        <a href="mailto:lextaxindia@gmail.com" className="text-gold-dark hover:underline">
          lextaxindia@gmail.com
        </a>
        .
      </p>
    </PolicyLayout>
  )
}

export function Terms() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>
        By accessing www.lextax-india.com and engaging LEXTAX INDIA, you agree to these terms governing website
        use and professional services.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Services</h2>
      <p>
        Service scope, timelines and fees are confirmed in writing before work begins. Government processing
        times are outside our control and may affect delivery estimates.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Client responsibilities</h2>
      <p>
        Clients must provide accurate information and documents. Delays in providing materials may extend
        timelines.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Limitation</h2>
      <p>
        Website content is informational and does not replace formal legal advice for every unique fact pattern.
        Engaged mandates are governed by the agreed engagement terms.
      </p>
    </PolicyLayout>
  )
}

export function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy">
      <p>
        LEXTAX INDIA strives for transparent pricing. This refund policy outlines when professional fees may be
        adjusted or refunded.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Before filing</h2>
      <p>
        If work has not commenced beyond initial consultation and document checklist, eligible professional fees
        may be refunded as per the engagement confirmation.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">After filing</h2>
      <p>
        Once applications are submitted to government portals, statutory fees are non-refundable. Professional
        fees for completed work stages are generally non-refundable.
      </p>
      <h2 className="font-display text-2xl text-navy font-semibold">Requests</h2>
      <p>
        Email refund requests to{' '}
        <a href="mailto:lextaxindia@gmail.com" className="text-gold-dark hover:underline">
          lextaxindia@gmail.com
        </a>{' '}
        with your order reference. We aim to respond within 5–7 business days.
      </p>
    </PolicyLayout>
  )
}
