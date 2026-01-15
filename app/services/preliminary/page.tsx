import type { Metadata } from 'next'
import PreliminaryEstimatingHeroSection from '@/components/sections/preliminary/PreliminaryEstimatingHeroSection'
import PreliminaryEstimatingOverviewSection from '@/components/sections/preliminary/PreliminaryEstimatingOverviewSection'
import PreliminaryEstimatingWhatIsSection from '@/components/sections/preliminary/PreliminaryEstimatingWhatIsSection'
import PreliminaryEstimatingTypesSection from '@/components/sections/preliminary/PreliminaryEstimatingTypesSection'
import PreliminaryEstimatingBenefitsSection from '@/components/sections/preliminary/PreliminaryEstimatingBenefitsSection'
import PreliminaryEstimatingWhatYouGetSection from '@/components/sections/preliminary/PreliminaryEstimatingWhatYouGetSection'
import PreliminaryEstimatingHowWePrepareSection from '@/components/sections/preliminary/PreliminaryEstimatingHowWePrepareSection'
import PreliminaryEstimatingFactorsSection from '@/components/sections/preliminary/PreliminaryEstimatingFactorsSection'
import PreliminaryEstimatingWhyOutsourceSection from '@/components/sections/preliminary/PreliminaryEstimatingWhyOutsourceSection'
import PreliminaryEstimatingHowToStartSection from '@/components/sections/preliminary/PreliminaryEstimatingHowToStartSection'
import PreliminaryEstimatingCTASection from '@/components/sections/preliminary/PreliminaryEstimatingCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Preliminary Estimate Services | Conceptual Construction Cost Estimates',
  description: 'Professional preliminary and conceptual estimating services for construction projects. Fast preliminary estimates with square footage costs to analyze project feasibility before detailed plans.',
}

export default function PreliminaryEstimatingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <PreliminaryEstimatingHeroSection />
      <PreliminaryEstimatingOverviewSection />
      <PreliminaryEstimatingWhatIsSection />
      <PreliminaryEstimatingTypesSection />
      <PreliminaryEstimatingBenefitsSection />
      <PreliminaryEstimatingWhatYouGetSection />
      <PreliminaryEstimatingHowWePrepareSection />
      <PreliminaryEstimatingFactorsSection />
      <PreliminaryEstimatingWhyOutsourceSection />
      <PreliminaryEstimatingHowToStartSection />
      <PreliminaryEstimatingCTASection />
      <FooterSection />
    </div>
  )
}

