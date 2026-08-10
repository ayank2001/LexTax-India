import {
  Scale,
  Gavel,
  HeartHandshake,
  ShieldAlert,
  UserRound,
  FileSearch,
  Car,
  Receipt,
  Calculator,
  FileSpreadsheet,
  BadgeIndianRupee,
  FileCheck2,
  ScrollText,
  Truck,
  FileText,
  RefreshCcw,
  Handshake,
  Stamp,
  BadgeCheck,
  Copyright,
  Palette,
} from 'lucide-react'

export const siteConfig = {
  name: 'LEXTAX INDIA',
  tagline: 'Legal • Tax • Compliance Solutions',
  domain: 'www.lextax-india.com',
  phone: import.meta.env.VITE_PHONE_NUMBER || '+91 9805468933',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919805468933',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'lextaxindia@gmail.com',
  address: 'Shop No. 1, Batapul Chowk, Paonta Sahib – 173025, Himachal Pradesh, India',
  hours: 'Mon – Sat, 10:00 AM – 6:00 PM IST',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Paonta+Sahib,+Himachal+Pradesh,+India&hl=en&z=14&output=embed',
  mapLink: 'https://maps.app.goo.gl/Z12RzyFUNoNhsDer7',
}

const defaultProcess = [
  'Share your requirement',
  'Document collection & review',
  'Drafting / filing / consultation',
  'Delivery & next-step guidance',
]

const defaultDocs = [
  'Identity proof (PAN / Aadhaar)',
  'Relevant supporting documents',
  'Business proof (if applicable)',
]

function makeService({
  slug,
  title,
  short,
  description,
  icon,
  category,
  features,
  benefits,
  process = defaultProcess,
  documents = defaultDocs,
  packages,
  faqs,
}) {
  return {
    slug,
    title,
    short,
    description,
    icon,
    category,
    features:
      features ||
      [title, 'Expert professional support', 'Clear timelines', 'Document assistance', 'WhatsApp updates'],
    benefits:
      benefits ||
      [
        'Guided by experienced professionals',
        'Transparent pricing before work begins',
        'Digital-friendly document workflow',
        'Clear status communication',
      ],
    process,
    documents,
    packages: packages || [
      { name: 'Standard', price: 'Custom', items: ['Requirement assessment', 'Execution support', 'Status updates'] },
      {
        name: 'Priority',
        price: 'Custom',
        items: ['Faster turnaround', 'Dedicated manager', 'Revision support'],
        popular: true,
      },
    ],
    faqs: faqs || [
      {
        q: `How do I get started with ${title}?`,
        a: 'Share a short brief via consultation or WhatsApp. We confirm scope, documents and fees before work begins.',
      },
      {
        q: 'Can this be handled online?',
        a: 'Yes. Most mandates are completed digitally with document upload and remote consultation.',
      },
    ],
  }
}

export const serviceCategories = [
  {
    id: 'legal',
    label: 'Legal Services',
    shortLabel: 'Legal',
    description: 'Notices, consultations, referrals and legal documentation support.',
    icon: Scale,
  },
  {
    id: 'tax',
    label: 'Tax Services',
    shortLabel: 'Tax',
    description: 'GST, ITR, audits, refunds and accounting support.',
    icon: Receipt,
  },
  {
    id: 'documentation',
    label: 'Business Documentation',
    shortLabel: 'Documentation',
    description: 'Policies, agreements and affidavit drafting for your business.',
    icon: FileText,
  },
  {
    id: 'brand',
    label: 'Business, Brand & Design',
    shortLabel: 'Brand & Design',
    description: 'Trademark, copyright and brand identity design.',
    icon: BadgeCheck,
  },
]

