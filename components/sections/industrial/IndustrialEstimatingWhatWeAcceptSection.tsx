'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const whatWeAccept = [
  'P&IDs, PFDs, Drawing plans & specifications',
  'Formats: .PDF, .TIF, .TIFF, .DXF, .DWF, .DWG, .PLN, .JPG, .JPEG, .CPC, .OSX, .DJVU, .CAL',
  'Bid deadlines',
  'Labor rates; prevailing wages or non-union or union'
]

const whatWeDeliver = [
  'EXCEL spreadsheets including Material & labor takeoffs with man-hours, equipment lists and vendor quotes',
  'In MasterFormat or UniFormat or by cost codes or your customized format',
  'We deliver within 24 to 48 hours'
]

export default function IndustrialEstimatingWhatWeAcceptSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* What We Accept */}
          <div className="group relative backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#E8481C]/50 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-[#E8481C]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] font-figtree">What We Accept?</h2>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {whatWeAccept.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#121212]/80 font-figtree">
                    <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E8481C]/15 to-transparent rounded-bl-full"></div>
          </div>

          {/* What We Deliver */}
          <div className="group relative backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#E8481C]/50 shadow-xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-[#E8481C]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212] font-figtree">What We Deliver?</h2>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {whatWeDeliver.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#121212]/80 font-figtree">
                    <svg className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E8481C]/15 to-transparent rounded-bl-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

