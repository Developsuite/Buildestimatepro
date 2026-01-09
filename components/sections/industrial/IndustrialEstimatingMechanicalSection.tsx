'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const takeoffs = [
  'Ductwork',
  'Piping',
  'Insulation',
  'HVAC Systems',
  'Sprinkler Systems',
  'Gas Piping Systems',
  'Material conveying Systems',
  'Crushing Systems',
  'Mechanical Equipment',
  'Instrumentation & Controls',
  'Welding',
  'Pressure Vessels',
  'Mechanical Alterations'
]

const insulationTakeoffs = [
  'Insulation takeoffs',
  'Pipe Insulation',
  'Plumbing & Ductwork Insulation',
  'Tank Insulation Systems',
  'Equipment Insulation Systems',
  'Removable Insulation Systems'
]

const pipingTakeoffs = [
  'Piping takeoffs',
  'Process Piping',
  'Power Piping',
  'Coal Piping',
  'Refrigeration Piping',
  'Gas Piping Systems'
]

export default function IndustrialEstimatingMechanicalSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
            Industrial Mechanical Estimating
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-4xl">
            Our expert mechanical estimators have excelled in providing detailed material takeoffs, cost estimates, procurement, and cost management solutions to facilitate mechanical contractors, piping contractors, piping and duct fabricators, project managers, and engineering design firms. They are proficient with Planswift, FastPIPE, FastDUCT, FastWRAP, Trimble to effectively develop cost proposals and prepare competitive bids. You can count on us for professional mechanical estimating services customized to your specific needs and requirements.
          </p>
        </div>

        {/* Main Takeoffs */}
        <div className="bg-[#1a1a1a] backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 shadow-lg mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 font-figtree">
            We perform takeoffs for:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {takeoffs.map((takeoff, index) => (
              <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-white/90 font-figtree">
                <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{takeoff}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Insulation Takeoffs */}
          <div className="bg-[#1a1a1a] backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 font-figtree">
              Insulation Takeoffs
            </h3>
            <ul className="space-y-3">
              {insulationTakeoffs.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-white/90 font-figtree">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Piping Takeoffs */}
          <div className="bg-[#1a1a1a] backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 font-figtree">
              Piping Takeoffs
            </h3>
            <ul className="space-y-3">
              {pipingTakeoffs.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-white/90 font-figtree">
                  <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

