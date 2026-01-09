import AboutHeroSection from '@/components/sections/aboutpage/AboutHeroSection'
import AboutValuesSection from '@/components/sections/aboutpage/AboutValuesSection'
import AboutFeaturesSection from '@/components/sections/aboutpage/AboutFeaturesSection'
import AboutCommitmentSection from '@/components/sections/aboutpage/AboutCommitmentSection'
import AboutVideoSection from '@/components/sections/aboutpage/AboutVideoSection'
import AboutDistinguishedSection from '@/components/sections/aboutpage/AboutDistinguishedSection'
import AboutClientsSection from '@/components/sections/aboutpage/AboutClientsSection'
import AboutCSITradesSection from '@/components/sections/aboutpage/AboutCSITradesSection'
import AboutWhySection from '@/components/sections/aboutpage/AboutWhySection'
import AboutFAQSection from '@/components/sections/aboutpage/AboutFAQSection'
import FooterSection from '@/components/sections/home/FooterSection'

export default function AboutPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <AboutHeroSection />
      <AboutValuesSection />
      <AboutFeaturesSection />
      <AboutCommitmentSection />
      <AboutVideoSection />
      <AboutDistinguishedSection />
      <AboutClientsSection />
      <AboutCSITradesSection />
      <AboutWhySection />
      <AboutFAQSection />
      <FooterSection />
    </div>
  )
}

