'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PreliminaryEstimatingFactorsSection() {
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
            What Factors Contribute Towards the Right Preliminary Estimates?
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-5 sm:space-y-6 md:space-y-7 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree w-full">
          <p>
            While performing a bill of material based on previous projects' data, we make assumptions and adjustments with respect to time, location, type, and size of the project.
          </p>
          <p>
            <strong className="text-[#121212] font-semibold">Time Adjustments:</strong> We modify the project cost to the time of the start of construction because these estimates are calculated two or more years in advance to construction therefore cost must be identified with respect to the future. It is adjusted using a time index which includes relative inflation or deflation with respect to time due to factors like labor rates, material costs, interest rates, etc.
          </p>
          <p>
            <strong className="text-[#121212] font-semibold">Location Adjustments:</strong> The anticipated project cost is evaluated with respect to location as the material, labor rates vary in different parts of the country. For this purpose, we employ our location index to national average cost to adjust the bill of material for a particular region or closest capital city.
          </p>
          <p>
            <strong className="text-[#121212] font-semibold">Type and Size Adjustments:</strong> Project cost is also dependent on the type and size of the project. Here, we apply the size factor which relates the proposed building area to the typical building area.
          </p>
          <p>
            <strong className="text-[#121212] font-semibold">Quality Considerations:</strong> The quality of the basic material required in the construction is also considered (e.g., brick veneer, CMU, framed, etc.)
          </p>
        </div>
      </div>
    </section>
  )
}

