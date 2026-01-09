'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MaterialTakeoffHeroSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/materialtakeoff/8.jpg"
          alt="Material Takeoff Services Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/85 via-[#121212]/80 to-[#121212]/85"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8481C]/10 via-transparent to-transparent z-0"></div>

      <div className="relative z-20 h-full flex items-center justify-center md:justify-start px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] w-full">
          {/* Breadcrumb */}
          <nav className="mb-2 sm:mb-3 md:mb-4">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-figtree">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-[#E8481C]">»</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li className="text-[#E8481C]">»</li>
              <li className="text-white">Quantity Takeoff</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-figtree leading-tight">
              Quantity Takeoff Services
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-4 sm:mb-5 md:mb-6 font-figtree leading-relaxed max-w-3xl">
              Worried about the exact amount of material and items needed to complete your project? Get our comprehensive quantity takeoff services that include every detail about required materials and items.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#E8481C] text-white font-figtree text-xs sm:text-sm md:text-base font-semibold rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#121212]">
                  Schedule a Meeting
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="tel:7372733314"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-figtree text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Call Us Now
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

