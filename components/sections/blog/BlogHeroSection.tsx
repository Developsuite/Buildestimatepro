export default function BlogHeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-[50px] bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,72,28,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8481C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0063BF]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="text-[#E8481C] font-figtree font-semibold text-sm tracking-wider uppercase">
            Our Blog
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-figtree leading-tight">
          Construction Industry
          <span className="block text-[#E8481C]">Insights & Tips</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-figtree leading-relaxed">
          Stay updated with the latest trends, tips, and insights from the construction estimation industry. Learn from our experts and grow your business.
        </p>
      </div>
    </section>
  )
}