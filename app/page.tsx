import Hero from '@/components/sections/home/Hero'
import InfoSection from '@/components/sections/home/InfoSection'
import ProcessSection from '@/components/sections/home/ProcessSection'
import BookingSection from '@/components/sections/home/BookingSection'
import ServicesCardsSection from '@/components/sections/home/ServicesCardsSection'
import ProjectsSliderSection from '@/components/sections/home/ProjectsSliderSection'
import EstimatingServicesSection from '@/components/sections/home/EstimatingServicesSection'
import CTASection from '@/components/sections/home/CTASection'
import WhyChooseSection from '@/components/sections/home/WhyChooseSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import CertificatesTickerSection from '@/components/sections/home/CertificatesTickerSection'
import ImageBannerSection from '@/components/sections/home/ImageBannerSection'
import FAQSection from '@/components/sections/home/FAQSection'
import BlogSection from '@/components/sections/home/BlogSection'
import FooterSection from '@/components/sections/home/FooterSection'

export default function Home() {
  return (
    <div className="bg-[#F5F1E6]">
      <Hero />
      <InfoSection />
      <BookingSection />
      <ServicesCardsSection />
      <CTASection />
      <WhyChooseSection />
      <EstimatingServicesSection />
      <ProjectsSliderSection />
      <ProcessSection />
      <TestimonialsSection />
      <CertificatesTickerSection />
      <ImageBannerSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </div>
  )
}

