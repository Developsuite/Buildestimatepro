import { notFound } from 'next/navigation'
import { getTradePageBySlug } from '@/lib/tradeData'
import TradePageHeroSection from '@/components/sections/trades/TradePageHeroSection'
import TradePageOverviewSection from '@/components/sections/trades/TradePageOverviewSection'
import TradePageServicesSection from '@/components/sections/trades/TradePageServicesSection'
import TradePageBenefitsSection from '@/components/sections/trades/TradePageBenefitsSection'
import TradePageCTASection from '@/components/sections/trades/TradePageCTASection'
import FooterSection from '@/components/sections/home/FooterSection'
import { Metadata } from 'next'

// Force dynamic rendering for Cloudflare Pages compatibility
export const dynamic = 'force-dynamic'

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  
  try {
    const page = await getTradePageBySlug(slug)

    if (!page) {
      return {
        title: 'Page Not Found | BuildEstimatePro',
      }
    }

    return {
      title: `${page.title} | BuildEstimatePro`,
      description: page.metaDescription || `Professional ${page.title} for your construction projects.`,
      openGraph: {
        title: `${page.title} | BuildEstimatePro`,
        description: page.metaDescription || `Professional ${page.title} for your construction projects.`,
        type: 'website',
      },
    }
  } catch {
    return {
      title: 'Trade Services | BuildEstimatePro',
    }
  }
}

export default async function TradePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const page = await getTradePageBySlug(slug)

  if (!page || !page.published) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <TradePageHeroSection data={page.heroSection} title={page.title} />
      <TradePageOverviewSection data={page.overviewSection} />
      <TradePageServicesSection data={page.servicesSection} />
      <TradePageBenefitsSection data={page.benefitsSection} />
      <TradePageCTASection data={page.ctaSection} />
      <FooterSection />
    </main>
  )
}


