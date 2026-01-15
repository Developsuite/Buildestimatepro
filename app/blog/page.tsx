'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  author: string
  publishedAt: string
  category: string
  tags?: string[]
  published: boolean
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      
      if (data.success && Array.isArray(data.posts)) {
        setPosts(data.posts.filter((post: BlogPost) => post.published))
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#F5F1E6] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-[50px] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/home/image7.jpg" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/80 to-[#121212]/60"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8481C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0063BF]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-figtree leading-tight">
            Construction Industry
            <span className="block text-[#E8481C]">Insights & Tips</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-figtree leading-relaxed mb-8">
            Stay updated with the latest trends, tips, and insights from the construction estimation industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-[#E8481C] text-white font-semibold font-figtree overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#E8481C]/30"
            >
              <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-[#E8481C] transition-colors duration-300 flex items-center gap-2">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold font-figtree overflow-hidden transition-all duration-300 hover:border-[#E8481C]"
            >
              <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300 flex items-center gap-2">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-[50px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4 font-figtree">
              Latest Articles
            </h2>
            <p className="text-[#121212]/70 font-figtree">
              Explore our collection of construction insights and tips.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block w-8 h-8 border-4 border-[#E8481C] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-[#121212]/70 font-figtree">Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-[#121212]/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-xl font-semibold text-[#121212] mb-2 font-figtree">No blog posts yet</p>
              <p className="text-[#121212]/70 font-figtree">Check back soon for construction insights!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white overflow-hidden rounded-xl border border-[#121212]/10 hover:border-[#E8481C]/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F5F1E6] to-[#E8E4D9]">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-bold text-white bg-[#E8481C] rounded-full font-figtree">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#121212]/60 mb-3 font-figtree">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#121212] mb-3 font-figtree group-hover:text-[#E8481C] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-[#121212]/70 mb-4 font-figtree leading-relaxed">
                      {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#E8481C] font-semibold font-figtree hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#121212] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/70 font-figtree">
            © {new Date().getFullYear()} Construct Estimates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}