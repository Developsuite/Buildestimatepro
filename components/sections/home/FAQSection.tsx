'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    id: 1,
    question: 'What types of construction projects can BuildEstimatePro estimate?',
    answer: 'BuildEstimatePro provides accurate estimates for all types of construction projects including residential, commercial, industrial, and infrastructure projects. We cover all trades including MEP, structural, architectural, and specialized construction work.'
  },
  {
    id: 2,
    question: 'How long does it take to receive an estimate?',
    answer: 'Our standard turnaround time is 24-48 hours for most projects. However, the timeline depends on the project complexity and size. Rush services are available for urgent projects, and we always communicate timelines upfront.'
  },
  {
    id: 3,
    question: 'What information do I need to provide for an estimate?',
    answer: 'To provide an accurate estimate, we typically need project plans (PDF or CAD files), specifications, project location, and any special requirements. Our team will guide you through the process and let you know exactly what documents we need.'
  },
  {
    id: 4,
    question: 'How accurate are BuildEstimatePro estimates?',
    answer: 'BuildEstimatePro maintains accuracy rates of 95-99% on our estimates. We use industry-standard software, updated cost databases, and experienced estimators to ensure precision. Our track record shows clients achieve a 92%+ bid win rate.'
  },
  {
    id: 5,
    question: 'Do you offer revisions if the estimate needs adjustments?',
    answer: 'Yes, we offer revision services if you need to adjust the estimate based on changes in scope, materials, or specifications. We work closely with clients to ensure the estimate meets their project requirements accurately.'
  },
  {
    id: 6,
    question: 'What estimating software does BuildEstimatePro use?',
    answer: 'Our team is proficient in industry-leading software including Planswift, Bluebeam, Trimble, Accubid, RS Means, Cost Works, and Quest. We select the most appropriate tool based on your project type and requirements.'
  },
  {
    id: 7,
    question: 'Can BuildEstimatePro help with material takeoffs?',
    answer: 'Absolutely! BuildEstimatePro specializes in detailed material takeoffs for all trades. We provide comprehensive quantity lists, material specifications, and accurate measurements to help you plan procurement and manage costs effectively.'
  }
]

export default function FAQSection() {
  const [ref, isVisible] = useScrollAnimation()
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section ref={ref} className={`w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 bg-[#F5F1E6] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-4 lg:gap-4 xl:gap-5">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] h-full">
              <Image
                src="/images/home/faq2.png"
                alt="BuildEstimatePro FAQ"
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col lg:h-full">
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

