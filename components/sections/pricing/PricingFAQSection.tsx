'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, Stripe, and Payoneer. All payments are processed securely through our encrypted payment gateway.'
  },
  {
    id: 2,
    question: 'Can I get a custom quote for my project?',
    answer: 'Absolutely! We offer customized pricing plans tailored to your specific project needs. Contact us with your project details, and we\'ll provide a personalized quote that fits your budget and requirements.'
  },
  {
    id: 3,
    question: 'What is included in the Standard Plan?',
    answer: 'The Standard Plan includes detailed project budget estimation, highlights of common components, comprehensive budget breakdown report, email-based customer support, regular market updates, budget comparison assessment, and fixed pricing. Note that revisions are not included in this plan.'
  },
  {
    id: 4,
    question: 'How does the Monthly Plan work?',
    answer: 'The Monthly Plan is ideal for contractors with ongoing projects. For $1,450 per month, you get continuous market trend updates, detailed cost estimation and support, extensive database availability, precise budget modifications, 24/7 customer support, limited revisions, advanced cost comparison evaluation, and pre-planned meetings.'
  },
  {
    id: 5,
    question: 'What makes the Customized Plan different?',
    answer: 'The Customized Plan offers the most flexibility with tailored construction estimates, email and phone support, real-time market trends, unlimited revisions, customized cost analysis, training sessions, flexible pricing, 24/7 support, color-coded personalized documents, and no time restrictions. Perfect for large-scale or complex projects.'
  },
  {
    id: 6,
    question: 'Do you offer refunds if I\'m not satisfied?',
    answer: 'We stand behind the quality of our work. If you\'re not satisfied with your estimate, please contact us within 48 hours of delivery, and we\'ll work with you to address any concerns or make necessary adjustments to meet your expectations.'
  }
]

export default function PricingFAQSection() {
  const [ref, isVisible] = useScrollAnimation()
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section ref={ref} className={`relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Separator Line */}
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 mb-8 sm:mb-10 md:mb-12">
        <div className="border-t border-[#121212]/10"></div>
      </div>

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
              {faqs.map((faq) => (
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

