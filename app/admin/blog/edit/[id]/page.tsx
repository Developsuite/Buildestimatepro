import AdminLayout from '@/components/admin/AdminLayout'
import BlogPostEditor from '@/components/admin/BlogPostEditor'

// Required for static export - returns empty array since admin pages are dynamic
export function generateStaticParams() {
  return []
}

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  return (
    <AdminLayout>
      <BlogPostEditor postId={params.id} />
    </AdminLayout>
  )
}
