'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ServicesCTASection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Animated Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'moveDots 20s linear infinite'
            }}
          ></div>

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-figtree leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 md:mb-12 font-figtree max-w-2xl mx-auto">
                Get accurate, professional construction estimates delivered on time and within budget. Contact us today for a free consultation and see how we can help you win more bids and improve your project profitability.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 bg-[#E8481C] text-white font-figtree text-base sm:text-lg font-semibold rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Liquid fill hover effect */}
                  <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#121212]">
                    Request Free Estimate
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
                
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 bg-white/10 backdrop-blur-md text-white font-figtree text-base sm:text-lg font-semibold rounded-lg overflow-hidden border-2 border-white/30 hover:border-white transition-all duration-300 hover:scale-105"
                >
                  {/* Glassmorphism hover effect */}
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                    Schedule Consultation
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/70 text-xs sm:text-sm font-figtree">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fast Response Times</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

