'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Submit Your Drawing Plans',
    description: 'You can easily upload your drawing plans and specifications through the Contact page or simply email us. We accept various formats, including PDF files, for your convenience. Whether you have a Bid set, Schematic, Design Development, Construction document, or conceptual drawings, we\'ve got you covered. Don\'t forget to provide us with all the necessary details by filling out the form.',
    buttonText: 'Upload Plans Here!',
    buttonLink: '/contact',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    id: 2,
    number: '02',
    title: 'We Review The Plans',
    description: 'Our expert team of certified estimators carefully analyzes your drawings, specifications, and project requirements to ensure comprehensive understanding before proceeding with the estimate.',
    buttonText: null,
    buttonLink: null,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    number: '03',
    title: 'Get A Quote',
    description: 'After evaluating your information and plans, you will receive a quote immediately. You can pay the invoice via bank debit/credit card or wire transfer.',
    buttonText: null,
    buttonLink: null,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 4,
    number: '04',
    title: 'Receive an Estimate',
    description: 'Get your complete, accurate estimate delivered within 24-48 hours. Our detailed reports help you bid confidently and manage your project budget effectively.',
    buttonText: null,
    buttonLink: null,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
]

export default function CostEstimatingHowToStartSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F5F1E6] via-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.1) 40px, rgba(18,18,18,0.1) 41px)',
        }}></div>
      </div>

      {/* Animated Circle Rings Background */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-15">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping"></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute inset-16 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </div>

      <div className="absolute bottom-20 right-20 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 opacity-12">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute inset-6 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute inset-12 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.3s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 opacity-10 hidden lg:block">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
        <div className="absolute inset-6 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
      </div>

      {/* Orange Dots Pattern in Corners */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px'
        }}></div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10">
          <div className="inline-block mb-2">
            <span className="text-xs sm:text-sm font-semibold text-[#E8481C] font-figtree uppercase tracking-wider">Get Started</span>
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E8481C] to-transparent mt-1"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree leading-tight">
            How to Get Started with Us For Cost Estimates
          </h2>
          <p className="text-xs sm:text-sm text-[#121212]/60 max-w-3xl font-figtree leading-relaxed">
            Follow our streamlined process to get accurate cost estimates for your construction projects. Simple, fast, and reliable.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-10">
          {/* Left Side - Steps */}
          <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative"
              >
                {/* Step Card with Enhanced Design */}
                <div className="relative bg-white/80 backdrop-blur-xl p-3 sm:p-4 md:p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/60 overflow-hidden group-hover:border-[#E8481C]/30">
                  {/* Liquid fill hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>

                  {/* Decorative Gradient Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E8481C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex gap-3 sm:gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 bg-[#E8481C]/20 rounded-full blur-md group-hover:bg-[#E8481C]/40 transition-all duration-500 scale-110"></div>
                        
                        {/* Step Number Badge */}
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#E8481C] transition-all duration-500 group-hover:scale-110 border-2 border-[#E8481C]/30 group-hover:border-[#E8481C]">
                          <span className="text-sm sm:text-base font-bold text-[#E8481C] group-hover:text-white font-figtree transition-colors duration-500">
                            {step.number}
                          </span>
                        </div>

                        {/* Icon Overlay */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 sm:w-7 sm:h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:bg-[#E8481C]/20 transition-all duration-500 border border-[#E8481C]/20 group-hover:border-[#E8481C]/50">
                          <div className="text-[#E8481C] group-hover:text-white transition-colors duration-500 scale-75">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#121212] mb-1.5 sm:mb-2 font-figtree group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#121212]/70 leading-relaxed font-figtree group-hover:text-white/90 transition-colors duration-300 mb-2 sm:mb-3">
                        {step.description}
                      </p>
                      {step.buttonText && (
                        <Link
                          href={step.buttonLink || '/contact'}
                          className="group/btn inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8481C] text-white font-figtree font-semibold text-xs sm:text-sm rounded-lg hover:bg-[#ff6b47] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        >
                          {step.buttonText}
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 border-t-2 border-l-2 border-[#E8481C] rounded-tl-xl"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 border-b-2 border-r-2 border-[#E8481C] rounded-br-xl"></div>
                  </div>
                </div>

                {/* Enhanced Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-5 sm:left-6 md:left-7 top-full w-0.5 h-3 sm:h-4 bg-gradient-to-b from-[#E8481C]/50 via-[#E8481C]/30 to-transparent rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Image with Enhanced Effects */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/5 to-transparent rounded-3xl blur-3xl transform scale-110"></div>
              
              {/* Image Container with Border Effects */}
              <div className="relative p-4 sm:p-6">
                {/* Multi-layer Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#E8481C]/20"></div>
                <div className="absolute inset-2 rounded-xl border border-[#E8481C]/10"></div>
                
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
                  <Image
                    src="/images/home/info.png"
                    alt="How to Get Started with Cost Estimates"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain relative z-10"
                    priority
                  />
                </div>

                {/* Floating Orbs */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E8481C]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#E8481C]/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
