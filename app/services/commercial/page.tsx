import type { Metadata } from 'next'
import CommercialEstimatingHeroSection from '@/components/sections/commercial/CommercialEstimatingHeroSection'
import CommercialEstimatingOverviewSection from '@/components/sections/commercial/CommercialEstimatingOverviewSection'
import CommercialEstimatingServicesSection from '@/components/sections/commercial/CommercialEstimatingServicesSection'
import CommercialEstimatingProcessSection from '@/components/sections/commercial/CommercialEstimatingProcessSection'
import CommercialEstimatingWhyChooseSection from '@/components/sections/commercial/CommercialEstimatingWhyChooseSection'
import CommercialEstimatingIndustriesSection from '@/components/sections/commercial/CommercialEstimatingIndustriesSection'
import CommercialEstimatingSoftwareSection from '@/components/sections/commercial/CommercialEstimatingSoftwareSection'
import CommercialEstimatingHowToStartSection from '@/components/sections/commercial/CommercialEstimatingHowToStartSection'
import CommercialEstimatingServiceAreasSection from '@/components/sections/commercial/CommercialEstimatingServiceAreasSection'
import CommercialEstimatingCTASection from '@/components/sections/commercial/CommercialEstimatingCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Commercial Estimating Services | Professional Commercial Construction Cost Estimates',
  description: 'Accurate, efficient, and professional commercial estimating services for contractors, developers, architects, and design-build firms. Expert commercial construction cost estimates with 24-48 hour turnaround times.',
}

export default function CommercialEstimatingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <CommercialEstimatingHeroSection />
      <CommercialEstimatingOverviewSection />
      <CommercialEstimatingServicesSection />
      <CommercialEstimatingProcessSection />
      <CommercialEstimatingWhyChooseSection />
      <CommercialEstimatingIndustriesSection />
      <CommercialEstimatingSoftwareSection />
      <CommercialEstimatingHowToStartSection />
      <CommercialEstimatingServiceAreasSection />
      <CommercialEstimatingCTASection />
      <FooterSection />
    </div>
  )
}

