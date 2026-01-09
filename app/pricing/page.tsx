import PricingHeroSection from '@/components/sections/pricing/PricingHeroSection'
import PricingPlansSection from '@/components/sections/pricing/PricingPlansSection'
import PricingStatsSection from '@/components/sections/pricing/PricingStatsSection'
import PaymentMethodsSection from '@/components/sections/pricing/PaymentMethodsSection'
import PricingFAQSection from '@/components/sections/pricing/PricingFAQSection'
import FooterSection from '@/components/sections/home/FooterSection'

export default function Pricing() {
  return (
    <div className="bg-[#F5F1E6]">
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingStatsSection />
      <PaymentMethodsSection />
      <PricingFAQSection />
      <FooterSection />
    </div>
  )
}

