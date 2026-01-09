'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    items: [
      'Attention-to-detail Cost estimates',
      'Quantity Takeoffs for all types of projects',
      'Decades of Industry experience'
    ]
  },
  {
    items: [
      'Fast & responsive Turnarounds',
      'Flexible & customized estimating solutions',
      'Technology integration'
    ]
  },
  {
    items: [
      'Competitive & Transparent pricing',
      'High Bid-winning ratio with assistance',
      'Round-the-clock customer Support'
    ]
  }
]

const metrics = [
  {
    value: '98%',
    label: 'Bid-Winning Ratio'
  },
  {
    value: '100%',
    label: 'Client Satisfaction'
  },
  {
    value: '70%',
    label: 'Profit Margin'
  }
]

export default function AboutDistinguishedSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          {/* Section Header */}
          <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] font-figtree mb-4 sm:mb-5 md:mb-6">
              What Sets Us Apart as a Distinguished Estimating Company?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#121212]/80 leading-relaxed font-figtree max-w-4xl mx-auto md:mx-0">
              You must be wondering what makes us a distinguished estimating company in the USA. At BuildEstimatePro, we excel at delivering professional cost estimating services for all types of projects. We are committed to sticking to our values and mission while providing attention to detail and cost analysis. We leverage the latest software and techniques to assess the advanced market trends and offer insightful measures. We also believe in a customized approach, as every project reflects the unique taste. So we offer tailored solutions catered to your needs. These qualities set us apart as a successful company.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            {features.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3 sm:space-y-4">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 sm:gap-4">
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full rounded-full bg-[#E8481C] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Feature Text */}
                    <p className="text-xs sm:text-sm md:text-base text-[#121212] font-figtree leading-relaxed flex-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative text-center p-4 sm:p-5 md:p-6 lg:p-7 bg-[#121212] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group overflow-hidden"
              >
                {/* Liquid fill hover effect */}
                <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                
                <div className="relative z-10">
                  {/* Metric Value */}
                  <div className="mb-2 sm:mb-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8481C] group-hover:text-white font-figtree transition-colors duration-300">
                      {metric.value}
                    </span>
                  </div>
                  {/* Metric Label */}
                  <p className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-white/90 font-figtree transition-colors duration-300">
                    {metric.label}
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

