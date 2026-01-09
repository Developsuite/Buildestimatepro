'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  { title: 'Quality Assistance', desc: 'Our customer support is there to assist you round the clock', num: '01' },
  { title: 'Optimized Solutions', desc: 'We provide the most effective solutions to your requirements', num: '02' },
  { title: 'Accurate Blueprints', desc: 'We cater to advanced and thorough blueprint services', num: '03' },
  { title: 'Advanced Software', desc: 'Updated drawing drafting software delivers quality blueprints', num: '04' },
  { title: 'Affordable Prices', desc: 'We provide low-cost CAD drafting services at hourly rates', num: '05' },
  { title: 'Free Estimations', desc: 'Our authentic drawings entail the most authentic estimations', num: '06' }
]

export default function CADServicesWhyChooseSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-20 sm:py-24 md:py-28 bg-[#E0DCD7] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23121212' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] mx-auto pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 2xl:pl-10 3xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/CAD/cadvertical/1.jpg"
                  alt="Why Choose Us"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E8481C] mb-1">98%</div>
                      <div className="text-xs text-[#121212]/60">Accuracy</div>
                    </div>
                    <div className="border-x border-[#121212]/10">
                      <div className="text-2xl font-bold text-[#E8481C] mb-1">24/7</div>
                      <div className="text-xs text-[#121212]/60">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E8481C] mb-1">Fast</div>
                      <div className="text-xs text-[#121212]/60">Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0063BF] to-[#4a9eff] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border-l-4 border-[#E8481C]">
                  <span className="text-xs font-semibold text-[#121212] uppercase tracking-wider">Our Advantages</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121212] mb-4 font-figtree leading-tight">
                Why Choose Our <span className="text-[#E8481C]">CAD Drafting Services</span>?
              </h2>
            </div>

            {/* Features - Alternating Design */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className={`group relative ${i % 2 === 0 ? 'ml-0' : 'ml-4'}`}>
                  {/* Connecting Line for alternating pattern */}
                  {i > 0 && (
                    <div className={`absolute ${i % 2 === 0 ? '-top-4 left-8' : '-top-4 left-12'} w-0.5 h-4 bg-gradient-to-b from-[#E8481C]/50 to-transparent`}></div>
                  )}
                  
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-[#E8481C] hover:bg-white/80 hover:border-l-[6px] transition-all duration-300 hover:shadow-xl group-hover:translate-x-2">
                    {/* Number Badge */}
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#E8481C] to-[#ff6b47] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{feature.num}</span>
                    </div>
                    
                    <div className="ml-8">
                      <h3 className="text-lg font-bold text-[#121212] mb-2 font-figtree group-hover:text-[#E8481C] transition-colors">{feature.title}</h3>
                      <p className="text-sm text-[#121212]/70 leading-relaxed">{feature.desc}</p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-[#E8481C]/20 rounded-br-2xl group-hover:border-[#E8481C]/40 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

