'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import BlogPostEditor from '@/components/admin/BlogPostEditor'

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