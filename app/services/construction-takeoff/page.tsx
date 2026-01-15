import { Metadata } from 'next'
import ConstructionTakeoffHeroSection from '@/components/sections/construction-takeoff/ConstructionTakeoffHeroSection'
import ConstructionTakeoffOverviewSection from '@/components/sections/construction-takeoff/ConstructionTakeoffOverviewSection'
import ConstructionTakeoffWhatIsSection from '@/components/sections/construction-takeoff/ConstructionTakeoffWhatIsSection'
import ConstructionTakeoffServicesSection from '@/components/sections/construction-takeoff/ConstructionTakeoffServicesSection'
import ConstructionTakeoffFeaturesSection from '@/components/sections/construction-takeoff/ConstructionTakeoffFeaturesSection'
import ConstructionTakeoffSoftwareSection from '@/components/sections/construction-takeoff/ConstructionTakeoffSoftwareSection'
import ConstructionTakeoffPortfolioSection from '@/components/sections/construction-takeoff/ConstructionTakeoffPortfolioSection'
import ConstructionTakeoffWhyChooseSection from '@/components/sections/construction-takeoff/ConstructionTakeoffWhyChooseSection'
import ConstructionTakeoffProcessSection from '@/components/sections/construction-takeoff/ConstructionTakeoffProcessSection'
import ConstructionTakeoffClientsSection from '@/components/sections/construction-takeoff/ConstructionTakeoffClientsSection'
import ConstructionTakeoffCTASection from '@/components/sections/construction-takeoff/ConstructionTakeoffCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Construction Takeoff Services | BuildEstimatePro',
  description: 'Professional construction takeoff services for accurate material estimates. Expert quantity takeoff, blueprint analysis, and cost estimation for contractors and builders.',
  keywords: 'construction takeoff services, material takeoff, quantity takeoff, blueprint takeoff, construction estimating, USA',
  openGraph: {
    title: 'Construction Takeoff Services | BuildEstimatePro',
    description: 'Get accurate construction takeoff services with fast turnaround times. Save money and reduce waste with our expert takeoff solutions.',
    type: 'website',
  },
}

export default function ConstructionTakeoffPage() {
  return (
    <main className="min-h-screen">
      <ConstructionTakeoffHeroSection />
      <ConstructionTakeoffOverviewSection />
      <ConstructionTakeoffWhatIsSection />
      <ConstructionTakeoffServicesSection />
      <ConstructionTakeoffFeaturesSection />
      <ConstructionTakeoffSoftwareSection />
      <ConstructionTakeoffPortfolioSection />
      <ConstructionTakeoffWhyChooseSection />
      <ConstructionTakeoffProcessSection />
      <ConstructionTakeoffClientsSection />
      <ConstructionTakeoffCTASection />
      <FooterSection />
    </main>
  )
}


