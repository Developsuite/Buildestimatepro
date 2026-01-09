'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

export default function ContactInfoSection() {
  const [ref, isVisible] = useScrollAnimation()

  const images = [
    '/images/contact/images/image2.png',
    '/images/contact/images/image3.png',
    '/images/contact/images/image4.png',
    '/images/contact/images/image5.png',
    '/images/contact/images/image6.png',
    '/images/contact/images/image7.png',
  ]

  return (
    <section ref={ref} className={`relative w-full bg-[#F5F1E6] pb-12 sm:pb-16 md:pb-20 lg:pb-24 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-4 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Image Grid Section */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {images.map((image, index) => (
              <div key={index} className="relative h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="relative space-y-8 sm:space-y-10 md:space-y-12 px-6 sm:px-8 md:px-10 lg:px-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden">
            {/* Background Overlay Image */}
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/contact/images/corner.png')" }}
            />
            
            {/* Content with relative positioning */}
            <div className="relative z-10 space-y-8 sm:space-y-10 md:space-y-12">
              {/* Title and Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
                  Contact Sales
                </h2>
                <p className="text-sm sm:text-base text-[#121212] leading-relaxed font-figtree">
                  Whether you're looking for detailed information, need a comprehensive questions about how we can meet your unique requirements.
                </p>
              </div>

              {/* Our Location */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
                  Our Location
                </h3>
                <p className="text-sm sm:text-base text-[#121212] font-figtree">
                  BuildEstimatePro<br />
                  1234 Madison Avenue, Suite 567<br />
                  New York, NY 10001, USA
                </p>
              </div>

              {/* Message with us */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
                  Message with us
                </h3>
                <p className="text-sm sm:text-base text-[#121212] mb-2 font-figtree">
                  We're usually replying within 24 hours.
                </p>
                <a 
                  href="mailto:contact@buildestimatepro.com" 
                  className="text-sm sm:text-base text-[#121212] hover:text-[#E8481C] transition-colors duration-300 font-figtree underline"
                >
                  contact@buildestimatepro.com
                </a>
              </div>

              {/* Call us now */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#121212] mb-3 sm:mb-4 font-figtree">
                  Call us now
                </h3>
                <a 
                  href="tel:+12125557890" 
                  className="text-sm sm:text-base text-[#121212] hover:text-[#E8481C] transition-colors duration-300 font-figtree"
                >
                  +1 (212) 555-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

