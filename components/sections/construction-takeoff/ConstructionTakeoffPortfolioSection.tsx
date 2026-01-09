'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = ['Airports and highways', 'Custom homes', 'Multi-use developments', 'Retail spaces', 'Recreational facilities', 'Industrial facilities', 'Civic and public works', 'Educational institutions']

export default function ConstructionTakeoffPortfolioSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-8 font-figtree text-center">
          Our Construction <span className="text-[#E8481C]">Takeoff Portfolio</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-[#E8481C]/30 shadow-lg text-center hover:scale-105 transition-transform">
              <p className="text-[#121212] font-figtree font-semibold text-sm sm:text-base">{project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


