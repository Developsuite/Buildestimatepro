import Link from 'next/link'
import HeroStats from './HeroStats'

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/media/videos/GGvtdEESlsScUluW4nSulJy5lbg.webm" type="video/webm" />
      </video>
      
      {/* Black Fade Overlay - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 sm:from-black/85 via-black/65 sm:via-black/70 to-black/50 sm:to-black/55 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[8vw] py-4 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 hero-content-container flex items-center justify-center sm:block">
        <div className="w-full lg:flex lg:items-start lg:justify-between lg:gap-8">
          <div className="w-full mx-auto text-center sm:text-left hero-inner-content lg:mx-0" style={{ maxWidth: 'min(100%, clamp(20rem, 60vw, 120rem))' }}>
          {/* Title */}
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 leading-[1.2] sm:leading-tight font-figtree">
            Professional Construction<br />
            Estimating Services
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-5 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 2xl:mb-10 leading-tight font-figtree">
            Bid More<span className="text-[#E8481C]"> .</span> Win More<span className="text-[#E8481C]"> .</span> Build Smarter<span className="text-[#E8481C]"> .</span>
          </h2>
          
          {/* Description */}
          <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/90 mb-6 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl font-figtree hero-description mx-auto sm:mx-0" style={{ maxWidth: 'min(100%, clamp(20rem, 50vw, 80rem))' }}>
            Get fast, accurate, and reliable material takeoffs and cost estimates for any trade and any project. Our expert estimators help you boost your bid-win ratio, cut estimating costs by up to 60%, and plan your projects with confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 w-full sm:w-auto items-center sm:items-start mt-2 sm:mt-0">
            <Link
              href="/contact"
              className="group relative h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] xl:h-[52px] 2xl:h-[56px] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex items-center justify-center bg-white text-[#121212] text-xs sm:text-sm md:text-base font-normal overflow-hidden transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Book an Appointment
              </span>
            </Link>
            
            <Link
              href="/services"
              className="group relative h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] xl:h-[52px] 2xl:h-[56px] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex items-center justify-center gap-2 bg-[#E8481C] text-white text-xs sm:text-sm md:text-base font-normal overflow-hidden whitespace-nowrap w-full sm:w-auto"
            >
              {/* Liquid fill effect */}
              <span className="absolute inset-0 bg-[#121212] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                Our services
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          </div>
          
          {/* Right Side Stats & Testimonials - Desktop Only */}
          <HeroStats />
        </div>
      </div>
    </section>
  )
}

