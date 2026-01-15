import { getSupabase, BlogPostDB } from './supabase'

// Blog post interface for frontend use
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  publishedAt?: string
  category: string
  tags: string[]
  metaDescription: string
  published: boolean
  createdAt: string
  updatedAt: string
}

// Convert DB format to frontend format
function dbToFrontend(post: BlogPostDB): BlogPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    featuredImage: post.featured_image,
    author: post.author,
    publishedAt: post.published_at,
    category: post.category,
    tags: post.tags,
    metaDescription: post.meta_description,
    published: post.published,
    createdAt: post.created_at,
    updatedAt: post.updated_at
  }
}

// Convert frontend format to DB format
function frontendToDb(post: Partial<BlogPost>): Partial<BlogPostDB> {
  const dbPost: Partial<BlogPostDB> = {}
  
  if (post.title !== undefined) dbPost.title = post.title
  if (post.slug !== undefined) dbPost.slug = post.slug
  if (post.excerpt !== undefined) dbPost.excerpt = post.excerpt
  if (post.content !== undefined) dbPost.content = post.content
  if (post.featuredImage !== undefined) dbPost.featured_image = post.featuredImage
  if (post.author !== undefined) dbPost.author = post.author
  if (post.publishedAt !== undefined) dbPost.published_at = post.publishedAt
  if (post.category !== undefined) dbPost.category = post.category
  if (post.tags !== undefined) dbPost.tags = post.tags
  if (post.metaDescription !== undefined) dbPost.meta_description = post.metaDescription
  if (post.published !== undefined) dbPost.published = post.published
  
  return dbPost
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data || []).map(dbToFrontend)
}

// Get published blog posts only
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
  
  if (error) throw error
  return (data || []).map(dbToFrontend)
}

// Get single blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data ? dbToFrontend(data) : null
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data ? dbToFrontend(data) : null
}

// Create new blog post
export async function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
  const now = new Date().toISOString()
  const dbPost = {
    ...frontendToDb(post),
    published_at: post.published ? now : undefined,
    created_at: now,
    updated_at: now
  }
  
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .insert(dbPost)
    .select()
    .single()
  
  if (error) throw error
  return dbToFrontend(data)
}

// Update blog post
export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const existingPost = await getBlogPostById(id)
  if (!existingPost) return null
  
  const dbUpdates: Partial<BlogPostDB> = {
    ...frontendToDb(updates),
    updated_at: new Date().toISOString()
  }
  
  // Set published_at if publishing for the first time
  if (updates.published && !existingPost.publishedAt) {
    dbUpdates.published_at = new Date().toISOString()
  }
  
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .update(dbUpdates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data ? dbToFrontend(data) : null
}

// Delete blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  const { error } = await getSupabase()
    .from('blog_posts')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}
