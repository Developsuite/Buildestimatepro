import BlogHeroSection from '@/components/sections/blog/BlogHeroSection'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import FooterSection from '@/components/sections/home/FooterSection'

export default function Blog() {
  return (
    <div className="bg-[#F5F1E6]">
      <BlogHeroSection />
      <BlogGrid />
      <FooterSection />
    </div>
  )
}