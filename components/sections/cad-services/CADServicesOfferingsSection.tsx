'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CADServicesOfferingsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #121212 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121212] mb-4 font-figtree">
            Our CAD Drafting Company <span className="text-[#E8481C]">Offers</span>
          </h2>
          <p className="text-lg text-[#121212]/60 max-w-3xl">Comprehensive CAD solutions tailored to your construction and design needs</p>
        </div>

        {/* Main Featured Services - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* CAD Conversion - Large Featured */}
          <div className="lg:col-span-2 group relative bg-gradient-to-br from-[#121212] to-[#2a2a2a] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0">
              <Image src="/images/CAD/3.jpg" alt="CAD Conversion" fill className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
            <div className="relative p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="inline-block px-4 py-1.5 bg-[#E8481C]/20 backdrop-blur-sm rounded-full border border-[#E8481C]/30 mb-4">
                  <span className="text-xs font-semibold text-[#E8481C] uppercase tracking-wider">Most Popular</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-figtree">CAD Conversion</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                  Convert sketches, PDF drawings, scan-based drawings, and edited images to perfectly crafted blueprints. Error-free construction drawings with precise measurements.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#E8481C] font-semibold group-hover:gap-3 transition-all">
                Learn More 
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="absolute top-6 right-6 w-20 h-20 border-2 border-[#E8481C]/30 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
          </div>

          {/* 2D CAD Drafting */}
          <div className="group relative bg-white rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 border-2 border-[#E8481C]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/5 via-transparent to-[#0063BF]/5"></div>
            <div className="relative p-8 h-full flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-500">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#121212] mb-3 font-figtree">2D CAD Drafting</h3>
                <p className="text-[#121212]/70 text-sm leading-relaxed">
                  Quality 2D Floor mapping, structural mapping, structural joist details, HVAC layout, and structural framing layout with precision.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#E8481C] font-semibold group-hover:gap-3 transition-all mt-4">
                Learn More 
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Services - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 3D CAD Drafting */}
          <div className="group relative bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)',
              }}></div>
            </div>
            <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 font-figtree">3D CAD Drafting</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Detailed 3D blueprint drafting provides comprehensive conception of construction buildings with visual clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Drafting */}
          <div className="group relative bg-white rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 border-2 border-[#121212]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent"></div>
            <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-xl font-bold text-[#121212] mb-3 font-figtree">Architectural Drafting</h3>
                <p className="text-[#121212]/70 text-sm leading-relaxed">
                  Precision in drafting 2D and 3D construction projects from small-scale residential to large-scale industries.
                </p>
              </div>
            </div>
          </div>

          {/* Structural CAD */}
          <div className="group relative bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}></div>
            </div>
            <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 font-figtree">Structural CAD Drafting</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  On-point structural drawing blueprints crucial for project success and ensuring high bid-winning ratio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MEP CAD - Full Width Featured */}
        <div className="mt-6 group relative bg-gradient-to-r from-[#121212] via-[#2a2a2a] to-[#121212] rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-500">
          <div className="absolute inset-0">
            <Image src="/images/CAD/4.jpg" alt="MEP CAD" fill className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10 lg:p-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-figtree">MEP CAD Drafting</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                High-quality MEP drafting for mechanical, plumbing, and electrical systems with thorough analysis and precision blueprints. Complete coordination and clash detection.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8481C] text-white font-semibold rounded-lg hover:bg-[#ff6b47] transition-all">
                Get MEP Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Mechanical', 'Electrical', 'Plumbing', 'HVAC'].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-white font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

