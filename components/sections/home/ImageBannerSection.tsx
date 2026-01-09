'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ImageBannerSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[450px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/home/image7.jpg"
          alt="BuildEstimatePro Construction Estimating Services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Bottom Fade Overlay - black gradient from bottom only */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] sm:h-[70%] bg-gradient-to-t from-black/90 via-black/75 to-transparent z-10"></div>

      {/* Text Content - positioned at bottom middle */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 font-figtree leading-tight px-2 sm:px-0">
            Transform Your Construction Projects with BuildEstimatePro
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base text-white/90 leading-relaxed font-figtree max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-4">
            Get fast, accurate, and reliable material takeoffs and cost estimates. Our expert estimators help you boost your bid-win ratio, cut estimating costs by up to 60%, and plan your projects with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

