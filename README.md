# LEXTAX INDIA

Premium React + Vite + Tailwind showcase website for **LEXTAX INDIA** — a digital legal, tax & compliance platform.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide icons
- EmailJS (enquiry forms)
- Cashfree Payment Gateway (₹99 consultation booking)
- Vercel serverless API (`/api`)

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`. Consultation payments work with `npm run dev` — Vite serves `/api/create-order` and `/api/order-status` locally.

Set Cashfree keys in `.env` (`CASHFREE_APP_ID`, `CASHFREE_SECRET_KEY`, `CASHFREE_ENV`, `SITE_URL=http://localhost:5173`).

Use sandbox keys + `CASHFREE_ENV=sandbox` for test payments. Production keys charge real money.

## EmailJS setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and template with variables:
   - `from_name`, `phone`, `email`, `service`, `message`, `source`
   - Optional payment fields: `payment_status`, `order_id`, `amount`
3. Copy keys into `.env`:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Until EmailJS is configured, enquiry forms still show a success state (demo fallback).

## Cashfree on the live site (consultation fee ₹99)

Local `.env` is not used by Vercel. After this code is deployed, add these in **Vercel → Project → Settings → Environment Variables** (Production), then redeploy:

```env
CASHFREE_APP_ID=your_app_id
CASHFREE_SECRET_KEY=your_secret_key
CASHFREE_ENV=production
```

`CASHFREE_ENV` must match the key: `cfsk_ma_prod_*` → `production`, test keys → `sandbox`. Production keys charge a real ₹99.

You do not need `SITE_URL` on Vercel. After payment, Cashfree sends the customer back to the same domain they booked on (`/payment/status`).

### Cashfree dashboard

1. Open [Cashfree Merchant](https://merchant.cashfree.com/) and switch to **Production** (not Test), because these are live keys.
2. Go to **Payment Gateway → API Keys** (or Developers → API Keys) and copy the **App ID** and **Secret Key** into the Vercel variables above. Generate a new secret if you do not have the current one saved.
3. Go to **Payment Gateway → Settings → Whitelisting** (sometimes under Developers → Whitelisting) and add:
   - `https://www.lextax-india.com`
   - `https://lextax-india.com`
   - your `*.vercel.app` domain if you also test the Vercel URL
4. Save. Domain approval can take a short time before checkout accepts the site.
5. After a test payment, confirm the ₹99 order under **Payments / Transactions**. Refund it from there if it was only a test.

### Booking flow

1. User opens **Book Consultation** → `/consultation`
2. Submits details → server creates a ₹99 Cashfree order
3. User pays on Cashfree checkout
4. Return URL `/payment/status?order_id=...` verifies `PAID` server-side
5. Only then is the booking treated as successful (EmailJS notification)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development (also serves `/api` for Cashfree) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Pages

Home, About, Services (+ service landing pages), Pricing, Blog, Contact, Consultation (paid), Payment status, Privacy, Terms, Refund Policy.
