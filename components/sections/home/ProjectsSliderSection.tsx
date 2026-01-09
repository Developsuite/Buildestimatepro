'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const sliderImages = [
  '/images/home/slider/1.webp',
  '/images/home/slider/2.webp',
  '/images/home/slider/3.webp',
  '/images/home/slider/4.webp',
  '/images/home/slider/5.webp',
]

const projectDetails = [
  {
    title: 'Commercial Building',
    type: 'MEP Estimating',
    cost: '$2.5M',
    duration: '48 Hours',
    accuracy: '99.8%'
  },
  {
    title: 'Residential Complex',
    type: 'Concrete & Masonry',
    cost: '$1.8M',
    duration: '36 Hours',
    accuracy: '99.5%'
  },
  {
    title: 'Industrial Facility',
    type: 'Metal & Structural',
    cost: '$4.2M',
    duration: '72 Hours',
    accuracy: '99.9%'
  },
  {
    title: 'Mixed-Use Development',
    type: 'Full Takeoff',
    cost: '$6.5M',
    duration: '96 Hours',
    accuracy: '99.7%'
  },
  {
    title: 'Healthcare Facility',
    type: 'MEP & Finishes',
    cost: '$3.8M',
    duration: '60 Hours',
    accuracy: '99.6%'
  },
]

export default function ProjectsSliderSection() {
  const [ref, isVisible] = useScrollAnimation()

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...sliderImages, ...sliderImages, ...sliderImages]

  return (
    <section ref={ref} className={`w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-[#F5F1E6] border-t border-gray-300/30 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#121212] mb-4 sm:mb-5 md:mb-6 font-figtree">
            Construction Estimating Projects Completed for Our Clients
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#121212]/80 leading-relaxed font-figtree max-w-4xl mx-auto sm:mx-0">
            Our goal is to provide accurate and dependable cost evaluations that help clients make confident decisions, manage their budgets efficiently, and move their projects forward without delays.
          </p>
        </div>

        {/* Continuous Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 bg-gradient-to-r from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 bg-gradient-to-l from-[#F5F1E6] to-transparent z-10 pointer-events-none"></div>

          {/* Slider Container */}
          <div className="flex animate-scroll-infinite">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-8"
                style={{ 
                  width: 'clamp(200px, 20vw, 320px)',
                  minWidth: '200px',
                  maxWidth: '320px'
                }}
              >
                <div className="relative w-full h-36 sm:h-44 md:h-52 lg:h-60 xl:h-72 2xl:h-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <Image
                    src={image}
                    alt={`Project ${(index % sliderImages.length) + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, (max-width: 1280px) 280px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glassmorphism Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
                    <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-lg shadow-2xl p-3 sm:p-4 md:p-5 backdrop-saturate-150">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none"></div>
                      <div className="relative z-10">
                        <h4 className="text-xs sm:text-sm md:text-base font-bold text-white mb-2 sm:mb-3 font-figtree drop-shadow-lg">
                          {projectDetails[index % projectDetails.length].title}
                        </h4>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] sm:text-xs text-white/70 font-figtree">Type:</span>
                            <span className="text-[10px] sm:text-xs font-semibold text-white font-figtree drop-shadow">
                              {projectDetails[index % projectDetails.length].type}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] sm:text-xs text-white/70 font-figtree">Est. Cost:</span>
                            <span className="text-[10px] sm:text-xs font-semibold text-white font-figtree drop-shadow">
                              {projectDetails[index % projectDetails.length].cost}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] sm:text-xs text-white/70 font-figtree">Turnaround:</span>
                            <span className="text-[10px] sm:text-xs font-semibold text-white font-figtree drop-shadow">
                              {projectDetails[index % projectDetails.length].duration}
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/20">
                            <span className="text-[10px] sm:text-xs text-white/70 font-figtree">Accuracy:</span>
                            <span className="text-[10px] sm:text-xs font-bold text-[#E8481C] font-figtree drop-shadow">
                              {projectDetails[index % projectDetails.length].accuracy}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

