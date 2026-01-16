'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const stats = [
  {
    id: 1,
    number: '98%',
    label: 'Bid Success Rate',
    description: 'Win more projects'
  },
  {
    id: 2,
    number: '24-48h',
    label: 'Fast Turnaround',
    description: 'Quick delivery'
  },
  {
    id: 3,
    number: '5000+',
    label: 'Projects Completed',
    description: 'Proven expertise'
  },
  {
    id: 4,
    number: '500+',
    label: 'Happy Clients',
    description: 'Trusted partner'
  }
]

export default function PricingStatsSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full min-h-[400px] lg:min-h-[500px] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/PRICING/PRCING1.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-4 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 font-figtree leading-tight">
                Why Choose BuildEstimatePro
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-figtree">
                  BuildEstimatePro delivers unparalleled accuracy and reliability in construction estimation services. With certified estimators and cutting-edge technology, we transform complex blueprints into clear, actionable cost breakdowns.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-figtree">
                  Join hundreds of satisfied clients who trust us with their critical project estimations and experience the difference professional estimating makes.
                </p>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="group relative backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(232,72,28,0.4)] border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                  }}
                >
                  {/* Liquid Glass Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-[#E8481C]/20 via-transparent to-transparent"
                      style={{
                        animation: 'wave 3s ease-in-out infinite'
                      }}
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-4 sm:p-5 md:p-6">
                    <div className="mb-2 sm:mb-3">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-figtree mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-semibold text-white/90 font-figtree mb-0.5">
                        {stat.label}
                      </div>
                      <div className="text-xs text-white/70 font-figtree">
                        {stat.description}
                      </div>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                      <div className="w-full h-full border-2 border-white rounded-tl-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateX(-100%) translateY(-100%) rotate(0deg);
          }
          50% {
            transform: translateX(100%) translateY(100%) rotate(180deg);
          }
        }
      `}</style>
    </section>
  )
}

