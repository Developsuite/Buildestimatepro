'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const plans = [
  {
    name: 'Project Base',
    description: 'Affordable per-project rates or hourly options. Tailored for single jobs.',
    features: [
      'Per-project pricing',
      'Hourly rate options',
      'Ideal for single projects',
      'Flexible engagement',
      'No long-term commitment',
      'Pay as you go'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Month Base',
    description: 'Monthly package for businesses bidding on 3 to 4 projects per month.',
    features: [
      'Monthly subscription',
      'Support for 3-4 projects',
      'Priority support',
      'Dedicated bid manager',
      'Regular strategy sessions',
      'Cost savings over per-project'
    ],
    popular: true,
    cta: 'Choose Plan'
  },
  {
    name: 'Dedicated',
    description: 'Monthly package for companies bidding on 5 to 8 projects per month.',
    features: [
      'Monthly subscription',
      'Support for 5-8 projects',
      'Premium priority support',
      'Dedicated team access',
      'Weekly strategy meetings',
      'Maximum cost savings'
    ],
    popular: false,
    cta: 'Contact Us'
  }
]

export default function VirtualBidManagementPricingSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="pricing" ref={ref} className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8481C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0063BF]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-figtree">
            Choose Your <span className="text-[#E8481C]">Perfect Plan</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-figtree leading-relaxed">
            Streamline your bidding process, win more contracts, and secure business growth with our Virtual Bid Manager service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'md:-mt-4 md:mb-4' 
                  : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white text-center py-2 text-xs sm:text-sm font-bold font-figtree z-20">
                  MOST POPULAR
                </div>
              )}

              {/* Card Content */}
              <div className={`relative bg-white/5 backdrop-blur-lg border ${
                plan.popular 
                  ? 'border-[#E8481C] shadow-2xl shadow-[#E8481C]/20' 
                  : 'border-white/10 hover:border-[#E8481C]/50'
              } rounded-xl p-5 sm:p-6 h-full transition-all duration-300 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-figtree">
                    {plan.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 font-figtree leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm text-white/80 font-figtree">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 font-figtree text-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#E8481C] to-[#ff6b47] text-white hover:shadow-lg hover:shadow-[#E8481C]/50 hover:scale-105'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#E8481C]/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 ${
                  plan.popular ? 'bg-[#E8481C]/20' : 'bg-[#0063BF]/10'
                } rounded-bl-full opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm text-white/60 font-figtree">
            All plans include professional bid management expertise. <Link href="/contact" className="text-[#E8481C] hover:underline">Contact us</Link> for custom solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

