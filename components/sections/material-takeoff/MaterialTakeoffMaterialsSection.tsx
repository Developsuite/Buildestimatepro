'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const materials = [
  'Sitework',
  'Drywall',
  'Masonry',
  'Concrete',
  'Painting',
  'Insulation',
  'Roofing',
  'Lumber',
  'Millwork',
  'Cabinet',
  'Mechanical',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Structural Steel'
]

export default function MaterialTakeoffMaterialsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/materialtakeoff/6.jpg"
          alt="Materials Coverage Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/80 via-[#121212]/75 to-[#121212]/80"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8481C]/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Content */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-figtree leading-tight mx-auto md:mx-0">
            Materials We Cover in Quantity Takeoff
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 font-figtree leading-relaxed max-w-4xl mx-auto md:mx-0">
            BuildEstimatePro provides comprehensive material takeoff services covering all major construction materials and trades. Our detailed takeoffs ensure accurate quantity calculations for every aspect of your project.
          </p>

          {/* Materials Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-lg p-3 sm:p-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                <div className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-white font-figtree transition-colors duration-300">
                    {material}
                  </span>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/10 transition-colors duration-500 rounded-lg blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

