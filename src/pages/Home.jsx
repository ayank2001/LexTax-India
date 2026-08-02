import Hero from '../components/home/Hero'
import AboutTeaser from '../components/home/AboutTeaser'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChooseUs from '../components/home/WhyChooseUs'
import HowItWorks from '../components/home/HowItWorks'
import Industries from '../components/home/Industries'
import PricingPreview from '../components/home/PricingPreview'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import BlogPreview from '../components/home/BlogPreview'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Industries />
      <PricingPreview />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
