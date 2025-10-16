import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface UserPreferences {
  favoriteGenres?: string[]
  preferredLanguages?: string[]
  preferredLength?: string
  watchLater: number[]
  favorites: number[]
  onboardingCompleted?: boolean
}

interface User {
  username: string
  email: string
  loginTime: string
  preferences?: UserPreferences
}

interface AuthContextType {
  user: User | null
  login: (username: string, email: string, password: string) => boolean
  logout: () => void
  addToWatchLater: (movieId: number) => void
  removeFromWatchLater: (movieId: number) => void
  addToFavorites: (movieId: number) => void
  removeFromFavorites: (movieId: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('watchly_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = (username: string, email: string, password: string): boolean => {
    if (!username || !email || !password) return false

    const newUser: User = {
      username,
      email,
      loginTime: new Date().toISOString(),
      preferences: {
        favoriteGenres: [],
        preferredLanguages: [],
        preferredLength: 'any',
        watchLater: [],
        favorites: [],
        onboardingCompleted: false,
      },
    }

    localStorage.setItem('watchly_user', JSON.stringify(newUser))
    setUser(newUser)
    return true
  }

  const logout = () => {
    localStorage.removeItem('watchly_user')
    setUser(null)
  }

  const addToWatchLater = (movieId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        favoriteGenres: user.preferences?.favoriteGenres || [],
        preferredLanguages: user.preferences?.preferredLanguages || [],
        preferredLength: user.preferences?.preferredLength || 'any',
        watchLater: [...(user.preferences?.watchLater || []), movieId],
        favorites: user.preferences?.favorites || [],
        onboardingCompleted: user.preferences?.onboardingCompleted || false,
      },
    }

    localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const removeFromWatchLater = (movieId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        favoriteGenres: user.preferences?.favoriteGenres || [],
        preferredLanguages: user.preferences?.preferredLanguages || [],
        preferredLength: user.preferences?.preferredLength || 'any',
        watchLater: (user.preferences?.watchLater || []).filter((id) => id !== movieId),
        favorites: user.preferences?.favorites || [],
        onboardingCompleted: user.preferences?.onboardingCompleted || false,
      },
    }

    localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const addToFavorites = (movieId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        favoriteGenres: user.preferences?.favoriteGenres || [],
        preferredLanguages: user.preferences?.preferredLanguages || [],
        preferredLength: user.preferences?.preferredLength || 'any',
        watchLater: user.preferences?.watchLater || [],
        favorites: [...(user.preferences?.favorites || []), movieId],
        onboardingCompleted: user.preferences?.onboardingCompleted || false,
      },
    }

    localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const removeFromFavorites = (movieId: number) => {
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        favoriteGenres: user.preferences?.favoriteGenres || [],
        preferredLanguages: user.preferences?.preferredLanguages || [],
        preferredLength: user.preferences?.preferredLength || 'any',
        watchLater: user.preferences?.watchLater || [],
        favorites: (user.preferences?.favorites || []).filter((id) => id !== movieId),
        onboardingCompleted: user.preferences?.onboardingCompleted || false,
      },
    }

    localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        addToWatchLater,
        removeFromWatchLater,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
