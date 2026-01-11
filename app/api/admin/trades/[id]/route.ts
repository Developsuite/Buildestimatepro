import { NextRequest, NextResponse } from 'next/server'
import { getTradePageById, updateTradePage, deleteTradePage } from '@/lib/tradeData'

export const runtime = 'edge'

// GET - Get single trade page
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const page = await getTradePageById(params.id)
    
    if (!page) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      page
    })
  } catch (error) {
    console.error('Error fetching trade:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch page' },
      { status: 500 }
    )
  }
}

// PUT - Update trade page
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    const updatedPage = await updateTradePage(params.id, body)
    
    if (!updatedPage) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      page: updatedPage
    })
  } catch (error) {
    console.error('Error updating trade:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update page' },
      { status: 500 }
    )
  }
}

// DELETE - Delete trade page
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteTradePage(params.id)
    
    return NextResponse.json({
      success: true
    })
  } catch (error) {
    console.error('Error deleting trade:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete page' },
      { status: 500 }
    )
  }
}



