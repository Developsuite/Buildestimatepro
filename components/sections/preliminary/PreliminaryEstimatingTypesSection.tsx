'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const estimateTypes = [
  {
    title: 'Rough Order Magnitude Estimate',
    description: 'The first attempt to estimate in the project\'s lifecycle is regarded as a rough order magnitude estimate or ROM. It is employed to analyze the feasibility of the project that contributes to the project\'s selection and allocation.',
    accuracy: 'Accuracy: -50% to +50%'
  },
  {
    title: 'Ballpark Estimate',
    description: 'Ballpark estimate is developed by the contractors to define the scope of work to their clients, so that owners can make decisions according to their budget. It is evaluated on the basis of preliminary drawings and specifications.',
    accuracy: 'Accuracy: Within 20% of the actual cost'
  },
  {
    title: 'Budget Estimate',
    description: 'The budget estimate is prepared using past projects\' data and plans when the project comes into its planning stage. It defines the costs associated with the major components of the projects in each line description including materials and labor costs.',
    accuracy: 'Accuracy: -10% to +25% of the actual cost'
  },
  {
    title: 'Definitive Estimate',
    description: 'A definitive estimate is also known as a digital cost estimate contains a detailed itemized list of components involved in the project. It is prepared by using thoroughly developed project plans.',
    accuracy: 'Accuracy: -5% to +15%'
  }
]

export default function PreliminaryEstimatingTypesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Patterns - Construction Themed */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(18,18,18,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(18,18,18,0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(232,72,28,0.1) 40px, rgba(232,72,28,0.1) 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(232,72,28,0.1) 40px, rgba(232,72,28,0.1) 41px)',
        }}></div>
      </div>

      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center md:text-left mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree mx-auto md:mx-0">
            Types of Preliminary Estimates
          </h2>
        </div>

        {/* Estimate Types - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {estimateTypes.map((type, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 border-l-4 border-[#E8481C]">
              {/* Number Badge */}
              <div className="absolute -left-5 sm:-left-6 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs sm:text-sm font-bold text-white font-figtree">{index + 1}</span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#121212] mb-2 sm:mb-3 font-figtree">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-[#121212]/70 leading-relaxed font-figtree mb-2 sm:mb-3">
                  {type.description}
                </p>
                <div className="inline-block px-3 py-1.5 bg-[#E8481C]/10 border border-[#E8481C]/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-semibold text-[#E8481C] font-figtree">{type.accuracy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

