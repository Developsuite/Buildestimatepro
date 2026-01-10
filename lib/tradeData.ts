import { getSupabase, TradePageDB } from './supabase'

// Define the trade page interface
export interface TradePage {
  id: string
  slug: string
  title: string
  metaDescription: string
  category?: string
  heroSection: {
    title: string
    description: string
    backgroundImage: string
  }
  overviewSection: {
    title: string
    content: string
    image: string
  }
  servicesSection: {
    title: string
    services: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  benefitsSection: {
    title: string
    benefits: Array<{
      title: string
      description: string
    }>
  }
  ctaSection: {
    title: string
    description: string
    buttonText: string
  }
  published: boolean
  createdAt: string
  updatedAt: string
}

// Convert DB format to frontend format
function dbToFrontend(page: TradePageDB): TradePage {
  return {
    id: page.id,
    slug: page.slug,
    title: page.title,
    metaDescription: page.meta_description,
    category: page.category,
    heroSection: page.hero_section,
    overviewSection: page.overview_section,
    servicesSection: page.services_section,
    benefitsSection: page.benefits_section,
    ctaSection: page.cta_section,
    published: page.published,
    createdAt: page.created_at,
    updatedAt: page.updated_at
  }
}

// Convert frontend format to DB format
function frontendToDb(page: Partial<TradePage>): Partial<TradePageDB> {
  const dbPage: Partial<TradePageDB> = {}
  
  if (page.slug !== undefined) dbPage.slug = page.slug
  if (page.title !== undefined) dbPage.title = page.title
  if (page.metaDescription !== undefined) dbPage.meta_description = page.metaDescription
  if (page.category !== undefined) dbPage.category = page.category
  if (page.heroSection !== undefined) dbPage.hero_section = page.heroSection
  if (page.overviewSection !== undefined) dbPage.overview_section = page.overviewSection
  if (page.servicesSection !== undefined) dbPage.services_section = page.servicesSection
  if (page.benefitsSection !== undefined) dbPage.benefits_section = page.benefitsSection
  if (page.ctaSection !== undefined) dbPage.cta_section = page.ctaSection
  if (page.published !== undefined) dbPage.published = page.published
  
  return dbPage
}

// Get all trade pages
export async function getAllTradePages(): Promise<TradePage[]> {
  const { data, error } = await getSupabase()
    .from('trades')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data || []).map(dbToFrontend)
}

// Get single trade page by slug
export async function getTradePageBySlug(slug: string): Promise<TradePage | null> {
  const { data, error } = await getSupabase()
    .from('trades')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data ? dbToFrontend(data) : null
}

// Get single trade page by ID
export async function getTradePageById(id: string): Promise<TradePage | null> {
  const { data, error } = await getSupabase()
    .from('trades')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data ? dbToFrontend(data) : null
}

// Create new trade page
export async function createTradePage(page: Omit<TradePage, 'id' | 'createdAt' | 'updatedAt'>): Promise<TradePage> {
  const now = new Date().toISOString()
  const dbPage = {
    ...frontendToDb(page),
    created_at: now,
    updated_at: now
  }
  
  const { data, error } = await getSupabase()
    .from('trades')
    .insert(dbPage)
    .select()
    .single()
  
  if (error) throw error
  return dbToFrontend(data)
}

// Update trade page
export async function updateTradePage(id: string, updates: Partial<TradePage>): Promise<TradePage | null> {
  const dbUpdates: Partial<TradePageDB> = {
    ...frontendToDb(updates),
    updated_at: new Date().toISOString()
  }
  
  const { data, error } = await getSupabase()
    .from('trades')
    .update(dbUpdates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }
  return data ? dbToFrontend(data) : null
}

// Delete trade page
export async function deleteTradePage(id: string): Promise<boolean> {
  const { error } = await getSupabase()
    .from('trades')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}

// Get published pages only
export async function getPublishedTradePages(): Promise<TradePage[]> {
  const { data, error } = await getSupabase()
    .from('trades')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data || []).map(dbToFrontend)
}
