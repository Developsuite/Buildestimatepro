'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ServicesReadyToStartSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Background Pattern */}
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
            <div className="max-w-4xl mx-auto">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-figtree text-center">
                Ready to Get Started?
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 sm:mb-8 font-figtree text-center max-w-2xl mx-auto">
                Get accurate, professional construction estimates delivered on time and within budget. Contact us today for a free consultation and see how we can help you win more bids and improve your project profitability.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[#E8481C] text-white font-figtree text-sm sm:text-base font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative z-10">Request Free Estimate</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-figtree text-sm sm:text-base font-semibold rounded-sm overflow-hidden border-2 border-white/30 hover:border-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                </Link>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm font-figtree">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fast Response Times</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
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

