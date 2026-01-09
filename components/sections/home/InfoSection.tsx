'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function InfoSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <Image
                src="/images/home/info.png"
                alt="Construction Cost Estimating Services"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#121212] mb-4 sm:mb-6 md:mb-8 leading-tight font-figtree">
              Construction Cost Estimating Services. Accurate, Reliable & Built for Success
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-figtree">
                Over 85% of construction projects struggle with delays and budget overruns due to poor planning and inaccurate estimates. That's why having a clear cost breakdown and a well-structured budget is essential.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-figtree">
                At Cost Bidding, we provide precise, error-free construction estimates for projects of all sizes. Our team of 100+ expert estimators helps reduce overheads, identify risks, offer cost-saving alternatives, and ensure compliance with local building codes.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-figtree">
                If you need a professional construction estimator, feel free to contact us for a quick quote.
              </p>
            </div>

            {/* Tick List */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              {/* Mobile: 2x2 Grid (4 items only) */}
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                {[
                  'Any Trade or Any Kind of Project',
                  'Ensure up to 100% Accuracy',
                  'Refund Policy (Risk Free)',
                  'No Hidden Charges'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg 
                      className="w-4 h-4 flex-shrink-0 text-[#E8481C]" 
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
                    <span className="text-xs text-[#121212] font-figtree leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Desktop: Single Column (All 5 items) */}
              <div className="hidden sm:block space-y-3 sm:space-y-4">
                {[
                  'Any Trade or Any Kind of Project',
                  'Ensure up to 100% Accuracy',
                  'Refund Policy (Risk Free)',
                  'No Hidden Charges',
                  'Reduce Your Estimating Expenses Upto 30%'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#E8481C]" 
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
                    <span className="text-xs sm:text-sm md:text-base text-[#121212] font-figtree">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative h-[36px] sm:h-[40px] px-4 sm:px-5 md:px-6 flex items-center justify-center bg-[#E8481C] text-white text-xs sm:text-sm font-normal overflow-hidden transition-all duration-300 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-[#121212] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Reduce Your Estimating Expenses Upto 30%
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

