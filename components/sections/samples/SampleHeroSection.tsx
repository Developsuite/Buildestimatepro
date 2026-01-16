'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function SampleHeroSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sample/samplehero.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center md:justify-start px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] w-full">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-figtree leading-tight px-2 md:px-0">
              OUR SAMPLE
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-figtree px-2 sm:px-4 md:px-0 mb-4 sm:mb-6 md:mb-8">
              Explore our comprehensive collection of construction estimation samples. See the quality, detail, and accuracy that BuildEstimatePro delivers for every project.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-2 md:px-0">
              <Link 
                href="/contact" 
                className="group relative w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3.5 bg-[#E8481C] text-white font-figtree font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              >
                <span className="relative z-10 text-xs sm:text-base group-hover:tracking-wide transition-all duration-300">Schedule a Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group relative w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3.5 bg-white text-[#E8481C] font-figtree font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white hover:border-[#E8481C] text-center"
              >
                <span className="relative z-10 text-xs sm:text-base group-hover:tracking-wide transition-all duration-300">Contact Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F2] to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

