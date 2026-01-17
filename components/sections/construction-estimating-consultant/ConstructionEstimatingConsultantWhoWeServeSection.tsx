'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const clients = [
  {
    title: 'Real Estate Developers',
    description: 'Developers need to set an initial budget to proceed with their prospective clients. Our estimators help them by preparing the most reliable preliminary estimate while our consultant guides them in planning new proposals, managing budget, getting loans, allocating funds, strategies to improve pricing and negotiating with contractors.'
  },
  {
    title: 'General Contractors',
    description: 'For GCs, the biggest challenges are tight construction budgets and strict project timelines. So, they seek our consultation regarding project scheduling, quality control of bid, and negotiations of the prices quoted by the subcontractors.'
  },
  {
    title: 'Home Owners',
    description: 'Our consultation team serves homeowners in developing the understanding to execute the project and deal with the contractors. If they lack drawing plans, we also assist in providing in house architectural design and CAD drafting services.'
  },
  {
    title: 'Architects / Designers',
    description: 'When the project is in its design phase, Architects employ estimates to adjust their design elements within their client\'s budget limit. Our consulting team uses schematic drawings to make a budget estimate that gets updated with each stage of design.'
  },
  {
    title: 'Subcontractors',
    description: 'Subcontractors are so hooked up in site activities that they lack the ability to manage their bidding process. This is where our estimating consultants help them by managing their bidding network profiles, filing bids and devising strategies to win and negotiate prices for their projects.'
  },
  {
    title: 'Vendors',
    description: 'Vendors attain benefit from our consultation services to ease them in measuring quantities, determining costs, calculating labor to create quotes for their clients.'
  }
]

export default function ConstructionEstimatingConsultantWhoWeServeSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-[#E0DCD7] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(18,18,18,0.3) 35px, rgba(18,18,18,0.3) 36px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(18,18,18,0.2) 35px, rgba(18,18,18,0.2) 36px)',
        }}></div>
      </div>

      {/* Orange Dots Pattern in Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E8481C 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Who Approaches Our <span className="text-[#E8481C]">Estimating Consultant</span>?
          </h2>
        </div>

        {/* Clean Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8481C]/30 via-[#E8481C]/50 to-[#E8481C]/30 transform -translate-x-1/2"></div>

          {/* Clients List */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {clients.map((client, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Number Badge - Center Position */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-[#E8481C]/20 rounded-full blur-md group-hover:bg-[#E8481C]/40 transition-all duration-300"></div>
                      {/* Number Circle */}
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-[#E0DCD7]">
                        <span className="text-base font-bold text-white font-figtree">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Content */}
                  <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Left/Right Content Area */}
                    <div className={`flex-1 w-full ${isEven ? 'lg:pr-20' : 'lg:pl-20'} lg:max-w-xl`}>
                      <div className="relative">
                        {/* Title with Underline */}
                        <div className="mb-3">
                          {/* Number Badge - Mobile */}
                          <div className="lg:hidden mb-3 flex justify-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-base font-bold text-white font-figtree">{index + 1}</span>
                            </div>
                          </div>

                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#121212] font-figtree group-hover:text-[#E8481C] transition-colors duration-300 text-center lg:text-left">
                            {client.title}
                          </h3>
                          
                          {/* Animated Underline */}
                          <div className={`h-0.5 bg-gradient-to-r ${
                            isEven 
                              ? 'from-[#E8481C] via-[#E8481C]/60 to-transparent' 
                              : 'from-transparent via-[#E8481C]/60 to-[#E8481C]'
                          } rounded-full mt-2 group-hover:h-1 transition-all duration-300 w-full lg:w-auto`}></div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#121212]/70 leading-relaxed font-figtree text-center lg:text-left">
                          {client.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty Space on Opposite Side for Balance */}
                    <div className="hidden lg:block flex-1 lg:max-w-xl">
                      {/* This creates balanced spacing */}
                    </div>
                  </div>

                  {/* Connecting Line Between Items */}
                  {index < clients.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#E8481C]/40 via-[#E8481C]/50 to-[#E8481C]/40"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


