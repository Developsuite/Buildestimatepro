'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const software = [
  'Planswift',
  'Bluebeam',
  'RS Means',
  'FastPIPE',
  'FastDUCT',
  'FastWRAP',
  'IMHS Mark Systems',
  'Xactimate',
  'Trimble',
  'Quest Estimating'
]

const csiDivisions = [
  'Sitework',
  'Masonry',
  'Concrete',
  'Structural Steel',
  'Door/Windows',
  'Mechanical',
  'Electrical',
  'Plumbing',
  'Lumber',
  'Finishes',
  'Thermal/moisture protection'
]

export default function CommercialEstimatingSoftwareSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Software */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
              Expert Software Expertise
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree mb-6">
              <p>
                We have expert estimators highly skilled in industry-leading software tools to ensure accuracy, efficiency, and precision in our commercial estimating services.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/50 shadow-lg">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {software.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-[#121212]/80 font-figtree">
                    <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - CSI Divisions */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
              Complete CSI Division Coverage
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree mb-6">
              <p>
                With in-house trade specialized estimators, we offer commercial estimating services in all CSI divisions. You can rely on us for comprehensive takeoffs across all construction trades.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/50 shadow-lg">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {csiDivisions.map((division, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-[#121212]/80 font-figtree">
                    <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{division}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

