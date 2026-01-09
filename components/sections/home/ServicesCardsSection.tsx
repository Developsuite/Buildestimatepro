'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  {
    image: '/images/home/cost.png',
    title: 'Cost Estimating Services',
    description: 'Construct Estimates delivers reliable and data-driven construction cost estimating solutions designed for today\'s fast-paced building industry. Our team prepares accurate, transparent, and well-structured estimates that support smart decision-making and help contractors win more bids.'
  },
  {
    image: '/images/home/material.png',
    title: 'Material Takeoff Services',
    description: 'Our expert estimators provide precise and detailed material takeoffs that form the backbone of any competitive bid. By carefully reviewing drawings, blueprints, and specifications, we calculate exact quantities to help you avoid costly material shortages or overruns.'
  },
  {
    image: '/images/home/residental.png',
    title: 'Residential Estimating Services',
    description: 'Construct Estimates offers complete residential estimating solutions for new builds, renovations, and remodeling projects. With a strong portfolio of successful home construction estimates, we deliver accurate cost breakdowns that help homeowners, builders, and contractors plan with confidence.'
  },
  {
    image: '/images/home/commercial.png',
    title: 'Commercial Estimating Services',
    description: 'We specialize in delivering accurate, timely, and fully documented commercial cost estimates. Our approach empowers general contractors and subcontractors to bid competitively, reduce financial risks, and stay aligned with project budgets throughout the construction process.'
  },
  {
    image: '/images/home/industrial.png',
    title: 'Industrial Estimating Services',
    description: 'Our industrial estimating services are built for precision and efficiency. From complex facilities to large-scale mechanical projects, we provide detailed takeoffs, cost analyses, and budget planning support—helping companies minimize waste and improve project profitability.'
  },
  {
    image: '/images/home/premilinary.png',
    title: 'Preliminary Estimate Services',
    description: 'When drawings are incomplete or project details are limited, our preliminary estimating services provide clarity. We develop early-stage budget estimates that guide planning, reduce uncertainty, and help you move forward confidently before final designs are ready.'
  }
]

export default function ServicesCardsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Heading and Subheading */}
        <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#121212] mb-2 sm:mb-3 md:mb-4 font-figtree">
            Our Construction Estimating Services
          </h2>
          <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-[#121212]/80 leading-relaxed font-figtree max-w-3xl mx-auto sm:mx-0">
            We provide reliable, accurate, and fast estimating solutions for contractors, subcontractors, builders, architects, engineers, lenders, and vendors—helping you bid confidently and manage project costs with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/30"
            >
              {/* Image */}
              <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-36 xl:h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-3 sm:p-4 md:p-5 overflow-hidden">
                {/* Liquid fill hover effect - only on content */}
                <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
                
                <h3 className="relative z-10 text-xs sm:text-sm md:text-base font-bold text-[#121212] mb-2 sm:mb-3 font-figtree transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="relative z-10 text-[10px] sm:text-xs md:text-sm text-[#121212]/80 leading-relaxed font-figtree transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

