'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const trades = [
  'Concrete',
  'Masonry',
  'Mechanical',
  'Electrical',
  'Plumbing',
  'Ductwork',
  'HVAC',
  'Sitework',
  'Earthwork',
  'Finishes',
  'Drywall',
  'Painting',
  'Lumber',
  'Insulation',
  'Metal',
  'Structural Steel',
  'Rebar',
  'Door/Window',
  'Thermal/Moisture Protection',
  'Plastic/Wood Composites'
]

export default function ConstructionEstimatingConsultantTradesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/5 via-transparent to-[#0063BF]/5"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree">
            What <span className="text-[#E8481C]">Trades</span> Do We Deal In?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto font-figtree leading-relaxed">
            We deal in all CSI divisions of the construction industry
          </p>
        </div>

        {/* Trades Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {trades.map((trade, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-[#E8481C]/50 transition-all duration-300 overflow-hidden text-center"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm sm:text-base text-white font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                  {trade}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#E8481C]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


