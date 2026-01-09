'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  'Comprehensive quantity takeoffs and cost estimates for all divisions',
  'Estimates for quality assurance and quality control',
  'Expert eye witnesses',
  'Cold eyes reviews',
  'Bid Evaluation & Management',
  'Procurement Services',
  'Change Order Preparation & Review',
  'Feasibility Studies',
  'Risk Analysis',
  'Productivity Analysis',
  'Project Scheduling',
  'Project Cost Management',
  'Value Engineering'
]

export default function IndustrialEstimatingServicesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
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
            Our Range of Industrial Estimating Services
          </h2>
        </div>

        {/* Services Grid */}
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
      </div>
    </section>
  )
}

