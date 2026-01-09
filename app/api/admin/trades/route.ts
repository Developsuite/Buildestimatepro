import { NextRequest, NextResponse } from 'next/server'
import { getAllTradePages, createTradePage } from '@/lib/tradeData'

// GET - Get all trade pages
export async function GET() {
  try {
    const pages = getAllTradePages()
    
    return NextResponse.json({
      success: true,
      pages
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pages' },
      { status: 500 }
    )
  }
}

// POST - Create new trade page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newPage = createTradePage(body)
    
    return NextResponse.json({
      success: true,
      page: newPage
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create page' },
      { status: 500 }
    )
  }
}



