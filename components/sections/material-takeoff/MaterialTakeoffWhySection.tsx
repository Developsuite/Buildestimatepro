'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MaterialTakeoffWhySection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.1) 40px, rgba(18,18,18,0.1) 41px)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/materialtakeoff/7.jpg"
                alt="Material Takeoff Services"
                width={600}
                height={600}
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree leading-tight">
              Choose Our Material Takeoff Services for Growth Opportunity
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 font-figtree leading-relaxed">
              <p>
                What sets us apart from our competitors is our dedication to accuracy, authenticity, and profit-driven strategies to provide the right estimation services to our clients. We have the best team with years of industrial, residential, and commercial experience, know the market conditions, price fluctuations, and perfectly understand the inflation rates.
              </p>
              <p>
                They know how to generate the right material takeoff report. Our reports carry a 98% accuracy rate with 100% assurance of resource availability on the construction site. Counting and calculating items and materials is now not your problem.
              </p>
              <p>
                Moreover, it is our aim to support new contractors and small businesses by keeping our service prices highly reasonable for everyone. We also offer customized pricing plans according to your project&apos;s requirements. Now there is no need to face irregular resource availability or budget overruns. Take the calculated steps with our excellent material estimating services.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E8481C] text-white font-figtree font-semibold rounded-lg hover:bg-[#ff6b47] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

