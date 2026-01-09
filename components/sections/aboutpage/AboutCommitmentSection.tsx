'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const commitments = [
  {
    number: '01',
    title: 'Delivering Accurate Estimates for Competitive Bids',
    description: 'With BuildEstimatePro, you can confidently bid, knowing that your estimates are precise and competitively priced. Our team of experienced estimators combines industry knowledge with the latest tools and estimating software to provide you with accurate cost estimations and material takeoffs. We understand the importance of meeting deadlines without compromising on quality or timelines, and our services empower you to deliver projects that exceed client expectations.'
  },
  {
    number: '02',
    title: 'Tailored Solutions for Diverse Construction Projects',
    description: 'Whether you\'re involved in residential buildings, commercial structures, civil work, or industrial projects, we offer a comprehensive range of services catering to your needs. Our services include construction estimating and material takeoff services, quantity takeoffs, cost estimation, preliminary estimates, estimating consultant, and even colored mark-ups with editable Excel sheets for future planning ease. We leverage cutting-edge tools and software to ensure accuracy and efficiency in every aspect of our work.'
  },
  {
    number: '03',
    title: 'Your Trusted Partner in Construction Estimation',
    description: 'At BuildEstimatePro, we measure our success by the success of our clients. With a growing client base of satisfied customers, we take pride in building long-lasting relationships. We understand the challenges you face as a contractor, and our dedicated team is committed to providing exceptional support throughout your projects. From personalized consultations to ongoing assistance, we go the extra mile to ensure your satisfaction.'
  }
]

export default function AboutCommitmentSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className={`relative w-full py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-[#F5F1E6] overflow-hidden scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0.4) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8481C]/5 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full">
          {/* Section Header */}
          <div className="text-center md:text-left mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#121212] font-figtree mb-2 sm:mb-3">
              Our Commitment to{' '}
              <span className="text-[#E8481C]">Excellence</span>
            </h2>
          </div>

          {/* Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="relative bg-[#121212] p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-full transition-all duration-300 overflow-hidden group"
              >
                {/* Liquid fill hover effect - brand orange fills the card */}
                <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>

                {/* Number Circle */}
                <div className="relative z-10 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#E8481C]/20 group-hover:bg-white/20 flex items-center justify-center border border-[#E8481C]/30 group-hover:border-white/30 transition-colors duration-300">
                    <span className="text-xs sm:text-sm md:text-base font-bold text-[#E8481C] group-hover:text-white font-figtree transition-colors duration-300">
                      {commitment.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-white mb-2 sm:mb-3 font-figtree leading-tight transition-colors duration-300">
                  {commitment.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[10px] sm:text-xs md:text-sm text-white/75 group-hover:text-white/90 leading-relaxed font-figtree flex-grow transition-colors duration-300">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