export const services = [
  // A. Legal Services
  makeService({
    slug: 'legal-notice-drafting',
    title: 'Legal Notice Drafting & Case Referral',
    short: 'Draft notices & connect with counsel',
    description:
      'Professionally drafted legal notices with clear grounds, relief sought and timelines — plus referral to suitable advocates when litigation support is needed.',
    icon: Gavel,
    category: 'legal',
    features: ['Legal notice drafting', 'Review of facts & documents', 'Dispatch guidance', 'Advocate / case referral'],
  }),
  makeService({
    slug: 'consumer-complaint-assistance',
    title: 'Consumer Complaint Assistance',
    short: 'Consumer forum & complaint support',
    description:
      'Assistance with consumer complaints for deficient services, unfair trade practices and related disputes — from drafting to filing guidance.',
    icon: Scale,
    category: 'legal',
    features: ['Complaint drafting', 'Forum guidance', 'Document checklist', 'Follow-up support'],
  }),
  makeService({
    slug: 'matrimonial-divorce-consultation',
    title: 'Matrimonial & Divorce Consultation',
    short: 'Family & matrimonial advisory',
    description:
      'Confidential consultation on matrimonial concerns, divorce pathways, maintenance and related family law questions, with referral support where required.',
    icon: HeartHandshake,
    category: 'legal',
    features: ['Confidential consultation', 'Process overview', 'Document readiness', 'Advocate referral'],
  }),
  makeService({
    slug: 'cyber-crime-bank-freeze',
    title: 'Cyber Crime & Bank Freeze Assistance',
    short: 'Cyber complaints & account freezes',
    description:
      'Guidance for cyber fraud complaints, bank account freezes and related representations — helping you act quickly with the right paperwork.',
    icon: ShieldAlert,
    category: 'legal',
    features: ['Complaint guidance', 'Bank freeze support', 'Document prep', 'Escalation pathway'],
  }),
  makeService({
    slug: 'advocate-consultation-referral',
    title: 'Advocate Consultation & Case Referral',
    short: 'Connect with the right advocate',
    description:
      'Structured intake and referral to advocates matched to your matter type, jurisdiction and urgency — so you are not searching blindly.',
    icon: UserRound,
    category: 'legal',
    features: ['Matter intake', 'Advocate shortlisting', 'Consultation setup', 'Case referral'],
  }),
  makeService({
    slug: 'legal-documentation-review',
    title: 'Legal Documentation Review',
    short: 'Contract & document review',
    description:
      'Review of agreements, notices and business documents to flag risks, missing clauses and practical negotiation points before you sign.',
    icon: FileSearch,
    category: 'legal',
    features: ['Contract review', 'Risk notes', 'Clause suggestions', 'Revision discussion'],
  }),
  makeService({
    slug: 'international-driving-permit',
    title: 'International Driving Permit',
    short: 'IDP application support',
    description:
      'Assistance with International Driving Permit applications — document checklist, form support and process guidance for travellers.',
    icon: Car,
    category: 'legal',
    features: ['Eligibility check', 'Document checklist', 'Application support', 'Process guidance'],
  }),

  // B. Tax Services
  makeService({
    slug: 'gst-registration',
    title: 'GST Registration',
    short: 'Get your GSTIN quickly',
    description:
      'End-to-end GST registration support — correct category selection, document filing and ARN tracking until your GSTIN is issued.',
    icon: Receipt,
    category: 'tax',
    features: ['GSTIN application', 'Document prep', 'ARN tracking', 'Certificate delivery'],
    packages: [
      { name: 'Registration', price: '₹999', items: ['Application filing', 'ARN tracking', 'GSTIN delivery'] },
      { name: 'Registration Plus', price: '₹1,999', items: ['Everything in Registration', 'Priority support', 'Basic GST briefing'], popular: true },
    ],
  }),
  makeService({
    slug: 'tally-sale-support',
    title: 'Tally Sale & Support',
    short: 'Tally licensing & assistance',
    description:
      'Tally product sale and ongoing support for setup, usage basics and accounting workflow assistance for small and growing businesses.',
    icon: Calculator,
    category: 'tax',
    features: ['Tally sale', 'Setup assistance', 'Usage support', 'Business accounting help'],
  }),
  makeService({
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    short: 'GSTR filing on time',
    description:
      'Monthly / quarterly GST return filing with reconciliation support so your compliance calendar stays on track.',
    icon: FileSpreadsheet,
    category: 'tax',
    features: ['GSTR-1 & GSTR-3B', 'Reconciliation support', 'Deadline reminders', 'Filing acknowledgements'],
  }),
  makeService({
    slug: 'gst-refund',
    title: 'GST Refund',
    short: 'Claim eligible GST refunds',
    description:
      'Assistance with GST refund applications — documenting eligibility, preparing filings and tracking refund status.',
    icon: BadgeIndianRupee,
    category: 'tax',
    features: ['Eligibility review', 'Refund application', 'Document support', 'Status tracking'],
  }),
  makeService({
    slug: 'itr-filing',
    title: 'ITR Filing',
    short: 'Personal & business returns',
    description:
      'Accurate income tax return preparation and e-filing for salaried individuals, professionals and businesses.',
    icon: FileCheck2,
    category: 'tax',
    features: ['ITR preparation', 'E-filing', 'Form 16 / 26AS mapping', 'Acknowledgement delivery'],
    packages: [
      { name: 'Salaried', price: '₹999', items: ['ITR-1 / ITR-2', 'E-filing', 'Ack download'] },
      { name: 'Business', price: '₹2,999', items: ['Business ITR', 'Computation', 'E-filing'], popular: true },
    ],
  }),
  makeService({
    slug: 'gst-audit',
    title: 'GST Audit',
    short: 'Audit readiness & support',
    description:
      'GST audit and review support to identify gaps, reconcile returns and prepare you for departmental scrutiny.',
    icon: ScrollText,
    category: 'tax',
    features: ['Books & return review', 'Gap identification', 'Reconciliation', 'Audit support'],
  }),
  makeService({
    slug: 'e-way-bill',
    title: 'E-Way Bill',
    short: 'Generate & manage e-way bills',
    description:
      'Support for e-way bill generation and process setup so goods movement stays compliant without last-minute stress.',
    icon: Truck,
    category: 'tax',
    features: ['E-way bill generation', 'Process briefing', 'Error troubleshooting', 'Ongoing guidance'],
  }),

  // C. Business Documentation
  makeService({
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    short: 'Website & app T&Cs',
    description:
      'Custom Terms & Conditions drafted for websites, apps and service businesses — clear, practical and aligned to your operations.',
    icon: FileText,
    category: 'documentation',
    features: ['Custom drafting', 'Business-aligned clauses', '1–2 revisions', 'Soft copy delivery'],
  }),
  makeService({
    slug: 'privacy-policy-drafting',
    title: 'Privacy Policy',
    short: 'Privacy policy for your business',
    description:
      'Privacy Policy drafting for websites and digital products, covering data collection, usage and user rights in clear language.',
    icon: ShieldAlert,
    category: 'documentation',
    features: ['Policy drafting', 'Data practice mapping', 'Revisions', 'Publish-ready copy'],
  }),
  makeService({
    slug: 'refund-policy-drafting',
    title: 'Refund Policy',
    short: 'Clear refund & cancellation terms',
    description:
      'Refund and cancellation policy drafting that sets expectations for customers and reduces payment disputes.',
    icon: RefreshCcw,
    category: 'documentation',
    features: ['Refund terms', 'Cancellation windows', 'Exception clauses', 'Soft copy delivery'],
  }),
  makeService({
    slug: 'service-agreement',
    title: 'Service Agreement',
    short: 'Client & vendor agreements',
    description:
      'Service agreements tailored to your commercial terms — scope, payment, timelines, liability and termination.',
    icon: Handshake,
    category: 'documentation',
    features: ['Agreement drafting', 'Commercial terms', 'Risk clauses', 'Revision support'],
  }),
  makeService({
    slug: 'affidavit-drafting',
    title: 'Affidavit Drafting',
    short: 'Affidavits for official use',
    description:
      'Drafting of affidavits for common personal and business requirements, prepared for notarisation or filing as applicable.',
    icon: Stamp,
    category: 'documentation',
    features: ['Affidavit drafting', 'Format guidance', 'Content review', 'Soft copy delivery'],
  }),

  // D. Business, Brand and Design
  makeService({
    slug: 'trademark',
    title: 'Trademark',
    short: 'Protect your brand name & logo',
    description:
      'Trademark search, class selection, filing and objection support to protect your brand identity.',
    icon: BadgeCheck,
    category: 'brand',
    features: ['Trademark search', 'Application filing', 'Objection support', 'Status updates'],
    packages: [
      { name: 'Search', price: '₹999', items: ['Availability search', 'Class guidance'] },
      { name: 'Registration', price: '₹6,999', items: ['Filing in one class', 'Tracking'], popular: true },
    ],
  }),
  makeService({
    slug: 'copyright',
    title: 'Copyright',
    short: 'Protect original creative works',
    description:
      'Copyright registration support for creative and business works — documentation, filing and follow-up guidance.',
    icon: Copyright,
    category: 'brand',
    features: ['Work assessment', 'Application support', 'Filing guidance', 'Status follow-up'],
  }),
  makeService({
    slug: 'logo-design',
    title: 'Logo Design',
    short: 'Brand identity that stands out',
    description:
      'Professional logo design for startups and growing brands — concepts, revisions and deliverables ready for digital and print use.',
    icon: Palette,
    category: 'brand',
    features: ['Concept designs', 'Revisions', 'Final files', 'Brand colour guidance'],
  }),
]

