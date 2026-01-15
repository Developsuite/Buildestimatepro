'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const certificateImages = [
  '/images/home/certificates/1.png',
  '/images/home/certificates/2.png',
  '/images/home/certificates/3.png',
  '/images/home/certificates/4.png',
  '/images/home/certificates/5.png',
  '/images/home/certificates/6.png',
  '/images/home/certificates/7.png',
  '/images/home/certificates/8.png',
  '/images/home/certificates/9.png',
  '/images/home/certificates/10.png',
]

export default function CertificatesTickerSection() {
  const [ref, isVisible] = useScrollAnimation()

  // Duplicate images for seamless infinite scroll
  const duplicatedCertificates = [...certificateImages, ...certificateImages, ...certificateImages]

  return (
    <section ref={ref} className={`w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
            Our Certifications & Accreditations
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-figtree max-w-3xl mx-auto sm:mx-0">
            BuildEstimatePro is recognized for excellence in construction estimating services
          </p>
        </div>

        {/* Continuous Ticker */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 bg-gradient-to-r from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 bg-gradient-to-l from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>

          {/* Ticker Container */}
          <div className="flex animate-scroll-infinite">
            {duplicatedCertificates.map((certificate, index) => (
              <div
                key={`certificate-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-1.5 md:mx-2 lg:mx-2.5 xl:mx-3"
                style={{ 
                  width: 'clamp(150px, 15vw, 250px)',
                  minWidth: '150px',
                  maxWidth: '250px'
                }}
              >
                <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 overflow-hidden">
                  <Image
                    src={certificate}
                    alt={`Certificate ${(index % certificateImages.length) + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 250px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

