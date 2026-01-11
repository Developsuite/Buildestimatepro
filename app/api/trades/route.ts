import { NextResponse } from 'next/server'
import { getPublishedTradePages } from '@/lib/tradeData'

export const runtime = 'edge'

export async function GET() {
  try {
    const trades = await getPublishedTradePages()
    
    // Return only the necessary fields for the navbar
    const navbarTrades = trades.map(trade => ({
      id: trade.id,
      title: trade.title,
      slug: trade.slug,
      category: trade.category || ''
    }))
    
    return NextResponse.json(navbarTrades)
  } catch (error) {
    console.error('Error fetching trades:', error)
    return NextResponse.json([], { status: 200 })
  }
}

