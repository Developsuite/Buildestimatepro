import { Metadata } from 'next'
import VirtualBidManagementHeroSection from '@/components/sections/virtual-bid-management/VirtualBidManagementHeroSection'
import VirtualBidManagementOverviewSection from '@/components/sections/virtual-bid-management/VirtualBidManagementOverviewSection'
import VirtualBidManagementServicesSection from '@/components/sections/virtual-bid-management/VirtualBidManagementServicesSection'
import VirtualBidManagementWhyChooseSection from '@/components/sections/virtual-bid-management/VirtualBidManagementWhyChooseSection'
import VirtualBidManagementPricingSection from '@/components/sections/virtual-bid-management/VirtualBidManagementPricingSection'
import VirtualBidManagementCTASection from '@/components/sections/virtual-bid-management/VirtualBidManagementCTASection'
import FooterSection from '@/components/sections/home/FooterSection'

export const metadata: Metadata = {
  title: 'Virtual Bid Management Services | BuildEstimatePro',
  description: 'Streamline your construction bidding process with our Virtual Bid Manager service. Expert bid management, competitive strategies, and winning proposals for contractors and builders across the USA.',
  keywords: 'virtual bid management, construction bidding, bid manager, proposal creation, subcontractor management, bid analysis, construction estimating, USA',
  openGraph: {
    title: 'Virtual Bid Management Services | BuildEstimatePro',
    description: 'Transform your bidding process with expert Virtual Bid Manager services. Win more contracts and grow your construction business.',
    type: 'website',
  },
}

export default function VirtualBidManagementPage() {
  return (
    <main className="min-h-screen">
      <VirtualBidManagementHeroSection />
      <VirtualBidManagementOverviewSection />
      <VirtualBidManagementServicesSection />
      <VirtualBidManagementWhyChooseSection />
      <VirtualBidManagementPricingSection />
      <VirtualBidManagementCTASection />
      <FooterSection />
    </main>
  )
}

