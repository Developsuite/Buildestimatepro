'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const serviceAreas = {
  'United States': [
    'All 50 States',
    'California', 'Texas', 'Florida', 'New York', 'Illinois',
    'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ]
}

export default function CostEstimatingServiceAreasSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F5F1E6] to-white/50 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,20 L130,50 L150,40 L160,60 L170,50 L180,70 L185,60 L175,90 L155,100 L135,110 L115,120 L100,130 L85,120 L70,110 L50,100 L40,90 L30,70 L40,50 L50,60 L60,50 L70,60 L80,50 L90,60 L100,20 Z' fill='none' stroke='%23E8481C' stroke-width='1.5'/%3E%3Ccircle cx='100' cy='60' r='4' fill='%23E8481C'/%3E%3Ccircle cx='150' cy='50' r='3' fill='%23E8481C'/%3E%3Ccircle cx='60' cy='70' r='3' fill='%23E8481C'/%3E%3Ccircle cx='140' cy='85' r='2.5' fill='%23E8481C'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          backgroundPosition: 'center',
        }}></div>
      </div>

      {/* Geographic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(18,18,18,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18,18,18,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Animated Location Pins with Map Lines */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '0s' }}>
        <div className="absolute inset-0 bg-[#E8481C] rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-[#E8481C] rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 w-3.5 h-3.5 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '2s' }}>
        <div className="absolute inset-0 bg-[#E8481C] rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '0.5s' }}>
        <div className="absolute inset-0 bg-[#E8481C] rounded-full blur-sm"></div>
      </div>

      {/* Map Connection Lines */}
      <div className="absolute top-24 left-14 w-32 h-0.5 bg-[#E8481C]/10 hidden lg:block" style={{ transform: 'rotate(15deg)' }}></div>
      <div className="absolute bottom-28 left-1/4 w-24 h-0.5 bg-[#E8481C]/10 hidden lg:block" style={{ transform: 'rotate(-20deg)' }}></div>

      {/* Decorative Map Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 opacity-8">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full"></div>
        <div className="absolute inset-8 border border-[#E8481C] rounded-full"></div>
        <div className="absolute inset-16 border border-[#E8481C]/50 rounded-full"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 opacity-8">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full"></div>
        <div className="absolute inset-6 border border-[#E8481C] rounded-full"></div>
        <div className="absolute inset-12 border border-[#E8481C]/50 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10">
          <div className="inline-block mb-2">
            <span className="text-xs sm:text-sm font-semibold text-[#E8481C] font-figtree uppercase tracking-wider">Coverage</span>
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E8481C] to-transparent mt-1"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Service Areas
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/70 max-w-3xl mx-auto md:mx-0 font-figtree leading-relaxed">
            Experience our exceptional construction cost estimating services across the United States, where precision, reliability, and attention to detail are the cornerstones of our approach.
          </p>
        </div>

        {/* Main Content Container - Map-like Structure */}
        <div className="relative">
          {/* Map-like Background Container with Enhanced Glassmorphism */}
          <div 
            className="relative backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-[0_8px_32px_0_rgba(18,18,18,0.15)] border border-white/50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 100%)',
            }}
          >
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8481C]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8481C]/40 to-transparent"></div>

            {/* Inner Map Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(rgba(232,72,28,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,72,28,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>

            {/* Gradient Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/5 via-transparent to-[#E8481C]/5 opacity-60"></div>

            {/* Service Areas Content */}
            <div className="relative z-10">
              {Object.entries(serviceAreas).map(([country, areas], index) => (
                <div key={index} className="mb-5 sm:mb-6 last:mb-0">
                  {/* Country Header with Map Pin */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    {/* Location Icon with Enhanced Shadow */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-[0_4px_20px_0_rgba(232,72,28,0.4)]">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Pulse Effect with Shadow */}
                      <div className="absolute inset-0 bg-[#E8481C] rounded-full animate-ping opacity-20"></div>
                      <div className="absolute inset-0 bg-[#E8481C]/30 rounded-full blur-md"></div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] font-figtree mb-1.5">
                        {country}
                      </h3>
                      <div className="h-0.5 w-20 bg-gradient-to-r from-[#E8481C] to-transparent rounded-full shadow-sm"></div>
                    </div>
                  </div>

                  {/* States Grid - Enhanced Glassmorphism Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
                    {areas.map((area, idx) => (
                      <div
                        key={idx}
                        className="group relative"
                      >
                        {/* Glassmorphism Card with Enhanced Shadows */}
                        <div 
                          className="relative backdrop-blur-lg p-3 sm:p-4 rounded-lg border border-white/40 hover:border-[#E8481C]/50 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(232,72,28,0.25)] hover:-translate-y-1 overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)',
                            boxShadow: '0 4px 16px 0 rgba(18, 18, 18, 0.1)',
                          }}
                        >
                          {/* Hover Fill Effect */}
                          <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                          {/* Glow Effect on Hover */}
                          <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/10 transition-colors duration-500 rounded-lg blur-sm"></div>

                          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                            {/* Checkmark Icon with Shadow */}
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-white/60 backdrop-blur-sm group-hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8481C] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>

                            {/* State Name */}
                            <span className="text-xs sm:text-sm font-semibold text-[#121212] group-hover:text-white font-figtree transition-colors duration-300">
                              {area}
                            </span>
                          </div>

                          {/* Corner Decoration with Map Pin Style */}
                          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-2.5 h-2.5 bg-[#E8481C] rounded-full shadow-lg"></div>
                          </div>

                          {/* Bottom Border Accent */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8481C] group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Map Corner Accents */}
            <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#E8481C]/30 rounded-tl-xl"></div>
            <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#E8481C]/30 rounded-tr-xl"></div>
            <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#E8481C]/30 rounded-bl-xl"></div>
            <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#E8481C]/30 rounded-br-xl"></div>
          </div>

          {/* Floating Map Elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#E8481C]/10 rounded-full blur-3xl hidden lg:block"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#E8481C]/10 rounded-full blur-3xl hidden lg:block"></div>
          
          {/* Map Scale Indicators */}
          <div className="absolute top-8 right-8 hidden lg:block">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-white/40">
              <div className="w-16 h-0.5 bg-[#E8481C]/50"></div>
              <span className="text-xs font-semibold text-[#121212]/60 font-figtree">Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
