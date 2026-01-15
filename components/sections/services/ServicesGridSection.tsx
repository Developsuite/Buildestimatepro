'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Service {
  title: string
  description: string
  image: string
  href: string
  features: string[]
  isHighlighted?: boolean
}

const services: Service[] = [
  {
    title: 'Cost Estimating Services',
    description: 'Professional construction cost estimating services that deliver accurate, data-driven estimates for your building projects. Our expert estimators analyze project specifications, blueprints, and materials to provide comprehensive cost breakdowns that help you bid competitively and maintain profitability.',
    image: '/images/services/servicespage/1.webp',
    href: '/services/cost-estimating',
    features: ['Accurate cost analysis', 'Material & labor breakdown', 'Budget planning support', 'Fast turnaround times']
  },
  {
    title: 'Material Takeoff Services',
    description: 'Precise material takeoff services that ensure you order the right quantities at the right prices. Our detailed takeoffs cover all materials including concrete, steel, lumber, electrical, plumbing, and more, helping you avoid costly overruns and shortages.',
    image: '/images/services/servicespage/2.webp',
    href: '/services/material-takeoff',
    features: ['Detailed quantity takeoffs', 'Material cost analysis', 'Waste calculation', 'Procurement support']
  },
  {
    title: 'Residential Estimating Services',
    description: 'Specialized residential construction estimating for new builds, renovations, additions, and remodeling projects. We provide accurate estimates that help homeowners and contractors plan budgets, secure financing, and execute projects successfully.',
    image: '/images/services/servicespage/3.webp',
    href: '/services/residential',
    features: ['New construction estimates', 'Renovation planning', 'Home additions', 'Budget-friendly solutions']
  },
  {
    title: 'Commercial Estimating Services',
    description: 'Comprehensive commercial construction estimating for office buildings, retail spaces, restaurants, hotels, and more. Our commercial estimates help general contractors and developers make informed decisions and submit competitive bids.',
    image: '/images/services/servicespage/4.webp',
    href: '/services/commercial',
    features: ['Commercial building estimates', 'Retail & office spaces', 'Multi-unit developments', 'Competitive bidding support']
  },
  {
    title: 'Industrial Estimating Services',
    description: 'Expert industrial construction estimating for warehouses, manufacturing facilities, distribution centers, and large-scale industrial projects. We understand the complexities of industrial construction and deliver accurate estimates for complex mechanical and structural systems.',
    image: '/images/services/servicespage/5.webp',
    href: '/services/industrial',
    features: ['Industrial facility estimates', 'Complex systems analysis', 'Large-scale project expertise', 'Mechanical & structural focus']
  },
  {
    title: 'Preliminary Estimate Services',
    description: 'Early-stage preliminary estimates for projects still in planning or design phases. Perfect for feasibility studies, budget planning, and project development. We provide reliable ballpark estimates even when full drawings aren\'t available.',
    image: '/images/services/servicespage/6.webp',
    href: '/services/preliminary',
    features: ['Early-stage budgeting', 'Feasibility studies', 'Conceptual estimates', 'Design phase support']
  },
  {
    title: 'Virtual Bid Management',
    description: 'Streamlined virtual bid management services that help you organize, review, and manage multiple project bids efficiently. Our digital platform and expert team ensure nothing falls through the cracks during the bidding process.',
    image: '/images/services/servicespage/7.webp',
    href: '/services/virtual-bid-management',
    features: ['Bid organization', 'Digital bid management', 'Multi-project tracking', 'Timeline management']
  },
  {
    title: 'Construction Estimating Consultant',
    description: 'Expert construction estimating consulting services to improve your in-house estimating processes, train your team, or provide strategic guidance on complex projects. We help optimize your estimating workflows and accuracy.',
    image: '/images/services/servicespage/8.webp',
    href: '/services/construction-estimating-consultant',
    features: ['Process optimization', 'Team training', 'Strategic guidance', 'Workflow improvement']
  },
  {
    title: 'Construction Takeoff Services',
    description: 'Comprehensive construction takeoff services covering all trades including concrete, masonry, electrical, plumbing, HVAC, roofing, and finishes. We provide detailed quantity measurements and material calculations for accurate project planning.',
    image: '/images/services/servicespage/9.webp',
    href: '/services/construction-takeoff',
    features: ['Multi-trade takeoffs', 'Detailed measurements', 'Material calculations', 'Trade-specific expertise']
  },
  {
    title: 'CAD Services',
    description: 'Professional CAD services including drafting, detailing, 3D modeling, and plan modifications. Our CAD experts support your construction projects with accurate drawings, shop drawings, and detailed plans that enhance your estimating accuracy.',
    image: '/images/services/servicespage/10.webp',
    href: '/services/cad-services',
    features: ['CAD drafting & detailing', '3D modeling', 'Shop drawings', 'Plan modifications'],
    isHighlighted: true
  }
]

export default function ServicesGridSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.3) 40px, rgba(18,18,18,0.3) 41px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(18,18,18,0.2) 40px, rgba(18,18,18,0.2) 41px)',
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/3 to-transparent pointer-events-none"></div>

      {/* Orange Dots Pattern in Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px'
        }}></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
            Our Comprehensive Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl mx-0 font-figtree leading-relaxed">
            Professional construction estimating and takeoff services tailored to meet the unique needs of contractors, builders, and construction professionals across all project types and scales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/60 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
              }}
            >
              {/* Liquid fill hover effect - orange brand color */}
              <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100 z-0"></span>

              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Highlighted Badge */}
                {service.isHighlighted && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-[#E8481C] text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="relative p-5 sm:p-6 md:p-7">
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl md:text-xl font-bold mb-3 font-figtree transition-colors duration-300 ${
                    service.isHighlighted 
                      ? 'text-[#E8481C] group-hover:text-white' 
                      : 'text-[#121212] group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed mb-4 font-figtree line-clamp-3 transition-colors duration-300 text-[#121212]/70 group-hover:text-white/90">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-figtree transition-colors duration-300 text-[#121212]/60 group-hover:text-white/90">
                        <svg className="w-4 h-4 flex-shrink-0 transition-colors duration-300 text-[#E8481C] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-2 font-bold text-sm sm:text-base hover:gap-3 transition-all duration-300 font-figtree text-[#E8481C] group-hover:text-white"
                  >
                    Learn More
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

