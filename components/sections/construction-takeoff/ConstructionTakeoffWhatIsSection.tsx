'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ConstructionTakeoffWhatIsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/materialtakeoff/6.jpg"
          alt="Construction Takeoff"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[#121212]/90 to-[#121212]/95"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="w-full text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-figtree text-center">
            What are <span className="text-[#E8481C]">Construction Takeoff Services</span>?
          </h2>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-figtree">
            <p>
              Construction takeoff services involve estimating the quantities of construction materials, manpower, and equipment needed to complete a construction project. It is essential for creating accurate estimates and budgets, which enable projects to be accomplished on time and cost-effectively.
            </p>
            <p>
              In construction takeoff, all information is covered, including the amount of concrete needed in a foundation or the number of nails in a roof. All materials are listed in a clear way to ensure that project managers know the precise quantity needed for successful project completion.
            </p>
            <p>
              Without an accurate takeoff, even the most well-planned construction project can run into problems. Overestimating will result in cost overruns and wasted resources. Meanwhile, underestimation will result in delays or shortages at the construction site. These problems can be avoided by taking accurate measurements from the drawings and preparing a precise takeoff, which puts the project in control from the planning stage to the actual construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

