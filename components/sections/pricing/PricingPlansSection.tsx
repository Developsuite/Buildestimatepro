'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const plans = [
  {
    id: 1,
    name: 'Standard Plan',
    price: '$150',
    description: 'Perfect for single projects',
    features: [
      { text: 'Detailed project budget estimation', included: true },
      { text: 'Highlights of common components', included: true },
      { text: 'Detailed budget breakdown report', included: true },
      { text: 'Email-based customer support', included: true },
      { text: 'Regular market updates', included: true },
      { text: 'No revisions', included: false },
      { text: 'Budget comparison assessment', included: true },
      { text: 'Fixed pricing', included: true }
    ],
    buttonText: 'Get a Quote',
    buttonLink: '/contact',
    isPopular: false
  },
  {
    id: 2,
    name: 'Customized Plan',
    price: 'Custom',
    description: 'Tailored to your specific needs',
    features: [
      { text: 'Tailored Construction Estimates', included: true },
      { text: 'Email and phone-based support', included: true },
      { text: 'Real-time market trends updates', included: true },
      { text: 'Limited revisions', included: true },
      { text: 'Customized cost analysis', included: true },
      { text: 'Training sessions & onboarding', included: true },
      { text: 'Flexible pricing', included: true },
      { text: '24/7 customer support', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Color-coded personalized documents', included: true },
      { text: 'No time restriction', included: true }
    ],
    buttonText: 'Call Us Now',
    buttonLink: '/contact',
    isPopular: true
  },
  {
    id: 3,
    name: 'Monthly Plan',
    price: '$1,450',
    priceSubtext: '/month',
    description: 'Ideal for ongoing projects',
    features: [
      { text: 'Continuous market trend updates', included: true },
      { text: 'Detailed cost estimation and support', included: true },
      { text: 'Extensive database availability', included: true },
      { text: 'Precise budget modifications', included: true },
      { text: '24/7 customer support', included: true },
      { text: 'Limited revisions', included: true },
      { text: 'Advanced cost comparison evaluation', included: true },
      { text: 'Pre-planned meetings and decisions', included: true }
    ],
    buttonText: 'Get a Quote',
    buttonLink: '/contact',
    isPopular: false
  }
]

export default function PricingPlansSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full bg-[#F5F1E6] py-12 sm:py-16 md:py-20 lg:py-24 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-4 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-5 md:mb-6 font-figtree">
            Client-Focused Pricing Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#121212]/70 leading-relaxed font-figtree max-w-3xl">
            We understand the importance of cost-effective solutions. That's why BuildEstimatePro offers flexible pricing plans designed to fit your project requirements and budget. Browse our packages below or request a custom solution tailored specifically to your needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group backdrop-blur-xl bg-white/30 rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.isPopular 
                  ? 'shadow-[0_8px_32px_0_rgba(232,72,28,0.37)] scale-105 border-2 border-[#E8481C]/50' 
                  : 'shadow-[0_8px_32px_0_rgba(18,18,18,0.1)] hover:shadow-[0_8px_32px_0_rgba(232,72,28,0.2)] hover:scale-105 border border-white/40'
              }`}
              style={{
                background: plan.isPopular 
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)'
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#E8481C]/90 backdrop-blur-sm text-white px-4 py-1 text-xs sm:text-sm font-semibold font-figtree rounded-bl-2xl shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Plan Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#121212] mb-2 font-figtree">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[#121212]/60 mb-4 font-figtree">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/30">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-[#E8481C] font-figtree">
                      {plan.price}
                    </span>
                    {plan.priceSubtext && (
                      <span className="text-lg text-[#121212]/60 font-figtree">
                        {plan.priceSubtext}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 sm:space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg
                          className="w-5 h-5 text-[#E8481C] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-[#121212]/30 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span className={`text-sm font-figtree ${
                        feature.included ? 'text-[#121212]' : 'text-[#121212]/40 line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.buttonLink}
                  className={`group/btn relative w-full px-6 py-3 sm:py-3.5 font-figtree font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex items-center justify-center backdrop-blur-sm border ${
                    plan.isPopular
                      ? 'bg-[#E8481C]/90 text-white hover:scale-105 border-[#E8481C]/50'
                      : 'bg-[#121212]/80 text-white hover:scale-105 border-white/20'
                  }`}
                >
                  <span className="relative z-10 text-sm sm:text-base group-hover/btn:tracking-wide transition-all duration-300">
                    {plan.buttonText}
                  </span>
                  <div className={`absolute inset-0 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#ff6b47] to-[#E8481C]'
                      : 'bg-gradient-to-r from-[#E8481C] to-[#ff6b47]'
                  }`}></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <p className="text-sm sm:text-base text-[#121212]/70 font-figtree mb-4">
            Need a custom solution? We're here to help you find the perfect fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#E8481C] hover:text-[#121212] transition-colors duration-300 font-figtree font-semibold text-sm sm:text-base"
          >
            Contact us for custom pricing
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

