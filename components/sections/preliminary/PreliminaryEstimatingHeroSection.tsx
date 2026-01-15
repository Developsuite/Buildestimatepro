'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PreliminaryEstimatingHeroSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full h-[350px] sm:h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/premilinary.png')" }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80"></div>
      </div>

      {/* Breadcrumb */}
      <div className="absolute top-4 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 2xl:left-20 3xl:px-24 z-30">
        <nav className="text-white/80 text-xs sm:text-sm font-figtree">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">»</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">»</span>
          <span className="text-white">Preliminary Estimate Services</span>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center md:justify-start px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] w-full">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-figtree leading-tight px-2 md:px-0">
              Preliminary Estimate Services
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-figtree px-2 sm:px-4 md:px-0 mb-4 sm:mb-6 md:mb-8">
              Are you somewhere in the range of 30%, 60%, and 90% of your drawing plans? Or frustrated by preparing estimates with incomplete drawing plans? Or in need of a quick preliminary estimate to check if the project is in your client&apos;s budget? We can serve you by providing fast and detailed preliminary estimates.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-2 md:px-0">
              <Link 
                href="/contact" 
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E8481C] text-white font-figtree font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              >
                <span className="relative z-10 text-sm sm:text-base group-hover:tracking-wide transition-all duration-300">Get 30% Off First Estimate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 backdrop-blur-md text-white font-figtree font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white text-center"
              >
                <span className="relative z-10 text-sm sm:text-base group-hover:tracking-wide transition-all duration-300">Upload Plans</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

