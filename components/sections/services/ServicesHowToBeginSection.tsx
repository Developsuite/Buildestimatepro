'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Upload Your Info and Plans',
    description: 'Fill out the form on our website and submit your drawings by uploading your plan documents. Your plans can be Bid set, Schematic, Construction document, Schematic design, or conceptual drawings in PDF format. You may provide a Dropbox link or portal link. Once we receive your drawing plans and requirements, we will send you a quotation that includes an invoice, turnaround time, and delivery date.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    id: 2,
    number: '02',
    title: 'Get A Quote',
    description: 'After evaluating your information and plans, you will receive a quote immediately. You can pay the invoice via bank debit/credit card or wire transfer. Our dedicated estimators will start working on your project right away.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    number: '03',
    title: 'Get Your Project Estimate',
    description: 'You will receive a comprehensive estimate that includes all materials and labor amounts with pricing. Upon request, we offer the estimate and takeoff sheet in EXCEL format, our own template, or your custom template, complete with Color-Coded Takeoff sheets to show how we calculated the quantities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function ServicesHowToBeginSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.1) 40px, rgba(18,18,18,0.1) 41px)',
        }}></div>
      </div>

      {/* Animated Circle Rings */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-20">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping"></div>
        <div className="absolute inset-4 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </div>

      <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 opacity-15">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute inset-4 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.3s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 opacity-10 hidden lg:block">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
        <div className="absolute inset-3 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Section Header */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-2 sm:mb-3 font-figtree leading-tight">
                Start Your Successful Journey with BuildEstimatePro
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8481C] mb-3 sm:mb-4 font-figtree">
                How To Begin With Us!
              </h3>
            </div>

            {/* Steps List */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="group relative"
                >
                  {/* Step Card */}
                  <div className="relative bg-white/60 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50 overflow-hidden">
                    {/* Liquid fill hover effect */}
                    <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>

                    <div className="relative z-10 flex gap-3 sm:gap-4 md:gap-5">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          {/* Step Number Badge */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#E8481C] transition-all duration-500 group-hover:scale-110 border-2 border-[#E8481C]/20 group-hover:border-[#E8481C]">
                            <span className="text-base sm:text-lg md:text-xl font-bold text-[#E8481C] group-hover:text-white font-figtree transition-colors duration-500">
                              {step.number}
                            </span>
                          </div>
                          {/* Icon Overlay */}
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-9 sm:h-9 bg-[#E8481C]/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 backdrop-blur-sm">
                            <div className="text-[#E8481C] group-hover:text-white transition-colors duration-500 scale-75 sm:scale-90">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-0.5">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#121212] mb-2 sm:mb-2.5 font-figtree group-hover:text-white transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#121212]/70 leading-relaxed font-figtree group-hover:text-white/90 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute inset-0 border-t-2 border-r-2 border-[#E8481C] rounded-tr-xl"></div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-6 sm:left-7 md:left-8 top-full w-0.5 h-4 sm:h-5 bg-gradient-to-b from-[#E8481C]/40 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/services/plan.png"
                alt="Construction Plans and Drawings"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
