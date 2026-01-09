'use client'

import { use } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import TradePageEditor from '@/components/admin/TradePageEditor'

export default function EditTradePagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <AdminLayout>
      <TradePageEditor pageId={id} />
    </AdminLayout>
  )
}



