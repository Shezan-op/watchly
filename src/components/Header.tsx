import { AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem, Avatar, Divider } from '@mui/material'
import { Menu as MenuIcon, Search as SearchIcon, Movie as MovieIcon, Login, ExpandMore, Home, Info, ContactMail, Help, Person, BookmarkBorder, FavoriteBorder, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import LoginDialog from './LoginDialog'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [loginOpen, setLoginOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget)
  }

  const handleProfileClose = () => {
    setProfileAnchor(null)
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    handleMenuClose()
    handleProfileClose()
  }

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'rgba(20,20,20,0.98)', 
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
          borderBottom: '1px solid rgba(229, 9, 20, 0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onMenuClick}
            sx={{ mr: 2, color: '#e50914' }}
          >
            <MenuIcon />
          </IconButton>

          <MovieIcon sx={{ mr: 1.5, color: '#e50914', fontSize: 36 }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 0,
              mr: 4,
              fontWeight: 'bold', 
              cursor: 'pointer',
              fontFamily: 'Playfair Display',
              color: '#e50914',
              letterSpacing: 1,
            }}
            onClick={() => navigate('/')}
          >
            WATCHLY
          </Typography>

          {/* Navigation Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button
              color="inherit"
              startIcon={<Home />}
              onClick={() => navigate('/')}
              sx={{ fontWeight: 600, '&:hover': { color: '#e50914' } }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              startIcon={<SearchIcon />}
              onClick={() => navigate('/search')}
              sx={{ fontWeight: 600, '&:hover': { color: '#e50914' } }}
            >
              Discover
            </Button>

            <Button
              color="inherit"
              endIcon={<ExpandMore />}
              onClick={handleMenuOpen}
              sx={{ fontWeight: 600, '&:hover': { color: '#e50914' } }}
            >
              More
            </Button>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  bgcolor: '#1a1a1a',
                  color: 'white',
                  mt: 1,
                },
              }}
            >
              <MenuItem onClick={() => handleNavigation('/about')}>
                <Info sx={{ mr: 1, fontSize: 20 }} /> About Us
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/contact')}>
                <ContactMail sx={{ mr: 1, fontSize: 20 }} /> Contact
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/faq')}>
                <Help sx={{ mr: 1, fontSize: 20 }} /> FAQ
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/help')}>
                <Help sx={{ mr: 1, fontSize: 20 }} /> Help Center
              </MenuItem>
            </Menu>
          </Box>

          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                onClick={handleProfileOpen}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#e50914',
                    width: 36,
                    height: 36,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  {user.username[0].toUpperCase()}
                </Avatar>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}>
                  <Typography variant="body2" fontWeight={600}>
                    {user.username}
                  </Typography>
                </Box>
                <ExpandMore />
              </Button>

              <Menu
                anchorEl={profileAnchor}
                open={Boolean(profileAnchor)}
                onClose={handleProfileClose}
                PaperProps={{
                  sx: {
                    bgcolor: '#1a1a1a',
                    color: 'white',
                    mt: 1,
                    minWidth: 200,
                  },
                }}
              >
                <MenuItem onClick={() => handleNavigation('/profile')}>
                  <Person sx={{ mr: 1, fontSize: 20, color: '#e50914' }} /> My Profile
                </MenuItem>
                <MenuItem onClick={() => handleNavigation('/watch-later')}>
                  <BookmarkBorder sx={{ mr: 1, fontSize: 20, color: '#46d369' }} /> Watch Later
                </MenuItem>
                <MenuItem onClick={() => handleNavigation('/favorites')}>
                  <FavoriteBorder sx={{ mr: 1, fontSize: 20, color: '#e50914' }} /> Favorites
                </MenuItem>
                <Divider sx={{ bgcolor: '#333', my: 1 }} />
                <MenuItem 
                  onClick={() => {
                    logout()
                    handleProfileClose()
                  }}
                  sx={{ color: '#e50914' }}
                >
                  <Logout sx={{ mr: 1, fontSize: 20 }} /> Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              variant="contained"
              startIcon={<Login />}
              onClick={() => setLoginOpen(true)}
              sx={{
                bgcolor: '#e50914',
                fontWeight: 'bold',
                px: 3,
                '&:hover': { bgcolor: '#b20710' },
              }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
