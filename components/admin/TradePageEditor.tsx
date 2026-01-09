'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface TradePageData {
  slug: string
  title: string
  metaDescription: string
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
}

interface TradePageEditorProps {
  pageId?: string
}

export default function TradePageEditor({ pageId }: TradePageEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('basic')
  
  const [formData, setFormData] = useState<TradePageData>({
    slug: '',
    title: '',
    metaDescription: '',
    heroSection: {
      title: '',
      description: '',
      backgroundImage: '/images/home/image7.jpg'
    },
    overviewSection: {
      title: '',
      content: '',
      image: '/images/home/image4.jpg'
    },
    servicesSection: {
      title: 'Our Services',
      services: [
        { title: '', description: '', icon: 'wrench' }
      ]
    },
    benefitsSection: {
      title: 'Why Choose Us',
      benefits: [
        { title: '', description: '' }
      ]
    },
    ctaSection: {
      title: 'Get Started Today',
      description: 'Contact us for a free consultation',
      buttonText: 'Contact Us'
    },
    published: false
  })

  useEffect(() => {
    if (pageId) {
      fetchPage()
    }
  }, [pageId])

  const fetchPage = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/trades/${pageId}`)
      const data = await response.json()
      
      if (data.success) {
        setFormData(data.page)
      }
    } catch (error) {
      console.error('Error fetching page:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (publish: boolean = false) => {
    setSaving(true)
    try {
      const dataToSave = {
        ...formData,
        published: publish
      }

      const url = pageId ? `/api/admin/trades/${pageId}` : '/api/admin/trades'
      const method = pageId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      })

      if (response.ok) {
        router.push('/admin/trades')
      }
    } catch (error) {
      console.error('Error saving page:', error)
    } finally {
      setSaving(false)
    }
  }

  const addService = () => {
    setFormData({
      ...formData,
      servicesSection: {
        ...formData.servicesSection,
        services: [
          ...formData.servicesSection.services,
          { title: '', description: '', icon: 'wrench' }
        ]
      }
    })
  }

  const removeService = (index: number) => {
    setFormData({
      ...formData,
      servicesSection: {
        ...formData.servicesSection,
        services: formData.servicesSection.services.filter((_, i) => i !== index)
      }
    })
  }

  const addBenefit = () => {
    setFormData({
      ...formData,
      benefitsSection: {
        ...formData.benefitsSection,
        benefits: [
          ...formData.benefitsSection.benefits,
          { title: '', description: '' }
        ]
      }
    })
  }

  const removeBenefit = (index: number) => {
    setFormData({
      ...formData,
      benefitsSection: {
        ...formData.benefitsSection,
        benefits: formData.benefitsSection.benefits.filter((_, i) => i !== index)
      }
    })
  }

  const tabs = [
    { id: 'basic', name: 'Basic Info', icon: '📝' },
    { id: 'hero', name: 'Hero Section', icon: '🎨' },
    { id: 'overview', name: 'Overview', icon: '📄' },
    { id: 'services', name: 'Services', icon: '⚙️' },
    { id: 'benefits', name: 'Benefits', icon: '✨' },
    { id: 'cta', name: 'Call to Action', icon: '🎯' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-[#E8481C] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#121212]/70 font-figtree">Loading page...</p>
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
            {pageId ? 'Edit' : 'Create New'} Trade Page
          </h1>
          <p className="text-[#121212]/70 font-figtree mt-1">
            Use the template below to create your trade service page
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/admin/trades')}
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
          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Page Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="e.g., Concrete Estimating Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  URL Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="concrete-estimating"
                />
                <p className="text-sm text-[#121212]/60 mt-1 font-figtree">
                  Page URL: /trades/{formData.slug || 'your-slug'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Brief description for SEO (150-160 characters)"
                />
              </div>
            </div>
          )}

          {/* Hero Section Tab */}
          {activeTab === 'hero' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Hero Title
                </label>
                <input
                  type="text"
                  value={formData.heroSection.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    heroSection: { ...formData.heroSection, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Professional Concrete Estimating Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Hero Description
                </label>
                <textarea
                  value={formData.heroSection.description}
                  onChange={(e) => setFormData({
                    ...formData,
                    heroSection: { ...formData.heroSection, description: e.target.value }
                  })}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Get accurate concrete estimates for your construction projects..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Background Image Path
                </label>
                <input
                  type="text"
                  value={formData.heroSection.backgroundImage}
                  onChange={(e) => setFormData({
                    ...formData,
                    heroSection: { ...formData.heroSection, backgroundImage: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="/images/home/image7.jpg"
                />
              </div>
            </div>
          )}

          {/* Overview Section Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Overview Title
                </label>
                <input
                  type="text"
                  value={formData.overviewSection.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    overviewSection: { ...formData.overviewSection, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="About Our Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Overview Content
                </label>
                <textarea
                  value={formData.overviewSection.content}
                  onChange={(e) => setFormData({
                    ...formData,
                    overviewSection: { ...formData.overviewSection, content: e.target.value }
                  })}
                  rows={8}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Detailed description of your services..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Image Path
                </label>
                <input
                  type="text"
                  value={formData.overviewSection.image}
                  onChange={(e) => setFormData({
                    ...formData,
                    overviewSection: { ...formData.overviewSection, image: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="/images/home/image4.jpg"
                />
              </div>
            </div>
          )}

          {/* Services Section Tab */}
          {activeTab === 'services' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Services Section Title
                </label>
                <input
                  type="text"
                  value={formData.servicesSection.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    servicesSection: { ...formData.servicesSection, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Our Services"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#121212] font-figtree">
                    Services List
                  </label>
                  <button
                    onClick={addService}
                    className="flex items-center gap-2 px-4 py-2 bg-[#E8481C] text-white rounded-lg hover:bg-[#E8481C]/90 transition-all font-figtree text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Service
                  </button>
                </div>

                {formData.servicesSection.services.map((service, index) => (
                  <div key={index} className="bg-[#F5F1E6] p-6 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-[#121212] font-figtree">Service #{index + 1}</h4>
                      {formData.servicesSection.services.length > 1 && (
                        <button
                          onClick={() => removeService(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        const newServices = [...formData.servicesSection.services]
                        newServices[index] = { ...newServices[index], title: e.target.value }
                        setFormData({
                          ...formData,
                          servicesSection: { ...formData.servicesSection, services: newServices }
                        })
                      }}
                      className="w-full px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                      placeholder="Service Title"
                    />

                    <textarea
                      value={service.description}
                      onChange={(e) => {
                        const newServices = [...formData.servicesSection.services]
                        newServices[index] = { ...newServices[index], description: e.target.value }
                        setFormData({
                          ...formData,
                          servicesSection: { ...formData.servicesSection, services: newServices }
                        })
                      }}
                      rows={3}
                      className="w-full px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                      placeholder="Service Description"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Benefits Section Title
                </label>
                <input
                  type="text"
                  value={formData.benefitsSection.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    benefitsSection: { ...formData.benefitsSection, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Why Choose Us"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#121212] font-figtree">
                    Benefits List
                  </label>
                  <button
                    onClick={addBenefit}
                    className="flex items-center gap-2 px-4 py-2 bg-[#E8481C] text-white rounded-lg hover:bg-[#E8481C]/90 transition-all font-figtree text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Benefit
                  </button>
                </div>

                {formData.benefitsSection.benefits.map((benefit, index) => (
                  <div key={index} className="bg-[#F5F1E6] p-6 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-[#121212] font-figtree">Benefit #{index + 1}</h4>
                      {formData.benefitsSection.benefits.length > 1 && (
                        <button
                          onClick={() => removeBenefit(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={benefit.title}
                      onChange={(e) => {
                        const newBenefits = [...formData.benefitsSection.benefits]
                        newBenefits[index] = { ...newBenefits[index], title: e.target.value }
                        setFormData({
                          ...formData,
                          benefitsSection: { ...formData.benefitsSection, benefits: newBenefits }
                        })
                      }}
                      className="w-full px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                      placeholder="Benefit Title"
                    />

                    <textarea
                      value={benefit.description}
                      onChange={(e) => {
                        const newBenefits = [...formData.benefitsSection.benefits]
                        newBenefits[index] = { ...newBenefits[index], description: e.target.value }
                        setFormData({
                          ...formData,
                          benefitsSection: { ...formData.benefitsSection, benefits: newBenefits }
                        })
                      }}
                      rows={3}
                      className="w-full px-4 py-2 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                      placeholder="Benefit Description"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section Tab */}
          {activeTab === 'cta' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  CTA Title
                </label>
                <input
                  type="text"
                  value={formData.ctaSection.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    ctaSection: { ...formData.ctaSection, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Get Started Today"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  CTA Description
                </label>
                <textarea
                  value={formData.ctaSection.description}
                  onChange={(e) => setFormData({
                    ...formData,
                    ctaSection: { ...formData.ctaSection, description: e.target.value }
                  })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Contact us for a free consultation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#121212] mb-2 font-figtree">
                  Button Text
                </label>
                <input
                  type="text"
                  value={formData.ctaSection.buttonText}
                  onChange={(e) => setFormData({
                    ...formData,
                    ctaSection: { ...formData.ctaSection, buttonText: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-[#121212]/20 rounded-lg focus:outline-none focus:border-[#E8481C] focus:ring-2 focus:ring-[#E8481C]/20 font-figtree"
                  placeholder="Contact Us"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



