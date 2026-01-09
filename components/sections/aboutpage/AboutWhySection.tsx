'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = [
  {
    title: 'Accuracy',
    description: 'Using our highly accurate construction cost databases and RSMeans',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Fast Turnarounds',
    description: 'Delivery within 24 to 48 hours',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Market Competitive Rates',
    description: 'Affordable estimates',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Certified Estimators',
    description: 'Expert estimators certified with American estimators organizations.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    title: '24/7 Customer Support',
    description: 'Live chat & email support',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  }
]

export default function AboutWhySection() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
            {/* Left Side - Image */}
            <div className="w-full lg:w-auto order-2 lg:order-1">
              <div className="relative w-full max-w-[400px] mx-auto lg:max-w-[500px]">
                <div className="relative w-full h-full overflow-hidden bg-transparent">
                  <Image
                    src="/images/about/whyus.png"
                    alt="BuildEstimatePro Why Choose Us"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] font-figtree mb-6 text-center lg:text-left">
                Why <span className="text-[#E8481C]">BuildEstimatePro</span>
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-[#121212]/5 border-l-4 border-[#E8481C] hover:bg-[#121212]/10 transition-colors duration-300">
                  <p className="text-sm sm:text-base text-[#121212]/90 font-figtree leading-relaxed">
                    Our detail-oriented and professional team has enabled us to get recognized as the most comprehensive and efficient construction cost consultancies in the market.
                  </p>
                </div>
                
                <div className="p-4 sm:p-5 bg-[#121212]/5 border-l-4 border-[#E8481C] hover:bg-[#121212]/10 transition-colors duration-300">
                  <p className="text-sm sm:text-base text-[#121212]/90 font-figtree leading-relaxed">
                    Our quantity surveyors, estimators, and managers hold specialized degrees in construction management and engineering.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#121212]/5 border-l-4 border-[#E8481C] hover:bg-[#121212]/10 transition-colors duration-300">
                  <p className="text-sm sm:text-base text-[#121212]/90 font-figtree leading-relaxed">
                    We accurately forecast project costs using up-to-date, zip code based labor and material prices, site constraints, and market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group overflow-hidden bg-transparent transition-all duration-300 hover:scale-[1.05] hover:shadow-xl border border-[#121212]/10"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10"
                  style={{ backgroundImage: "url('/images/about/cardsbackgourdn.png')" }}
                ></div>

                {/* Liquid fill hover effect */}
                <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100 z-[1]"></span>
                
                <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E8481C] group-hover:bg-white flex items-center justify-center transition-colors duration-300 shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#E8481C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                      </svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#121212] group-hover:text-white font-figtree mb-2 transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-[#121212]/70 group-hover:text-white/90 font-figtree leading-relaxed transition-colors duration-300">
                    {benefit.description}
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

