'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import Link from 'next/link'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalPages: 0,
    publishedPages: 0,
    draftPages: 0,
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch trade pages stats
      const tradesResponse = await fetch('/api/admin/trades')
      const tradesData = await tradesResponse.json()
      
      // Fetch blog posts stats
      const blogResponse = await fetch('/api/blog')
      const blogData = await blogResponse.json()
      
      if (tradesData.success && blogData.success) {
        const pages = tradesData.pages
        const posts = blogData.posts
        
        setStats({
          totalPages: pages.length,
          publishedPages: pages.filter((p: any) => p.published).length,
          draftPages: pages.filter((p: any) => !p.published).length,
          totalPosts: posts.length,
          publishedPosts: posts.filter((p: any) => p.published).length,
          draftPosts: posts.filter((p: any) => !p.published).length
        })
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const statCards = [
    {
      title: 'Trade Pages',
      value: stats.totalPages,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Blog Posts',
      value: stats.totalPosts,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      bgColor: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Published',
      value: stats.publishedPages + stats.publishedPosts,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'from-green-500 to-green-600'
    },
    {
      title: 'Drafts',
      value: stats.draftPages + stats.draftPosts,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      bgColor: 'from-yellow-500 to-yellow-600'
    }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-6 border border-[#121212]/10">
          <h1 className="text-3xl font-bold text-[#121212] mb-2 font-figtree">
            Welcome to Trade Pages Admin
          </h1>
          <p className="text-[#121212]/70 font-figtree">
            Manage your 43 trade service pages from this central dashboard
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#121212]/10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.bgColor} flex items-center justify-center text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-[#121212] font-figtree">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#121212]/70 font-figtree">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border border-[#121212]/10">
          <h2 className="text-2xl font-bold text-[#121212] mb-4 font-figtree">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/admin/trades/new"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white rounded-lg hover:shadow-lg hover:shadow-[#E8481C]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <div>
                <h3 className="font-semibold font-figtree text-sm">New Trade Page</h3>
                <p className="text-xs text-white/80 font-figtree">Create from template</p>
              </div>
            </Link>

            <Link
              href="/admin/blog/new"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <div>
                <h3 className="font-semibold font-figtree text-sm">New Blog Post</h3>
                <p className="text-xs text-white/80 font-figtree">Write new article</p>
              </div>
            </Link>

            <Link
              href="/admin/trades"
              className="flex items-center gap-3 p-4 bg-[#121212] text-white rounded-lg hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <div>
                <h3 className="font-semibold font-figtree text-sm">Manage Trades</h3>
                <p className="text-xs text-white/80 font-figtree">View all pages</p>
              </div>
            </Link>

            <Link
              href="/admin/blog"
              className="flex items-center gap-3 p-4 bg-[#0063BF] text-white rounded-lg hover:bg-[#0056a3] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <div>
                <h3 className="font-semibold font-figtree text-sm">Manage Blog</h3>
                <p className="text-xs text-white/80 font-figtree">View all posts</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-xl p-6 border border-[#121212]/10">
          <h2 className="text-2xl font-bold text-[#121212] mb-4 font-figtree">
            Getting Started
          </h2>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 bg-[#F5F1E6] rounded-lg">
              <div className="w-5 h-5 bg-[#E8481C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#121212] font-figtree text-sm">Create Trade Pages</h4>
                <p className="text-xs text-[#121212]/70 font-figtree">Use our template system to quickly create pages for all 43 trades</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-[#F5F1E6] rounded-lg">
              <div className="w-5 h-5 bg-[#E8481C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#121212] font-figtree text-sm">Customize Content</h4>
                <p className="text-xs text-[#121212]/70 font-figtree">Edit text, upload images, and customize each section</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-[#F5F1E6] rounded-lg">
              <div className="w-5 h-5 bg-[#E8481C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#121212] font-figtree text-sm">Publish Pages</h4>
                <p className="text-xs text-[#121212]/70 font-figtree">Review and publish your pages to make them live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}



