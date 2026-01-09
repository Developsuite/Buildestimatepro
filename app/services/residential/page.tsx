import type { Metadata } from 'next'
import ResidentialEstimatingHeroSection from '@/components/sections/residential/ResidentialEstimatingHeroSection'
import ResidentialEstimatingOverviewSection from '@/components/sections/residential/ResidentialEstimatingOverviewSection'
import ResidentialEstimatingPortfolioSection from '@/components/sections/residential/ResidentialEstimatingPortfolioSection'
import ResidentialEstimatingServicesSection from '@/components/sections/residential/ResidentialEstimatingServicesSection'
import ResidentialEstimatingMaterialsSection from '@/components/sections/residential/ResidentialEstimatingMaterialsSection'
import ResidentialEstimatingWhyChooseSection from '@/components/sections/residential/ResidentialEstimatingWhyChooseSection'
import ResidentialEstimatingHowToStartSection from '@/components/sections/residential/ResidentialEstimatingHowToStartSection'
import ResidentialEstimatingServiceAreasSection from '@/components/sections/residential/ResidentialEstimatingServiceAreasSection'
import ResidentialEstimatingCTASection from '@/components/sections/residential/ResidentialEstimatingCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Residential Estimating Services | Home Construction Cost Estimates',
  description: 'Professional residential construction estimating services for new builds, renovations, and home additions. Accurate cost estimates and material takeoffs to help homeowners, contractors, and builders plan successful residential projects.',
}

export default function ResidentialEstimatingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <ResidentialEstimatingHeroSection />
      <ResidentialEstimatingOverviewSection />
      <ResidentialEstimatingPortfolioSection />
      <ResidentialEstimatingServicesSection />
      <ResidentialEstimatingMaterialsSection />
      <ResidentialEstimatingWhyChooseSection />
      <ResidentialEstimatingHowToStartSection />
      <ResidentialEstimatingServiceAreasSection />
      <ResidentialEstimatingCTASection />
      <FooterSection />
    </div>
  )
}

