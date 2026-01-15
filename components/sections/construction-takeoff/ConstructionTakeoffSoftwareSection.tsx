'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const software = ['PlanSwift', 'Bluebeam Revu', 'Trimble (Accubid)', 'RSMeans Data', 'On-Screen Takeoff (OST)', 'Xactimate']

export default function ConstructionTakeoffSoftwareSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree text-center">
          Software We Use for <span className="text-[#E8481C]">Takeoff Services</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 text-center mb-8 max-w-3xl mx-auto">
          Advanced digital tools for accuracy and efficiency
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {software.map((soft, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg p-4 rounded-lg border border-white/10 hover:border-[#E8481C]/50 transition-all text-center">
              <p className="text-white font-figtree text-sm sm:text-base">{soft}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


