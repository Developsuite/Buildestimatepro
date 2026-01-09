'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface TradePage {
  id: string
  slug: string
  title: string
  published: boolean
  updatedAt: string
}

export default function AdminTradesListPage() {
  const router = useRouter()
  const [pages, setPages] = useState<TradePage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/admin/trades')
      const data = await response.json()
      
      if (data.success) {
        setPages(data.pages)
      }
    } catch (error) {
      console.error('Error fetching pages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return

    try {
      const response = await fetch(`/api/admin/trades/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setPages(pages.filter(p => p.id !== id))
      }
    } catch (error) {
      console.error('Error deleting page:', error)
    }
  }

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.slug.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'published' && page.published) ||
                         (filterStatus === 'draft' && !page.published)
    
    return matchesSearch && matchesFilter
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#121212] font-figtree">Trade Pages</h1>
            <p className="text-[#121212]/70 font-figtree mt-1">Manage all your trade service pages</p>
          </div>
          <Link
            href="/admin/trades/new"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#E8481C]/30 transition-all duration-300 font-figtree"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Page
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 border border-[#121212]/10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              {['all', 'published', 'draft'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status as any)}
                  className={`px-4 py-2 rounded-lg font-medium font-figtree transition-all ${
                    filterStatus === status
                      ? 'bg-[#E8481C] text-white'
                      : 'bg-[#F5F1E6] text-[#121212] hover:bg-[#E8481C]/10'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pages List */}
        <div className="bg-white rounded-xl border border-[#121212]/10 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#E8481C] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-[#121212]/70 font-figtree">Loading pages...</p>
            </div>
          ) : filteredPages.length === 0 ? (
            <div className="p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-[#121212]/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-xl font-semibold text-[#121212] mb-2 font-figtree">No pages found</p>
              <p className="text-[#121212]/70 font-figtree">Create your first trade page to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F5F1E6]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#121212] font-figtree">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#121212] font-figtree">Slug</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#121212] font-figtree">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#121212] font-figtree">Last Updated</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#121212] font-figtree">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#121212]/10">
                  {filteredPages.map((page) => (
                    <tr key={page.id} className="hover:bg-[#F5F1E6]/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-[#121212] font-figtree">{page.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-sm text-[#121212]/70 bg-[#F5F1E6] px-2 py-1 rounded font-figtree">
                          /{page.slug}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-figtree ${
                          page.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {page.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#121212]/70 font-figtree">
                        {new Date(page.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/trades/edit/${page.id}`}
                            className="p-2 text-[#0063BF] hover:bg-[#0063BF]/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDelete(page.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}



