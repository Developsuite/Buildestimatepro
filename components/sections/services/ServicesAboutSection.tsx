'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ServicesAboutSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/services/servicespage/10.webp')" }}
      >
        {/* Top Black Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent"></div>
        
        {/* Side Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="max-w-4xl">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6 font-figtree leading-tight">
            Your One-Stop Solution for Bids, Quantity Takeoffs, and Material Estimates
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-figtree">
              BuildEstimatePro delivers accurate and up-to-date construction estimating services to busy contractors, builders, developers, and architects across the USA. Our proven track record speaks for itself—you can validate our expertise through our comprehensive portfolio and successful project samples. With over 15 years of experience in this competitive industry, BuildEstimatePro has secured a position among the top construction estimating companies.
            </p>

            {/* Bullet Points */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-5 md:p-6">
              <p className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 font-figtree">
                Our qualified construction estimators are trained to work on:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white/90 font-figtree">Bid preparation and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white/90 font-figtree">Quantity takeoffs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white/90 font-figtree">Material takeoffs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white/90 font-figtree">Cost estimating and budgeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white/90 font-figtree">And much more!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