export const servicesByCategory = (categoryId) =>
  services.filter((s) => s.category === categoryId)

export const navLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const whyChoose = [
  { title: 'Fast Turnaround', desc: 'Streamlined workflows so filings move without unnecessary delays.' },
  { title: 'Transparent Pricing', desc: 'Clear packages and upfront quotes — no hidden fee surprises.' },
  { title: 'Expert Professionals', desc: 'Legal, tax and documentation experts backing every mandate.' },
  { title: 'Dedicated Relationship Manager', desc: 'One point of contact who knows your business and deadlines.' },
  { title: 'Secure Documentation', desc: 'Careful handling of KYC, agreements and certificates.' },
  { title: 'Nationwide Services', desc: 'Pan-India support for startups, MSMEs and professionals.' },
]

export const processSteps = [
  { step: '01', title: 'Consultation', desc: 'Share your requirement — we map the right service path.' },
  { step: '02', title: 'Document Collection', desc: 'Upload KYC and business papers through a guided checklist.' },
  { step: '03', title: 'Verification', desc: 'Experts review completeness and flag gaps early.' },
  { step: '04', title: 'Processing', desc: 'Applications prepared, reviewed and filed with care.' },
  { step: '05', title: 'Government Filing', desc: 'Portal submissions with live status updates.' },
  { step: '06', title: 'Certificate Delivery', desc: 'Receive certificates, filings and next-step guidance.' },
]

