import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    const isValid = verifyAdmin(username, password)

    if (isValid) {
      const token = generateToken()
      return NextResponse.json({ 
        success: true, 
        token,
        message: 'Login successful' 
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}
