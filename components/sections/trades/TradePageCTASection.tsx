'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface TradePageCTASectionProps {
  data: {
    title: string
    description: string
    buttonText: string
  }
}

export default function TradePageCTASection({ data }: TradePageCTASectionProps) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-16 sm:py-20 md:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8481C]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0063BF]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#E8481C] to-[#E8481C]/80 rounded-full mb-6 sm:mb-8 shadow-lg shadow-[#E8481C]/30">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-figtree leading-tight">
                {data.title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed font-figtree">
                {data.description}
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E8481C]/50 font-figtree"
              >
                {data.buttonText}
              </Link>

              {/* Feature Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-figtree">Fast Turnaround</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-figtree">Accurate Estimates</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#E8481C]/20 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-figtree">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



