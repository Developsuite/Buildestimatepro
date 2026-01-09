'use client'

interface SampleDocument {
  id: string
  title: string
  filename: string
  image: string
  category: string
}

const sampleDocuments: SampleDocument[] = [
  {
    id: '1',
    title: 'Commercial',
    filename: 'BIG-COMMERICAL-Sample.pdf',
    image: '/images/home/commercial.png',
    category: 'Commercial'
  },
  {
    id: '2',
    title: 'Concrete',
    filename: 'Concrete-Detailed-Sample.pdf',
    image: '/images/home/material.png',
    category: 'Construction'
  },
  {
    id: '3',
    title: 'Detailed',
    filename: 'DETAILED-Sample-WITH-MAN-HOURS.pdf',
    image: '/images/home/cost.png',
    category: 'Detailed'
  },
  {
    id: '4',
    title: 'Drywall',
    filename: 'DRYWALLS-FRAMING-Sample.pdf',
    image: '/images/home/process1.png',
    category: 'Framing'
  },
  {
    id: '5',
    title: 'Electrical',
    filename: 'ELECTRICAL-Sample.pdf',
    image: '/images/home/industrial.png',
    category: 'Electrical'
  },
  {
    id: '6',
    title: 'Flooring',
    filename: 'FLOORING-Sample.pdf',
    image: '/images/home/residental.png',
    category: 'Flooring'
  },
  {
    id: '7',
    title: 'Finishes',
    filename: 'Fnishes-Sample.pdf',
    image: '/images/home/premilinary.png',
    category: 'Finishes'
  },
  {
    id: '8',
    title: 'Industrial',
    filename: 'Industrial-Electrical-Estimate_watermark.pdf',
    image: '/images/home/image2.png',
    category: 'Industrial'
  },
  {
    id: '9',
    title: 'Mechanical',
    filename: 'Industrial-Mechanical-Equipment-Estimate-Sample.pdf',
    image: '/images/home/image3.png',
    category: 'Mechanical'
  },
  {
    id: '10',
    title: 'Landscaping',
    filename: 'Landscaping-sample-edited.pdf',
    image: '/images/home/image7.jpg',
    category: 'Landscaping'
  },
  {
    id: '11',
    title: 'Lumber',
    filename: 'LUMBER-WPC-Sample.pdf',
    image: '/images/home/info.png',
    category: 'Materials'
  },
  {
    id: '12',
    title: 'Masonry',
    filename: 'Masonry-Sample.pdf',
    image: '/images/home/faq1.png',
    category: 'Masonry'
  },
  {
    id: '13',
    title: 'Mechanical',
    filename: 'Mechanical-sample.pdf',
    image: '/images/home/faq2.png',
    category: 'Mechanical'
  },
  {
    id: '14',
    title: 'Metals',
    filename: 'METALS-ESTIMATE-Sample.pdf',
    image: '/images/home/faqs.png',
    category: 'Metals'
  },
  {
    id: '15',
    title: 'Multi-Family',
    filename: 'MULTI-FAMILY-GC-Sample.pdf',
    image: '/images/home/section 2/1.webp',
    category: 'Residential'
  },
  {
    id: '16',
    title: 'Openings',
    filename: 'Openings-Sample.pdf',
    image: '/images/home/section 2/2.webp',
    category: 'Construction'
  },
  {
    id: '17',
    title: 'PID',
    filename: 'PID-Estimate-Sample.pdf',
    image: '/images/home/section 2/3.webp',
    category: 'Industrial'
  },
  {
    id: '18',
    title: 'Plumbing',
    filename: 'Plumbing-Estimate-Big-Sample.pdf',
    image: '/images/home/section 2/4.webp',
    category: 'Plumbing'
  },
  {
    id: '19',
    title: 'Power',
    filename: 'Power-Distribution-Estimate-Sample_watermark-1.pdf',
    image: '/images/home/section 2/5.webp',
    category: 'Electrical'
  },
  {
    id: '20',
    title: 'Remodel',
    filename: 'REMODEL-Sample.pdf',
    image: '/images/home/section 2/6.webp',
    category: 'Remodeling'
  },
  {
    id: '21',
    title: 'Residential',
    filename: 'RESIDENTIAL-Sample.pdf',
    image: '/images/home/section 2/7.webp',
    category: 'Residential'
  },
  {
    id: '22',
    title: 'Telecom',
    filename: 'TELECOM-ESTIMATE-SAMPLE.pdf',
    image: '/images/home/section 2/8.webp',
    category: 'Telecom'
  },
  {
    id: '23',
    title: 'Mitigation',
    filename: 'Water-and-Fire-Mitigation-Xactimate.pdf',
    image: '/images/home/section 2/9.webp',
    category: 'Restoration'
  }
]

export default function SampleGrid() {
  const handleViewDocument = (filename: string) => {
    const documentUrl = `/SAMPLES/${filename}`
    window.open(documentUrl, '_blank')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-[50px] bg-[#F5F1E6]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#E8481C] font-figtree font-semibold text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] mb-6 font-figtree leading-tight">
            Sample Documents
          </h2>
          <p className="text-base md:text-lg text-[#121212]/70 max-w-3xl font-figtree leading-relaxed">
            Explore our comprehensive collection of professional estimation samples across various construction trades and project types.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {sampleDocuments.map((document) => (
            <div
              key={document.id}
              className="group relative bg-white overflow-hidden border border-[#121212]/5 hover:border-[#E8481C]/20 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F5F1E6] to-[#E8E4D9]">
                <img
                  src={document.image}
                  alt={document.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-[#121212]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 text-xs font-semibold text-white bg-[#E8481C] rounded-full font-figtree tracking-wide shadow-lg">
                    {document.category}
                  </span>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#E8481C]/10 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#121212] mb-4 font-figtree group-hover:text-[#E8481C] transition-colors duration-300 leading-tight">
                  {document.title}
                </h3>

                {/* Divider Line */}
                <div className="w-12 h-0.5 bg-[#E8481C] mb-4 group-hover:w-full transition-all duration-300"></div>

                {/* View Button */}
                <button
                  onClick={() => handleViewDocument(document.filename)}
                  className="group/btn relative w-full py-3.5 px-6 bg-[#121212] text-white font-semibold overflow-hidden font-figtree text-sm tracking-wide transition-all duration-300 hover:bg-[#E8481C] hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Document
                    <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </span>
                  
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </div>

              {/* Card Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8481C] via-[#E8481C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}