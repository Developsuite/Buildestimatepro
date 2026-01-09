'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = [
  {
    title: 'Save Time and Effort',
    description: 'Material takeoff reports save your valuable time and effort, allowing you to invest in other critical areas of your project management and execution.'
  },
  {
    title: 'Effective Budget Allocation',
    description: 'Know the right calculations for materials to easily allocate a proper amount of budget to materials and labor, preventing unnecessary consumption.'
  },
  {
    title: 'Supply Chain Management',
    description: 'Our reports help you manage the supply chain effectively and ensure resource availability on the construction site without any irregularity.'
  },
  {
    title: 'Reduce Material Waste',
    description: 'Avoid costly overruns and shortages by ordering the exact quantities needed, minimizing material waste and optimizing project efficiency.'
  },
  {
    title: 'Unburden Project Managers',
    description: 'Give project managers flexibility to focus on their core responsibilities without the pressure of manual material calculations and estimations.'
  },
  {
    title: 'Prevent Budget Overruns',
    description: 'Accurate material quantities help prevent budget overruns by providing precise cost information before procurement and construction begins.'
  }
]

export default function MaterialTakeoffBenefitsSection() {
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

      {/* Animated Circle Rings Background */}
      <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping"></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute inset-16 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </div>

      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute inset-16 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.3s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree leading-tight">
            Advantages of Taking Our Quantity Takeoffs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-4xl font-figtree leading-relaxed">
            It is always beneficial for contractors and project developers to hire material estimating firms for accurate reports on materials and items needed for projects. Our material takeoff services provide comprehensive solutions to streamline your construction process.
          </p>
        </div>

        {/* Benefits Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative pl-6 sm:pl-8 border-l-4 border-[#E8481C]/30 hover:border-[#E8481C] transition-all duration-300">
              <div className="absolute -left-3 sm:-left-4 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-[#F5F1E6]">
                <span className="text-xs sm:text-sm font-bold text-white font-figtree">{index + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#121212] mb-2 sm:mb-3 font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-[#121212]/70 leading-relaxed font-figtree">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

