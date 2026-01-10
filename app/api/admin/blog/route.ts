import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogPosts, createBlogPost } from '@/lib/blogData'

export async function GET() {
  try {
    const posts = await getAllBlogPosts()
    
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

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newPost = await createBlogPost(data)
    
    return NextResponse.json({
      success: true,
      post: newPost
    })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
