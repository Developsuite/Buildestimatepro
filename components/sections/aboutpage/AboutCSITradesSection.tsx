'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const trades = [
  'General Conditions',
  'Sitework',
  'Concrete',
  'Masonry',
  'Metals',
  'Finishes',
  'Mechanical',
  'Electrical',
  'Plumbing',
  'Wood/Plastic Composites',
  'Thermal/Moisture Protection',
  'Roofing & Siding'
]

export default function AboutCSITradesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-100 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/about/backgorund.png')" }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-figtree mb-6 sm:mb-8 text-center">
              All <span className="text-[#E8481C]">CSI Trades</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {trades.map((trade, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-3 p-4 bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-transparent min-h-[72px]">
                    {/* Liquid fill hover effect */}
                    <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8481C] group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                        <svg className="w-3 h-3 text-white group-hover:text-[#E8481C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      {trade === 'Roofing & Siding' ? (
                        <button className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-[#E8481C] group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                          Click for more
                          <svg
                            className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <p className="text-sm sm:text-base text-white font-figtree transition-colors duration-300">
                          {trade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

