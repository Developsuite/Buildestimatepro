'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const takeoffs = [
  'Site work',
  'Foundation',
  'Structural Steel',
  'Mechanical services & Process equipments',
  'Electrical services',
  'Process piping',
  'Instrumentation',
  'HVAC systems',
  'Hydronic systems',
  'Insulation',
  'Fireproofing',
  'Welding',
  'Painting/Coating',
  'Asbestos Abatement',
  'Floating Production Storage & Offloading'
]

export default function IndustrialEstimatingTakeoffsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Industrial Project Takeoffs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl font-figtree leading-relaxed">
            Our comprehensive industrial takeoff services cover all major construction trades and specialized industrial systems.
          </p>
        </div>

        {/* Takeoffs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {takeoffs.map((takeoff, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md p-4 sm:p-5 rounded-lg border border-white/50 hover:border-[#E8481C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E8481C] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="text-xs sm:text-sm font-semibold text-[#121212] group-hover:text-white font-figtree transition-colors duration-300">
                  {takeoff}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/10 transition-colors duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

