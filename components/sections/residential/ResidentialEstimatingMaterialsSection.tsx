'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ResidentialEstimatingMaterialsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8481C]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Material Quantification */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
              Accurate and Efficient Material Quantification
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
              <p>
                In our residential estimating services, we meticulously quantify various materials using units of volume, length, area, and number. We understand that different purposes require different units, and we adapt our approach accordingly.
              </p>
              <p>
                For instance, if you need lumber supply, we quantify beams, studs, joists, and rafters in EA (each) units, providing a complete description of accompanying nails and clips. This precise approach ensures accurate material ordering and cost-effective procurement for your residential projects.
              </p>
            </div>
          </div>

          {/* Right Side - Tools */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
              Precise Estimation with Industry-Leading Tools
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree">
              <p>
                To deliver exceptional results, we leverage cutting-edge software and industry-leading tools to ensure accuracy, efficiency, and precision in our estimating services.
              </p>
              
              <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/50 shadow-lg">
                <p className="text-sm sm:text-base font-semibold text-[#121212] mb-4 font-figtree">Our Software & Tools:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Bluebeam', 'Quest Estimating', 'Planswift', 'RS Means', 'Xactimate', 'FastPIPE', 'FastDUCT', 'FastWRAP', 'Trimble', 'IMHS Mark Systems'].map((tool, index) => (
                    <li key={index} className="flex items-center justify-start gap-2 text-sm sm:text-base text-[#121212]/80 font-figtree">
                      <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

