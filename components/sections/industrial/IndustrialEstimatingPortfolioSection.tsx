'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const industries = [
  'Chemical',
  'Petrochemical',
  'Mining & Metals',
  'Marine',
  'Drilling Platforms',
  'Oil & Gas',
  'Pharmaceutical Plants',
  'Food Processing',
  'Hydrocarbon Processing',
  'Wastewater Plants',
  'Bio-fuels',
  'Refinery',
  'Refrigeration',
  'Pumping Stations',
  'Paper & Pulp',
  'Polymers',
  'Fertilizers',
  'Power Generation',
  'Packaging',
  'Manufacturing'
]

export default function IndustrialEstimatingPortfolioSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/image7.jpg"
          alt="Industrial Construction Portfolio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/90 via-[#121212]/85 to-[#121212]/90"></div>

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
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree">
            Our Portfolio in Industrial Estimating
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl font-figtree leading-relaxed">
            We provide cost estimates ranging from maintenance and repair tasks to multi-million dollar industrial construction projects including Government and military construction projects. Our portfolio includes the following industries:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-lg p-4 sm:p-5 rounded-lg border border-white/30 hover:border-[#E8481C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-white font-figtree transition-colors duration-300">
                  {industry}
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

