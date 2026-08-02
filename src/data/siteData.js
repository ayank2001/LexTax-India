import {
  Building2,
  Receipt,
  Landmark,
  BadgeCheck,
  FileText,
  Scale,
  Rocket,
  UtensilsCrossed,
  Award,
  Globe2,
  Factory,
  Store,
} from 'lucide-react'

export const siteConfig = {
  name: 'LEXTAX INDIA',
  tagline: 'Legal • Tax • Compliance Solutions',
  domain: 'www.lextax-india.com',
  phone: import.meta.env.VITE_PHONE_NUMBER || '+91 9805468933',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919805468933',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'lextaxindia@gmail.com',
  address: 'Paonta Sahib, Himachal Pradesh, India',
  hours: 'Mon – Sat, 10:00 AM – 6:00 PM IST',
  // Use /maps?q=...&output=embed — short links (maps.app.goo.gl) cannot be iframed
  mapEmbedUrl:
    'https://www.google.com/maps?q=Paonta+Sahib,+Himachal+Pradesh,+India&hl=en&z=14&output=embed',
  mapLink: 'https://maps.app.goo.gl/Z12RzyFUNoNhsDer7',
}

export const navLinks = [
  {
    label: 'Services',
    href: '/services',
    mega: true,
  },
  { label: 'Solutions', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    slug: 'company-registration',
    title: 'Company Registration',
    short: 'Start your business legally.',
    description:
      'Incorporate Private Limited, LLP, OPC, Partnership or Proprietorship entities with end-to-end MCA filings, DSC, DIN and post-incorporation compliance support.',
    icon: Building2,
    color: 'from-gold/20 to-gold/5',
    features: [
      'Private Limited Company',
      'Limited Liability Partnership (LLP)',
      'One Person Company (OPC)',
      'Partnership Firm',
      'Sole Proprietorship',
    ],
    benefits: [
      'Expert name reservation guidance',
      'Digital signature & DIN assistance',
      'SPICe+ filing and incorporation certificate',
      'PAN, TAN & bank account readiness',
      'Post-incorporation compliance checklist',
    ],
    process: [
      'Share business details & preferred name',
      'Document collection & verification',
      'MCA filing & government processing',
      'Certificate delivery & kickstart kit',
    ],
    documents: [
      'PAN & Aadhaar of directors/partners',
      'Passport-size photographs',
      'Address proof of registered office',
      'Utility bill (not older than 2 months)',
      'NOC from property owner',
    ],
    packages: [
      { name: 'Essential', price: '₹2,999', items: ['Name check', 'Basic filing', 'Incorporation certificate'] },
      { name: 'Growth', price: '₹6,999', items: ['Everything in Essential', 'PAN & TAN', 'Bank intro letter', 'Compliance calendar'], popular: true },
      { name: 'Premium', price: '₹12,999', items: ['Everything in Growth', 'GST registration', 'Dedicated manager', 'Priority filing'] },
    ],
    faqs: [
      { q: 'How long does company registration take?', a: 'Typically 7–15 working days once documents are complete, subject to MCA processing timelines.' },
      { q: 'Can I register fully online?', a: 'Yes. LEXTAX INDIA handles digital filings end-to-end. You only need to share scanned documents and e-sign where required.' },
    ],
  },
  {
    slug: 'gst-services',
    title: 'GST Services',
    short: 'Registration & Returns',
    description:
      'From GST registration to monthly returns, notice handling and cancellations — stay compliant with accurate filings and proactive advisory.',
    icon: Receipt,
    features: ['GST Registration', 'GST Return Filing', 'GST Notice Handling', 'GST Cancellation', 'GST Consultation'],
    benefits: [
      'Hassle-free GSTIN registration',
      'Timely GSTR-1 & GSTR-3B filings',
      'Notice response & reconciliation',
      'Input tax credit optimisation tips',
      'Dedicated GST desk for MSMEs',
    ],
    process: ['Requirement assessment', 'Portal registration / return prep', 'Filing & acknowledgement', 'Ongoing compliance support'],
    documents: ['PAN & Aadhaar', 'Business registration proof', 'Bank statement / cancelled cheque', 'Address proof of place of business', 'Photograph of premises'],
    packages: [
      { name: 'Registration', price: '₹999', items: ['GSTIN application', 'ARN tracking', 'Certificate delivery'] },
      { name: 'Monthly Filing', price: '₹1,499/mo', items: ['GSTR-1 & 3B', 'Reconciliation support', 'Reminder alerts'], popular: true },
      { name: 'Notice Desk', price: 'Custom', items: ['Notice analysis', 'Reply drafting', 'Follow-up with department'] },
    ],
    faqs: [
      { q: 'How much does GST registration cost?', a: 'Our GST registration packages start from ₹999. Government fees, if any, are communicated transparently upfront.' },
      { q: 'Do you handle GST notices?', a: 'Yes. Our tax professionals analyse notices, prepare replies and guide you through the resolution process.' },
    ],
  },
  {
    slug: 'income-tax',
    title: 'Income Tax',
    short: 'Personal & Business Taxation',
    description:
      'ITR filing, tax planning, audits and notice management for individuals, freelancers and businesses — with clarity and accuracy.',
    icon: Landmark,
    features: ['ITR Filing', 'Tax Planning', 'Tax Audit', 'Business Tax', 'Income Tax Notices'],
    benefits: [
      'Accurate ITR preparation & e-filing',
      'Year-round tax planning advisory',
      'Audit support under Income Tax Act',
      'Business & professional tax structuring',
      'Notice & scrutiny assistance',
    ],
    process: ['Share income & deduction details', 'Computation & review', 'E-filing & acknowledgement', 'Post-filing support'],
    documents: ['Form 16 / Form 26AS', 'Bank statements', 'Investment proofs', 'Business books (if applicable)', 'Previous year ITR'],
    packages: [
      { name: 'Salaried ITR', price: '₹999', items: ['ITR-1 / ITR-2', 'Form 16 mapping', 'E-filing'] },
      { name: 'Business ITR', price: '₹2,999', items: ['ITR-3 / ITR-4', 'Books review', 'Tax computation'], popular: true },
      { name: 'Tax Planning', price: 'Custom', items: ['Annual plan', 'Quarterly check-ins', 'Notice desk access'] },
    ],
    faqs: [
      { q: 'When should I file my ITR?', a: 'We recommend preparing well before the statutory due date so you have time for corrections and tax payment if needed.' },
      { q: 'Can you help with income tax notices?', a: 'Absolutely. Share the notice and our team will advise on the response strategy and draft replies where required.' },
    ],
  },
  {
    slug: 'trademark',
    title: 'Trademark',
    short: 'Protect your Brand',
    description:
      'Secure your brand identity with trademark search, registration, objection handling, renewals and ongoing brand protection.',
    icon: BadgeCheck,
    features: ['Trademark Search', 'Trademark Registration', 'Objection Handling', 'Renewal', 'Brand Protection'],
    benefits: [
      'Comprehensive trademark availability search',
      'Class selection & application filing',
      'Objection & opposition support',
      'Renewal reminders & filings',
      'Portfolio monitoring options',
    ],
    process: ['Brand & class consultation', 'Search & clearance report', 'Application filing', 'Examination & registration'],
    documents: ['Brand name / logo soft copy', 'Applicant identity proof', 'Business proof (if applicable)', 'Power of Attorney (as required)', 'Priority documents (if any)'],
    packages: [
      { name: 'Search', price: '₹999', items: ['Availability search', 'Class recommendation', 'Risk summary'] },
      { name: 'Registration', price: '₹6,999', items: ['Filing in one class', 'Application tracking', 'Status updates'], popular: true },
      { name: 'Protection', price: 'Custom', items: ['Multi-class filing', 'Objection desk', 'Monitoring'] },
    ],
    faqs: [
      { q: 'How long does trademark registration take?', a: 'Registration can take 8–18 months depending on examination, objections and publication timelines.' },
      { q: 'What if my trademark gets an objection?', a: 'Our team prepares and files a well-reasoned reply with supporting evidence to strengthen your application.' },
    ],
  },
  {
    slug: 'legal-documentation',
    title: 'Legal Documentation',
    short: 'Contracts & Agreements',
    description:
      'Professionally drafted agreements — partnership deeds, employment contracts, NDAs, vendor agreements, legal notices and more.',
    icon: FileText,
    features: ['Partnership Deed', 'Employment Agreement', 'NDA', 'Vendor Agreement', 'Legal Notice', 'Rental Agreement'],
    benefits: [
      'Clear, enforceable drafting',
      'Business-friendly language with legal precision',
      'Custom clauses for your industry',
      'Review of existing contracts',
      'Fast turnaround for urgent matters',
    ],
    process: ['Share parties & key terms', 'Draft preparation', 'Review & revisions', 'Final deliverable'],
    documents: ['Party details', 'Key commercial terms', 'Existing drafts (if any)', 'Supporting annexures'],
    packages: [
      { name: 'Standard Draft', price: '₹1,999', items: ['One agreement', '1 revision', 'Soft copy'] },
      { name: 'Business Pack', price: '₹7,999', items: ['Up to 4 agreements', '2 revisions each', 'Priority support'], popular: true },
      { name: 'Retainer', price: 'Custom', items: ['Monthly drafting desk', 'Unlimited light edits', 'Dedicated counsel'] },
    ],
    faqs: [
      { q: 'Can agreements be customised?', a: 'Yes. Every draft is tailored to your commercial terms, jurisdiction and risk preferences.' },
      { q: 'Do you send legal notices?', a: 'We draft and guide dispatch of legal notices. Representation options can be discussed based on the matter.' },
    ],
  },
  {
    slug: 'roc-compliance',
    title: 'ROC Compliance',
    short: 'Annual Filing & MCA',
    description:
      'Stay MCA-ready with ROC filings, annual returns, DIN KYC, director compliance and professional tax support.',
    icon: Scale,
    features: ['ROC Filing', 'Annual Filing', 'DIN KYC', 'MCA Compliance', 'MSME Registration', 'Professional Tax'],
    benefits: [
      'AOC-4, MGT-7 and related filings',
      'DIN KYC & director KYC support',
      'Event-based MCA form assistance',
      'MSME / Udyam registration',
      'Penalty risk reduction calendars',
    ],
    process: ['Compliance health check', 'Document & data collection', 'Form preparation & filing', 'Acknowledgement & records'],
    documents: ['Company master data', 'Financial statements', 'Board resolutions', 'Director KYC details'],
    packages: [
      { name: 'Annual Basic', price: '₹4,999', items: ['Annual return filing', 'Status updates', 'Soft archive'] },
      { name: 'Compliance Plus', price: '₹9,999', items: ['Annual + event forms', 'Calendar alerts', 'Manager support'], popular: true },
      { name: 'Enterprise Desk', price: 'Custom', items: ['Multi-entity portfolios', 'Dedicated RM', 'Priority SLA'] },
    ],
    faqs: [
      { q: 'What happens if annual filings are delayed?', a: 'Delays attract additional fees and compliance risks. We help you file promptly and regularise pending returns where possible.' },
      { q: 'Do you handle DIN KYC?', a: 'Yes. We assist directors with DIN KYC and related MCA profile updates.' },
    ],
  },
  {
    slug: 'startup-india',
    title: 'Startup India',
    short: 'Recognition & Funding Support',
    description:
      'Get DPIIT Startup India recognition, eligibility guidance and documentation support to unlock schemes and investor readiness.',
    icon: Rocket,
    features: ['DPIIT Recognition', 'Eligibility Assessment', 'Documentation', 'Scheme Guidance', 'Investor-ready Pack'],
    benefits: ['Recognition certificate support', 'Benefit & scheme overview', 'Document readiness', 'Pitch-pack hygiene tips'],
    process: ['Eligibility check', 'Portal application prep', 'Submission & follow-up', 'Recognition & next steps'],
    documents: ['Incorporation certificate', 'Pitch / product summary', 'Director details', 'Innovation description'],
    packages: [
      { name: 'Recognition', price: '₹3,999', items: ['Application prep', 'Filing support', 'Status tracking'] },
      { name: 'Growth Kit', price: '₹9,999', items: ['Recognition + GST + MSME', 'Checklist pack'], popular: true },
    ],
    faqs: [
      { q: 'Who is eligible for Startup India?', a: 'Eligibility depends on incorporation type, age of entity and innovation criteria under DPIIT guidelines. We assess this upfront.' },
    ],
  },
  {
    slug: 'fssai',
    title: 'FSSAI Registration',
    short: 'Food Business Registration',
    description:
      'Basic, state and central FSSAI licences for restaurants, cloud kitchens, manufacturers and food traders.',
    icon: UtensilsCrossed,
    features: ['Basic Registration', 'State Licence', 'Central Licence', 'Renewal', 'Modification'],
    benefits: ['Correct licence category guidance', 'Application & document support', 'Renewal reminders'],
    process: ['Business assessment', 'Application drafting', 'Submission', 'Licence delivery'],
    documents: ['Photo ID & address proof', 'Business proof', 'Food safety plan (as applicable)', 'Premises details'],
    packages: [
      { name: 'Basic', price: '₹1,499', items: ['Registration filing', 'Certificate delivery'] },
      { name: 'State Licence', price: '₹4,999', items: ['Licence application', 'Follow-up'], popular: true },
    ],
    faqs: [
      { q: 'Which FSSAI licence do I need?', a: 'It depends on turnover and business type. Our team maps you to Basic, State or Central licensing correctly.' },
    ],
  },
  {
    slug: 'iso-certification',
    title: 'ISO Certification',
    short: 'International Standards',
    description:
      'Guidance for ISO certification journeys — documentation readiness, process mapping and certification-body coordination.',
    icon: Award,
    features: ['ISO 9001', 'ISO 27001', 'ISO 22000', 'Documentation', 'Audit Readiness'],
    benefits: ['Gap assessment overview', 'Documentation templates guidance', 'Certification body coordination support'],
    process: ['Scope definition', 'Gap overview', 'Documentation readiness', 'Audit coordination'],
    documents: ['Organisation profile', 'Process overview', 'Existing SOPs (if any)'],
    packages: [
      { name: 'Readiness', price: 'Custom', items: ['Gap overview', 'Doc checklist', 'Coordination'] },
    ],
    faqs: [
      { q: 'How long does ISO certification take?', a: 'Timelines vary by standard and organisation readiness — typically several weeks to a few months.' },
    ],
  },
  {
    slug: 'import-export-code',
    title: 'Import Export Code',
    short: 'DGFT Registration',
    description:
      'Obtain IEC from DGFT to start import-export operations with clean documentation and bank AD code readiness guidance.',
    icon: Globe2,
    features: ['IEC Application', 'DGFT Portal Support', 'Modification', 'Bank AD Guidance'],
    benefits: ['Quick IEC application', 'Error-free documentation', 'Post-approval checklist'],
    process: ['Collect KYC & bank details', 'DGFT filing', 'IEC allotment', 'Next-step briefing'],
    documents: ['PAN', 'Business proof', 'Bank details', 'Address proof', 'Digital signature (as required)'],
    packages: [
      { name: 'IEC Filing', price: '₹1,999', items: ['Application', 'Tracking', 'Certificate'] },
    ],
    faqs: [
      { q: 'Is IEC mandatory for exporters?', a: 'Yes, an Import Export Code is generally required to undertake import/export of goods from India.' },
    ],
  },
  {
    slug: 'msme-registration',
    title: 'MSME Registration',
    short: 'Government Benefits',
    description:
      'Udyam / MSME registration to unlock government schemes, preferential tenders and credit-linked benefits.',
    icon: Factory,
    features: ['Udyam Registration', 'Modification', 'Advisory on Benefits'],
    benefits: ['Quick Udyam filing', 'Correct classification guidance', 'Benefit overview'],
    process: ['Business details capture', 'Portal filing', 'Certificate issuance'],
    documents: ['Aadhaar & PAN', 'Business details', 'Bank account details', 'Investment & turnover info'],
    packages: [
      { name: 'Udyam', price: '₹999', items: ['Registration', 'Certificate delivery'] },
    ],
    faqs: [
      { q: 'Is MSME registration free on government portal?', a: 'Government Udyam registration itself has no fee; our professional fee covers assisted filing and guidance.' },
    ],
  },
  {
    slug: 'shop-act',
    title: 'Shop Act',
    short: 'Business Licensing',
    description:
      'Shop & Establishment registrations and related local business licensing support for offices, stores and service units.',
    icon: Store,
    features: ['Shop & Establishment', 'Amendments', 'Renewals', 'Local Licence Guidance'],
    benefits: ['State-specific filing support', 'Document checklist', 'Renewal tracking tips'],
    process: ['Location & business assessment', 'Application prep', 'Submission', 'Licence delivery'],
    documents: ['ID & address proof', 'Premises proof', 'Business details', 'Employee details (if required)'],
    packages: [
      { name: 'Registration', price: '₹1,499', items: ['Application support', 'Follow-up'] },
    ],
    faqs: [
      { q: 'Is Shop Act required for home offices?', a: 'Requirements vary by state and activity. We confirm applicability for your location before filing.' },
    ],
  },
]

