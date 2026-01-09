'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const industries = [
  { name: 'Product Design', icon: '🎨' },
  { name: 'Mechanical Design', icon: '⚙️' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Sketching', icon: '✏️' },
  { name: 'Art and Design', icon: '🎭' },
  { name: 'Interior Design', icon: '🛋️' },
  { name: 'Architectural Design', icon: '🏛️' }
]

export default function CADServicesIndustriesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-14 md:py-16 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8481C] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0063BF] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(232,72,28,0.5) 35px, rgba(232,72,28,0.5) 37px)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 bg-[#E8481C] rounded-full"></div>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">Industries We Serve</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-figtree">
            Diverse <span className="text-[#E8481C]">Industry Expertise</span>
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">Delivering precision CAD solutions across multiple sectors</p>
        </div>

        {/* Industries Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 md:gap-3">
          {industries.map((industry, i) => (
            <div key={i} className={`group relative ${i === 0 ? 'lg:col-span-3' : i === 1 ? 'lg:col-span-3' : i === 2 ? 'lg:col-span-3' : i === 3 ? 'lg:col-span-2' : i === 4 ? 'lg:col-span-2' : i === 5 ? 'lg:col-span-2' : i === 6 ? 'lg:col-span-3' : 'lg:col-span-3'}`}>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/0 to-[#E8481C]/0 group-hover:from-[#E8481C]/10 group-hover:to-[#E8481C]/5 rounded-xl blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 group-hover:border-[#E8481C]/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#E8481C]/20">
                {/* Icon */}
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-500">{industry.icon}</div>
                
                {/* Text */}
                <h3 className="text-white font-figtree font-semibold text-xs md:text-sm group-hover:text-[#E8481C] transition-colors duration-300">{industry.name}</h3>
                
                {/* Decorative Corner */}
                <div className="absolute top-1.5 right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#E8481C]/0 group-hover:border-[#E8481C]/50 rounded-tr-lg transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#E8481C] mb-1">9+</div>
            <div className="text-xs text-white/60">Industries</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl font-bold text-[#E8481C] mb-1">1000+</div>
            <div className="text-xs text-white/60">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#E8481C] mb-1">25+</div>
            <div className="text-xs text-white/60">Years</div>
          </div>
        </div>
      </div>
    </section>
  )
}

