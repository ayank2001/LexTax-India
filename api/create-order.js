const CONSULTATION_FEE = 99
const API_VERSION = '2025-01-01'

function getSiteUrl(req) {
  const forwardedHost = req.headers['x-forwarded-host'] || req.headers.host || ''
  const host = String(forwardedHost).split(',')[0].trim()
  const isLocal = !host || host.startsWith('localhost') || host.startsWith('127.0.0.1')

  // On the deployed site, always return the customer to the domain they paid from.
  if (!isLocal) {
    const proto = String(req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim()
    return `${proto}://${host}`
  }

  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '')
  return 'http://localhost:5173'
}

function cashfreeEnvironment() {
  const explicit = (process.env.CASHFREE_ENV || process.env.CASHFREE_MODE || '').toLowerCase()
  if (explicit === 'production' || explicit === 'sandbox') return explicit
  const secret = process.env.CASHFREE_SECRET_KEY || ''
  if (secret.includes('_prod_')) return 'production'
  return 'sandbox'
}

function cashfreeBaseUrl() {
  return cashfreeEnvironment() === 'production'
    ? 'https://api.cashfree.com'
    : 'https://sandbox.cashfree.com'
}

function sanitizePhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '')
  if (digits.length >= 10) return digits.slice(-10)
  return digits
}

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' })
  }

  const appId = process.env.CASHFREE_APP_ID
  const secretKey = process.env.CASHFREE_SECRET_KEY

  if (!appId || !secretKey) {
    return json(res, 500, {
      error: 'Cashfree is not configured. Set CASHFREE_APP_ID and CASHFREE_SECRET_KEY.',
    })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return json(res, 400, { error: 'Invalid JSON body' })
    }
  }

  const { name, phone, email, service, message, source } = body || {}

  if (!name?.trim() || !phone?.trim()) {
    return json(res, 400, { error: 'Name and phone are required' })
  }

  const customerPhone = sanitizePhone(phone)
  if (customerPhone.length < 10) {
    return json(res, 400, { error: 'Enter a valid 10-digit phone number' })
  }

  const orderId = `consult_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const siteUrl = getSiteUrl(req)

  const payload = {
    order_id: orderId,
    order_amount: CONSULTATION_FEE,
    order_currency: 'INR',
    order_note: 'Consultation booking fee',
    customer_details: {
      customer_id: `cust_${customerPhone}`,
      customer_name: String(name).trim().slice(0, 100),
      customer_email: email?.trim() || 'noreply@lextaxindia.com',
      customer_phone: customerPhone,
    },
    order_meta: {
      return_url: `${siteUrl}/payment/status?order_id={order_id}`,
    },
    order_tags: {
      source: String(source || 'consultation').slice(0, 255),
      service: String(service || 'General Inquiry').slice(0, 255),
      message: String(message || '').slice(0, 255),
    },
  }

  try {
    const cfRes = await fetch(`${cashfreeBaseUrl()}/pg/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-version': API_VERSION,
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
      body: JSON.stringify(payload),
    })

    const data = await cfRes.json().catch(() => ({}))

    if (!cfRes.ok) {
      console.error('Cashfree create order failed', data)
      return json(res, cfRes.status, {
        error: data?.message || 'Unable to create payment order',
        details: data,
      })
    }

    return json(res, 200, {
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
      amount: CONSULTATION_FEE,
      currency: 'INR',
      environment: cashfreeEnvironment(),
    })
  } catch (err) {
    console.error(err)
    return json(res, 500, { error: 'Payment gateway error. Please try again.' })
  }
}
