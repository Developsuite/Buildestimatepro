import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

// GET single trade by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('trades')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Trade not found' },
          { status: 404 }
        )
      }
      throw error
    }

    return NextResponse.json({ success: true, page: data })
  } catch (error) {
    console.error('Error fetching trade:', error)
    return NextResponse.json(
      { error: 'Failed to fetch trade' },
      { status: 500 }
    )
  }
}

// PUT update trade
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const supabase = getSupabase()

    const updateData = {
      slug: body.slug,
      title: body.title,
      meta_description: body.metaDescription || '',
      category: body.category || null,
      hero_section: body.heroSection,
      overview_section: body.overviewSection,
      services_section: body.servicesSection,
      benefits_section: body.benefitsSection,
      cta_section: body.ctaSection,
      published: body.published || false,
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('trades')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, page: data })
  } catch (error) {
    console.error('Error updating trade:', error)
    return NextResponse.json(
      { error: 'Failed to update trade' },
      { status: 500 }
    )
  }
}

// DELETE trade
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabase()
    const { error } = await supabase
      .from('trades')
      .delete()
      .eq('id', params.id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting trade:', error)
    return NextResponse.json(
      { error: 'Failed to delete trade' },
      { status: 500 }
    )
  }
}
