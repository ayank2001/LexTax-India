import { Link } from 'react-router-dom'

function PolicyLayout({ title, subtitle, children }) {
  return (
    <>
      <section className="bg-hero-mesh pt-36 md:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold-light text-xs tracking-[0.18em] uppercase font-semibold mb-3">
            Client Terms & Policies
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">{title}</h1>
          {subtitle && <p className="text-white/55 text-sm mt-3">{subtitle}</p>}
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/terms" className="text-gold-light hover:underline">
              Terms and Conditions
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/refund-policy" className="text-gold-light hover:underline">
              Refund & Cancellation
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/privacy-policy" className="text-gold-light hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-section-soft">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-navy/75 leading-relaxed text-[15px]">
          {children}
        </div>
      </section>
    </>
  )
}

function H2({ children }) {
  return <h2 className="font-display text-2xl text-navy font-semibold pt-4">{children}</h2>
}

function H3({ children }) {
  return <h3 className="font-semibold text-navy text-base pt-1">{children}</h3>
}

function Ul({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Mail({ children }) {
  return (
    <a href={`mailto:${children}`} className="text-gold-dark hover:underline">
      {children}
    </a>
  )
}

export function Terms() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      subtitle="Effective Date: 08 August 2026 | Last Updated: 08 August 2026 · Document Effective: 01 August 2026 · Last Updated: 10 August 2026"
    >
      <div className="glass rounded-2xl p-5 md:p-6 space-y-2 text-sm">
        <p>
          <span className="font-semibold text-navy">Legal Entity:</span> LEXTAX INDIA
        </p>
        <p>
          <span className="font-semibold text-navy">Registered Office:</span> Shop No. 1, Batapul Chowk,
          Paonta Sahib – 173025
        </p>
        <p>
          <span className="font-semibold text-navy">Official Email:</span>{' '}
          <Mail>lextaxindia@gmail.com</Mail>
        </p>
        <p>
          <span className="font-semibold text-navy">Official Phone:</span> 9805468933
        </p>
      </div>

      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern access to and use of the website, platform,
        consultation, documentation, professional-referral, tax, compliance, registration,
        intellectual-property and related services offered under the name Lex Tax India (&quot;Lex Tax
        India&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </p>
      <p>
        By submitting an enquiry, making payment, booking a consultation, uploading documents, giving
        written/electronic confirmation to proceed, or otherwise using our services, you acknowledge that you
        have read and accepted these Terms.
      </p>

      <H2>1. Nature of Lex Tax India</H2>
      <p>
        Lex Tax India is a private consultancy, documentation, compliance-assistance and
        professional-facilitation platform.
      </p>
      <p>
        Lex Tax India is not a court, government department, statutory authority, Bar Council, police
        authority, cybercrime authority, tax department, Intellectual Property Office or any other
        governmental body.
      </p>
      <p>
        Where a particular service is legally required to be performed by an advocate, chartered accountant,
        company secretary, cost accountant, registered patent agent, notary or other regulated professional,
        such professional service shall be provided independently by an appropriately qualified professional,
        subject to separate acceptance and engagement wherever required.
      </p>
      <p>
        Payment to Lex Tax India does not automatically create an advocate-client, CA-client or other
        regulated professional relationship.
      </p>

      <H2>2. Services</H2>
      <p>
        Depending upon the selected package, Lex Tax India may provide or facilitate services including:
      </p>
      <Ul
        items={[
          'General legal consultation assistance',
          'Advocate consultation and appointment facilitation',
          'Legal notice drafting assistance',
          'Reply-to-notice drafting assistance',
          'Case assessment and case referral',
          'Consumer complaint assistance',
          'National Consumer Helpline complaint assistance',
          'Consumer Commission documentation support',
          'Matrimonial and divorce consultation',
          'Matrimonial notice and reply drafting',
          'Cybercrime complaint assistance',
          'Bank account freeze, debit freeze and lien assistance',
          'Representations to banks, nodal officers and investigating authorities',
          'Legal documentation review',
          'Agreements and contractual documentation',
          'Terms and Conditions, Refund and Cancellation Policies, Privacy Policies',
          'Service Agreements',
          'Affidavit drafting assistance',
          'Declarations and undertakings',
          'Tax and business compliance assistance',
          'GST and other tax-related support, where offered',
          'MSME/Udyam assistance',
          'Trademark application, search and documentation assistance',
          'Trademark objection/referral assistance',
          'Copyright registration assistance',
          'Patent filing facilitation and patent professional referral',
          'Logo and brand-design services',
          'Business documentation and registration assistance',
          'Other professional/compliance services displayed on the website',
        ]}
      />
      <p>
        The exact scope of each service shall depend upon the package purchased, quotation issued or written
        communication exchanged with the client.
      </p>

      <H2>3. Independent Advocates and Professionals</H2>
      <p>
        Lex Tax India may connect clients with independent advocates and other qualified professionals.
      </p>
      <p>Unless expressly stated otherwise in a separate written engagement:</p>
      <Ul
        items={[
          'Such professionals are independent practitioners.',
          'They are responsible for their own professional advice.',
          'They independently determine whether to accept a matter.',
          "Lex Tax India does not control a professional's legal opinion or professional judgment.",
          'Court appearance, filing, representation and litigation are not automatically included merely because a consultation or drafting service has been purchased.',
          "Any advocate's appearance fee, court fee, clerkage or litigation expense may be separately payable.",
          "The client's relationship with an independent professional may be governed by additional engagement terms.",
        ]}
      />
      <p>
        Lex Tax India does not guarantee that any particular advocate or professional will accept a matter.
      </p>

      <H2>4. No Guarantee of Outcome</H2>
      <p>
        Professional, legal, tax, regulatory and government processes depend on facts, documentation,
        authorities, courts, government portals and third parties.
      </p>
      <p>Accordingly, Lex Tax India does not guarantee:</p>
      <Ul
        items={[
          'success of a legal case',
          'settlement of a matrimonial dispute',
          'grant of divorce',
          'withdrawal of a police/cyber complaint',
          'removal of a bank lien or account freeze',
          'issuance of an NOC by an investigating officer',
          'refund or compensation from another company',
          'acceptance of a consumer complaint',
          'approval of a trademark, copyright or patent',
          'absence of a trademark objection/opposition',
          'successful patent grant',
          'tax assessment outcome',
          'approval of MSME or other registrations',
          'government processing timelines',
          'any particular decision by a court, authority or professional',
        ]}
      />
      <p>
        Fees are generally charged for the professional effort, consultancy, documentation, facilitation or
        agreed deliverable, and not for a guaranteed result.
      </p>

      <H2>5. Legal Consultation Disclaimer</H2>
      <p>
        General information provided through the website, WhatsApp, email, chatbot, marketing material or
        customer-support team is provided for preliminary informational purposes.
      </p>
      <p>It should not automatically be treated as a formal legal opinion.</p>
      <p>A formal legal opinion may require:</p>
      <Ul
        items={[
          'examination of documents',
          'verification of facts',
          'consultation with an advocate',
          'consideration of applicable jurisdiction',
          'separate professional engagement',
        ]}
      />

      <H2>6. Legal Notice Drafting</H2>
      <p>
        Legal notice services may include preparation, review or formatting of a proposed notice based upon
        information supplied by the client.
      </p>
      <p>
        Where an advocate is required to formally issue a notice in his/her professional capacity, the notice
        will be subject to:
      </p>
      <Ul
        items={[
          'advocate acceptance',
          'conflict checks',
          'verification of facts',
          'professional review',
          'approval of the final draft',
          'applicable professional rules',
        ]}
      />
      <p>
        No advocate&apos;s name, signature, enrolment number or letterhead shall be used without authorization.
      </p>

      <H2>7. Case Referral</H2>
      <p>
        &quot;Case referral&quot; means facilitating contact between the client and an independent professional who
        may be suitable for the client&apos;s stated requirement.
      </p>
      <p>A referral itself does not constitute:</p>
      <Ul
        items={[
          'acceptance of litigation',
          'filing of a case',
          'execution of a vakalatnama',
          'guaranteed representation',
          'guarantee of a particular result',
        ]}
      />
      <p>
        The professional and the client may separately determine professional fees and representation terms.
      </p>

      <H2>8. Matrimonial and Divorce Services</H2>
      <p>
        Matrimonial consultation may include reconciliation guidance, legal consultation facilitation, notice
        drafting, reply drafting, document review and referral to advocates.
      </p>
      <p>
        Lex Tax India does not guarantee reconciliation, divorce, maintenance, custody, alimony or any
        particular court order.
      </p>
      <p>
        Where both spouses seek independent legal advice, separate advocates may be appropriate to avoid
        professional conflicts.
      </p>

      <H2>9. Cybercrime, Bank Freeze and Lien Assistance</H2>
      <p>
        Services may include preparation of representations, communication assistance and referral to advocates
        regarding:
      </p>
      <Ul
        items={[
          'cybercrime complaints',
          'NCRP complaints',
          'debit freezes',
          'bank account holds',
          'disputed transaction liens',
          'representations to banks',
          'communications to investigating officers and nodal officers',
          'court remedies',
        ]}
      />
      <p>Lex Tax India does not have authority to directly remove a freeze or lien.</p>
      <p>
        The decision remains with the concerned bank, police/cybercrime authority, investigating officer or
        competent court.
      </p>

      <H2>10. Tax and Compliance Services</H2>
      <p>
        Tax-related information and documentation assistance is based upon documents and information supplied by
        the client.
      </p>
      <p>
        Where certification, audit, representation or filing legally requires a CA, CS, CMA or another regulated
        professional, the work may be referred to an appropriately qualified person.
      </p>
      <p>Clients remain responsible for providing accurate:</p>
      <Ul
        items={[
          'turnover',
          'income',
          'transaction',
          'GST',
          'accounting',
          'business',
          'ownership',
          'tax information',
        ]}
      />

      <H2>11. Trademark, Copyright and Patent Services</H2>
      <p>
        Lex Tax India may assist with searches, application preparation, documentation, filing coordination and
        professional referrals.
      </p>
      <p>A trademark search does not guarantee registration.</p>
      <p>
        The Trade Marks Registry may raise objections, and third parties may file oppositions. Similarly, filing
        a copyright or patent application does not guarantee registration or grant.
      </p>
      <p>
        Where representation requires a registered patent agent, advocate or other qualified professional, the
        matter may be referred accordingly.
      </p>

      <H2>12. MSME and Government Registrations</H2>
      <p>
        Lex Tax India is a private service provider and not a government registration portal unless explicitly
        stated otherwise.
      </p>
      <p>Government registrations and certificates are issued solely by the relevant authority.</p>
      <p>Government fees, professional charges and Lex Tax India service charges may be separate.</p>

      <H2>13. Logo and Creative Design Services</H2>
      <p>
        For original logo/design work commissioned from Lex Tax India, the rights in the final approved
        deliverable will be governed by the applicable quotation or service agreement.
      </p>
      <p>Unless otherwise agreed:</p>
      <Ul
        items={[
          'rejected concepts remain the property of their creator',
          'final design rights transfer only after full payment',
          'third-party fonts, icons, stock assets or licensed elements remain subject to their respective licences',
          'trademark availability of a proposed logo/name is not automatically guaranteed by the design service',
        ]}
      />
      <p>Trademark clearance should be conducted separately.</p>

      <H2>14. Client Responsibilities</H2>
      <p>The client agrees to provide complete, accurate and genuine information.</p>
      <p>The client must not provide:</p>
      <Ul
        items={[
          'fabricated documents',
          'forged signatures',
          'false affidavits',
          'misleading facts',
          'altered government records',
          'unlawfully obtained confidential information',
          'instructions intended to facilitate illegal activity',
        ]}
      />
      <p>
        Lex Tax India may suspend or terminate a service where fraudulent, unlawful or misleading information is
        suspected.
      </p>

      <H2>15. Document Verification</H2>
      <p>
        Lex Tax India generally relies on documents supplied by the client unless verification has specifically
        been included in the service.
      </p>
      <p>The client remains responsible for authenticity and accuracy.</p>
      <p>
        Drafts based upon incorrect information may require revision and may attract additional charges where
        substantial reworking is necessary.
      </p>

      <H2>16. Fees and Payment</H2>
      <p>
        All fees shall be communicated through the website, quotation, invoice, payment page, email, WhatsApp or
        other written communication.
      </p>
      <p>Fees may include:</p>
      <Ul
        items={[
          'consultation charges',
          'platform charges',
          'documentation charges',
          'professional coordination charges',
          'drafting charges',
          'filing assistance',
          'design charges',
          'applicable taxes',
        ]}
      />
      <p>
        Government fees, court fees, stamp duty, notary charges, professional appearance fees, travel expenses
        and third-party charges are not included unless expressly stated.
      </p>

      <H2>17. Commencement of Service</H2>
      <p>A service may be considered commenced upon one or more of the following:</p>
      <Ul
        items={[
          'client confirms "Yes", "Proceed", "Start", "Approved" or similar authorization',
          'documents are assigned for review',
          'consultation is booked',
          'professional is assigned',
          'drafting begins',
          'trademark or other search commences',
          'application preparation begins',
          'government fees are deposited',
          'application is submitted',
          'appointment is scheduled',
          'design work begins',
          'another substantive step is performed',
        ]}
      />
      <p>
        Refund eligibility after commencement shall be governed by the{' '}
        <Link to="/refund-policy" className="text-gold-dark hover:underline">
          Refund Policy
        </Link>
        .
      </p>

      <H2>18. Electronic Communications</H2>
      <p>The client authorizes communication through:</p>
      <Ul
        items={[
          'email',
          'telephone',
          'SMS',
          'WhatsApp',
          'website dashboard',
          'other electronic communication channels supplied by the client',
        ]}
      />
      <p>
        Electronic confirmation may be treated as authorization to proceed. Clients must keep their email
        address and mobile number updated.
      </p>

      <H2>19. Client Delays</H2>
      <p>Processing timelines may be extended where the client:</p>
      <Ul
        items={[
          'fails to provide documents',
          'provides incomplete information',
          'does not respond to clarification',
          'fails to complete OTP verification',
          'fails to sign documents',
          'misses consultation appointments',
          'fails to pay statutory charges',
          'otherwise prevents completion',
        ]}
      />
      <p>
        Such client-caused periods shall not count as service delay attributable to Lex Tax India.
      </p>

      <H2>20. Government and Third-Party Delays</H2>
      <p>Lex Tax India shall not be responsible for delays caused by:</p>
      <Ul
        items={[
          'courts',
          'government departments',
          'police',
          'banks',
          'cybercrime authorities',
          'tax authorities',
          'intellectual-property registries',
          'government portals',
          'server downtime',
          'payment processors',
          'postal/courier services',
          'professional availability',
          'force majeure',
        ]}
      />

      <H2>21. Intellectual Property</H2>
      <p>
        The Lex Tax India name, website content, layout, software, graphics, documents, templates and other
        proprietary material may not be copied, reproduced, resold or commercially exploited without
        authorization.
      </p>
      <p>
        Documents specifically prepared and fully paid for by a client may be used by that client for their
        intended purpose.
      </p>

      <H2>22. Confidentiality</H2>
      <p>Lex Tax India will take reasonable measures to maintain confidentiality of client documents.</p>
      <p>However, information may be shared where reasonably necessary with:</p>
      <Ul
        items={[
          'assigned advocates',
          'CA/CS/CMA professionals',
          'patent agents',
          'consultants',
          'government authorities',
          'courts',
          'banks',
          'service providers',
          'other persons necessary for performing the requested service',
        ]}
      />
      <p>
        Communications with Lex Tax India itself should not automatically be assumed to constitute legally
        privileged advocate-client communications unless made as part of a qualifying professional
        advocate-client relationship.
      </p>

      <H2>23. Limitation of Liability</H2>
      <p>
        To the extent permitted by law, Lex Tax India shall not be liable for indirect, consequential,
        speculative or punitive loss resulting from:
      </p>
      <Ul
        items={[
          'authority decisions',
          'court decisions',
          'rejection of an application',
          'third-party conduct',
          'incorrect information supplied by a client',
          'government portal failures',
          'delays outside our reasonable control',
        ]}
      />
      <p>
        Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.
      </p>

      <H2>24. Consumer Rights</H2>
      <p>
        Nothing in these Terms is intended to remove or restrict any mandatory consumer right available under
        applicable Indian law.
      </p>
      <p>
        Where any provision of these Terms conflicts with a mandatory statutory right, the applicable statutory
        requirement shall prevail.
      </p>

      <H2>25. Grievance Redressal</H2>
      <p>Complaints concerning Lex Tax India&apos;s service should be submitted to:</p>
      <p>
        Email: <Mail>grievance.lextax@gmail.com</Mail>
      </p>
      <p>
        The complainant should provide the registered mobile number/email, invoice/order number, service
        purchased and brief description of the issue.
      </p>

      <H2>26. Governing Law</H2>
      <p>These Terms shall be governed by the laws of India.</p>
      <p>
        Subject to mandatory consumer-jurisdiction provisions and other applicable law, disputes shall be
        subject to the jurisdiction of competent courts at Paonta Sahib, Himachal Pradesh.
      </p>

      <H2>27. Changes to Terms</H2>
      <p>
        Lex Tax India may revise these Terms to reflect regulatory, commercial or operational changes. The
        latest version shall be published with an updated effective date.
      </p>
    </PolicyLayout>
  )
}

export function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle="Effective Date: 08 August 2026"
    >
      <p>
        This Policy applies to payments made to Lex Tax India for consultancy, documentation, facilitation,
        registration, professional coordination and related services.
      </p>

      <H2>1. Before Service Commencement</H2>
      <p>A client may request cancellation before substantive work has commenced.</p>
      <p>Where approved, the amount may be refunded after deducting only:</p>
      <Ul
        items={[
          'statutory/government payments already made',
          'disclosed third-party costs actually incurred',
          "other non-recoverable charges incurred specifically for the client's request",
        ]}
      />

      <H2>2. Seven-Day Review Period</H2>
      <p>
        Where payment has been made but the client has not provided confirmation to proceed and no substantive
        service has commenced, a cancellation request should preferably be submitted within 7 calendar days of
        payment.
      </p>
      <p>The seven-day period does not override mandatory rights available under applicable law.</p>

      <H2>3. After Confirmation and Commencement</H2>
      <p>
        Once the client provides a positive confirmation and substantive work has commenced, a refund shall not
        be automatically available merely because the client:
      </p>
      <Ul
        items={[
          'changes their mind',
          'no longer requires the service',
          'decides to use another consultant',
          'applies independently',
          'chooses another advocate',
          'misunderstands the nature of a government process despite accurate disclosure',
          'decides not to continue after work has already been performed',
        ]}
      />
      <p>
        The amount attributable to completed work may be retained. Any unperformed portion will be assessed
        fairly in accordance with the circumstances and applicable law.
      </p>

      <H2>4. Non-Refundable Third-Party Charges</H2>
      <p>
        Amounts already paid or committed toward the following are ordinarily non-refundable:
      </p>
      <Ul
        items={[
          'government fees',
          'court fees',
          'stamp duty',
          'notarisation',
          'DSC charges',
          'search fees',
          'statutory filing fees',
          'courier/postage',
          'translation',
          'laboratory/testing fees',
          'travel expenses',
          'licensed design assets',
          'advocate/professional fees already earned or independently payable',
          'other third-party costs actually incurred',
        ]}
      />

      <H2>5. Government Rejection or Delay</H2>
      <p>No refund becomes automatically due merely because:</p>
      <Ul
        items={[
          'an application is rejected',
          'an objection is raised',
          'additional documentation is required',
          'a trademark receives an objection',
          'a patent is not granted',
          'a consumer complaint does not succeed',
          'a bank does not remove a freeze',
          'an investigating authority fails to issue an NOC',
          'a matrimonial dispute does not resolve',
          'a legal notice does not produce the desired response',
          'a government authority takes longer than anticipated',
        ]}
      />
      <p>
        Refund entitlement depends on whether Lex Tax India has delivered the service it agreed to provide, not
        solely on the result obtained from a third party.
      </p>

      <H2>6. Pending Government Applications</H2>
      <p>
        Where the agreed work has been completed and an application or representation remains pending before a
        government authority, bank, police authority, registry or court, the mere fact that the matter is pending
        shall not by itself create a refund entitlement.
      </p>

      <H2>7. Service Deficiency</H2>
      <p>
        Where a client alleges a material deficiency attributable to Lex Tax India, the client should first
        allow a reasonable opportunity for:
      </p>
      <Ul
        items={['correction', 're-performance', 'completion', 'reassignment', 'rectification']}
      />
      <p>
        If the material deficiency cannot reasonably be corrected, Lex Tax India may consider a proportionate
        refund for the genuinely unperformed portion of the service, subject to applicable consumer law.
      </p>

      <H2>8. Failure to Commence Service</H2>
      <p>
        If Lex Tax India has neither assigned nor materially commenced the requested service within 7 working
        days after receiving all required documents, information, payment and authorization, for reasons solely
        attributable to Lex Tax India, the client may request cancellation and review of the unperformed
        portion.
      </p>
      <p>
        Periods awaiting client documents, third-party action, government action or professional availability
        after disclosed scheduling shall not automatically constitute such delay.
      </p>

      <H2>9. Advocate and Other Professional Fees</H2>
      <p>
        Professional fees paid directly to an independent advocate or another regulated professional are
        governed by the professional&apos;s separate engagement and applicable professional rules.
      </p>
      <p>
        Lex Tax India cannot automatically reverse a payment made directly to an independent professional.
      </p>
      <p>
        Where professional fees have been collected by Lex Tax India for onward payment, the refundability of
        any unearned component will be reviewed according to the status of the professional engagement and
        applicable law.
      </p>
      <p>
        Bar Council rules themselves contemplate refund of the unaccrued portion of an advocate&apos;s fee where
        an advocate withdraws for sufficient cause, so a blanket &quot;all advocate fees are non-refundable in
        every circumstance&quot; clause should not be used.
      </p>

      <H2>10. Client Non-Cooperation</H2>
      <p>
        Refunds may be declined for work already performed where completion becomes impossible because the
        client repeatedly fails to:
      </p>
      <Ul
        items={[
          'provide documents',
          'respond to communications',
          'complete OTP',
          'sign documents',
          'attend scheduled appointments',
          'provide correct information',
          'pay required government/third-party charges',
        ]}
      />

      <H2>11. Duplicate Payments</H2>
      <p>A verified accidental duplicate payment shall be refunded after reconciliation.</p>

      <H2>12. Refund Request Procedure</H2>
      <p>
        The client should submit with subject:{' '}
        <span className="font-semibold text-navy">Refund Request – [Order/Invoice Number]</span>
      </p>
      <p>and provide:</p>
      <Ul
        items={[
          'full name',
          'registered email/mobile',
          'transaction number',
          'service purchased',
          'payment date',
          'reason for refund',
          'supporting documents',
        ]}
      />
      <p>
        Send to: <Mail>grievance.lextax@gmail.com</Mail>
      </p>

      <H2>13. Processing Time</H2>
      <p>Approved refunds will normally be initiated within 7–10 working days after approval.</p>
      <p>
        Bank/payment-gateway settlement time may be additional. Refunds will ordinarily be made to the original
        payment method where technically possible.
      </p>

      <H2>14. Statutory Rights</H2>
      <p>
        This Refund Policy does not restrict any remedy or refund that a consumer is mandatorily entitled to
        receive under applicable law.
      </p>
    </PolicyLayout>
  )
}

