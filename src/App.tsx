import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import CategoryPage from './pages/CategoryPage'
import ProfilePage from './pages/ProfilePage'
import WatchLaterPage from './pages/WatchLaterPage'
import FavoritesPage from './pages/FavoritesPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import HelpCenterPage from './pages/HelpCenterPage'
import APIDocsPage from './pages/APIDocsPage'
import DMCAPage from './pages/DMCAPage'
import EmailPopup from './components/EmailPopup'
import OnboardingModal from './components/OnboardingModal'
import { useAuth } from './context/AuthContext'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('watchly_popup_shown')
      if (!hasSeenPopup) {
        setShowEmailPopup(true)
        sessionStorage.setItem('watchly_popup_shown', 'true')
      }
    }, 20000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (user && !user.preferences?.onboardingCompleted) {
      setShowOnboarding(true)
    }
  }, [user])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#141414' }}>
      <CssBaseline />
      
      <Header onMenuClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/" />} />
          <Route path="/watch-later" element={user ? <WatchLaterPage /> : <Navigate to="/" />} />
          <Route path="/favorites" element={user ? <FavoritesPage /> : <Navigate to="/" />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/api-docs" element={<APIDocsPage />} />
          <Route path="/dmca" element={<DMCAPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
      
      <Footer />
      
      <EmailPopup 
        open={showEmailPopup} 
        onClose={() => setShowEmailPopup(false)} 
      />

      <OnboardingModal
        open={showOnboarding}
        onClose={() => setShowOnboarding(false)}
      />
    </Box>
  )
}
