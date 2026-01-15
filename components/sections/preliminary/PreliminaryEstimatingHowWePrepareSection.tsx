'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    title: 'Study and Evaluate',
    description: 'First, our estimators study and evaluate the information to analyze the scope of the project and produce an estimating plan.'
  },
  {
    number: '02',
    title: 'Collect Historical Data',
    description: 'Then, the data of similar past projects is collected.'
  },
  {
    number: '03',
    title: 'Apply Adjustments',
    description: 'The adjustments are applied with respect to time, location, and size. A contingency is also applied.'
  },
  {
    number: '04',
    title: 'Document Assumptions',
    description: 'All the specifications, adjustments, assumptions, are mentioned in detail.'
  }
]

export default function PreliminaryEstimatingHowWePrepareSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            How Do We Prepare a Preliminary Estimate?
          </h2>
        </div>

        {/* Steps - Timeline Style */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8481C] via-[#E8481C]/60 to-[#E8481C]"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-4 md:gap-6">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-base sm:text-lg font-bold text-white font-figtree">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121212] mb-2 sm:mb-3 font-figtree">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

