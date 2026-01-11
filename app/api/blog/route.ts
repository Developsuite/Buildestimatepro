import { NextResponse } from 'next/server'
import { getPublishedBlogPosts } from '@/lib/blogData'

export const runtime = 'edge'

export async function GET() {
  try {
    const posts = await getPublishedBlogPosts()
    
    return NextResponse.json({
      success: true,
      posts
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
