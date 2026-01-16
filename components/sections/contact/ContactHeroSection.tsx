'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactHeroSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/images/contactbackgorund.png')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] w-full">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 font-figtree leading-tight">
              {/* Mobile: 2 rows - Contact Us on top, Get Started below */}
              <span className="block md:inline">
                <span className="md:hidden block text-[#E8481C] mb-2">Contact Us</span>
                <span className="md:hidden block">Get Started with BuildEstimatePro</span>
              </span>
              {/* Desktop: Original layout */}
              <span className="hidden md:inline">
                Get Started with BuildEstimatePro <span className="text-[#E8481C]">Contact Us</span>
              </span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-figtree">
              Ready to stay on budget and on track? Reach out to BuildEstimatePro today for expert construction estimating services. Fill out the form below or contact us directly to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

