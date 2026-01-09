'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const paymentMethods = [
  { name: 'Visa', image: '/images/PRICING/PAYMENTS/Visa Inc._idDUM8TcN7_2.png' },
  { name: 'Mastercard', image: '/images/PRICING/PAYMENTS/Mastercard_Symbol_7.png' },
  { name: 'American Express', image: '/images/PRICING/PAYMENTS/American Express_Logo_1.png' },
  { name: 'PayPal', image: '/images/PRICING/PAYMENTS/PayPal_Logo_Alternative_1.png' },
  { name: 'Stripe', image: '/images/PRICING/PAYMENTS/Stripe_Logo_7.png' },
  { name: 'Payoneer', image: '/images/PRICING/PAYMENTS/Payoneer_id3dQEWV2h_9.png' }
]

export default function PaymentMethodsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full bg-[#F5F1E6] pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-4 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-5 md:mb-6 font-figtree">
            Our Payment Methods
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-3xl">
            We prioritize secure and convenient online payment options for your peace of mind. Accept credit cards, debit cards, and PayPal. After reviewing your project, we'll send a detailed quote and invoice. Once payment is confirmed, your comprehensive budget estimate will be delivered within 24-48 hours.
          </p>
        </div>

        {/* Payment Methods Ticker */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-payment-scroll">
            {/* First Set */}
            {paymentMethods.map((method, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[60px] sm:h-[70px] md:h-[80px] p-4 hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={method.image}
                  alt={method.name}
                  width={150}
                  height={80}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {paymentMethods.map((method, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[60px] sm:h-[70px] md:h-[80px] p-4 hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={method.image}
                  alt={method.name}
                  width={150}
                  height={80}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

