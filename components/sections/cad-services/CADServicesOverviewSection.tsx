'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CADServicesOverviewSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23121212' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full border-l-4 border-[#E8481C] mx-auto md:mx-0">
                <div className="w-2 h-2 bg-[#E8481C] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#121212] uppercase tracking-wider">Expert CAD Solutions</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#121212] mb-6 font-figtree leading-[1.1]">
              Professional <span className="text-[#E8481C] relative inline-block">CAD Drafting<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E8481C] to-transparent"></div></span> Services
            </h2>

            <div className="space-y-5 text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
              <p className="relative pl-0 md:pl-6 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-2 md:before:w-1 md:before:h-full md:before:bg-gradient-to-b md:before:from-[#E8481C] md:before:to-transparent">
                BuildEstimatePro is a leading CAD drafting company expanding its scope across the USA. We provide comprehensive design and CAD services including 2D section drawings and 3D drawings for visual representation of structures, engineering, architectural, mechanical, and other construction project endeavors.
              </p>
              <p className="relative pl-0 md:pl-6 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-2 md:before:w-1 md:before:h-full md:before:bg-gradient-to-b md:before:from-[#E8481C] md:before:to-transparent">
                Our expert CAD drafter teams possess years of experience in construction design consultancy, MEP consultancy, landscaping, interior design, and more drafting services. We deliver conceptual drawing blueprints that ensure detail, precision, and productivity.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                href="/contact"
                className="group relative px-4 py-2 md:px-8 md:py-4 bg-[#E8481C] text-white font-figtree font-semibold text-xs md:text-base overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get A Quote
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#E8481C] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>

              <div className="flex items-center gap-3 text-[#121212]/60 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8481C] to-[#ff6b47] flex items-center justify-center text-white font-bold border-2 border-white">A</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0063BF] to-[#4a9eff] flex items-center justify-center text-white font-bold border-2 border-white">C</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#121212] to-[#3a3a3a] flex items-center justify-center text-white font-bold border-2 border-white">R</div>
                </div>
                <span className="font-medium">1000+ Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Image Display */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#E8481C]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#0063BF]/10 rounded-full blur-3xl"></div>

              {/* Image Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Large Main Image */}
                <div className="col-span-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/images/CAD/2.jpg"
                      alt="CAD Drafting"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Software Icons */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#3a3a3a] rounded-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                  <div className="relative bg-white p-4 rounded-xl shadow-xl h-full flex flex-col items-center justify-center gap-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-3xl font-bold text-[#E8481C]">10+</div>
                    <div className="text-xs text-[#121212]/70 text-center font-semibold">Software Tools</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                  <div className="relative bg-white p-4 rounded-xl shadow-xl h-full flex flex-col items-center justify-center gap-2 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-3xl font-bold text-[#E8481C]">25+</div>
                    <div className="text-xs text-[#121212]/70 text-center font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#E8481C] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-[#0063BF] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

