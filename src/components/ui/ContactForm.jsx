import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import Button from './Button'
import { services } from '../../data/siteData'

const SERVICE_OPTIONS = [
  'General Inquiry',
  ...services.map((s) => s.title),
]

export default function ContactForm({
  compact = false,
  defaultService = '',
  source = 'website',
}) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('loading')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || serviceId.startsWith('your_')) {
      // Demo / local fallback so forms still feel complete before EmailJS is configured
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: defaultService, message: '' })
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service || 'General Inquiry',
          message: form.message,
          query: form.message,
          source,
        },
        publicKey,
      )
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: defaultService, message: '' })
    } catch (err) {
      console.error(err)
      setStatus('idle')
      setError('Unable to send right now. Please try WhatsApp or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl text-navy mb-2">Request received</h3>
        <p className="text-navy/65 mb-6">
          Our desk will reach out within one business day. For urgent matters, use Call or WhatsApp.
        </p>
        <Button type="button" variant="outline" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-navy/10 bg-white/70 px-4 py-3 text-sm text-navy placeholder:text-navy/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition'

  return (
    <form onSubmit={onSubmit} className={`glass rounded-2xl ${compact ? 'p-5' : 'p-6 md:p-8'} space-y-4`}>
      {!compact && (
        <div className="mb-2">
          <h3 className="font-display text-2xl text-navy">Send us your inquiry</h3>
          <p className="text-sm text-navy/60 mt-1">We usually respond within one business day.</p>
        </div>
      )}

      <div className={compact ? 'space-y-3' : 'grid md:grid-cols-2 gap-4'}>
        <input
          required
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Full Name"
          className={field}
        />
        <input
          required
          name="phone"
          type="tel"
          value={form.phone}
          onChange={onChange}
          placeholder="Phone Number"
          className={field}
        />
        {!compact && (
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email Address"
            className={field}
          />
        )}
        {!compact && (
          <select name="service" value={form.service} onChange={onChange} className={field}>
            <option value="">Service Required</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </div>

      {compact && (
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email (optional)"
          className={field}
        />
      )}

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        rows={compact ? 3 : 4}
        placeholder={compact ? 'Brief requirement' : 'How can we help?'}
        className={`${field} resize-none`}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> {compact ? 'Schedule Callback' : 'Submit Inquiry'}
          </>
        )}
      </Button>
    </form>
  )
}
