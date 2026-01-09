'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  { 
    num: '01', 
    title: 'Share Details', 
    desc: 'Upload your construction plans, sketches, or PDFs through our secure portal',
    icon: '📤'
  },
  { 
    num: '02', 
    title: 'Get Quote', 
    desc: 'Receive detailed quote with pricing, turnaround time, and delivery date',
    icon: '💰'
  },
  { 
    num: '03', 
    title: 'Confirm & Pay', 
    desc: 'Choose your package and proceed with secure payment via card or PayPal',
    icon: '✓'
  },
  { 
    num: '04', 
    title: 'Receive Drafts', 
    desc: 'Get precision blueprints delivered within 1-2 days in your preferred format',
    icon: '🎯'
  }
]

export default function CADServicesHowToStartSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23121212' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border-l-4 border-[#E8481C]">
              <span className="text-xs font-semibold text-[#121212] uppercase tracking-wider">Simple Process</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121212] mb-4 font-figtree">
            How To Get Started with <span className="text-[#E8481C]">CAD Drafting</span>
          </h2>
          <p className="text-lg text-[#121212]/60 max-w-2xl mx-auto">Four simple steps to get professional CAD drafting services</p>
        </div>

        {/* Process Flow - Modern Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8481C]/20 via-[#E8481C] to-[#E8481C]/20 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Mobile Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-10 top-20 bottom-0 w-1 bg-gradient-to-b from-[#E8481C] to-[#E8481C]/20 transform translate-y-8"></div>
                )}

                <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#E8481C]/30">
                  {/* Step Number Badge */}
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white font-bold text-xs">{step.num}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#121212] mb-3 font-figtree group-hover:text-[#E8481C] transition-colors">{step.title}</h3>
                  <p className="text-[#121212]/70 text-sm leading-relaxed">{step.desc}</p>

                  {/* Arrow Indicator - Desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#E8481C]">
                        <svg className="w-4 h-4 text-[#E8481C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#E8481C]/20 rounded-br-2xl group-hover:border-[#E8481C]/50 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#121212] to-[#2a2a2a] rounded-2xl p-8 shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2 font-figtree">Ready to get started?</h3>
              <p className="text-white/70 text-sm">Upload your plans and receive a quote within minutes</p>
            </div>
            <Link href="/contact" className="px-8 py-3 bg-[#E8481C] text-white font-semibold rounded-lg hover:bg-[#ff6b47] transition-all hover:scale-105 whitespace-nowrap">
              Upload Plans Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

