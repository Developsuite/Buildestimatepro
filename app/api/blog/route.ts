import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const runtime = 'edge'

export async function GET() {
    try {
        const supabase = getSupabase()
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('published', true)
            .order('published_at', { ascending: false })

        if (error) throw error

        // Transform database fields to camelCase if needed by frontend
        const posts = data.map(post => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            featuredImage: post.featured_image,
            author: post.author,
            publishedAt: post.published_at,
            category: post.category,
            tags: post.tags,
            published: post.published
        }))

        return NextResponse.json({ success: true, posts })
    } catch (error) {
        console.error('Error fetching blog posts:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blog posts' },
            { status: 500 }
        )
    }
}
