import { NextRequest, NextResponse } from 'next/server'
import { generateToken } from '@/lib/auth'

// Simple authentication (replace with proper database check in production)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // In production, use hashed passwords
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Verify credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const token = generateToken()
      
      return NextResponse.json({
        success: true,
        token,
        user: { username }
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid username or password' },
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



