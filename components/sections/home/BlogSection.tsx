'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const blogPosts = [
  {
    id: 1,
    title: '5 Essential Tips for Accurate Construction Cost Estimation',
    excerpt: 'Learn the key strategies that professional estimators use to ensure precise cost calculations.',
    category: 'Tips',
    date: 'March 15, 2024',
    readTime: '5 min',
    image: '/images/home/slider/1.webp'
  },
  {
    id: 2,
    title: 'How Technology is Revolutionizing Construction Estimating',
    excerpt: 'Discover how modern software tools like Bluebeam and Planswift are transforming estimates.',
    category: 'Technology',
    date: 'March 10, 2024',
    readTime: '7 min',
    image: '/images/home/slider/2.webp'
  },
  {
    id: 3,
    title: 'Understanding MEP Estimating: A Complete Guide',
    excerpt: 'A comprehensive overview of Mechanical, Electrical, and Plumbing estimating processes.',
    category: 'MEP',
    date: 'March 5, 2024',
    readTime: '6 min',
    image: '/images/home/slider/3.webp'
  },
]

export default function BlogSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(18,18,18,0.3) 35px, rgba(18,18,18,0.3) 36px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(18,18,18,0.2) 35px, rgba(18,18,18,0.2) 36px)',
        }}></div>
      </div>

      {/* Orange Dots Pattern in Corners */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Latest Blog Posts
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-figtree max-w-3xl mx-auto sm:mx-0">
            Stay updated with the latest insights, tips, and trends in construction estimating.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative bg-white/80 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
            >
              {/* Image */}
              <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E8481C] to-[#E8481C]/70 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold opacity-50">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 bg-[#E8481C] text-white text-[10px] sm:text-xs font-bold rounded-full font-figtree">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-3 sm:p-4">
                {/* Date and Read Time */}
                <div className="flex items-center gap-2 mb-2 text-[10px] sm:text-xs text-[#121212]/60 font-figtree">
                  <span className="truncate">{post.date.split(' ')[0]}</span>
                  <span className="w-0.5 h-0.5 rounded-full bg-[#121212]/40 flex-shrink-0"></span>
                  <span className="flex-shrink-0">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-[#121212] mb-2 font-figtree line-clamp-2 group-hover:text-[#E8481C] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[10px] sm:text-xs text-[#121212]/70 leading-relaxed font-figtree line-clamp-2 mb-2 sm:mb-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-1 text-xs font-semibold text-[#E8481C] font-figtree group-hover:gap-2 transition-all duration-300">
                  <span>Read</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Hover Liquid Fill Effect */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Link
            href="/blog"
            className="inline-block relative px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-[#121212] text-white font-bold text-xs sm:text-sm md:text-base font-figtree overflow-hidden group transition-all duration-300 hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Posts
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