export function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Effective Date: 08 August 2026 | Last Updated: 08 August 2026"
    >
      <p>Lex Tax India respects the privacy of its users and clients.</p>
      <p>
        This Privacy Policy explains how personal information may be collected, used, stored, shared and
        protected when you use our website or services.
      </p>

      <H2>1. Information We May Collect</H2>
      <p>Depending upon the service requested, we may collect:</p>

      <H3>Identity Information</H3>
      <Ul
        items={[
          'Name',
          'Date of birth',
          'Gender where relevant',
          'Photograph',
          'Signature',
          'PAN',
          'Aadhaar or other identification documents, where legitimately required',
          'Passport details',
          'Director/DIN information',
          'Business identification details',
        ]}
      />

      <H3>Contact Information</H3>
      <Ul items={['Mobile number', 'Email address', 'Postal address']} />

      <H3>Business Information</H3>
      <Ul
        items={[
          'Business name',
          'GST details',
          'CIN',
          'LLPIN',
          'Udyam details',
          'Turnover',
          'Incorporation documents',
          'Trademark details',
          'Business agreements',
        ]}
      />

      <H3>Legal Case Information</H3>
      <p>Where voluntarily provided for a requested service:</p>
      <Ul
        items={[
          'legal notices',
          'court documents',
          'matrimonial information',
          'consumer disputes',
          'police complaints',
          'NCRP references',
          'bank lien/freeze information',
          'transaction records',
          'correspondence with authorities',
        ]}
      />
      <p>
        Because legal matters can contain highly sensitive information, users should provide only documents
        reasonably necessary for the requested service.
      </p>

      <H3>Payment Information</H3>
      <p>
        Payments may be processed through third-party payment gateways. Lex Tax India generally does not need to
        store complete card credentials.
      </p>

      <H3>Technical Information</H3>
      <p>We may automatically collect:</p>
      <Ul
        items={[
          'IP address',
          'browser',
          'device type',
          'login/activity information',
          'cookies',
          'referral source',
          'website usage data',
        ]}
      />

      <H2>2. Why We Use Information</H2>
      <p>Information may be used to:</p>
      <Ul
        items={[
          'process enquiries',
          'verify identity',
          'provide requested services',
          'prepare documents',
          'schedule consultations',
          'refer clients to professionals',
          'communicate with clients',
          'process payments',
          'maintain invoices',
          'submit authorized applications',
          'communicate with authorities where requested',
          'prevent fraud',
          'maintain service records',
          'comply with legal obligations',
          'improve website functionality',
          'address complaints',
        ]}
      />

      <H2>3. Consent and Authorization</H2>
      <p>Where consent is required, the client may provide it electronically, including through:</p>
      <Ul
        items={[
          'website forms',
          'checkboxes',
          'email',
          'WhatsApp',
          'OTP',
          'digital confirmation',
          'other recorded electronic instructions',
        ]}
      />
      <p>
        We will endeavour to process personal information only for legitimate and disclosed purposes and in
        accordance with applicable law.
      </p>
      <p>
        India notified the Digital Personal Data Protection Rules, 2025 in November 2025, with statutory
        obligations being brought into force on a staggered basis. Lex Tax India&apos;s privacy processes should
        therefore be maintained and updated as the applicable provisions become enforceable.
      </p>

      <H2>4. Sharing With Advocates and Professionals</H2>
      <p>
        Where the client requests professional consultation or referral, relevant information may be shared with
        an assigned:
      </p>
      <Ul
        items={[
          'advocate',
          'chartered accountant',
          'company secretary',
          'cost accountant',
          'patent agent',
          'consultant',
          'other professional',
        ]}
      />
      <p>
        Only information reasonably required to assess or perform the requested service should be shared.
      </p>

      <H2>5. Government and Regulatory Disclosure</H2>
      <p>Where authorized or legally required, information may be submitted to:</p>
      <Ul
        items={[
          'courts',
          'government departments',
          'Income Tax authorities',
          'GST authorities',
          'intellectual-property registries',
          'banks',
          'police/cybercrime authorities',
          'MCA',
          'MSME/Udyam systems',
          'consumer authorities',
          'other competent authorities',
        ]}
      />

      <H2>6. Service Providers</H2>
      <p>We may use service providers for:</p>
      <Ul
        items={[
          'website hosting',
          'cloud storage',
          'CRM',
          'email',
          'communications',
          'payment processing',
          'document management',
          'accounting',
          'cybersecurity',
          'analytics',
        ]}
      />
      <p>
        Such access should be limited to what is reasonably necessary for the relevant function.
      </p>

      <H2>7. Confidentiality and Professional Privilege</H2>
      <p>Lex Tax India will take reasonable measures to protect confidential information.</p>
      <p>
        However, communications with a consultancy/platform are not necessarily protected by the same legal
        privilege applicable to confidential communications made directly within a qualifying advocate-client
        relationship.
      </p>
      <p>
        Where an independent advocate is engaged, the advocate&apos;s separate professional obligations apply.
      </p>

      <H2>8. Data Security</H2>
      <p>
        Reasonable administrative, contractual and technical measures may be used to protect information
        against:
      </p>
      <Ul
        items={[
          'unauthorized access',
          'loss',
          'misuse',
          'alteration',
          'unauthorized disclosure',
          'destruction',
        ]}
      />
      <p>No online platform can guarantee absolute security.</p>

      <H2>9. Data Retention</H2>
      <p>Information may be retained for as long as reasonably necessary to:</p>
      <Ul
        items={[
          'perform the service',
          'maintain business and accounting records',
          'respond to complaints',
          'meet statutory requirements',
          'establish or defend legal claims',
          'prevent fraud',
        ]}
      />
      <p>
        Information no longer required should be securely deleted or anonymised where reasonably practicable and
        legally permitted.
      </p>

      <H2>10. Data Minimisation</H2>
      <p>Clients are requested not to provide documents unrelated to the service.</p>
      <p>
        Where possible, unnecessary information should be redacted before submission. For example, full bank
        statements, intimate matrimonial communications or complete identity documents should not be collected
        where only limited information is necessary.
      </p>

      <H2>11. Cookies</H2>
      <p>The website may use cookies and similar technologies for:</p>
      <Ul
        items={['authentication', 'security', 'analytics', 'preferences', 'website functionality']}
      />
      <p>
        Users may control non-essential cookies through browser or available cookie settings.
      </p>

      <H2>12. Marketing Communications</H2>
      <p>
        Where legally permitted and appropriately consented to, Lex Tax India may send service updates or
        promotional communications.
      </p>
      <p>
        Users may opt out of promotional communication by using the unsubscribe mechanism or contacting us.
        Service-related communications necessary to complete an active request may continue.
      </p>

      <H2>13. User Rights</H2>
      <p>
        Subject to applicable law and the status of the relevant statutory provisions, users may contact Lex Tax
        India regarding:
      </p>
      <Ul
        items={[
          'access to information about processing',
          'correction of inaccurate information',
          'updating personal information',
          'deletion/erasure requests',
          'withdrawal of consent where applicable',
          'grievance redressal',
        ]}
      />
      <p>
        Some information may need to be retained despite a deletion request where retention is required by law
        or reasonably necessary for legal claims.
      </p>

      <H2>14. Payment Gateways</H2>
      <p>
        Payments may be processed through independent payment providers. Their separate privacy policies and
        security practices may apply.
      </p>

      <H2>15. Third-Party Links</H2>
      <p>The website may contain links to:</p>
      <Ul
        items={[
          'government portals',
          'payment gateways',
          'advocate/professional websites',
          'third-party services',
        ]}
      />
      <p>
        Lex Tax India is not responsible for the privacy practices of an independent third-party website.
      </p>

      <H2>16. Data Breach and Security Incidents</H2>
      <p>
        Where Lex Tax India becomes aware of a personal-data or security incident affecting information under
        its control, it will take reasonable steps to contain, assess and remediate the incident. Where
        notification to affected individuals or a competent authority is required under applicable law, such
        notification will be made in the manner and within the period prescribed by law.
      </p>

      <H2>17. Privacy Grievance and Contact</H2>
      <p>
        Questions, correction requests, consent-withdrawal requests or privacy grievances may be submitted to:
      </p>
      <p>
        Email: <Mail>grievance.lextax@gmail.com</Mail>
      </p>
      <p>
        The requester should provide sufficient information to verify identity and identify the relevant service
        or record.
      </p>

      <H2>18. Changes to This Privacy Policy</H2>
      <p>
        Lex Tax India may update this Privacy Policy to reflect changes in law, technology, business operations
        or the services offered. The latest version will be published with a revised effective or last-updated
        date.
      </p>

      <H2>19. Governing Law</H2>
      <p>
        This Privacy Policy shall be governed by the laws of India. Any rights relating to personal data will
        remain subject to applicable Indian law and the commencement and enforceability of the relevant
        statutory provisions.
      </p>
    </PolicyLayout>
  )
}
