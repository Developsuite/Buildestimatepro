'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const systems = [
  'Low voltage Systems',
  'Control Systems',
  'Instrumentation',
  'Emergency Service Systems',
  'Power Distribution',
  'Conveying Systems',
  'Power & Lighting',
  'Solar Power',
  'Geothermal Systems',
  'Ground-up Projects'
]

export default function IndustrialEstimatingElectricalSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.2) 40px, rgba(18,18,18,0.2) 41px)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
            Industrial Electrical Estimating
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-4xl mb-6">
            The electrical estimators at BuildEstimatePro possess vast knowledge and experience in the electrical system components and their installation with the flexibility to estimate all types and sizes of the projects. Whether it is new electrical construction, remodeling, lighting or grounding project estimation, we have served electrical contractors with accurate and timely estimates.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-4xl">
            Using electrical takeoff software like Trimble, Planswift, Bluebeam, ConEst, we prepare highly detailed quantity takeoffs for material and labor with color-coded marked up plans.
          </p>
        </div>

        {/* Systems Section */}
        <div className="bg-[#1a1a1a] backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 font-figtree">
            We provide electrical takeoffs for the following systems:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {systems.map((system, index) => (
              <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-white/90 font-figtree">
                <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{system}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

