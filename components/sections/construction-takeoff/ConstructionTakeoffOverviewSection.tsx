'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ConstructionTakeoffOverviewSection() {
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
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-6 sm:mb-8 font-figtree text-left">
            Plan Your <span className="text-[#E8481C]">Construction Projects</span> with Confidence
          </h2>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
            <p>
              Every construction project needs a clear plan, and a big part of that plan is a construction takeoff. A takeoff is a comprehensive list of all the materials, labor, and equipment needed to complete the job. It serves as the foundation of your budget and your schedule; without it, you will run into additional expenses, delays, or missing essential items.
            </p>
            <p>
              At BuildEstimatePro, we offer construction takeoff services that give you accurate numbers from the start. Our team uses advanced tools and years of experience to make sure nothing is missed in your project planning.
            </p>
            <p>
              From residential homes to commercial buildings and large industrial projects, we help you plan with confidence and avoid costly mistakes. Our detailed takeoffs enable contractors, project managers, and developers to make informed decisions that keep projects on track and within budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

