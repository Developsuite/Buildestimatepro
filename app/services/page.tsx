import type { Metadata } from 'next'
import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection'
import ServicesGridSection from '@/components/sections/services/ServicesGridSection'
import ServicesAboutSection from '@/components/sections/services/ServicesAboutSection'
import ServicesHowToBeginSection from '@/components/sections/services/ServicesHowToBeginSection'
import ServicesReadyToStartSection from '@/components/sections/services/ServicesReadyToStartSection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Construction Estimating Services | Professional Cost Estimates & Takeoffs',
  description: 'Expert construction estimating services including cost estimates, material takeoffs, residential, commercial, and industrial estimates. Fast, accurate, and affordable estimating solutions for contractors and builders.',
}

export default function Services() {
  return (
    <div className="bg-[#F5F1E6]">
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesAboutSection />
      <ServicesHowToBeginSection />
      <ServicesReadyToStartSection />
      <FooterSection />
    </div>
  )
}

