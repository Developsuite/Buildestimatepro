'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WhyChooseSection() {
  const [ref, isVisible] = useScrollAnimation()
  
  const features = [
    {
      title: 'Fast Turnaround Time',
      description: 'Receive complete estimates and quantity takeoffs within twenty four to forty eight hours.'
    },
    {
      title: 'Budget Friendly Rates',
      description: 'Our pricing is competitive and usually starts around two hundred dollars depending on your project scope.'
    },
    {
      title: 'Precise and Comprehensive Estimates',
      description: 'We use advanced estimating software and an updated cost database based on location to ensure accuracy. Vendor pricing is also available on request.'
    },
    {
      title: 'Qualified Estimators',
      description: 'Our team includes certified estimators with strong industry experience. They are skilled in software such as Planswift, Bluebeam, Trimble, Accubid, RS Means, Cost Works and Quest.'
    },
    {
      title: 'High Bid Winning Ratio',
      description: 'Our clients achieve a bid hit rate of more than ninety two percent based on previous project data.'
    },
    {
      title: 'Experienced Professional Team',
      description: 'Our team consists of estimators, engineers, field specialists and construction managers who work together to deliver dependable results.'
    },
    {
      title: 'Round the Clock Support',
      description: 'Our customer support team is available at all times to guide you whenever needed.'
    }
  ]

  return (
    <section ref={ref} className={`relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-[#E0DCD7] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Modern Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(18,18,18,0.3) 35px, rgba(18,18,18,0.3) 36px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(18,18,18,0.2) 35px, rgba(18,18,18,0.2) 36px)',
        }}></div>
      </div>
      
      {/* Orange Dots Pattern in Corners - Responsive */}
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>
      
      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#121212] mb-4 sm:mb-5 md:mb-6 font-figtree">
            Why Choose Our Estimating Company
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#121212]/80 leading-relaxed font-figtree">
            Many contractors lose valuable projects every month simply because they do not have the time or resources to prepare proper estimates. Our estimating firm helps you bid on more jobs while reducing your overall estimating costs. We support busy contractors with reliable estimating and takeoff services that give you a stronger chance of winning projects.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 sm:gap-4 md:gap-5 transition-all duration-300 hover:translate-x-2"
            >
              {/* Bullet/Checkmark */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#E8481C] to-[#E8481C]/70 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#121212] mb-1 sm:mb-2 font-figtree transition-colors duration-300 group-hover:text-[#E8481C]">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#121212]/70 leading-relaxed font-figtree">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

