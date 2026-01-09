'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BookingSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full min-h-[160px] sm:min-h-[180px] md:h-[190px] lg:h-[195px] xl:h-[190px] 2xl:h-[210px] py-6 sm:py-8 md:py-0 bg-[#121212] flex items-center scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          {/* Left Side - Text */}
          <div className="flex-1 w-full sm:w-auto text-center sm:text-left max-w-full sm:max-w-none">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-figtree leading-relaxed sm:leading-relaxed md:leading-relaxed">
              Now get your slot booked with our expert team of construction estimators to discuss your project!
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0 w-auto flex justify-center sm:justify-end">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 2xl:py-5 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-medium overflow-hidden transition-all duration-300 whitespace-nowrap"
            >
              {/* Liquid fill hover effect */}
              <span className="absolute inset-0 bg-[#121212] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                Book A Meeting
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </section>
  )
}

