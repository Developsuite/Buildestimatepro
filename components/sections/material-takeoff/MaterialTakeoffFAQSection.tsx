'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    id: 1,
    question: 'What is quantity takeoff in construction?',
    answer: 'Quantity takeoff is the process of measuring and calculating the exact quantities of materials, labor, and equipment needed for a construction project. It involves analyzing project plans and specifications to determine precise material requirements for accurate cost estimation and procurement planning.'
  },
  {
    id: 2,
    question: 'What materials do you cover in your quantity takeoff services?',
    answer: 'We provide comprehensive material takeoff services covering all major construction materials including Sitework, Drywall, Masonry, Concrete, Painting, Insulation, Roofing, Lumber, Millwork, Cabinet, Mechanical, HVAC, Plumbing, Electrical, and Structural Steel. Our detailed takeoffs ensure accurate quantity calculations for every aspect of your project.'
  },
  {
    id: 3,
    question: 'How long does it take to complete a material takeoff?',
    answer: 'Our standard turnaround time for material takeoffs is 24-48 hours for most projects. However, the timeline depends on project complexity, size, and scope. We always communicate timelines upfront and offer rush services for urgent projects when needed.'
  },
  {
    id: 4,
    question: 'What information do I need to provide for a material takeoff?',
    answer: 'To provide an accurate material takeoff, we typically need project plans (PDF or CAD files), specifications, project location, and any special requirements. Our team will guide you through the process and let you know exactly what documents we need to get started.'
  },
  {
    id: 5,
    question: 'How accurate are your material takeoffs?',
    answer: 'Our material takeoffs maintain accuracy rates of 95-99%. We use industry-standard software, continuously updated material databases, and experienced certified estimators to ensure precision. Our track record shows clients achieve significant cost savings through accurate material quantity calculations.'
  },
  {
    id: 6,
    question: 'Do you provide material takeoffs for both residential and commercial projects?',
    answer: 'Yes, we provide material takeoff services for all project types including residential, commercial, industrial, retail, institutional, and civil construction projects. Our team has extensive experience across all sectors and project scales.'
  }
]

export default function MaterialTakeoffFAQSection() {
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
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-4 lg:gap-4 xl:gap-5">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] h-full">
              <Image
                src="/images/home/faq2.png"
                alt="Material Takeoff FAQ"
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

