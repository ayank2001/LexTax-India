import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2, XCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import {
  clearBookingDraft,
  loadBookingDraft,
  markBookingNotified,
  wasBookingNotified,
} from '../lib/cashfree'

async function sendBookingEmail(draft, orderId) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey || serviceId.startsWith('your_')) {
    return
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: draft.name,
      phone: draft.phone,
      email: draft.email || '',
      service: draft.service || 'General Inquiry',
      message: draft.message || '',
      query: draft.message || '',
      source: draft.source || 'consultation',
      payment_status: 'PAID',
      order_id: orderId,
      amount: '199',
    },
    publicKey,
  )
}

export default function PaymentStatus() {
  const [params] = useSearchParams()
  const orderId = params.get('order_id')
  const [state, setState] = useState({
    status: 'loading',
    message: 'Verifying your payment…',
  })
  const ran = useRef(false)

  useEffect(() => {
    if (ran.current) return
    ran.current = true

    async function verify() {
      if (!orderId) {
        setState({
          status: 'failed',
          message: 'Missing payment reference. Please try booking again.',
        })
        return
      }

      try {
        const res = await fetch(`/api/order-status?order_id=${encodeURIComponent(orderId)}`)
        const data = await res.json().catch(() => ({}))

        if (!res.ok) {
          setState({
            status: 'failed',
            message: data.error || 'Could not verify payment. Contact us with your order ID.',
          })
          return
        }

        if (data.paid) {
          const draft = loadBookingDraft(orderId)
          if (draft && !wasBookingNotified(orderId)) {
            try {
              await sendBookingEmail(draft, orderId)
              markBookingNotified(orderId)
            } catch (err) {
              console.error(err)
            }
            clearBookingDraft(orderId)
          }

          setState({
            status: 'success',
            message:
              'Payment of ₹199 received. Your consultation is booked — our desk will reach out within one business day.',
          })
          return
        }

        const pending = ['ACTIVE', 'PENDING'].includes(data.orderStatus)
        setState({
          status: pending ? 'pending' : 'failed',
          message: pending
            ? 'Payment is still processing. Refresh this page in a moment, or contact us with your order ID.'
            : 'Payment was not completed. You can try booking again.',
        })
      } catch (err) {
        console.error(err)
        setState({
          status: 'failed',
          message: 'Something went wrong while verifying payment. Please try again.',
        })
      }
    }

    verify()
  }, [orderId])

  const icon =
    state.status === 'success' ? (
      <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-4" />
    ) : state.status === 'loading' || state.status === 'pending' ? (
      <Loader2 className="w-14 h-14 text-gold mx-auto mb-4 animate-spin" />
    ) : (
      <XCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
    )

  const title =
    state.status === 'success'
      ? 'Consultation booked'
      : state.status === 'loading'
        ? 'Confirming payment'
        : state.status === 'pending'
          ? 'Payment pending'
          : 'Payment unsuccessful'

  return (
    <section className="bg-hero-mesh pt-36 md:pt-40 pb-20 min-h-[70vh]">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 md:p-10 text-center"
        >
          {icon}
          <h1 className="font-display text-3xl text-navy mb-3">{title}</h1>
          <p className="text-navy/70 leading-relaxed mb-2">{state.message}</p>
          {orderId && (
            <p className="text-xs text-navy/45 mb-8 break-all">Order ID: {orderId}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {state.status === 'success' ? (
              <Button to="/">Back to home</Button>
            ) : (
              <>
                <Button to="/consultation">Try again</Button>
                <Button to="/contact" variant="outline">
                  Contact us
                </Button>
              </>
            )}
          </div>
          {state.status === 'pending' && (
            <button
              type="button"
              className="mt-6 text-sm text-gold-dark font-medium hover:underline"
              onClick={() => window.location.reload()}
            >
              Refresh status
            </button>
          )}
          {state.status === 'failed' && (
            <p className="mt-6 text-sm text-navy/55">
              Prefer WhatsApp?{' '}
              <Link to="/contact" className="text-gold-dark font-medium hover:underline">
                Reach the desk
              </Link>
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
