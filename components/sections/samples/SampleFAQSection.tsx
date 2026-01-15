'use client'

import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    id: 1,
    question: 'What types of sample estimates do you provide?',
    answer: 'We provide comprehensive sample estimates across all construction trades including commercial, residential, industrial, electrical, plumbing, mechanical, concrete, masonry, drywall, flooring, and many more. Each sample demonstrates our detailed approach and professional formatting.'
  },
  {
    id: 2,
    question: 'Can I use these samples as templates for my projects?',
    answer: 'Our samples are provided to showcase the quality and detail of our work. While they demonstrate our methodology, each project requires a custom estimate based on specific plans, specifications, and requirements. Contact us for a personalized estimate for your project.'
  },
  {
    id: 3,
    question: 'How detailed are your sample estimates?',
    answer: 'Our samples include comprehensive breakdowns with material quantities, labor hours, unit costs, and total pricing. Many samples also include man-hours, detailed specifications, and organized cost divisions following industry standards like CSI MasterFormat.'
  },
  {
    id: 4,
    question: 'Do you provide samples for both residential and commercial projects?',
    answer: 'Yes! We have extensive experience in both residential and commercial estimating. Our sample portfolio includes single-family homes, multi-family developments, commercial buildings, industrial facilities, and specialized projects like remodels and renovations.'
  },
  {
    id: 5,
    question: 'What software do you use for creating estimates?',
    answer: 'We utilize industry-leading software including Bluebeam, PlanSwift, On-Screen Takeoff, Excel, and other specialized tools. Our estimates can be delivered in various formats to match your preferred software and workflow requirements.'
  },
  {
    id: 6,
    question: 'How can I get a custom estimate like these samples?',
    answer: 'Simply contact us with your project plans and specifications. We offer free consultations to discuss your needs and provide a quote. Our typical turnaround time is 24-48 hours, with expedited services available for urgent projects.'
  }
]

export default function SampleFAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#F5F1E6] overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[50px] relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
              <Image
                src="/images/about/faq.png"
                alt="Sample Documents FAQ"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Section Label */}
            <div className="mb-4">
              <span className="text-[#E8481C] font-figtree font-semibold text-sm tracking-wider uppercase">
                Have Questions?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#121212] mb-8 leading-tight font-figtree">
              Frequently Asked Questions
            </h2>

            <div className="w-full space-y-0">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-t border-[#121212]/10 last:border-b"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left py-5 flex items-start justify-between gap-4 transition-colors duration-200 hover:bg-white/30 group"
                  >
                    <span className={`flex-1 text-base md:text-lg font-semibold text-[#121212] font-figtree transition-colors duration-200 group-hover:text-[#E8481C] leading-snug ${
                      openId === faq.id ? 'text-[#E8481C]' : ''
                    }`}>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-[#121212] transition-transform duration-300 ${
                        openId === faq.id ? 'rotate-180 text-[#E8481C]' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-5 pr-12">
                      <p className="text-sm md:text-base text-[#121212]/70 leading-relaxed font-figtree">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="group/cta relative px-8 py-3.5 bg-[#E8481C] text-white font-bold rounded-lg font-figtree text-sm tracking-wide overflow-hidden hover:bg-[#121212] transition-all duration-300 hover:shadow-lg">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Still Have Questions? Contact Us
                  <svg 
                    className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </span>
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
