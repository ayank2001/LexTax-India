import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { faqs } from '../../data/siteData'

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-section-soft">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book"
          subtitle="Quick clarity on timelines, documents, pricing and how our digital process works."
        />
        <Accordion items={faqs} />
      </div>
    </section>
  )
}
