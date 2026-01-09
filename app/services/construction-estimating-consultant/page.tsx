import { Metadata } from 'next'
import ConstructionEstimatingConsultantHeroSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantHeroSection'
import ConstructionEstimatingConsultantOverviewSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantOverviewSection'
import ConstructionEstimatingConsultantServicesSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantServicesSection'
import ConstructionEstimatingConsultantWhoWeServeSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantWhoWeServeSection'
import ConstructionEstimatingConsultantTradesSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantTradesSection'
import ConstructionEstimatingConsultantProjectsSection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantProjectsSection'
import ConstructionEstimatingConsultantCTASection from '@/components/sections/construction-estimating-consultant/ConstructionEstimatingConsultantCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Construction Estimating Consultant Services | BuildEstimatePro',
  description: 'Expert construction estimating consultant services for contractors, developers, and builders. Get professional advice on budgeting, bidding, and project cost management across the USA.',
  keywords: 'construction estimating consultant, cost estimating services, construction consultant, bid management, project cost management, construction budgeting, USA',
  openGraph: {
    title: 'Construction Estimating Consultant Services | BuildEstimatePro',
    description: 'Professional construction estimating consulting services to help you beat the competition and win more bids.',
    type: 'website',
  },
}

export default function ConstructionEstimatingConsultantPage() {
  return (
    <main className="min-h-screen">
      <ConstructionEstimatingConsultantHeroSection />
      <ConstructionEstimatingConsultantOverviewSection />
      <ConstructionEstimatingConsultantServicesSection />
      <ConstructionEstimatingConsultantWhoWeServeSection />
      <ConstructionEstimatingConsultantTradesSection />
      <ConstructionEstimatingConsultantProjectsSection />
      <ConstructionEstimatingConsultantCTASection />
      <FooterSection />
    </main>
  )
}


