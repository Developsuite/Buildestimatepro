'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    title: 'Business Growth and Efficiency',
    description: 'Empowering contractors to achieve project success through accurate estimates that help win more bids and maximize profitability.',
    iconColor: 'bg-[#E8481C]'
  },
  {
    title: 'Technological Innovation',
    description: 'Leading the way in construction estimating technology with advanced software and expert estimators to deliver precise results.',
    iconColor: 'bg-[#E8481C]'
  },
  {
    title: 'Expert Team of Estimators',
    description: 'Our certified estimators bring years of industry experience and expertise in all construction trades to deliver reliable estimates.',
    iconColor: 'bg-[#E8481C]'
  },
  {
    title: 'Fast Turnaround Times',
    description: 'Get your estimates delivered within 24-48 hours, helping you respond quickly to project opportunities and stay competitive.',
    iconColor: 'bg-[#E8481C]'
  }
]

export default function AboutFeaturesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto py-0 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24 pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12">
        <div className="relative bg-[#F5F1E6] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
          {/* Modern Background Design */}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E6] via-[#F5F1E6] to-[#E8E4D9] opacity-60"></div>
          
          {/* Decorative Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          ></div>
          
          {/* Accent Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8481C]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8481C]/20 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 xl:gap-12 py-4 sm:py-6 md:py-8 lg:py-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12 pl-2 sm:pl-3 md:pl-4 lg:pl-6">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 md:space-y-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 rounded-full ${feature.iconColor} flex items-center justify-center`}>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-sm md:text-base font-semibold text-[#121212] mb-1 font-figtree">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-xs md:text-sm text-[#121212]/60 leading-relaxed font-figtree">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="w-full flex justify-center lg:justify-start mt-2 sm:mt-3 md:mt-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-base lg:text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  {/* Liquid fill hover effect */}
                  <span className="absolute inset-0 bg-[#121212] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3 transition-colors duration-300 group-hover:text-white">
                    Get a Quote
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] aspect-square">
                <div className="relative w-full h-full overflow-hidden bg-white">
                  <Image
                    src="/images/about/worker1.webp"
                    alt="BuildEstimatePro Construction Estimating Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

