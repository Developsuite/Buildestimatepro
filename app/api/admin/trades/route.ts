import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

// GET all trades
export async function GET() {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('trades')
      .select('*')
      .order('updated_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, pages: data })
  } catch (error) {
    console.error('Error fetching trades:', error)
    return NextResponse.json(
      { error: 'Failed to fetch trades' },
      { status: 500 }
    )
  }
}

// POST create new trade
export async function POST(request: NextRequest) {
  try {
    // Debug: Log environment variables (without exposing full keys)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    console.log('ENV Check - URL exists:', !!url, 'Key exists:', !!key)
    console.log('ENV URL:', url?.substring(0, 30) + '...')
    
    const body = await request.json()
    console.log('Received body:', JSON.stringify(body, null, 2))
    
    const supabase = getSupabase()
    
    const now = new Date().toISOString()
    const tradeData = {
      slug: body.slug,
      title: body.title,
      meta_description: body.metaDescription || '',
      category: body.category || null,
      hero_section: body.heroSection || {},
      overview_section: body.overviewSection || {},
      services_section: body.servicesSection || {},
      benefits_section: body.benefitsSection || {},
      cta_section: body.ctaSection || {},
      published: body.published || false,
      created_at: now,
      updated_at: now
    }

    console.log('Inserting trade data:', JSON.stringify(tradeData, null, 2))

    const { data, error } = await supabase
      .from('trades')
      .insert(tradeData)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: `Database error: ${error.message}`, details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, page: data })
  } catch (error: any) {
    console.error('Error creating trade:', error)
    return NextResponse.json(
      { error: `Failed to create trade: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}
