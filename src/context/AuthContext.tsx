import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  username: string
  email: string
  loginTime: string
  preferences?: {
    favoriteGenres: string[]
    watchLater: number[]
    favorites: number[]
  }
}

interface AuthContextType {
  user: User | null
  login: (username: string, email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
  addToWatchLater: (movieId: number) => void
  addToFavorites: (movieId: number) => void
  removeFromWatchLater: (movieId: number) => void
  removeFromFavorites: (movieId: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('watchly_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (username: string, email: string, password: string): boolean => {
    if (!username || !email || !password) {
      return false
    }

    const newUser: User = {
      username,
      email,
      loginTime: new Date().toISOString(),
      preferences: {
        favoriteGenres: [],
        watchLater: [],
        favorites: []
      }
    }

    localStorage.setItem('watchly_user', JSON.stringify(newUser))
    
    const users = JSON.parse(localStorage.getItem('watchly_users') || '[]')
    const userExists = users.find((u: any) => u.email === email)
    
    if (!userExists) {
      users.push({ username, email, password, registeredAt: new Date().toISOString() })
      localStorage.setItem('watchly_users', JSON.stringify(users))
    }

    setUser(newUser)
    return true
  }

  const logout = () => {
    localStorage.removeItem('watchly_user')
    setUser(null)
  }

  const addToWatchLater = (movieId: number) => {
    if (user && user.preferences) {
      const updated = {
        ...user,
        preferences: {
          ...user.preferences,
          watchLater: [...user.preferences.watchLater, movieId]
        }
      }
      setUser(updated)
      localStorage.setItem('watchly_user', JSON.stringify(updated))
    }
  }

  const addToFavorites = (movieId: number) => {
    if (user && user.preferences) {
      const updated = {
        ...user,
        preferences: {
          ...user.preferences,
          favorites: [...user.preferences.favorites, movieId]
        }
      }
      setUser(updated)
      localStorage.setItem('watchly_user', JSON.stringify(updated))
    }
  }

  const removeFromWatchLater = (movieId: number) => {
    if (user && user.preferences) {
      const updated = {
        ...user,
        preferences: {
          ...user.preferences,
          watchLater: user.preferences.watchLater.filter(id => id !== movieId)
        }
      }
      setUser(updated)
      localStorage.setItem('watchly_user', JSON.stringify(updated))
    }
  }

  const removeFromFavorites = (movieId: number) => {
    if (user && user.preferences) {
      const updated = {
        ...user,
        preferences: {
          ...user.preferences,
          favorites: user.preferences.favorites.filter(id => id !== movieId)
        }
      }
      setUser(updated)
      localStorage.setItem('watchly_user', JSON.stringify(updated))
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      addToWatchLater,
      addToFavorites,
      removeFromWatchLater,
      removeFromFavorites
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
