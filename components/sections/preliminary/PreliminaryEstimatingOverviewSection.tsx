'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PreliminaryEstimatingOverviewSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
              Professional Preliminary Construction Estimating
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree mx-auto md:mx-0">
              <p>
                With 15 years of experience in the AEC industry and portfolio in commercial, residential, private, and public projects, BuildEstimatePro can promise the most reliable and defensible preliminary estimates based on assumptions from the past projects.
              </p>
              <p>
                We come up with per square feet or square meter costs for finished projects as well as superstructures by utilizing professional estimating software and our developed databases, RS Means and Craftsmen. Our location-based database and relations with local vendors help in performing the bill of material as accurately as possible.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-[#E8481C] text-white font-figtree font-semibold rounded-sm hover:bg-[#ff6b47] transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-base"
              >
                Contact Us Today
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/80 text-[#121212] font-figtree font-semibold rounded-sm hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg border border-[#121212]/10 text-xs md:text-base"
              >
                Upload Plans
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg flex items-center">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-transparent to-[#E8481C]/5 rounded-2xl blur-2xl"></div>
              
              {/* Outer Border Frame */}
              <div className="absolute -inset-4 border-2 border-[#E8481C]/20 rounded-2xl"></div>
              <div className="absolute -inset-2 border border-[#E8481C]/10 rounded-xl"></div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#E8481C] rounded-tl-2xl opacity-60"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-[#E8481C] rounded-tr-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-[#E8481C] rounded-bl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#E8481C] rounded-br-2xl opacity-60"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8481C]/20 via-transparent to-[#E8481C]/20 rounded-xl opacity-50 blur-xl"></div>
              
              {/* Image Container with Border */}
              <div className="relative z-10 w-full bg-white/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-white/50 shadow-2xl">
                {/* Inner Decorative Frame */}
                <div className="absolute inset-2 border border-[#E8481C]/30 rounded-lg"></div>
                
                {/* Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/home/premilinary.png"
                    alt="Preliminary Construction Estimating"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#E8481C] rounded-full opacity-60 blur-sm animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#E8481C] rounded-full opacity-40 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Shadow Effects */}
              <div className="absolute inset-0 bg-[#E8481C]/10 rounded-2xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