export const whyChoose = [
  { title: 'Fast Turnaround', desc: 'Streamlined workflows so filings move without unnecessary delays.' },
  { title: 'Transparent Pricing', desc: 'Clear packages and upfront quotes — no hidden government-fee surprises.' },
  { title: 'Expert Professionals', desc: 'CAs, company secretaries and legal advisors backing every mandate.' },
  { title: 'Dedicated Relationship Manager', desc: 'One point of contact who knows your business and deadlines.' },
  { title: 'Secure Documentation', desc: 'Encrypted handling of KYC, agreements and certificates.' },
  { title: 'Nationwide Services', desc: 'Pan-India support for startups, MSMEs and multi-city enterprises.' },
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
  { value: 150, suffix: '+', label: 'Professional Experts' },
]

export const pricingTiers = [
  {
    name: 'Starter',
    price: '₹999',
    note: ' onwards',
    desc: 'Ideal for first-time founders needing a single registration or filing.',
    features: ['Single service kickoff', 'Document checklist', 'Email support', 'Transparent govt fee note'],
  },
  {
    name: 'Business',
    price: '₹4,999',
    note: ' onwards',
    desc: 'Most popular for growing MSMEs managing multiple compliance needs.',
    features: ['Priority processing', 'Dedicated manager', 'Multi-service bundling', 'Status updates', 'WhatsApp desk'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: ' Quote',
    desc: 'For multi-entity groups needing retainers, SLAs and portfolio oversight.',
    features: ['Custom SLA', 'Multi-entity dashboard support', 'On-call experts', 'Quarterly reviews', 'Invoice consolidation'],
  },
]

export const testimonials = [
  {
    name: 'Ananya Mehra',
    role: 'Founder, Bloom Retail',
    text: 'LEXTAX INDIA incorporated our Pvt Ltd and layered GST within two weeks. Clear communication and zero jargon — exactly what a first-time founder needs.',
  },
  {
    name: 'Rohit Sinha',
    role: 'Director, Nova Manufacturing',
    text: 'Their ROC and GST desk runs like clockwork. We finally stopped chasing deadlines and started focusing on production.',
  },
  {
    name: 'Priya Nair',
    role: 'Co-founder, HealthStack',
    text: 'Trademark filing and objection reply were handled professionally. The team felt more like an in-house compliance partner than a vendor.',
  },
  {
    name: 'Kabir Malhotra',
    role: 'CEO, Orbit Exports',
    text: 'IEC, MSME and documentation support in one place. Pricing was transparent and every update landed on WhatsApp.',
  },
]

export const faqs = [
  {
    q: 'How long does company registration take?',
    a: 'Most incorporations complete in 7–15 working days after documents and digital signatures are ready, subject to MCA processing.',
  },
  {
    q: 'What documents are required?',
    a: 'Typically PAN, Aadhaar, photographs, registered office proof and a utility bill. Each service page lists a precise checklist.',
  },
  {
    q: 'How much does GST registration cost?',
    a: 'Assisted GST registration with LEXTAX INDIA starts from ₹999. Any statutory charges are disclosed before we proceed.',
  },
  {
    q: 'Can services be completed online?',
    a: 'Yes. Consultations, document collection, filings and deliveries are designed for a fully digital journey across India.',
  },
  {
    q: 'Do you provide legal consultation?',
    a: 'We offer professional consultation for company law, taxation, trademarks and documentation. Book a free intro call to begin.',
  },
]

export const blogPosts = [
  {
    slug: 'how-to-register-private-limited-company',
    title: 'How to Register a Private Limited Company in India',
    excerpt: 'A clear walkthrough of name reservation, SPICe+, DSC and post-incorporation must-dos for founders.',
    category: 'Company Law',
    date: 'Jul 12, 2026',
  },
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
    excerpt: 'Practical planning ideas for salary vs dividend, deductions and advance tax discipline.',
    category: 'Income Tax',
    date: 'Jun 10, 2026',
  },
  {
    slug: 'roc-annual-filing-checklist',
    title: 'ROC Annual Filing Checklist',
    excerpt: 'AOC-4, MGT-7 and board hygiene — what every private limited should prepare before year-end.',
    category: 'Compliance',
    date: 'May 28, 2026',
  },
]

export const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'Company Registration', href: '/services/company-registration' },
    { label: 'GST Services', href: '/services/gst-services' },
    { label: 'Trademark', href: '/services/trademark' },
    { label: 'Income Tax', href: '/services/income-tax' },
    { label: 'ROC Compliance', href: '/services/roc-compliance' },
    { label: 'Legal Documents', href: '/services/legal-documentation' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
}
