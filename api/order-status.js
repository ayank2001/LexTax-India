const API_VERSION = '2025-01-01'

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

  if (req.method !== 'GET') {
    return json(res, 405, { error: 'Method not allowed' })
  }

  const appId = process.env.CASHFREE_APP_ID
  const secretKey = process.env.CASHFREE_SECRET_KEY

  if (!appId || !secretKey) {
    return json(res, 500, {
      error: 'Cashfree is not configured. Set CASHFREE_APP_ID and CASHFREE_SECRET_KEY.',
    })
  }

  const url = new URL(req.url, 'http://localhost')
  const orderId = url.searchParams.get('order_id')

  if (!orderId) {
    return json(res, 400, { error: 'order_id is required' })
  }

  try {
    const cfRes = await fetch(
      `${cashfreeBaseUrl()}/pg/orders/${encodeURIComponent(orderId)}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-version': API_VERSION,
          'x-client-id': appId,
          'x-client-secret': secretKey,
        },
      },
    )

    const data = await cfRes.json().catch(() => ({}))

    if (!cfRes.ok) {
      console.error('Cashfree order status failed', data)
      return json(res, cfRes.status, {
        error: data?.message || 'Unable to fetch order status',
        details: data,
      })
    }

    return json(res, 200, {
      orderId: data.order_id,
      orderStatus: data.order_status,
      orderAmount: data.order_amount,
      orderCurrency: data.order_currency,
      paid: data.order_status === 'PAID',
      customerDetails: data.customer_details || null,
      orderTags: data.order_tags || null,
    })
  } catch (err) {
    console.error(err)
    return json(res, 500, { error: 'Payment verification failed. Please try again.' })
  }
}
