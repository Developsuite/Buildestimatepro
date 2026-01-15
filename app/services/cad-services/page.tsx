import { Metadata } from 'next'
import CADServicesHeroSection from '@/components/sections/cad-services/CADServicesHeroSection'
import CADServicesOverviewSection from '@/components/sections/cad-services/CADServicesOverviewSection'
import CADServicesIndustriesSection from '@/components/sections/cad-services/CADServicesIndustriesSection'
import CADServicesOfferingsSection from '@/components/sections/cad-services/CADServicesOfferingsSection'
import CADServicesWhyChooseSection from '@/components/sections/cad-services/CADServicesWhyChooseSection'
import CADServicesHowToStartSection from '@/components/sections/cad-services/CADServicesHowToStartSection'
import CADServicesSoftwareSection from '@/components/sections/cad-services/CADServicesSoftwareSection'
import CADServicesFAQSection from '@/components/sections/cad-services/CADServicesFAQSection'
import CADServicesCTASection from '@/components/sections/cad-services/CADServicesCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Expert CAD Drafting Services | BuildEstimatePro',
  description: 'Professional CAD drafting and design services for construction projects. 2D/3D CAD drawings, architectural drafting, MEP services, and structural design across the USA.',
  keywords: 'CAD drafting services, CAD design, 2D CAD, 3D CAD, architectural drafting, MEP drafting, structural CAD, USA',
  openGraph: {
    title: 'Expert CAD Drafting Services | BuildEstimatePro',
    description: 'High-quality CAD drafting and design services with 25+ years of experience. Get accurate blueprints for your construction projects.',
    type: 'website',
  },
}

export default function CADServicesPage() {
  return (
    <main className="min-h-screen">
      <CADServicesHeroSection />
      <CADServicesOverviewSection />
      <CADServicesIndustriesSection />
      <CADServicesOfferingsSection />
      <CADServicesWhyChooseSection />
      <CADServicesHowToStartSection />
      <CADServicesSoftwareSection />
      <CADServicesFAQSection />
      <CADServicesCTASection />
      <FooterSection />
    </main>
  )
}


