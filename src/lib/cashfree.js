const SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js'
const BOOKING_KEY_PREFIX = 'lextax_consultation_'

export function saveBookingDraft(orderId, draft) {
  try {
    sessionStorage.setItem(
      `${BOOKING_KEY_PREFIX}${orderId}`,
      JSON.stringify({ ...draft, savedAt: Date.now() }),
    )
  } catch {
    // sessionStorage may be unavailable
  }
}

export function loadBookingDraft(orderId) {
  try {
    const raw = sessionStorage.getItem(`${BOOKING_KEY_PREFIX}${orderId}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearBookingDraft(orderId) {
  try {
    sessionStorage.removeItem(`${BOOKING_KEY_PREFIX}${orderId}`)
  } catch {
    // ignore
  }
}

function loadSdk() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Cashfree SDK requires a browser'))
  }

  if (window.Cashfree) {
    return Promise.resolve(window.Cashfree)
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SDK_URL}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Cashfree))
      existing.addEventListener('error', () =>
        reject(new Error('Failed to load Cashfree SDK')),
      )
      return
    }

    const script = document.createElement('script')
    script.src = SDK_URL
    script.async = true
    script.onload = () => resolve(window.Cashfree)
    script.onerror = () => reject(new Error('Failed to load Cashfree SDK'))
    document.body.appendChild(script)
  })
}

export async function openCashfreeCheckout({ paymentSessionId, environment = 'sandbox' }) {
  const Cashfree = await loadSdk()
  const mode = environment === 'production' ? 'production' : 'sandbox'
  const cashfree = Cashfree({ mode })

  const result = await cashfree.checkout({
    paymentSessionId,
    redirectTarget: '_self',
  })

  if (result?.error) {
    throw new Error(result.error.message || 'Payment was cancelled')
  }

  return result
}

export function markBookingNotified(orderId) {
  try {
    sessionStorage.setItem(`${BOOKING_KEY_PREFIX}${orderId}_notified`, '1')
  } catch {
    // ignore
  }
}

export function wasBookingNotified(orderId) {
  try {
    return sessionStorage.getItem(`${BOOKING_KEY_PREFIX}${orderId}_notified`) === '1'
  } catch {
    return false
  }
}
