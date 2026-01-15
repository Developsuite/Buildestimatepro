'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const serviceAreas = {
  'Australia': [
    'New South Wales',
    'Victoria',
    'Queensland',
    'Western Australia',
    'South Australia',
    'Northern Territory',
    'Tasmania',
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Adelaide',
    'Perth-Fremantle',
    'Darwin',
    'Hobart'
  ],
  'United States': [
    'All 50 States',
    'California', 'Texas', 'Florida', 'New York', 'Illinois',
    'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ]
}

export default function ResidentialEstimatingServiceAreasSection() {
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

      {/* Animated Location Pins */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3.5 h-3.5 bg-[#E8481C] rounded-full opacity-25 animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>

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
            Experience our exceptional residential estimating services in these dynamic regions, where precision, reliability, and attention to detail are the cornerstones of our approach. Within Australia and the United States, our exceptional services extend to various vibrant markets.
          </p>
        </div>

        {/* Main Content Container - Map-like Structure */}
        <div className="relative">
          <div 
            className="relative backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-[0_8px_32px_0_rgba(18,18,18,0.15)] border border-white/50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 100%)',
            }}
          >
            {/* Inner Map Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(rgba(232,72,28,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,72,28,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {Object.entries(serviceAreas).map(([country, areas], index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121212] font-figtree mb-4 pb-2 border-b-2 border-[#E8481C]/30">
                    {country}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {areas.map((area, areaIndex) => (
                      <li
                        key={areaIndex}
                        className="flex items-center gap-2 text-sm sm:text-base text-[#121212]/80 font-figtree group hover:text-[#E8481C] transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-[#E8481C] rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

