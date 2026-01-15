import { notFound } from 'next/navigation'
import FooterSection from '@/components/sections/home/FooterSection'

// Required for static export
export function generateStaticParams() {
  return [
    { slug: 'future-of-construction-estimation' },
    { slug: 'common-estimation-mistakes' },
  ]
}

// Mock blog posts data (in a real app, this would be from a database)
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Construction Estimation',
    slug: 'future-of-construction-estimation',
    excerpt: 'Discover how technology is revolutionizing the way we estimate construction projects and what it means for contractors.',
    content: `The construction industry is undergoing a digital transformation, and estimation is at the forefront of this change. Traditional methods of manual takeoffs and spreadsheet calculations are giving way to sophisticated software solutions that can dramatically improve accuracy and efficiency.

## Key Technological Advances

Modern estimation tools now incorporate:
- 3D modeling and BIM integration
- AI-powered quantity takeoffs
- Real-time material pricing
- Cloud-based collaboration

These advances are not just improving accuracy—they're changing how contractors approach projects from the very beginning.

## The Impact on Contractors

This technological shift is creating new opportunities for contractors who embrace these tools:

### Improved Accuracy
With AI-powered quantity takeoffs, contractors can achieve accuracy rates of 95% or higher, compared to 70-80% with traditional methods.

### Faster Turnaround
What used to take days or weeks can now be completed in hours, allowing contractors to bid on more projects and respond faster to client needs.

### Better Collaboration
Cloud-based platforms enable real-time collaboration between estimators, project managers, and field teams, reducing errors and improving communication.

## Looking Ahead

The future of construction estimation will likely include even more advanced technologies like machine learning algorithms that can predict costs based on historical data, and augmented reality tools that allow estimators to visualize projects in 3D space.

Contractors who invest in these technologies today will be better positioned to compete in tomorrow's market.`,
    featuredImage: '/images/home/image7.jpg',
    author: 'BuildEstimatePro Team',
    publishedAt: '2024-01-15T10:00:00Z',
    category: 'Technology',
    tags: ['Technology', 'Estimation', 'BIM'],
    metaDescription: 'Discover how technology is revolutionizing construction estimation with 3D modeling, AI-powered takeoffs, and cloud collaboration.',
    published: true
  },
  {
    id: '2',
    title: 'Common Estimation Mistakes and How to Avoid Them',
    slug: 'common-estimation-mistakes',
    excerpt: 'Learn about the most frequent errors in construction estimation and proven strategies to prevent them in your projects.',
    content: `Even experienced estimators can fall into common traps that lead to cost overruns and project delays. Understanding these pitfalls is the first step to avoiding them.

## Top 5 Estimation Mistakes

### 1. Incomplete Scope Analysis
Not fully understanding project requirements is one of the most common and costly mistakes. This often happens when:
- Drawings are incomplete or unclear
- Site conditions aren't properly assessed
- Communication with the client is insufficient

**Solution:** Always conduct thorough site visits and ask detailed questions about project requirements.

### 2. Outdated Pricing Data
Using old material and labor costs can lead to significant budget overruns. Construction costs fluctuate frequently due to:
- Market conditions
- Seasonal variations
- Supply chain disruptions

**Solution:** Maintain updated pricing databases and verify costs with suppliers before submitting bids.

### 3. Insufficient Contingency Planning
Not accounting for unexpected issues is a recipe for disaster. Common oversights include:
- Weather delays
- Change orders
- Unforeseen site conditions

**Solution:** Include appropriate contingency percentages based on project complexity and risk factors.

### 4. Poor Communication
Misunderstanding between team members can lead to duplicate work or missed items. This often occurs when:
- Roles and responsibilities aren't clearly defined
- Documentation is inadequate
- Regular check-ins aren't scheduled

**Solution:** Establish clear communication protocols and use collaborative tools.

### 5. Rushing the Process
Not allowing enough time for thorough analysis often leads to errors. Pressure to submit bids quickly can result in:
- Missed items
- Calculation errors
- Inadequate research

**Solution:** Plan estimation timelines carefully and resist the urge to cut corners.

## Best Practices for Accurate Estimation

By implementing systematic checks and using modern estimation tools, these mistakes can be largely eliminated:

- Use standardized checklists
- Implement peer review processes
- Leverage estimation software
- Maintain detailed historical data
- Continuously update processes based on lessons learned

Remember, accurate estimation is not just about winning bids—it's about ensuring project profitability and client satisfaction.`,
    featuredImage: '/images/home/cost.png',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-10T14:30:00Z',
    category: 'Best Practices',
    tags: ['Best Practices', 'Estimation', 'Tips'],
    metaDescription: 'Learn about the most frequent errors in construction estimation and proven strategies to prevent them in your projects.',
    published: true
  }
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Function to convert markdown-like content to HTML
function formatContent(content: string) {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#121212] mb-4 mt-8 font-figtree">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#121212] mb-3 mt-6 font-figtree">$1</h3>')
    .replace(/^\*\*(.+)\*\*$/gm, '<p class="font-bold text-[#121212] mb-2 font-figtree">$1</p>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="mb-1 font-figtree">$1</li>')
    .replace(/(<li[\s\S]*<\/li>)/, '<ul class="list-disc list-inside mb-4 text-[#121212]/80 space-y-1">$1</ul>')
    .replace(/^([^<\n].+)$/gm, '<p class="mb-4 text-[#121212]/80 leading-relaxed font-figtree">$1</p>')
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formattedContent = formatContent(post.content)

  return (
    <div className="bg-[#F5F1E6] min-h-screen">
      {/* Hero Section */}
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

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-[#E8481C] rounded-full font-figtree tracking-wide">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-figtree leading-tight">
            {post.title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl font-figtree leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-figtree">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-figtree">{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-[50px] -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 bg-white rounded-xl overflow-hidden shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-[50px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#121212]/10">
                <h4 className="text-sm font-semibold text-[#121212]/60 mb-4 font-figtree uppercase tracking-wider">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F5F1E6] text-[#121212] rounded-full text-sm font-figtree hover:bg-[#E8481C] hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}