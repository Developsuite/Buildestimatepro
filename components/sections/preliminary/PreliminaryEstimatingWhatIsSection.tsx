'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PreliminaryEstimatingWhatIsSection() {
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
            What is a Preliminary Estimate and How it Helps?
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-5 sm:space-y-6 md:space-y-7 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree w-full">
          <p>
            A preliminary estimate or conceptual estimate is used to forecast the project cost to analyze the economic feasibility of the construction project prior to the development of detailed drawing plans. It helps contractors, real estate developers, home builders, and owners in making decisions for allocating funds, setting the preliminary budget and comparing initial design alternatives.
          </p>
          <p>
            As preliminary cost estimates are carried out at the beginning of the project before the actual design and construction, therefore they are mainly based on historical data of the projects adjusted to the time, location, size, and prepared using engineering concepts.
          </p>
          <p>
            There are several types of preliminary cost estimates that are employed at various stages in the lifecycle of the project. The accuracy of these estimates depends on the extent of the information provided by the client.
          </p>
        </div>
      </div>
    </section>
  )
}

