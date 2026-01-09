import SampleHeroSection from '@/components/sections/samples/SampleHeroSection'
import SampleGrid from '@/components/sections/samples/SampleGrid'
import SampleFAQSection from '@/components/sections/samples/SampleFAQSection'
import FooterSection from '@/components/sections/home/FooterSection'

export default function Samples() {
  return (
    <div className="bg-[#F5F1E6]">
      <SampleHeroSection />
      <SampleGrid />
      <SampleFAQSection />
      <FooterSection />
    </div>
  )
}


