'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const divisions = [
  'Preliminaries',
  'Substructures (footings, foundations, etc.)',
  'Superstructures (brickwork, walls, sidings, roofs, staircase, floors, doors, windows)',
  'External/Internal finishes (flooring, drywall, painting, etc.)',
  'Fittings',
  'Mechanical (HVAC systems, ductwork, etc.)',
  'Plumbing (pipes, drains, fixtures, etc.)',
  'Electrical (cable, conduit, lighting, etc.)',
  'Labor',
  'Man Hours',
  'Contingency',
  'Project Schedule'
]

export default function PreliminaryEstimatingWhatYouGetSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-transparent to-[#E8481C]/5"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
            What Do You Get in Our Preliminary Estimate?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-figtree max-w-4xl mx-auto md:mx-0">
            The estimate consists of the breakdown of quantities, and the following divisions are considered:
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-lg border border-white/10 hover:border-[#E8481C]/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#E8481C] rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <span className="text-sm sm:text-base text-white/90 font-figtree leading-relaxed">{division}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

