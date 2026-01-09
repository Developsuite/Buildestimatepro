'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const values = [
  {
    title: 'Our Vision',
    description: 'To become the leading construction estimating company that empowers contractors across the USA with precise, data-driven estimates that drive project success and profitability.'
  },
  {
    title: 'Our Mission',
    description: 'To deliver accurate, timely, and comprehensive construction estimating solutions that help contractors bid confidently, reduce costs, and win more projects through exceptional service and expertise.'
  },
  {
    title: 'Core Values',
    description: 'We uphold accuracy, reliability, innovation, and client collaboration in every estimate, ensuring transparent pricing and meaningful impact on construction project outcomes.'
  }
]

export default function AboutValuesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#121212] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-base sm:text-lg md:text-lg font-semibold text-[#E8481C] mb-2 sm:mb-3 font-figtree">
                  {value.title}
                </h3>
                <div className="w-full md:w-auto h-px bg-white mb-2 sm:mb-3"></div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-figtree">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

