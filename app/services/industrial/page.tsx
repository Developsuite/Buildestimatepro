import type { Metadata } from 'next'
import IndustrialEstimatingHeroSection from '@/components/sections/industrial/IndustrialEstimatingHeroSection'
import IndustrialEstimatingOverviewSection from '@/components/sections/industrial/IndustrialEstimatingOverviewSection'
import IndustrialEstimatingWhatWeAcceptSection from '@/components/sections/industrial/IndustrialEstimatingWhatWeAcceptSection'
import IndustrialEstimatingServicesSection from '@/components/sections/industrial/IndustrialEstimatingServicesSection'
import IndustrialEstimatingTakeoffsSection from '@/components/sections/industrial/IndustrialEstimatingTakeoffsSection'
import IndustrialEstimatingSoftwareSection from '@/components/sections/industrial/IndustrialEstimatingSoftwareSection'
import IndustrialEstimatingPortfolioSection from '@/components/sections/industrial/IndustrialEstimatingPortfolioSection'
import IndustrialEstimatingSteelSection from '@/components/sections/industrial/IndustrialEstimatingSteelSection'
import IndustrialEstimatingElectricalSection from '@/components/sections/industrial/IndustrialEstimatingElectricalSection'
import IndustrialEstimatingMechanicalSection from '@/components/sections/industrial/IndustrialEstimatingMechanicalSection'
import IndustrialEstimatingProcessSection from '@/components/sections/industrial/IndustrialEstimatingProcessSection'
import IndustrialEstimatingWhyOutsourceSection from '@/components/sections/industrial/IndustrialEstimatingWhyOutsourceSection'
import IndustrialEstimatingCTASection from '@/components/sections/industrial/IndustrialEstimatingCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Industrial Estimating Services | Professional Industrial Construction Cost Estimates',
  description: 'Professional industrial estimating services for EPC contractors, engineering firms, and industrial projects. Accurate cost estimates for chemical, petrochemical, oil & gas, power generation, and more.',
}

export default function IndustrialEstimatingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <IndustrialEstimatingHeroSection />
      <IndustrialEstimatingOverviewSection />
      <IndustrialEstimatingWhatWeAcceptSection />
      <IndustrialEstimatingServicesSection />
      <IndustrialEstimatingTakeoffsSection />
      <IndustrialEstimatingSoftwareSection />
      <IndustrialEstimatingPortfolioSection />
      <IndustrialEstimatingSteelSection />
      <IndustrialEstimatingElectricalSection />
      <IndustrialEstimatingMechanicalSection />
      <IndustrialEstimatingProcessSection />
      <IndustrialEstimatingWhyOutsourceSection />
      <IndustrialEstimatingCTASection />
      <FooterSection />
    </div>
  )
}

