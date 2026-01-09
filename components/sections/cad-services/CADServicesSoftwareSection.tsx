'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const primarySoftware = [
  { name: 'AutoCAD', category: 'Design & Drafting', popular: true },
  { name: 'SolidWorks', category: '3D Modeling', popular: true },
  { name: 'Revit', category: 'BIM', popular: true }
]

const secondarySoftware = [
  { name: '3D Station', category: 'Visualization' },
  { name: 'Civil 3D', category: 'Civil Engineering' },
  { name: 'CATIA', category: 'Product Design' },
  { name: 'Creo', category: 'CAD/CAM' },
  { name: 'Siemens NX', category: 'PLM' },
  { name: 'WindChill', category: 'Management' },
  { name: 'Inventor', category: '3D Mechanical' }
]

export default function CADServicesSoftwareSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(232,72,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,72,28,0.5) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8481C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0063BF]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 bg-[#E8481C] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Technology Stack</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-figtree">
              Industry-Leading <span className="text-[#E8481C]">Software</span> We Use
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We leverage the most advanced CAD software tools to deliver precision drafting and design services that meet international standards.
            </p>
          </div>
          
          <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden">
            <Image
              src="/images/CAD/cadvertical/2.jpg"
              alt="CAD Software"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="text-white font-bold">10+ Software Tools</div>
                  <div className="text-white/60 text-sm">Professional Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Software - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {primarySoftware.map((soft, i) => (
            <div key={i} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#E8481C]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#E8481C]/20">
              {/* Popular Badge */}
              {soft.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#E8481C]/20 backdrop-blur-sm rounded-full border border-[#E8481C]/30">
                  <span className="text-xs font-semibold text-[#E8481C]">POPULAR</span>
                </div>
              )}
              
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                <span className="text-3xl">🔧</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 font-figtree group-hover:text-[#E8481C] transition-colors">{soft.name}</h3>
              <p className="text-white/60 text-sm">{soft.category}</p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8481C] via-[#ff6b47] to-[#E8481C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Secondary Software - Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {secondarySoftware.map((soft, i) => (
            <div key={i} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-[#E8481C]/50 transition-all duration-300 hover:bg-white/10 hover:scale-105 text-center">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💻</div>
              <h4 className="text-white font-figtree font-semibold text-sm mb-1 group-hover:text-[#E8481C] transition-colors">{soft.name}</h4>
              <p className="text-white/40 text-xs">{soft.category}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8481C] to-[#ff6b47] flex items-center justify-center text-white font-bold border-2 border-[#121212] text-sm">10+</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0063BF] to-[#4a9eff] flex items-center justify-center border-2 border-[#121212]">
                <span className="text-white text-xl">✓</span>
              </div>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">Professional Tools</div>
              <div className="text-white/60 text-xs">Latest Versions & Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

