'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CostEstimatingOverviewSection() {
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
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
              Construction Cost Estimating Services
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
              <p>
                BuildEstimatePro offers a wide range of construction cost estimating services and cost management solutions tailored to meet the unique needs of the ever-growing construction industry. With years of experience in understanding various market conditions, we empower contractors, developers, architects, and project managers to make informed decisions, control budgets, and achieve project success.
              </p>
              <p>
                Our goal is to provide reliable and tailored cost estimating services that help you streamline your bidding process, win more projects, and optimize your budget. Our experienced construction cost estimators have successfully delivered accurate cost estimates for a wide scope of projects. We are committed to providing precise, timely, and detailed pricing information that instills confidence and drives your project forward by avoiding cost overruns.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
                <Link
                  href="/samples"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#E8481C] text-white font-figtree font-semibold rounded-sm hover:bg-[#ff6b47] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                View Our Estimate Sample
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                    src="/images/services/costestiamting/image1.png"
                    alt="Construction Cost Estimating"
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
