'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = {
  contractors: ['Win More Bids', 'Cut Waste', 'Plan Smarter'],
  managers: ['Stay On Budget', 'Communicate Clearly', 'Reduce Errors'],
  builders: ['Optimize Resources', 'Deliver Quality', 'Meet Deadlines']
}

export default function ConstructionTakeoffFeaturesSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-[#E0DCD7] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-8 font-figtree text-center">
          Features of Our <span className="text-[#E8481C]">Takeoff Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#E8481C]/30 shadow-lg">
            <h3 className="text-xl font-bold text-[#E8481C] mb-4 font-figtree">For Contractors</h3>
            <ul className="space-y-2">
              {features.contractors.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#121212]/80">
                  <span className="text-[#E8481C]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#E8481C]/30 shadow-lg">
            <h3 className="text-xl font-bold text-[#E8481C] mb-4 font-figtree">For Project Managers</h3>
            <ul className="space-y-2">
              {features.managers.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#121212]/80">
                  <span className="text-[#E8481C]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#E8481C]/30 shadow-lg">
            <h3 className="text-xl font-bold text-[#E8481C] mb-4 font-figtree">For Builders & Developers</h3>
            <ul className="space-y-2">
              {features.builders.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#121212]/80">
                  <span className="text-[#E8481C]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


