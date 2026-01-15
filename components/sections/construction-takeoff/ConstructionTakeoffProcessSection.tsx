'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  { title: 'Project Review', desc: 'Review all drawings, blueprints, and specifications' },
  { title: 'Scope Definition', desc: 'Identify materials, labor, and cost factors' },
  { title: 'Quantity Takeoff', desc: 'Measure and calculate material quantities' },
  { title: 'Cost Estimation', desc: 'Create budget based on latest market prices' },
  { title: 'Verification', desc: 'Double-check all calculations for accuracy' },
  { title: 'Final Report', desc: 'Deliver clear, organized takeoff report' }
]

export default function ConstructionTakeoffProcessSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-8 font-figtree text-center">
          Our Step-by-Step <span className="text-[#E8481C]">Takeoff Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#E8481C]/50 shadow-xl">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold font-figtree">{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#E8481C] mb-2 font-figtree mt-2">{step.title}</h3>
              <p className="text-[#121212]/80 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


