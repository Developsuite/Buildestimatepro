'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const processSteps = [
  {
    id: 1,
    title: 'Submit Your Plans',
    description: 'Send us plans and drawings (Dropbox link, Plans Portal link, etc.) at info@buildestimatepro.com or call us at (737) 273-3314 or go to contact us page, attach the file, and fill the form.',
    hasButton: false,
    isActive: true
  },
  {
    id: 2,
    title: 'Get a Quote',
    description: 'You will get a quote consisting of the invoice, turnaround time, and delivery date. Then you can pay via credit card or debit card or PayPal.',
    hasButton: false,
    isActive: false
  },
  {
    id: 3,
    title: 'Get Estimate',
    description: 'Your estimate will be delivered to you in EXCEL sheets either in our format or a format supplied by you.',
    hasButton: false,
    isActive: false
  }
]

export default function PreliminaryEstimatingHowToStartSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-36 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] mb-4 sm:mb-5 md:mb-6 font-figtree">
            How to Get Started
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-2xl mx-auto sm:mx-0 font-figtree leading-relaxed">
            Our streamlined process ensures you get accurate preliminary estimates quickly and efficiently
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-10">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative z-10">
                <Image
                  src="/images/home/process1.png"
                  alt="Preliminary Estimating Process"
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
                className="relative mb-6 sm:mb-8 md:mb-10 last:mb-0 group"
              >
                {/* Vertical Line Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute left-6 sm:left-7 md:left-8 top-16 sm:top-18 md:top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#E8481C] via-[#E8481C]/60 to-transparent z-0"></div>
                )}

                {/* Step Content Container */}
                <div className="relative">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                        step.isActive 
                          ? 'bg-gradient-to-br from-[#E8481C] to-[#E8481C]/80 border-2 border-[#E8481C] shadow-lg shadow-[#E8481C]/30' 
                          : 'bg-white border-2 border-gray-300 shadow-md group-hover:border-[#E8481C]/50'
                      }`}>
                        <span className={`text-base sm:text-lg md:text-xl font-bold font-figtree transition-colors duration-300 ${
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
                    <div className="flex-1 pt-1 text-center sm:text-left w-full">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      {step.description && (
                        <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree mb-4 sm:mb-5">
                          {step.description}
                        </p>
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

