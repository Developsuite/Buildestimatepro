'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const promises = [
  {
    title: 'Quick Turnaround Times',
    description: '24 to 48 hours delivery for most commercial estimates, ensuring your project stays on schedule.'
  },
  {
    title: 'Market Competitive Rates',
    description: 'Transparent and competitive pricing that provides excellent value for your commercial estimating needs.'
  },
  {
    title: 'Detailed & Accurate Estimates',
    description: 'Comprehensive estimates with line-item descriptions, colored marked-up plans, and zip-code based pricing.'
  },
  {
    title: 'Easy to Understand Reports',
    description: 'Clear, organized reports delivered in EXCEL spreadsheets formatted to your specifications and preferences.'
  },
  {
    title: 'Colored Marked Drawings',
    description: 'Detailed marked-up plans for easy review and validation of quantities and materials.'
  },
  {
    title: 'Certified Estimators',
    description: 'Experienced team of construction estimators certified with credible accreditations like AACE & AIQS.'
  },
  {
    title: 'International Standards',
    description: 'All estimates comply with international standards and industry best practices.'
  },
  {
    title: 'Confidentiality Guaranteed',
    description: 'Your project information and estimates are kept completely confidential and secure.'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support on chat and email to assist you whenever you need help.'
  }
]

export default function CommercialEstimatingWhyChooseSection() {
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
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree">
            What We Promise at BuildEstimatePro
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl font-figtree leading-relaxed">
            Our commitment to excellence ensures you receive the highest quality commercial estimating services backed by experience, expertise, and dedication.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg p-5 sm:p-6 rounded-xl border border-white/10 hover:border-[#E8481C]/50 transition-all duration-300 hover:bg-white/10 overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#E8481C] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white font-figtree group-hover:text-[#E8481C] transition-colors duration-300 pt-1">
                    {promise.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-figtree pl-11 sm:pl-12">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

