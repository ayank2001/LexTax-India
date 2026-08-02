# LEXTAX INDIA

Premium React + Vite + Tailwind showcase website for **LEXTAX INDIA** — a digital legal, tax & compliance platform.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide icons
- EmailJS (forms — no backend/database)

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

## EmailJS setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and template with variables:
   - `from_name`, `phone`, `email`, `service`, `message`, `source`
3. Copy keys into `.env`:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_WHATSAPP_NUMBER=919805468933
VITE_PHONE_NUMBER=+91 9805468933
VITE_CONTACT_EMAIL=lextaxindia@gmail.com
```

Until EmailJS is configured, forms still show a success state (demo fallback) so you can preview the UX.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Pages

Home, About, Services (+ 12 service landing pages), Pricing, Blog, Contact, Free Consultation, Privacy, Terms, Refund Policy.
