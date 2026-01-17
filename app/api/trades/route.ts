import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const runtime = 'edge'

export async function GET() {
    try {
        const supabase = getSupabase()
        const { data, error } = await supabase
            .from('trades')
            .select('id, slug, title, category, published')
            .eq('published', true)
            .order('created_at', { ascending: false })

        if (error) throw error

        // Transform database fields to camelCase for frontend
        const trades = data.map(trade => ({
            id: trade.id,
            title: trade.title,
            slug: trade.slug,
            category: trade.category
        }))

        return NextResponse.json(trades)
    } catch (error) {
        console.error('Error fetching trades:', error)
        return NextResponse.json(
            [],
            { status: 500 }
        )
    }
}
