// XSS Protection
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Email Validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password Strength Checker
export const checkPasswordStrength = (password: string): { 
  strength: 'weak' | 'medium' | 'strong'
  score: number 
} => {
  let score = 0
  
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++

  if (score <= 2) return { strength: 'weak', score }
  if (score <= 4) return { strength: 'medium', score }
  return { strength: 'strong', score }
}

// Rate Limiting for API calls
export class RateLimiter {
  private requests: number[] = []
  private limit: number
  private window: number

  constructor(limit: number = 40, window: number = 10000) {
    this.limit = limit
    this.window = window
  }

  canMakeRequest(): boolean {
    const now = Date.now()
    this.requests = this.requests.filter(time => now - time < this.window)
    
    if (this.requests.length < this.limit) {
      this.requests.push(now)
      return true
    }
    return false
  }
}
