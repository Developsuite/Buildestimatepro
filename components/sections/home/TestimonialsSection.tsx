'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Bill A.',
    role: 'Contractor',
    text: 'These guys were very attentive to my specific, custom needs for estimating and delivered an excellent product in very timely fashion. I\'m looking forward to hiring them again in the near future!',
    avatar: '/images/testimonials/avatar1.png'
  },
  {
    id: 2,
    name: 'Alan Stuckey',
    role: 'Contractor',
    text: 'Excellent service all round, fast informative and very professional.',
    avatar: '/images/testimonials/avatar2.png'
  },
  {
    id: 3,
    name: 'Allison Dorwart',
    role: 'Contractor',
    text: 'Buildestimatepro is an exceptional asset to our projects. Despite the rush on some projects, CE demonstrated remarkable dedication, successfully meeting the deadlines without compromising the quality of their output. Based on this positive experience, I have no doubt that I will seek opportunities to collaborate with CE again in the future. Their expertise and reliability make them an invaluable team members for any project.',
    avatar: '/images/testimonials/avatar3.png'
  },
  {
    id: 4,
    name: 'Mark Scheinberg',
    role: 'Contractor',
    text: 'They deliver more than they promise and they have well-trained professional staff.',
    avatar: '/images/testimonials/avatar4.png'
  },
  {
    id: 5,
    name: 'Alex James',
    role: 'Contractor',
    text: 'Buildestimatepro provide accurate measurements with fast project delivery. Highly recommend.',
    avatar: '/images/testimonials/avatar5.png'
  },
  {
    id: 6,
    name: 'Client',
    role: 'Contractor',
    text: 'I would like to tell you how wonderful Scott Adkins and the rest of the team are at Buildestimatepro. They have been doing my estimates for at least 2 years now and I have no complaints. I have on the project board at this moment over 3 million dollars of projects that they have estimated for me.',
    avatar: '/images/testimonials/avatar6.png'
  },
]

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation()

  // Distribute testimonials across 3 columns for desktop
  const column1 = [testimonials[0], testimonials[3], testimonials[1], testimonials[5], testimonials[2]]
  const column2 = [testimonials[1], testimonials[4], testimonials[0], testimonials[3], testimonials[5]]
  const column3 = [testimonials[2], testimonials[5], testimonials[4], testimonials[1], testimonials[0]]

  // Duplicate for seamless scroll
  const duplicateColumn = (col: typeof testimonials) => [...col, ...col, ...col]

  const columns = [
    duplicateColumn(column1),
    duplicateColumn(column2),
    duplicateColumn(column3)
  ]

  // For mobile horizontal scroll - duplicate testimonials
  const mobileTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section ref={ref} className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 bg-[#1A1E23] scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-figtree px-2">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto sm:mx-0 font-figtree leading-relaxed px-2">
            Trusted by contractors and construction professionals worldwide
          </p>
        </div>

        {/* Mobile: Horizontal Scrolling */}
        <div className="block sm:hidden relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1A1E23] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1A1E23] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-horizontal-infinite" style={{ width: 'fit-content' }}>
            {mobileTestimonials.map((testimonial, index) => (
              <div
                key={`mobile-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[85vw] max-w-[320px] mr-4"
                style={{ willChange: 'transform' }}
              >
                <div className="bg-[#1A1E23] border border-white rounded-3xl p-4 shadow-lg h-full">
                  <div className="flex flex-col gap-3">
                    {/* Avatar with Icon Image */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg bg-gradient-to-br from-[#E8481C] via-[#E8481C]/90 to-[#E8481C]/70 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/icons/homepage/slider.png"
                          alt={testimonial.name}
                          fill
                          className="object-contain p-1.5"
                          sizes="48px"
                          priority={index < 3}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5 font-figtree">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-white/70 font-figtree">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    {/* Content */}
                    <p className="text-xs text-white leading-relaxed font-figtree">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Three Column Vertical Scrolling Ticker */}
        <div className="hidden sm:block relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-gradient-to-b from-[#1A1E23] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-gradient-to-t from-[#1A1E23] to-transparent z-10 pointer-events-none"></div>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="relative overflow-hidden"
                style={{ height: '400px' }}
              >
                <div 
                  className="flex flex-col animate-scroll-vertical-infinite"
                  style={{ 
                    animationDelay: `${colIndex * 2}s`,
                    animationDuration: `${25 + colIndex * 5}s`
                  }}
                >
                  {column.map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${colIndex}-${index}`}
                      className="flex-shrink-0 mb-4 md:mb-5"
                    >
                      <div className="bg-[#1A1E23] border border-white rounded-[40px] md:rounded-[54px] p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start gap-3 md:gap-4">
                          {/* Avatar with Icon Image */}
                          <div className="flex-shrink-0">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white/30 shadow-lg bg-gradient-to-br from-[#E8481C] via-[#E8481C]/90 to-[#E8481C]/70 flex items-center justify-center">
                              <Image
                                src="/icons/homepage/slider.png"
                                alt={testimonial.name}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 md:mb-3">
                              <h4 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 font-figtree">
                                {testimonial.name}
                              </h4>
                              <p className="text-xs md:text-sm text-white/70 font-figtree">
                                {testimonial.role}
                              </p>
                            </div>
                            <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed font-figtree">
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
