'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = ['Accuracy', 'Time Savings', 'Cost Control', 'Competitive Bidding', 'Expert Team', 'Advanced Tools', 'Faster Turnaround', 'Enhanced Project Management']

export default function ConstructionTakeoffWhyChooseSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 font-figtree text-center">
          Why Choose <span className="text-[#E8481C]">BuildEstimatePro</span>?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-[#E8481C]/50 transition-all text-center">
              <p className="text-white font-figtree font-semibold">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-[#E8481C] to-[#ff6b47] p-6 rounded-xl">
          <p className="text-white text-xl sm:text-2xl font-bold font-figtree">
            30% OFF for New Clients - Limited Time!
          </p>
        </div>
      </div>
    </section>
  )
}


