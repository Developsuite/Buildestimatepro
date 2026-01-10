import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a lazy-initialized Supabase client
let supabaseInstance: SupabaseClient | null = null

export const getSupabase = (): SupabaseClient => {
  if (!supabaseInstance) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL and Anon Key are required. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.')
    }
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
}

// For backward compatibility - will throw if env vars not set
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as unknown as SupabaseClient

// Types for database tables
export interface TradePageDB {
  id: string
  slug: string
  title: string
  meta_description: string
  category?: string
  hero_section: {
    title: string
    description: string
    backgroundImage: string
  }
  overview_section: {
    title: string
    content: string
    image: string
  }
  services_section: {
    title: string
    services: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  benefits_section: {
    title: string
    benefits: Array<{
      title: string
      description: string
    }>
  }
  cta_section: {
    title: string
    description: string
    buttonText: string
  }
  published: boolean
  created_at: string
  updated_at: string
}

export interface BlogPostDB {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  author: string
  published_at?: string
  category: string
  tags: string[]
  meta_description: string
  published: boolean
  created_at: string
  updated_at: string
}
