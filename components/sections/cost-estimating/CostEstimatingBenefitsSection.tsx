'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = [
  {
    title: 'Accurate and Detailed Estimates',
    description: 'Highly accurate and detailed cost estimates enable you to plan and budget effectively, giving you confidence in your project planning.'
  },
  {
    title: 'Timely Turnaround',
    description: 'Delivers estimates within fast turnaround times (24 to 48 hours) to meet project deadlines and keep your projects moving forward.'
  },
  {
    title: 'Save up to 60% Cost Savings',
    description: 'Our monthly takeoff packages offer substantial savings, reducing your estimating expenses by up to 60% compared to employing a full-time estimator.'
  },
  {
    title: 'Expertise Across Various Project Types',
    description: 'Whether your project is residential, commercial, industrial, or in any other sector, our cost estimators are certified with credible accreditations to deliver reliable estimates.'
  },
  {
    title: 'Cost Control Measures',
    description: 'Our cost management services ensure your project stays within budget. We implement effective measures to control costs and mitigate risks.'
  },
  {
    title: 'Transparent and Collaborative Approach',
    description: 'We believe in open communication and collaboration with our clients. We keep you informed throughout the estimating process, addressing any questions or concerns you may have.'
  }
]

export default function CostEstimatingBenefitsSection() {
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

      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 opacity-15 hidden lg:block">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
        <div className="absolute inset-6 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
            Benefits Of Outsourcing Your Cost Estimates To Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl mx-0 font-figtree leading-relaxed">
            When you partner with BuildEstimatePro for your cost estimating needs, you benefit from professional expertise and comprehensive services designed to optimize your project success.
          </p>
        </div>

        {/* Benefits List - Paragraph Style */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative pl-6 sm:pl-8 md:pl-10 border-l-4 border-[#E8481C]/30 hover:border-[#E8481C] transition-all duration-300"
            >
              {/* Number Indicator */}
              <div className="absolute -left-3 sm:-left-4 md:-left-5 top-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-[#F5F1E6]">
                <span className="text-xs sm:text-sm md:text-base font-bold text-white font-figtree">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Dot */}
              <div className="absolute -left-1.5 sm:-left-2 md:-left-2.5 top-8 sm:top-10 md:top-12 w-3 h-3 sm:w-4 sm:h-4 bg-[#E8481C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
