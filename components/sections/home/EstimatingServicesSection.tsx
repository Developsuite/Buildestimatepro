'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Service {
  id: number
  title: string
  icon: string
  image: string
  content: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Concrete Estimating',
    icon: '/icons/homepage/1.webp',
    image: '/images/home/section 2/1.webp',
    content: 'Our concrete estimating solutions help contractors evaluate project costs and material quantities with confidence. Whether the project involves foundations, slabs, parking areas, or driveways, our specialists deliver detailed and dependable takeoffs. Using advanced tools such as Bluebeam, Planswift, and Accubid, we ensure exceptional accuracy and help you prepare highly competitive bids. Working with us allows you to reduce estimating expenses and improve your chances of winning more projects while keeping your construction budget on track.'
  },
  {
    id: 2,
    title: 'Electrical Estimating',
    icon: '/icons/homepage/2.webp',
    image: '/images/home/section 2/2.webp',
    content: 'We provide electrical estimating services for everything from low voltage systems to complex instrumentation and control work. Our team includes skilled electrical estimators, engineers, and industrial electronics professionals who prepare carefully calculated material and labor breakdowns. We also support budgeting, design assistance, and value engineering. Leveraging top software solutions including ConEst, Planswift, Accubid, and Bluebeam, we deliver precise estimates that strengthen your bidding performance.'
  },
  {
    id: 3,
    title: 'Interior & Exterior Finishes',
    icon: '/icons/homepage/3.webp',
    image: '/images/home/section 2/3.webp',
    content: 'At Construct Estimates, we know that accurate estimating for interior and exterior finishes is essential for successful project planning. From painting and stucco to plaster and specialty coatings, we offer detailed takeoffs that help contractors price their work correctly and secure more jobs. Our focus on accuracy prevents overspending and unnecessary material costs. Outsourcing your finish estimating needs to us allows you to avoid hiring additional staff while receiving professional, reliable results.'
  },
  {
    id: 4,
    title: 'Masonry Estimating',
    icon: '/icons/homepage/4.webp',
    image: '/images/home/section 2/4.webp',
    content: 'Our masonry estimating services are designed to support contractors with precise measurements and cost calculations for brickwork, blockwork, stonework, and related finishes. We deliver highly accurate takeoffs that help prevent cost overruns and keep project budgets stable. By partnering with us, you gain access to experienced estimators who provide dependable results and ensure your bids remain competitive without the overhead of in house estimating teams.'
  },
  {
    id: 5,
    title: 'MEP Estimating',
    icon: '/icons/homepage/5.webp',
    image: '/images/home/section 2/5.webp',
    content: 'Our dedicated MEP estimating department specializes in mechanical, electrical, and plumbing cost evaluations. We handle HVAC systems, ductwork, piping, plumbing fixtures, and more with meticulous attention to detail. Using industry recognized tools such as Bluebeam, PlanSwift, FastWRAP, FastDuct, FastPIPE, and Trimble, our certified MEP estimators create comprehensive and precise estimates that meet industry standards. Rely on our expertise to navigate the complexities of MEP projects with accuracy and efficiency.'
  },
  {
    id: 6,
    title: 'Metal Estimating',
    icon: '/icons/homepage/6.webp',
    image: '/images/home/section 2/6.webp',
    content: 'Our metal estimating team provides complete takeoffs for structural steel, rebar, and miscellaneous metal components. From railings and joists to trusses, decking, and steel framing, we quantify materials with precision to help contractors control costs and reduce waste. Our engineers review each detail to ensure accuracy and support environmentally responsible material usage. Choose our services for timely and dependable metal estimates that improve project planning and execution.'
  },
  {
    id: 7,
    title: 'Openings Estimating',
    icon: '/icons/homepage/7.webp',
    image: '/images/home/section 2/7.webp',
    content: 'We deliver complete estimates for doors, windows, and frame systems across all material types including aluminum, metal, bronze, fiberglass, and vinyl. Our team calculates both material and installation costs, offering clear and well structured proposals for commercial and residential projects. With extensive experience in door and frame installations, we ensure precise takeoffs that help contractors bid confidently and minimize unexpected expenses.'
  },
  {
    id: 8,
    title: 'Sitework Estimating',
    icon: '/icons/homepage/8.webp',
    image: '/images/home/section 2/8.webp',
    content: 'Our sitework estimating services cover earthwork, grading, cut and fill calculations, and site utilities. We provide detailed 3D visuals, accurate earthwork volumes, and comprehensive takeoffs for landscaping, foundations, pavements, asphalt, and driveways. By combining expert knowledge with powerful tools such as Bluebeam, Planswift, and Accubid, we deliver reliable and complete sitework estimates that support efficient planning and cost control.'
  },
  {
    id: 9,
    title: 'Thermal/Moisture Protection Estimating',
    icon: '/icons/homepage/9.webp',
    image: '/images/home/section 2/9.webp',
    content: 'We offer specialized estimating services for roofing, insulation, waterproofing, siding, caulking, sealants, and fire stopping systems. Our estimates assist with procurement, labor planning, material ordering, and bid preparation. Using advanced estimating software and the expertise of trained construction estimators, we provide cost evaluations tailored to the specific requirements of your trade. Expect accurate, detail oriented results that help avoid costly mistakes.'
  },
  {
    id: 10,
    title: 'Lumber Takeoff',
    icon: '/icons/homepage/10.webp',
    image: '/images/home/section 2/10.webp',
    content: 'Our lumber takeoff services support builders, framers, millwork contractors, and commercial construction teams by providing precise material quantities for rough and finished carpentry. We cover everything from trusses and framing lumber to cabinetry, countertops, paneling, and laminates. By outsourcing your lumber takeoff work to us, you save on training, staffing, and overhead while gaining access to accurate and timely takeoffs that strengthen your bids and improve project outcomes.'
  }
]

