'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ConstructionEstimatingConsultantCTASection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#E8481C]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#0063BF]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 text-center">
            <div className="max-w-2xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E8481C] to-[#E8481C]/80 rounded-full mb-4 sm:mb-6 shadow-lg shadow-[#E8481C]/30">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree leading-tight">
                Ready to Transform Your <span className="text-[#E8481C]">Construction Projects</span>?
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed font-figtree">
                Get expert construction estimating consulting services today. Let us help you beat the competition and win more bids with our professional consulting services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group relative px-6 py-3 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E8481C]/50 font-figtree w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 font-figtree w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="relative z-10">Upload Your Plans</span>
                </Link>
              </div>

              {/* Feature Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 font-figtree">15+ Years Experience</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 font-figtree">1000+ Satisfied Clients</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 font-figtree">Certified Estimators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


