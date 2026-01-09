import type { Metadata } from 'next'
import MaterialTakeoffHeroSection from '@/components/sections/material-takeoff/MaterialTakeoffHeroSection'
import MaterialTakeoffOverviewSection from '@/components/sections/material-takeoff/MaterialTakeoffOverviewSection'
import MaterialTakeoffWhyChooseSection from '@/components/sections/material-takeoff/MaterialTakeoffWhyChooseSection'
import MaterialTakeoffStatsSection from '@/components/sections/material-takeoff/MaterialTakeoffStatsSection'
import MaterialTakeoffProcessSection from '@/components/sections/material-takeoff/MaterialTakeoffProcessSection'
import MaterialTakeoffBenefitsSection from '@/components/sections/material-takeoff/MaterialTakeoffBenefitsSection'
import MaterialTakeoffMaterialsSection from '@/components/sections/material-takeoff/MaterialTakeoffMaterialsSection'
import MaterialTakeoffWhySection from '@/components/sections/material-takeoff/MaterialTakeoffWhySection'
import MaterialTakeoffFAQSection from '@/components/sections/material-takeoff/MaterialTakeoffFAQSection'
import MaterialTakeoffCTASection from '@/components/sections/material-takeoff/MaterialTakeoffCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Material Takeoff Services | Quantity Takeoff & Material Estimation',
  description: 'Professional material takeoff and quantity takeoff services for construction projects. Accurate material calculations, detailed takeoff sheets, and comprehensive material lists to optimize your project planning and procurement.',
}

export default function MaterialTakeoffPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <MaterialTakeoffHeroSection />
      <MaterialTakeoffOverviewSection />
      <MaterialTakeoffWhyChooseSection />
      <MaterialTakeoffStatsSection />
      <MaterialTakeoffProcessSection />
      <MaterialTakeoffBenefitsSection />
      <MaterialTakeoffMaterialsSection />
      <MaterialTakeoffWhySection />
      <MaterialTakeoffFAQSection />
      <MaterialTakeoffCTASection />
      <FooterSection />
    </div>
  )
}