export default function EstimatingServicesSection() {
  const [activeService, setActiveService] = useState<Service>(services[0])
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121212] mb-6 font-figtree">
            Our Estimating Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#121212]/70 max-w-3xl mx-auto sm:mx-0 font-figtree leading-relaxed">
            Comprehensive construction estimating solutions tailored to your project needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white/50 backdrop-blur-lg shadow-xl overflow-hidden min-h-[400px] lg:min-h-[600px]">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-80 xl:w-96 bg-[#F5F1E5] border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden lg:max-h-full overflow-y-hidden [&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:w-2 lg:[&::-webkit-scrollbar-track]:bg-transparent lg:[&::-webkit-scrollbar-thumb]:bg-gray-200 lg:[&::-webkit-scrollbar-thumb]:rounded-full">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`group relative flex items-center gap-3 lg:gap-4 p-4 lg:p-5 text-left transition-all duration-300 border-b-0 lg:border-b border-r lg:border-r-0 border-gray-100 last:border-r-0 lg:last:border-0 flex-shrink-0 lg:flex-shrink overflow-hidden ${
                  activeService.id === service.id
                    ? 'z-10'
                    : ''
                }`}
              >
                {/* Liquid fill hover effect */}
                <span className={`absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeService.id === service.id 
                    ? 'scale-x-100' 
                    : 'group-hover:scale-x-100'
                }`}></span>

                {/* Active Indicator Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 z-10 ${
                  activeService.id === service.id ? 'bg-[#E8481C]' : 'bg-transparent group-hover:bg-[#E8481C]/20'
                }`} />

                {/* Icon Box */}
                <div className={`relative z-10 w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 transition-all duration-300 ${
                  activeService.id === service.id 
                    ? 'scale-110' 
                    : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'
                }`}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className={`object-contain p-1 transition-all duration-300 ${
                      activeService.id === service.id 
                        ? 'brightness-0 invert' 
                        : 'group-hover:brightness-0 group-hover:invert'
                    }`}
                  />
                </div>

                {/* Title */}
                <span className={`relative z-10 text-xs lg:text-sm xl:text-base font-bold font-figtree flex-1 leading-tight transition-colors duration-300 whitespace-nowrap ${
                  activeService.id === service.id 
                    ? 'text-white' 
                    : 'text-[#121212]/80 group-hover:text-white'
                }`}>
                  {service.title}
                </span>

                {/* Arrow Icon */}
                <svg 
                  className={`relative z-10 w-4 h-4 lg:w-5 lg:h-5 transition-all duration-300 ${
                    activeService.id === service.id 
                      ? 'text-white translate-x-0 opacity-100' 
                      : 'text-gray-400 -translate-x-2 opacity-0 group-hover:text-white group-hover:translate-x-0 group-hover:opacity-100'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 relative flex flex-col">
            {/* Top Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14">
              <div 
                key={activeService.id + '-content'}
                className="animate-fade-in-up"
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative bg-[#E8481C]/10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={activeService.icon}
                      alt={activeService.title}
                      width={32}
                      height={32}
                      className="object-contain w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#121212] font-figtree">
                    {activeService.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-[#121212]/70 leading-relaxed font-figtree">
                  {activeService.content}
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                  <a href="/contact" className="inline-flex items-center gap-2 text-[#E8481C] font-bold hover:gap-3 transition-all duration-300 group">
                    Get a Quote
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full overflow-hidden mt-auto group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <Image
                key={activeService.id + '-image'}
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in-zoom"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:left-8 lg:left-10 xl:left-14 z-20">
                 <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#E8481C] text-white text-xs sm:text-sm font-semibold shadow-lg">
                   Professional Estimates
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
