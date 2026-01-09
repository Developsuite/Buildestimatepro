'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ResidentialEstimatingPortfolioSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F5F1E6] to-white/50 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Residential Estimating Portfolio: Unveiling the Essence of Your Dream Home
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl font-figtree leading-relaxed">
            At BuildEstimatePro, we take pride in our track record of successful projects with satisfied clients. We have provided comprehensive estimates for diverse residential endeavors, including general contractors, developers, and notable projects. With our expertise and attention to detail, we ensure accurate and reliable quantity takeoffs tailored to your specific needs.
          </p>
        </div>

        {/* Portfolio Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 hover:border-[#E8481C]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={`/images/home/section 2/${index}.webp`}
                alt={`Residential Project ${index}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-semibold font-figtree">Project {index}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl border border-white/50 shadow-lg">
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/80 leading-relaxed font-figtree mb-4">
            Our expertise extends to various aspects of construction, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {['Sitework', 'Concrete', 'Plumbing Fixtures', 'Electrical and Mechanical Installations', 'Drywall and Framing', 'Paint and Wallcovering', 'Labor Costs and Man-Hours', 'And much more'].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-[#121212]/70 font-figtree">
                <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

