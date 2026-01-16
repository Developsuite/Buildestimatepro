'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MaterialTakeoffWhyChooseSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.1) 40px, rgba(18,18,18,0.1) 41px)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree leading-tight mx-auto md:mx-0">
            Choose the Best Quantity Takeoff Services with Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8481C] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
            Make Your Project More Profitable and Get Your Business Famed as a Trusted Contractor in the Market
          </p>
          
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 font-figtree leading-relaxed">
            <p>
              We are the name of reliability and efficiency for our clients. Our highly qualified and skillful team puts us one step ahead. We have a complete team dedicated to document analysis and blueprint research. They go through every single detail to see if there is anything missing and try to find any misleading information.
            </p>
            <p>
              It is our specialty that we check the correctness of initial details before starting further calculations, as the final results are based on it. Moreover, we also pass the final report through intense QA testing and monitoring sessions to check its authenticity before handing it to clients.
            </p>
            <p>
              Above all, our platform allows clients to ask for changes and customizations in the final report. Trust the best as your project deserves the best. Take our material takeoffs and be a successful estimator.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[#E8481C] font-semibold font-figtree hover:text-[#ff6b47] transition-colors duration-300"
            >
              Read More
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

