import fs from 'fs'
import path from 'path'

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

const DATA_FILE = path.join(process.cwd(), 'data', 'trades.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]))
  }
}

// Get all trade pages
export function getAllTradePages(): TradePage[] {
  ensureDataDir()
  const data = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(data) as TradePage[]
}

// Get single trade page by slug
export function getTradePageBySlug(slug: string): TradePage | null {
  const pages = getAllTradePages()
  return pages.find(page => page.slug === slug) || null
}

// Get single trade page by ID
export function getTradePageById(id: string): TradePage | null {
  const pages = getAllTradePages()
  return pages.find(page => page.id === id) || null
}

// Create new trade page
export function createTradePage(page: Omit<TradePage, 'id' | 'createdAt' | 'updatedAt'>): TradePage {
  ensureDataDir()
  const pages = getAllTradePages()
  
  const newPage: TradePage = {
    ...page,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  pages.push(newPage)
  fs.writeFileSync(DATA_FILE, JSON.stringify(pages, null, 2))
  
  return newPage
}

// Update trade page
export function updateTradePage(id: string, updates: Partial<TradePage>): TradePage | null {
  ensureDataDir()
  const pages = getAllTradePages()
  const index = pages.findIndex(page => page.id === id)
  
  if (index === -1) return null
  
  pages[index] = {
    ...pages[index],
    ...updates,
    id: pages[index].id,
    createdAt: pages[index].createdAt,
    updatedAt: new Date().toISOString()
  }
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(pages, null, 2))
  
  return pages[index]
}

// Delete trade page
export function deleteTradePage(id: string): boolean {
  ensureDataDir()
  const pages = getAllTradePages()
  const filteredPages = pages.filter(page => page.id !== id)
  
  if (filteredPages.length === pages.length) return false
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(filteredPages, null, 2))
  
  return true
}

// Get published pages only
export function getPublishedTradePages(): TradePage[] {
  return getAllTradePages().filter(page => page.published)
}


