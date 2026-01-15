'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const processSteps = [
  {
    id: 1,
    title: 'Formal Meeting & Scope Identification',
    description: 'The estimation process at BuildEstimatePro starts with a formal meeting of estimators to discuss and identify the scope of work. This also includes the allocation of tasks to trade specialist estimators.'
  },
  {
    id: 2,
    title: 'Document Review & Import',
    description: 'After reviewing the project documents and specifications provided by the client, the trade specialized estimators import the plans using the latest software and measure the dimensions and scales by the point and click method to digitally takeoff the quantities.'
  },
  {
    id: 3,
    title: 'Digital Takeoff & Export',
    description: 'After performing the on-screen takeoffs, all the material quantities are exported to EXCEL spreadsheets and categorized by division or by the pattern of CSI costs.'
  },
  {
    id: 4,
    title: 'Pricing & Cost Analysis',
    description: 'Our connections with local vendors and RSMeans help in the accurate and zip code based pricing for material and labor costs are categorized with respect to union and prevailing wages including standard time and overtime.'
  },
  {
    id: 5,
    title: 'Quality Assurance & Control',
    description: 'Finally, a cross-check is performed by the lead estimator for the quality assurance and quality control of the project deliverables.'
  }
]

export default function CommercialEstimatingProcessSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Estimation Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl font-figtree leading-relaxed">
            Our systematic approach ensures accuracy, consistency, and quality in every commercial estimate we deliver.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/50 hover:border-[#E8481C]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/5 via-transparent to-transparent"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-base sm:text-lg font-bold text-white font-figtree">{step.id}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121212] mb-2 sm:mb-3 font-figtree group-hover:text-[#E8481C] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#121212]/70 leading-relaxed font-figtree">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#E8481C]/10 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

