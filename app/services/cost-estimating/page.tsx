import type { Metadata } from 'next'
import CostEstimatingHeroSection from '@/components/sections/cost-estimating/CostEstimatingHeroSection'
import CostEstimatingOverviewSection from '@/components/sections/cost-estimating/CostEstimatingOverviewSection'
import CostEstimatingServicesSection from '@/components/sections/cost-estimating/CostEstimatingServicesSection'
import CostEstimatingWhyChooseSection from '@/components/sections/cost-estimating/CostEstimatingWhyChooseSection'
import CostEstimatingBenefitsSection from '@/components/sections/cost-estimating/CostEstimatingBenefitsSection'
import CostEstimatingHowToStartSection from '@/components/sections/cost-estimating/CostEstimatingHowToStartSection'
import CostEstimatingServiceAreasSection from '@/components/sections/cost-estimating/CostEstimatingServiceAreasSection'
import CostEstimatingCTASection from '@/components/sections/cost-estimating/CostEstimatingCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Cost Estimating Services | Professional Construction Cost Estimates',
  description: 'Expert construction cost estimating services for contractors, developers, and architects. Accurate, timely, and detailed cost estimates to help you bid competitively and manage project budgets effectively.',
}

export default function CostEstimatingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <CostEstimatingHeroSection />
      <CostEstimatingOverviewSection />
      <CostEstimatingServicesSection />
      <CostEstimatingWhyChooseSection />
      <CostEstimatingBenefitsSection />
      <CostEstimatingHowToStartSection />
      <CostEstimatingServiceAreasSection />
      <CostEstimatingCTASection />
      <FooterSection />
    </div>
  )
}

