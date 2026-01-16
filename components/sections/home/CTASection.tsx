'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="relative bg-[#121212] overflow-hidden">
          {/* Moving Dots Pattern Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'moveDots 20s linear infinite'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 min-h-[180px] sm:min-h-[200px] md:min-h-[205px] flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
              {/* Left Side - Text Content */}
              <div className="flex-1 w-full lg:w-auto text-center lg:text-left z-20">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 font-figtree">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed font-figtree max-w-2xl mx-auto lg:mx-0">
                  Contact us today to get started on your construction projects and experience the difference of working with Buildestimatepro.
                </p>
              </div>

              {/* Right Side - CTA Button */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end z-20">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-5 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-base lg:text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  {/* Liquid fill hover effect - white on hover */}
                  <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#121212]">
                    Turbo charge Your Bids - Request Now!
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Decorative Arrow Path - Centered */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[170px] md:w-[198px] h-[120px] sm:h-[140px] md:h-[167px] opacity-60 pointer-events-none z-0">
              <svg
                width="198"
                height="167"
                viewBox="0 0 198 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M13.3903 45.3423L189.024 123.374"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeOpacity="0.6"
                />
                <circle
                  cx="10.5212"
                  cy="115.912"
                  r="7.4525"
                  fill="white"
                  fillOpacity="0.6"
                />
                <circle
                  cx="186.693"
                  cy="48.6464"
                  r="7.1737"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

