'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MaterialTakeoffOverviewSection() {
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree leading-tight mx-auto md:mx-0">
              Get Highly Accurate Material Estimating Services
            </h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 font-figtree leading-relaxed">
              <p>
                The right amount of material is one of the most important factors for project cost estimation. Without knowing the exact material quantity, it&apos;s impossible to reach the accurate budget amount needed to complete your project. Furthermore, material quantity provides crucial information about how much budget you should allocate for required materials and items.
              </p>
              <p>
                Therefore, BuildEstimatePro assists clients with accurate material estimations. We want you to use your valuable resources effectively without wasting anything. Our estimation reports help you manage the supply chain and ensure the availability of resources on the construction site without any irregularity.
              </p>
            </div>

            {/* Review Badges */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/50 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-[#121212] font-figtree">5.0</span>
                    <div className="flex text-[#E8481C]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-[#121212]/60 font-figtree">Reviews</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-4 py-2 md:px-8 md:py-4 bg-[#E8481C] text-white font-figtree text-xs md:text-base font-semibold rounded-lg hover:bg-[#ff6b47] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Share your plan with us & get a free quote within 10 minutes!
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative p-4 sm:p-6">
                <div className="absolute inset-0 rounded-2xl border-2 border-[#E8481C]/20"></div>
                <div className="absolute inset-2 rounded-xl border border-[#E8481C]/10"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
                  <Image
                    src="/images/materialtakeoff/1.jpg"
                    alt="Material Takeoff Services"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain relative z-10 rounded-lg"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E8481C]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#E8481C]/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

