'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const processSteps = [
  {
    id: 1,
    title: 'Submit Your Drawing Plans',
    description: 'You can easily upload your drawing plans and specifications through the Contact page or simply email us. We accept various formats, including PDF files, for your convenience. Whether you have a Bid set, Schematic, Design Development, Construction document, or conceptual drawings, we\'ve got you covered. Don\'t forget to provide us with all the necessary details by filling out the form.',
    hasButton: false,
    isActive: true
  },
  {
    id: 2,
    title: 'We Review The Plans',
    description: 'Our expert team of certified residential estimators carefully analyzes your drawings, specifications, and project requirements to ensure comprehensive understanding before proceeding with the estimate.',
    hasButton: false,
    isActive: false
  },
  {
    id: 3,
    title: 'Get A Quote',
    description: 'After evaluating your information and plans, you will receive a quote immediately. You can pay the invoice via bank debit/credit card or wire transfer. Our dedicated estimators will start working on your project right away.',
    hasButton: false,
    isActive: false
  },
  {
    id: 4,
    title: 'Receive an Estimate',
    description: 'Get your complete, accurate residential estimate delivered within 24-48 hours. Our detailed reports help you plan your home construction project budget effectively and make informed decisions.',
    hasButton: false,
    isActive: false
  }
]

export default function ResidentialEstimatingHowToStartSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            How to Get Started with Us For Home Estimates
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/70 max-w-2xl mx-auto sm:mx-0 font-figtree leading-relaxed">
            Our streamlined process ensures you get accurate residential estimates quickly and efficiently
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-10">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative z-10">
                <Image
                  src="/images/home/process1.png"
                  alt="Residential Estimating Process"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-10 z-0">
                <div className="w-full h-full rounded-full border-4 border-[#E8481C]"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-10 z-0">
                <div className="w-full h-full rounded-full border-4 border-[#0063BF]"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="w-full lg:w-1/2 flex flex-col relative">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative mb-4 sm:mb-5 md:mb-6 last:mb-0 group"
              >
                {/* Vertical Line Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute left-6 sm:left-7 top-12 sm:top-14 bottom-0 w-0.5 bg-gradient-to-b from-[#E8481C] via-[#E8481C]/60 to-transparent z-0"></div>
                )}

                {/* Step Content Container */}
                <div className="relative">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                        step.isActive 
                          ? 'bg-gradient-to-br from-[#E8481C] to-[#E8481C]/80 border-2 border-[#E8481C] shadow-lg shadow-[#E8481C]/30' 
                          : 'bg-white border-2 border-gray-300 shadow-md group-hover:border-[#E8481C]/50'
                      }`}>
                        <span className={`text-sm sm:text-base font-bold font-figtree transition-colors duration-300 ${
                          step.isActive ? 'text-white' : 'text-gray-700 group-hover:text-[#E8481C]'
                        }`}>
                          {step.id}
                        </span>
                        {/* Active indicator pulse */}
                        {step.isActive && (
                          <div className="absolute inset-0 rounded-full bg-[#E8481C] animate-ping opacity-20"></div>
                        )}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-0.5 text-center sm:text-left w-full">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#121212] mb-2 sm:mb-3 font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      {step.description && (
                        <p className="text-xs sm:text-sm text-[#121212]/70 leading-relaxed font-figtree mb-3 sm:mb-4">
                          {step.description}
                        </p>
                      )}

                      {step.hasButton && (step as any).buttonLink && (step as any).buttonText && (
                        <div className="flex justify-center sm:justify-start">
                          <Link
                            href={(step as any).buttonLink}
                            className="group/btn relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-[#E8481C] text-[#E8481C] font-semibold text-xs sm:text-sm font-figtree overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#E8481C]/20"
                          >
                            <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100"></span>
                            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white">
                              {(step as any).buttonText}
                              <svg 
                                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
