'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function IndustrialEstimatingCTASection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 lg:pb-14 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden rounded-2xl">
          {/* Animated Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree leading-tight">
                Get Estimates with 30% Off
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 md:mb-10 font-figtree max-w-2xl mx-auto">
                Are you in search of professional industrial estimates you can rely on? Get started today and save 30% on your first industrial estimate. Our expert team is ready to deliver accurate, timely estimates for your industrial construction projects.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-lg font-semibold rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Liquid fill hover effect */}
                  <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#121212]">
                    Upload Plans & Get Quote
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm font-figtree">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>TURNAROUND TIME: 24-48 hrs!</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(737) 273-3314</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@buildestimatepro.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

