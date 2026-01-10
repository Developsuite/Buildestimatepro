import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostById, getBlogPostBySlug } from '@/lib/blogData'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Try to find by ID first, then by slug
    let post = await getBlogPostById(params.id)
    
    if (!post) {
      post = await getBlogPostBySlug(params.id)
    }
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      post
    })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}
