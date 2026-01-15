'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  'Material Takeoff Services',
  'Quantity Takeoff Services',
  'Blueprint Takeoff Services',
  'Masonry Takeoff Services',
  'MEP Takeoff Services',
  'Concrete Takeoff Services',
  'Painting Takeoff Services',
  'Steel Estimating Services',
  'Drywall Takeoff Services'
]

export default function ConstructionTakeoffServicesSection() {
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
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Range of <span className="text-[#E8481C]">Construction Takeoff Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-3xl mx-auto font-figtree leading-relaxed">
            We offer construction takeoff services for all types of projects. Our team calculates the exact materials, labor, and equipment you will need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
              
              <div className="relative z-10 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#E8481C] font-figtree transition-colors duration-300">
                  {service}
                </h3>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E8481C]/15 to-transparent rounded-bl-full"></div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#E8481C]/0 group-hover:bg-[#E8481C]/5 transition-colors duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


