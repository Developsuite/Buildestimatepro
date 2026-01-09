'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CADServicesHeroSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/CAD/1.jpg"
          alt="CAD Drafting Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/90 via-[#121212]/85 to-[#E8481C]/70"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 mb-6 hover:bg-white/15 transition-all mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#E8481C] rounded-full animate-pulse"></div>
                  <span className="text-[#E8481C] font-bold text-lg">25+</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <span className="text-white text-sm font-medium">Years Experience</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-figtree leading-[1.1]">
                Expert CAD <br/><span className="text-[#E8481C] relative inline-block">Drafting Services
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="#E8481C" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-figtree max-w-xl mx-auto lg:mx-0">
                High-quality and accurate CAD design and drafting services for your construction projects. From 2D floor plans to 3D modeling, we deliver precision blueprints.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-[#E8481C] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E8481C]/50 font-figtree"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Meeting
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 overflow-hidden transition-all duration-300 hover:border-white/60 hover:scale-105 font-figtree"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>1000+ Projects</span>
                </div>
                <div className="h-4 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8481C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>98% Accuracy</span>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">2D Drafting</h3>
                  <p className="text-white/60 text-sm">Precise floor plans</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">MEP Services</h3>
                  <p className="text-white/60 text-sm">Complete systems</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">3D Modeling</h3>
                  <p className="text-white/60 text-sm">Visual representation</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">Architectural</h3>
                  <p className="text-white/60 text-sm">Design excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

