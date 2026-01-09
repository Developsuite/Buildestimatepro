'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    id: 1,
    question: 'What makes BuildEstimatePro different from other estimating companies?',
    answer: 'BuildEstimatePro stands out through our combination of certified estimators, advanced technology, 24-48 hour turnaround times, and 98% bid-winning ratio. We provide detailed, accurate estimates using industry-leading software and up-to-date cost databases.'
  },
  {
    id: 2,
    question: 'Do you provide estimates for all CSI divisions?',
    answer: 'Yes, we provide comprehensive estimates for all CSI divisions including General Conditions, Sitework, Concrete, Masonry, Metals, Finishes, Mechanical, Electrical, Plumbing, Wood/Plastic Composites, Thermal/Moisture Protection, and Roofing & Siding.'
  },
  {
    id: 3,
    question: 'Can you help with both residential and commercial projects?',
    answer: 'Absolutely! We serve a diverse range of clients including general contractors, subcontractors, developers, architects, and engineers. Our portfolio includes residential, commercial, industrial, retail, institutional, and civil projects.'
  },
  {
    id: 4,
    question: 'What is your pricing structure?',
    answer: 'We offer market competitive rates with transparent pricing. Our rates vary based on project complexity, size, and turnaround time required. Contact us for a custom quote tailored to your specific project needs.'
  },
  {
    id: 5,
    question: 'Do you offer material takeoff services separately?',
    answer: 'Yes, we offer standalone material takeoff services in addition to full cost estimating. Our detailed takeoffs include comprehensive quantity lists, material specifications, and accurate measurements organized by location or CSI divisions.'
  },
  {
    id: 6,
    question: 'How do I get started with BuildEstimatePro?',
    answer: 'Getting started is easy! Simply contact us with your project plans, specifications, and requirements. Our team will review your project, provide a quote, and deliver your detailed estimate within 24-48 hours.'
  }
]

export default function AboutFAQSection() {
  const [ref, isVisible] = useScrollAnimation()
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section ref={ref} className={`relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-4 xl:gap-5">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] flex-shrink-0">
              <Image
                src="/images/about/faq.png"
                alt="BuildEstimatePro FAQ"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col min-h-0">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-[#121212] mb-3 sm:mb-3.5 md:mb-4 leading-tight font-figtree text-center lg:text-left">
              Frequently Asked Questions
            </h2>

            <div className="w-full space-y-0 flex-1 flex flex-col">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border-t border-[#121212]/10 last:border-b"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-center sm:text-left py-2 sm:py-2.5 md:py-3 flex items-start sm:justify-between justify-center gap-2 transition-colors duration-200 hover:bg-white/30 group"
                  >
                    <span className={`flex-1 text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-[#121212] font-figtree transition-colors duration-200 group-hover:text-[#E8481C] ${
                      openId === faq.id ? 'text-[#E8481C]' : ''
                    }`}>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[#121212] transition-transform duration-300 flex-shrink-0 ${
                        openId === faq.id ? 'rotate-180 text-[#E8481C]' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-0 pb-2 sm:pb-2.5 md:pb-3">
                      <p className="text-sm sm:text-base md:text-base text-[#121212]/70 leading-relaxed font-figtree text-center sm:text-left">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

