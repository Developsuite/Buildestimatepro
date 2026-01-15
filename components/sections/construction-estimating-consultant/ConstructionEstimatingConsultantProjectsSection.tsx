'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = [
  {
    category: 'Residential',
    types: 'Townhomes, modular homes, high rises, skyscrapers, complex apartments, and private homes'
  },
  {
    category: 'Commercial',
    types: 'Offices, warehouses, theaters, and sports auditoriums'
  },
  {
    category: 'Institutional',
    types: 'Educational facilities, healthcare, prisons'
  },
  {
    category: 'Retail',
    types: 'Shopping centers, grocery stores, and restaurants'
  },
  {
    category: 'Industrial',
    types: 'Manufacturing units, food processing, wastewater treatment plants, power, cogeneration, bio-fuels, refinery, petrochemicals'
  },
  {
    category: 'Civil',
    types: 'Bridges, dams, highways'
  },
  {
    category: 'Mining & Marine',
    types: 'Mining operations and marine projects'
  },
  {
    category: 'Restoration',
    types: 'Restoration and repair projects'
  }
]

export default function ConstructionEstimatingConsultantProjectsSection() {
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
            What Scope of <span className="text-[#E8481C]">Projects</span> Do We Provide Consultancy For?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 max-w-4xl mx-auto font-figtree leading-relaxed">
            The scope of our portfolio includes all kinds of residential, industrial, and commercial cost estimate projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#E8481C]/50 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
              }}
            >
              {/* Background Gradient Effect - Always Visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-[#E8481C]/5 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8481C] mb-3 sm:mb-4 font-figtree transition-colors duration-300">
                  {project.category}
                </h3>
                <p className="text-sm sm:text-base text-[#121212]/80 leading-relaxed font-figtree">
                  {project.types}
                </p>
              </div>

              {/* Decorative Corner - Always Visible */}
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


