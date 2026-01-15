'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutVideoSection() {
  const [ref, isVisible] = useScrollAnimation()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Lazy load video when section is visible
    if (isVisible && videoRef.current) {
      videoRef.current.load()
    }
  }, [isVisible])

  return (
    <section ref={ref} className={`relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] xl:min-h-[380px] overflow-hidden bg-[#121212] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="BuildEstimatePro construction estimating services"
        >
          <source src="/images/about/video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support webm */}
          Your browser does not support the video tag.
        </video>
        
        {/* Black Fade Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/50 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            {/* Main Heading */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-figtree leading-tight">
              WORKING WITH US
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-5 md:mb-6 font-figtree leading-relaxed">
              WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS
            </p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-base font-medium overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Liquid fill hover effect */}
                <span className="absolute inset-0 bg-[#121212] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  CONTACT US & GET 30% OFF
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </section>
  )
}

