'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const stats = [
  { number: '56+', label: 'Employees' },
  { number: '1000+', label: 'Projects completed' },
  { number: '987+', label: 'Satisfied customers' },
  { number: '40+', label: 'Certifications' }
]

export default function MaterialTakeoffStatsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/materialtakeoff/3.jpg"
          alt="Quantity Takeoff Estimators Background"
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
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6 font-figtree">
            Quantity Takeoff Estimators
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(232,72,28,0.4)] border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                }}
              >
                {/* Liquid Glass Effect Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/20 via-transparent to-transparent"></div>
                </div>

                {/* Hover Fill Effect */}
                <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                
                <div className="relative z-10 text-center p-3 sm:p-4 md:p-5">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-white font-figtree transition-colors duration-300 mb-1.5 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white font-figtree transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-6 h-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="absolute inset-0 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/10 transition-colors duration-500 rounded-xl blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

