'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  { 
    q: 'What CAD services do you offer?', 
    a: 'We offer comprehensive CAD services including 2D/3D drafting, architectural design, structural drafting, MEP services, and CAD conversion from residential to large-scale industrial projects.',
    icon: '📐'
  },
  { 
    q: 'What software do you use?', 
    a: 'We use industry-leading software including AutoCAD, SolidWorks, Revit, Civil 3D, CATIA, Creo, Siemens NX, and more to ensure high-quality results.',
    icon: '💻'
  },
  { 
    q: 'How fast can you deliver?', 
    a: 'We provide fast turnaround within 1-2 days for most projects, ensuring organized construction documentation without delays.',
    icon: '⚡'
  },
  { 
    q: 'Do you provide 24/7 support?', 
    a: 'Yes, our experienced team is available 24/7 to provide high-quality drawings and design for all your construction projects.',
    icon: '🕒'
  }
]

export default function CADServicesFAQSection() {
  const [ref, isVisible] = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #121212 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Info */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/CAD/cadvertical/4.jpg"
                  alt="FAQ"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#121212] mb-3 font-figtree">Still have questions?</h3>
                  <p className="text-[#121212]/70 text-sm mb-4">Our expert team is ready to assist you 24/7</p>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8481C] to-[#ff6b47] border-2 border-white flex items-center justify-center text-white font-bold text-sm">24</div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0063BF] to-[#4a9eff] border-2 border-white flex items-center justify-center text-white font-bold text-sm">7</div>
                    </div>
                    <span className="text-sm font-semibold text-[#121212]">Support Available</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div className="order-1 lg:order-2 text-center md:text-left">
            <div className="mb-8">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border-l-4 border-[#E8481C] mx-auto md:mx-0">
                  <span className="text-xs font-semibold text-[#121212] uppercase tracking-wider">Common Questions</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 font-figtree">
                Frequently Asked <span className="text-[#E8481C]">Questions</span>
              </h2>
              <p className="text-[#121212]/60 text-lg mx-auto md:mx-0">Everything you need to know about our CAD drafting services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#E8481C]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center gap-4 hover:bg-[#F5F1E6]/50 transition-colors"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E8481C]/10 to-[#E8481C]/5 rounded-xl flex items-center justify-center text-2xl">
                      {faq.icon}
                    </div>
                    
                    <div className="flex-1">
                      <span className="font-bold text-[#121212] font-figtree block group-hover:text-[#E8481C] transition-colors">{faq.q}</span>
                    </div>

                    {/* Arrow */}
                    <div className={`flex-shrink-0 w-8 h-8 bg-[#E8481C]/10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'rotate-180 bg-[#E8481C]' : ''}`}>
                      <svg className={`w-4 h-4 transition-colors ${openIndex === i ? 'text-white' : 'text-[#E8481C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openIndex === i && (
                    <div className="px-6 pb-5 pl-[88px]">
                      <div className="pt-3 border-t border-[#121212]/10">
                        <p className="text-[#121212]/70 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

