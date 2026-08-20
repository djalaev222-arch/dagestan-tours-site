import { Hero } from '../components/home/Hero'
import { Stats } from '../components/home/Stats'
import { UspSection } from '../components/home/UspSection'
import { FeaturedTours } from '../components/home/FeaturedTours'
import { HowItWorks } from '../components/home/HowItWorks'
import { Testimonials } from '../components/home/Testimonials'
import { CtaBanner } from '../components/home/CtaBanner'
import './home-page.css'

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <UspSection />
      <FeaturedTours />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
