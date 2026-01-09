'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Accurate Estimates',
    description: 'Our experienced estimators use industry-leading software and proven methodologies to deliver highly accurate estimates that help you bid competitively and stay within budget.'
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'We understand time is critical in construction. Our team works efficiently to deliver detailed estimates and takeoffs within your required timeframe, often within 24-48 hours.'
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cost-Effective',
    description: 'Outsourcing your estimating needs to us eliminates the overhead of maintaining an in-house team while providing access to expert estimators and professional-grade software.'
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Detailed Documentation',
    description: 'Every estimate includes comprehensive documentation with material breakdowns, labor costs, equipment needs, and detailed explanations to support your bidding decisions.'
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Our team consists of certified estimators, engineers, and construction professionals with years of experience across residential, commercial, and industrial projects.'
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Advanced Software',
    description: 'We utilize industry-standard software including Bluebeam, PlanSwift, Accubid, Trimble, and other professional tools to ensure precision and efficiency in every estimate.'
  }
]

export default function ServicesFeaturesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-14 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/backgorund.png')" }}
      ></div>

      {/* Overlay for readability - combines color and image */}
      <div className="absolute inset-0 bg-[#E0DCD7]/85"></div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0DCD7]/90 via-[#E0DCD7]/85 to-[#E0DCD7]/90"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(18,18,18,0.3) 35px, rgba(18,18,18,0.3) 36px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(18,18,18,0.2) 35px, rgba(18,18,18,0.2) 36px)',
        }}></div>
      </div>

      {/* Orange Dots Pattern in Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      {/* Accent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Why Choose Our Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/70 max-w-3xl mx-auto font-figtree leading-relaxed">
            We combine expertise, technology, and dedication to deliver construction estimating services that help you win more bids, control costs, and achieve project success.
          </p>
        </div>

        {/* Zigzag Timeline Layout */}
        <div className="relative">
          {/* Central Connecting Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8481C]/30 via-[#E8481C]/50 to-[#E8481C]/30 transform -translate-x-1/2"></div>

          {/* Features List */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Container - Alternating layout on large screens */}
                  <div className={`relative flex flex-col lg:flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Icon Section */}
                    <div className={`relative flex-shrink-0 w-full lg:w-auto flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Connecting Line Dot - Hidden on mobile, centered on central line */}
                      <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E8481C] rounded-full z-20 border-2 border-[#E0DCD7]"></div>
                      
                      {/* Icon Container */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {/* Outer Circle with Gradient */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8481C]/20 to-[#E8481C]/5 group-hover:from-[#E8481C]/40 group-hover:to-[#E8481C]/20 transition-all duration-500"></div>
                        
                        {/* Middle Circle */}
                        <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 rounded-full bg-white/80 backdrop-blur-sm group-hover:bg-[#E8481C] transition-all duration-500 border-2 border-[#E8481C]/20 group-hover:border-[#E8481C]"></div>
                        
                        {/* Icon */}
                        <div className="relative z-10 text-[#E8481C] group-hover:text-white transition-colors duration-500">
                          {feature.icon}
                        </div>

                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-full bg-[#E8481C]/0 group-hover:bg-[#E8481C]/20 blur-xl transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`flex-1 w-full lg:w-auto ${
                      isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'
                    } text-center lg:text-left`}>
                      {/* Liquid fill background on hover */}
                      <div className="relative overflow-hidden backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)'
                        }}
                      >
                        {/* Liquid fill hover effect */}
                        <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                        
                        <div className="relative z-10">
                          {/* Title */}
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 font-figtree transition-colors duration-300 text-[#121212] group-hover:text-white">
                            {feature.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-xs sm:text-sm md:text-base leading-relaxed font-figtree transition-colors duration-300 text-[#121212]/70 group-hover:text-white/90">
                            {feature.description}
                          </p>
                        </div>

                        {/* Decorative Corner Accent */}
                        <div className={`absolute ${isEven ? 'top-0 left-0' : 'top-0 right-0'} w-12 h-12 sm:w-16 sm:h-16 opacity-10 group-hover:opacity-30 transition-opacity duration-500`}>
                          <div className={`absolute inset-0 border-2 border-[#E8481C] ${
                            isEven ? 'border-r-0 border-b-0' : 'border-l-0 border-b-0'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
