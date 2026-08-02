import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Button from './Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl md:text-3xl text-white">
              Compliance insights, delivered monthly
            </h3>
            <p className="text-white/60 mt-2 max-w-lg text-sm md:text-base">
              Practical notes on GST, company law and filings — no spam, just clarity for founders & finance teams.
            </p>
          </div>
          {done ? (
            <div className="flex items-center gap-2 text-gold-light">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">You&apos;re on the list. Thank you!</span>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-gold"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
