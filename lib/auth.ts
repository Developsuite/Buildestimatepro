// Simple in-memory storage (replace with database in production)
const ADMIN_USER = {
  username: 'admin',
  password: 'admin123'
}

export function verifyAdmin(username: string, password: string) {
  return username === ADMIN_USER.username && password === ADMIN_USER.password
}

// Generate a simple session token
export function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Verify session (simple check - use proper JWT in production)
export function verifySession(token: string | null) {
  if (!token) return false
  // In production, verify JWT token
  return token.length > 20
}

