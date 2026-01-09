'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const clients = [
  {
    title: 'General Contracting Corporations',
    description: 'Large-scale firms managing overall project execution and coordination.'
  },
  {
    title: 'Subcontractors',
    description: 'Specialized trade professionals providing expert services in specific divisions.'
  },
  {
    title: 'Architectural Firms',
    description: 'Design experts creating aesthetic and functional blueprints for projects.'
  },
  {
    title: 'Engineering Firms',
    description: 'Technical specialists ensuring structural integrity and optimized systems.'
  },
  {
    title: 'Developers',
    description: 'Strategic visionaries transforming land into valuable real estate assets.'
  },
  {
    title: 'Investors',
    description: 'Financial partners backing construction ventures for long-term returns.'
  },
  {
    title: 'Vendors',
    description: 'Essential suppliers providing high-quality materials for project success.'
  },
  {
    title: 'Owners',
    description: 'Entities seeking expert estimating for their property investments.'
  }
]

export default function AboutClientsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Top Separator Line */}
      <div className="absolute top-0 left-3 sm:left-4 md:left-6 lg:left-8 xl:left-12 2xl:left-20 3xl:left-24 right-3 sm:right-4 md:right-6 lg:right-8 xl:right-12 2xl:right-20 3xl:right-24 h-px bg-[#121212]/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="w-full lg:w-auto order-2 lg:order-1">
              <div className="relative w-full max-w-[500px] mx-auto lg:max-w-[650px] lg:-ml-12 xl:-ml-20 aspect-[4/3]">
                <div className="relative w-full h-full overflow-hidden bg-transparent">
                  <Image
                    src="/images/about/building.png"
                    alt="BuildEstimatePro Construction Clients"
                    fill
                    className="object-contain transform lg:scale-110"
                    sizes="(max-width: 1024px) 500px, 650px"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] font-figtree mb-4 text-center lg:text-left">
                Among our <span className="text-[#E8481C]">clients</span> are:
              </h2>
              <div className="w-full h-px bg-[#121212]/10 mb-6 sm:mb-8"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    {/* Bullet Point */}
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full rounded-full bg-[#E8481C] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#121212] font-figtree transition-colors duration-300 group-hover:text-[#E8481C]">
                        {client.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#121212]/70 font-figtree leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

