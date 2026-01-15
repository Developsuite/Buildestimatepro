'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import BlogPostEditor from '@/components/admin/BlogPostEditor'

export default function NewBlogPostPage() {
  return (
    <AdminLayout>
      <BlogPostEditor />
    </AdminLayout>
  )
}