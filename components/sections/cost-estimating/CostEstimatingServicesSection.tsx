'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  'Cost Estimates',
  'Material Takeoffs',
  'Preliminary Estimating',
  'Bid Evaluation and Management',
  'Design Estimating',
  'Budget Estimating and Cost Control',
  'Change Order Management',
  'Value Engineering',
  'Project Cost Management'
]

export default function CostEstimatingServicesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F5F1E6] to-white/30 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.2) 40px, rgba(18,18,18,0.2) 41px)',
        }}></div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Comprehensive Construction Cost Estimating Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl mx-0 font-figtree leading-relaxed">
            Our construction cost estimates encompass a wide range of essential components, ensuring a holistic approach to cost management throughout your project's lifecycle. From initial feasibility studies to bid evaluation and design development to change order management, we have the expertise to support your needs.
          </p>
        </div>

        {/* Services List - Points Format */}
        <div className="relative bg-[#121212] backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-white/10 mb-8 sm:mb-10 md:mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {services.map((service, index) => (
              <li
                  key={index}
                className="group flex items-start gap-3 text-sm sm:text-base md:text-lg text-white/90 font-figtree hover:text-[#E8481C] transition-colors duration-300"
                >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8481C] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                <span>{service}</span>
              </li>
              ))}
          </ul>
          </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 mb-4 sm:mb-6 font-figtree">
              If you're searching for professional construction cost estimating companies you can rely on, look no further than BuildEstimatePro. We are eager to assist you in achieving your project's goals.
            </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E8481C] text-white font-figtree font-bold text-base sm:text-lg rounded-sm hover:bg-[#ff6b47] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Upload Plans and Save 30% Cost
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
