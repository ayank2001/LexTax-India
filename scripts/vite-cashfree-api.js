import { loadEnv } from 'vite'

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8')
      if (!raw) {
        resolve(undefined)
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch {
        resolve(raw)
      }
    })
    req.on('error', reject)
  })
}

function createRes(res) {
  const apiRes = {
    statusCode: 200,
    setHeader(key, value) {
      res.setHeader(key, value)
    },
    end(body) {
      res.statusCode = apiRes.statusCode
      res.end(body)
    },
  }
  return apiRes
}

export function cashfreeApiPlugin() {
  return {
    name: 'cashfree-api',
    configureServer(server) {
      const env = loadEnv(server.config.mode, server.config.envDir || process.cwd(), '')
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value
      }

      server.middlewares.use(async (req, res, next) => {
        const url = req.url || ''
        const path = url.split('?')[0]

        try {
          if (path === '/api/create-order' && req.method === 'POST') {
            const { default: handler } = await import('../api/create-order.js')
            req.body = await readBody(req)
            await handler(req, createRes(res))
            return
          }

          if (path === '/api/order-status' && req.method === 'GET') {
            const { default: handler } = await import('../api/order-status.js')
            await handler(req, createRes(res))
            return
          }
        } catch (err) {
          console.error('[cashfree-api]', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Local API error' }))
          return
        }

        next()
      })
    },
  }
}
