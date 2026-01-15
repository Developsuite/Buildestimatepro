'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface BlogPostData {
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  category: string
  tags: string[]
  metaDescription: string
  published: boolean
  publishedAt?: string
}

interface BlogPostEditorProps {
  postId?: string
}

export default function BlogPostEditor({ postId }: BlogPostEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('content')
  const [tagInput, setTagInput] = useState('')
  
  const [formData, setFormData] = useState<BlogPostData>({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    author: 'Admin',
    category: 'General',
    tags: [],
    metaDescription: '',
    published: false
  })

  useEffect(() => {
    if (postId) {
      fetchPost()
    }
  }, [postId])

  const fetchPost = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/blog/${postId}`)
      const data = await response.json()
      
      if (data.success) {
        setFormData(data.post)
      }
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (publish: boolean = false) => {
    setSaving(true)
    try {
      const dataToSave = {
        ...formData,
        published: publish,
        publishedAt: publish ? new Date().toISOString() : formData.publishedAt
      }

      const url = postId ? `/api/admin/blog/${postId}` : '/api/admin/blog'
      const method = postId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      })

      if (response.ok) {
        router.push('/admin/blog')
      }
    } catch (error) {
      console.error('Error saving post:', error)
    } finally {
      setSaving(false)
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      })
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const tabs = [
    { id: 'content', name: 'Content', icon: '📝' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'seo', name: 'SEO', icon: '🔍' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-[#E8481C] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#121212]/70 font-figtree">Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#121212] font-figtree">
            {postId ? 'Edit' : 'Create New'} Blog Post
          </h1>
          <p className="text-[#121212]/70 font-figtree mt-1">
            Write and publish your blog content
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/admin/blog')}
            className="px-6 py-3 bg-white border border-[#121212]/20 text-[#121212] font-semibold rounded-lg hover:bg-[#F5F1E6] transition-all font-figtree"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-6 py-3 bg-[#121212] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-all font-figtree disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-6 py-3 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#E8481C]/30 transition-all font-figtree disabled:opacity-50"
          >
            {saving ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-[#121212]/10 overflow-hidden">
        <div className="flex border-b border-[#121212]/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap font-figtree ${
                activeTab === tab.id
                  ? 'bg-[#E8481C] text-white'
                  : 'text-[#121212]/70 hover:bg-[#F5F1E6]'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Post Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => {
                    const title = e.target.value
                    setFormData({ 
                      ...formData, 
                      title,
                      slug: generateSlug(title)
                    })
                  }}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree text-lg"
                  placeholder="Enter your blog post title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Brief description of your post..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={formData.featuredImage}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="https://example.com/image.jpg"
                />
                
                {/* Image Preview */}
                {formData.featuredImage && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-[#121212] mb-2 font-figtree">Preview:</p>
                    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-[#121212]/10">
                      <img
                        src={formData.featuredImage}
                        alt="Featured image preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm font-figtree">
                        Failed to load image
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Content *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={20}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree font-mono text-sm"
                  placeholder="Write your blog post content here... You can use Markdown formatting."
                />
                <p className="text-sm text-[#121212]/60 mt-2 font-figtree">
                  Supports Markdown formatting. Use **bold**, *italic*, # headings, etc.
                </p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  URL Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="blog-post-url"
                />
                <p className="text-sm text-[#121212]/60 mt-1 font-figtree">
                  Post URL: /blog/{formData.slug || 'your-slug'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                >
                  <option value="General">General</option>
                  <option value="Technology">Technology</option>
                  <option value="Best Practices">Best Practices</option>
                  <option value="Industry News">Industry News</option>
                  <option value="Tips & Tricks">Tips & Tricks</option>
                  <option value="Case Studies">Case Studies</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                    placeholder="Add a tag..."
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2 bg-[#E8481C] text-white rounded-lg hover:bg-[#E8481C]/90 transition-all font-figtree"
                  >
                    Add
                  </button>
                </div>
                
                {/* Tags Display */}
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F1E6] text-[#121212] rounded-full text-sm font-figtree"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="text-[#121212]/60 hover:text-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Brief description for search engines (150-160 characters)"
                />
                <p className="text-sm text-[#121212]/60 mt-1 font-figtree">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>

              <div className="bg-[#F5F1E6] p-6 rounded-lg">
                <h3 className="font-semibold text-[#121212] mb-4 font-figtree">SEO Preview</h3>
                <div className="space-y-2">
                  <div className="text-blue-600 text-lg font-figtree hover:underline cursor-pointer">
                    {formData.title || 'Your Blog Post Title'}
                  </div>
                  <div className="text-green-700 text-sm font-figtree">
                    yoursite.com/blog/{formData.slug || 'your-slug'}
                  </div>
                  <div className="text-gray-600 text-sm font-figtree">
                    {formData.metaDescription || formData.excerpt || 'Your meta description will appear here...'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}