export const industries = [
  'Startups',
  'Restaurants',
  'E-Commerce',
  'Manufacturing',
  'Healthcare',
  'Education',
  'Real Estate',
  'Professionals',
  'IT Companies',
  'Import Export',
  'Finance',
  'Hospitality',
  'Construction',
  'Retail',
]

export const stats = [
  { value: 15000, suffix: '+', label: 'Businesses Served' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 24, suffix: ' Hrs', label: 'Average Response' },
  { value: 99, suffix: '+', label: 'Professional Experts' },
]

export const pricingTiers = [
  {
    name: 'Trademark',
    price: '₹299',
    note: '',
    desc: 'Brand search and expert consultation to get you started.',
    features: ['Search', 'Consultation'],
  },
  {
    name: 'Legal Notice',
    price: '₹1,499',
    note: '',
    desc: 'End-to-end legal notice support from draft to dispatch.',
    features: ['Consultation', 'Drafting', 'Printing', 'Dispatch and tracking'],
  },
  {
    name: 'Debit Freeze and Lien Removal',
    price: '₹199',
    note: '',
    desc: 'Guidance for debit freeze and lien removal concerns.',
    features: ['Debit/ Blanket Freeze and Lien Removal', 'Consultation'],
  },
]

export const testimonials = [
  {
    name: 'Ananya Mehra',
    role: 'Founder, Bloom Retail',
    text: 'LEXTAX INDIA handled our GST and trademark work with clear communication and zero jargon — exactly what a first-time founder needs.',
  },
  {
    name: 'Rohit Sinha',
    role: 'Director, Nova Manufacturing',
    text: 'Their tax desk runs like clockwork. We finally stopped chasing deadlines and started focusing on production.',
  },
  {
    name: 'Priya Nair',
    role: 'Co-founder, HealthStack',
    text: 'Legal notice drafting and documentation review were handled professionally. The team felt more like an in-house partner than a vendor.',
  },
  {
    name: 'Kabir Malhotra',
    role: 'CEO, Orbit Exports',
    text: 'ITR, policies and brand filing support in one place. Pricing was transparent and every update landed on WhatsApp.',
  },
]

