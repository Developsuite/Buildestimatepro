import Link from 'next/link'

export default function HeroStats() {
  return (
    <div className="hidden lg:flex flex-col gap-6 w-[350px] flex-shrink-0">
      {/* Fact Numbers */}
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="text-white mb-2 font-figtree">
            <span className="text-5xl font-bold leading-none">200</span>
            <span className="text-2xl font-bold leading-none">+</span>
          </div>
          <p className="text-sm text-white leading-[19.6px] font-figtree">Project completed</p>
        </div>
        <div className="flex-1">
          <div className="text-white mb-2 font-figtree">
            <span className="text-5xl font-bold leading-none">15</span>
            <span className="text-2xl font-bold leading-none">+</span>
          </div>
          <p className="text-sm text-white leading-[19.6px] font-figtree">Cities transformed</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-4">
        {/* Testimonial Card */}
        <div className="bg-white/5 backdrop-blur-[8px] rounded-[10px] p-[18px] border border-white/10">
          <p className="text-sm text-white mb-4 leading-relaxed font-figtree">
            "From the initial concept to the final execution, Titen's team demonstrated unmatched creativity, professionalism, and technical expertise, delivering a commercial space that exceeded our highest expectations."
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400 flex-shrink-0"></div>
              <span className="text-sm text-white font-figtree">Lucas G.</span>
            </div>
            <span className="text-sm text-white font-figtree">4.3</span>
          </div>
        </div>

        {/* More Testimonials Link */}
        <Link href="/testimonials" className="text-sm text-white hover:text-[#E8481C] transition-colors flex items-center gap-2 w-fit font-figtree">
          More testimonials
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

