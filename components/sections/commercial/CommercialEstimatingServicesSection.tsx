'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  {
    category: 'For Commercial Contractors',
    title: 'Most Accurate & Detailed Commercial Estimates',
    description: 'At BuildEstimatePro, we provide the most accurate and detailed commercial estimates containing all the details with line item descriptions along with colored marked-up plans. The pricing for material, labor, and equipment is done through our developed construction cost databases and RSMeans. We ensure the accuracy of the estimate according to the location of the project by employing zip code based pricing.',
    features: [
      'Material & Labor Takeoffs',
      'Bid Estimates with 85%+ win ratio',
      'Assistance on smartly filing bids',
      'Project Lead Generation',
      'Subcontractor Marketing',
      'Precise material & labor takeoffs for procurement',
      'Change Order Management',
      'Cold Eye Review',
      'Project Scheduling',
      'Cost Management',
      'Value engineering',
      'Legal claims'
    ]
  },
  {
    category: 'For Commercial Developers',
    title: 'Preliminary & Pre-construction Commercial Estimates',
    description: 'Commercial developers have to estimate the figures and amount even before the development of plans to analyze the feasibility of the project. Our portfolio of million-dollar evaluation of projects, software expertise, and historical data helps us build reliable preliminary commercial estimates and feasibility reports. Our highly detailed pre-construction final commercial estimates contribute to providing the basis for planning proposals, getting loans, allocating funds, managing costs, and negotiating with contractors.',
    features: [
      'Preliminary Commercial Estimates',
      'Pre-construction final Commercial Estimates',
      'Feasibility Reports',
      'Loan Application Support',
      'Budget Allocation Planning',
      'Contractor Negotiation Support'
    ]
  },
  {
    category: 'For Commercial Architects & Designers',
    title: 'Design-phase Estimates & Budget Creation',
    description: 'Our estimating team thoroughly engages with architects and designers involved with commercial projects providing cost evaluations for various design alternatives throughout the design phase. This aids the design team to analyze and customize the design parameters according to their client\'s budget limits avoiding additional costs or overruns at a later stage. Our design phase estimates include the conceptual, schematic design, design development, and construction document estimates.',
    features: [
      'Design-phase Estimates',
      'Conceptual Estimates',
      'Schematic Design Estimates',
      'Design Development Estimates',
      'Construction Document Estimates',
      'Budget Creation',
      'Design Review for Errors & Exclusions',
      'Trade Consistency Review'
    ]
  },
  {
    category: 'For Commercial Design-Build Firms',
    title: 'Comprehensive Design-Build Estimates',
    description: 'We have successfully delivered estimating services and value engineering to design-build firms that are responsible for design and construction under the same contract. Our design-build estimates determine all the associated costs even at the early stage of design nearly at the 50% completion of designs that help the owners to make critical decisions.',
    features: [
      'Early-stage Design Estimates',
      'Architectural & Engineering Cost Assessment',
      'Subcontractor Fees Analysis',
      'Labor Costs Evaluation',
      'Material Costs Calculation',
      'Equipment Costs Assessment',
      'Man Hours Estimation',
      'Indirect Costs (permits, taxes, logistics, storage)'
    ]
  }
]

export default function CommercialEstimatingServicesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F5F1E6] to-white/50 overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
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
        <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree mx-auto md:mx-0">
            Commercial Estimating Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#E8481C]/50 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-[#E8481C]/5 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#E8481C] text-white text-xs sm:text-sm font-semibold rounded-full font-figtree">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8481C] mb-3 sm:mb-4 font-figtree">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#121212]/80 leading-relaxed font-figtree mb-4 sm:mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#121212]/70 font-figtree">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E8481C]/15 to-transparent rounded-bl-full"></div>
              
              {/* Additional Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/5 transition-colors duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