export const faqs = [
  {
    q: 'What services does LEXTAX INDIA offer?',
    a: 'We cover Legal Services, Tax Services, Business Documentation, and Business, Brand & Design — from notices and GST to policies, trademarks and logo design.',
  },
  {
    q: 'What documents are required?',
    a: 'Typically PAN, Aadhaar and matter-specific papers. Each service page lists a precise checklist.',
  },
  {
    q: 'How much does GST registration cost?',
    a: 'Assisted GST registration starts from ₹999. Any statutory charges are disclosed before we proceed.',
  },
  {
    q: 'Can services be completed online?',
    a: 'Yes. Consultations, document collection, filings and deliveries are designed for a fully digital journey across India.',
  },
  {
    q: 'Do you provide legal consultation?',
    a: 'Yes. We offer professional consultation and advocate referral support. Book a free intro call to begin.',
  },
]

export const blogPosts = [
  {
    slug: 'gst-filing-guide-for-msmes',
    title: 'GST Filing Guide for MSMEs',
    excerpt: 'Understand GSTR-1, GSTR-3B, ITC hygiene and common mistakes that trigger notices.',
    category: 'GST',
    date: 'Jul 4, 2026',
  },
  {
    slug: 'trademark-registration-process',
    title: 'Trademark Registration Process Explained',
    excerpt: 'From search to certificate — timelines, classes and how objections are typically handled.',
    category: 'IP',
    date: 'Jun 22, 2026',
  },
  {
    slug: 'income-tax-tips-for-founders',
    title: 'Income Tax Tips for Startup Founders',
    excerpt: 'Practical planning ideas for salary, deductions and advance tax discipline.',
    category: 'Income Tax',
    date: 'Jun 10, 2026',
  },
  {
    slug: 'why-your-business-needs-policies',
    title: 'Why Your Business Needs Clear Policies',
    excerpt: 'T&Cs, privacy and refund policies that protect both your brand and your customers.',
    category: 'Documentation',
    date: 'May 28, 2026',
  },
  {
    slug: 'legal-notice-basics',
    title: 'Legal Notice Basics in India',
    excerpt: 'When to send a notice, what it should include, and what happens next.',
    category: 'Legal',
    date: 'May 12, 2026',
  },
]

export const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'Legal Services', href: '/services#legal' },
    { label: 'Tax Services', href: '/services#tax' },
    { label: 'Business Documentation', href: '/services#documentation' },
    { label: 'Brand & Design', href: '/services#brand' },
    { label: 'GST Registration', href: '/services/gst-registration' },
    { label: 'Trademark', href: '/services/trademark' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund & Cancellation', href: '/refund-policy' },
  ],
}
