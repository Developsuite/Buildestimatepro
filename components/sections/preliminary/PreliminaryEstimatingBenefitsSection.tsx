'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = [
  'Managing the budget and getting loans',
  'Setting the project cost limit for Architects and designers',
  'Getting the idea of probable amount and cost of material and labor',
  'Planning the next phase',
  'Allocating and negotiating with contractors and subcontractors'
]

export default function PreliminaryEstimatingBenefitsSection() {
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
        <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
            How Can Our Preliminary Estimate Benefit You?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-4xl mb-6 mx-auto md:mx-0">
            Our estimates can help you in evaluating the initial cost to support in:
          </p>
        </div>

        {/* Benefits List - Structured Layout */}
        <div className="bg-[#1a1a1a] backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 shadow-lg">
          <ul className="space-y-4 sm:space-y-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4 text-sm sm:text-base md:text-lg text-white/90 font-figtree">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-[#E8481C] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="pt-0.5">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Paragraph */}
        <div className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-4xl text-center md:text-left mx-auto md:mx-0">
          <p>
            Our preliminary cost estimates are based on the floor area which makes it easy for your clients and architects to understand and interpret the information. Our bill of material comprises of: The total area (square foot or square meter) of the complete project, Linear measurement (foot or meter) of each structure like walls etc., and Area of each unit i.e. rooms, floors, etc.
          </p>
        </div>
      </div>
    </section>
  )
}

