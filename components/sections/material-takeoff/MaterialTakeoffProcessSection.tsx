'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Send Your Requirements',
    description: 'To get our services, you need to share your project requirements with us. You must share documents like project details, blueprints, initial designs, and sketches.'
  },
  {
    id: 2,
    number: '02',
    title: 'Get the Payment Plan',
    description: 'Then our team will go through all of your project plans and generate a payment plan according to the services you want to buy. We offer customized payment plans by carefully reviewing the requirements of your project.'
  },
  {
    id: 3,
    number: '03',
    title: 'Take the Estimations',
    description: 'After you have cleared your payments, our team will start working on your project. They will share the final estimation report within 24 to 48 working hours without any delay. However, delays can happen because of the length or complexity of the project.'
  }
]

export default function MaterialTakeoffProcessSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F5F1E6] via-white/50 to-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(18,18,18,0.1) 40px, rgba(18,18,18,0.1) 41px)',
        }}></div>
      </div>

      {/* Animated Circle Rings */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-15">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping"></div>
        <div className="absolute inset-8 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute inset-16 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </div>

      <div className="absolute bottom-20 right-20 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 opacity-12">
        <div className="absolute inset-0 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute inset-6 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute inset-12 border-2 border-[#E8481C] rounded-full animate-ping" style={{ animationDelay: '1.3s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center md:text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree mx-auto md:mx-0">
            Take Quantity Takeoff Reports Today
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Steps */}
          <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="group relative">
                <div className="relative bg-white/80 backdrop-blur-xl p-3 sm:p-4 md:p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/60 overflow-hidden group-hover:border-[#E8481C]/30">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>

                  <div className="relative z-10 flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#E8481C]/20 rounded-full blur-md group-hover:bg-[#E8481C]/40 transition-all duration-500 scale-110"></div>
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#E8481C] transition-all duration-500 group-hover:scale-110 border-2 border-[#E8481C]/30 group-hover:border-[#E8481C]">
                          <span className="text-xs sm:text-sm font-bold text-[#E8481C] group-hover:text-white font-figtree transition-colors duration-500">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#121212] mb-1.5 sm:mb-2 font-figtree group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#121212]/70 leading-relaxed font-figtree group-hover:text-white/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-5 sm:left-6 top-full w-0.5 h-3 sm:h-4 bg-gradient-to-b from-[#E8481C]/40 to-transparent"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-full flex items-center">
              <Image
                src="/images/materialtakeoff/image1.jpg"
                alt="Material Takeoff Process"
                width={600}
                height={400}
                className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-contain rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

