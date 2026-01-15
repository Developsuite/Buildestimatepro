'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const serviceAreas = [
  'Florida',
  'New York',
  'Massachusetts',
  'South Carolina',
  'North Carolina',
  'Virginia',
  'Oklahoma',
  'Minnesota',
  'Illinois',
  'Texas',
  'Georgia',
  'Arizona',
  'Colorado',
  'Michigan',
  'California',
  'Missouri',
  'Kentucky',
  'Indiana',
  'Louisiana',
  'Alabama',
  'Maryland',
  'Pennsylvania',
  'Connecticut',
  'Washington',
  'New Jersey',
  'Tennessee',
  'Oregon',
  'Ohio'
]

export default function CommercialEstimatingServiceAreasSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F5F1E6] to-white/50 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(18,18,18,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(18,18,18,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10">
          <div className="inline-block mb-2">
            <span className="text-xs sm:text-sm font-semibold text-[#E8481C] font-figtree uppercase tracking-wider">Coverage</span>
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E8481C] to-transparent mt-1"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Service Areas
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/70 max-w-3xl font-figtree leading-relaxed">
            BuildEstimatePro has experience and exposure to providing construction estimating services in North American, Caribbean, and Australian regions. In the US, we have remarkably served the following markets:
          </p>
        </div>

        {/* Main Content Container - Simplified for Performance */}
        <div className="relative">
          <div 
            className="relative backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg border border-white/50 bg-white/60"
          >
            <div className="relative z-10">
              {/* States Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
                {serviceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <div 
                      className="relative bg-white/80 p-3 sm:p-4 rounded-lg border border-white/60 hover:border-[#E8481C]/50 transition-all duration-200 hover:shadow-md"
                    >
                      {/* Simplified Hover Fill Effect */}
                      <span className="absolute inset-0 bg-[#E8481C] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>

                      <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
                        {/* Checkmark Icon */}
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center border border-[#E8481C]/30 group-hover:bg-[#E8481C] transition-colors duration-200">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8481C] group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>

                        {/* State Name */}
                        <span className="text-xs sm:text-sm font-semibold text-[#121212] group-hover:text-white font-figtree transition-colors duration-200">
                          {area}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

