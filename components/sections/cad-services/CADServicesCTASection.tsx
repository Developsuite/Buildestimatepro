'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CADServicesCTASection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image src="/images/CAD/cadvertical/3.jpg" alt="CAD Services" fill className="object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[#121212]/90 to-[#121212]/95"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8481C]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0063BF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-10 md:p-12 lg:p-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8481C] to-[#ff6b47] border-2 border-[#121212]"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0063BF] to-[#4a9eff] border-2 border-[#121212]"></div>
                  </div>
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-wider ml-2">Trusted by 1000+ Clients</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-figtree leading-tight">
                Experience World-Class <span className="text-[#E8481C]">CAD Drafting Services</span>
              </h2>
              
              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
                Get accurate, dependable, and high-quality blueprints for your construction projects. 25+ years of experience serving clients across the USA.
              </p>
              
              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['24/7 Support', 'Fast Delivery', '98% Accuracy', 'Affordable Rates'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#E8481C]/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#E8481C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="group relative px-8 py-4 bg-[#E8481C] text-white font-semibold rounded-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#E8481C]/50 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Upload Plans
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
                
                <Link href="/contact" className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all">
                  Get A Free Quote
                </Link>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-[#E8481C] mb-2">25+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-[#E8481C] mb-2">1000+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-[#E8481C] mb-2">10+</div>
                <div className="text-white/70 text-sm">Software Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-[#E8481C] mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

