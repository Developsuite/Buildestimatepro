import AdminLayout from '@/components/admin/AdminLayout'
import TradePageEditor from '@/components/admin/TradePageEditor'

// Required for static export - returns empty array since admin pages are dynamic
export async function generateStaticParams() {
  return []
}

interface EditTradePagePageProps {
  params: {
    id: string
  }
}

export default function EditTradePagePage({ params }: EditTradePagePageProps) {
  return (
    <AdminLayout>
      <TradePageEditor pageId={params.id} />
    </AdminLayout>
  )
}
