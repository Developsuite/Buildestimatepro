'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const clients = ['General contractors', 'Subcontractors', 'Builders and developers', 'Architects and engineers', 'Project managers', 'Homeowners']

const deliverables = ['Detailed Material Lists', 'Labor Breakdowns', 'Equipment Schedules', 'Digital Files', 'Bid Documents']

export default function ConstructionTakeoffClientsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-[#E0DCD7] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] mb-6 font-figtree">
              Clients We <span className="text-[#E8481C]">Serve</span>
            </h2>
            <div className="space-y-2">
              {clients.map((client, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                  <span className="text-[#E8481C] text-xl">✓</span>
                  <p className="text-[#121212]/80">{client}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] mb-6 font-figtree">
              <span className="text-[#E8481C]">Deliverables</span> We Provide
            </h2>
            <div className="space-y-2">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                  <span className="text-[#E8481C] text-xl">✓</span>
                  <p className="text-[#121212]/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


