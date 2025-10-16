import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, Avatar, Badge } from '@mui/material'
import { Home, Search, TrendingUp, Star, PlayArrow, BookmarkBorder, FavoriteBorder, LocalFireDepartment, Person } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleNavigation = (path: string) => {
    navigate(path)
    onClose()
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          bgcolor: '#181818',
          color: 'white',
          borderRight: '1px solid #2a2a2a',
        },
      }}
    >
      <Box sx={{ 
        p: 3, 
        bgcolor: '#e50914',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <Typography variant="h5" fontWeight="bold" fontFamily="Playfair Display">
          WATCHLY
        </Typography>
        <Typography variant="caption">
          Discover. Watch. Enjoy.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: '#2a2a2a' }} />

      <List sx={{ px: 2, py: 2 }}>
        <ListItem 
          button 
          onClick={() => handleNavigation('/')} 
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem 
          button 
          onClick={() => handleNavigation('/search')} 
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}><Search /></ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>

        {user && (
          <ListItem 
            button 
            onClick={() => handleNavigation('/profile')} 
            sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}><Person /></ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
        )}

        <Divider sx={{ bgcolor: '#2a2a2a', my: 2 }} />

        <Typography variant="caption" color="gray" sx={{ px: 2, mb: 1, fontWeight: 600 }}>
          CATEGORIES
        </Typography>

        <ListItem 
          button 
          onClick={() => handleNavigation('/category/trending')}
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: '#e50914', minWidth: 40 }}><LocalFireDepartment /></ListItemIcon>
          <ListItemText 
            primary="Trending" 
            secondary="Hot right now" 
            secondaryTypographyProps={{ sx: { color: '#666' } }} 
          />
        </ListItem>

        <ListItem 
          button 
          onClick={() => handleNavigation('/category/popular')}
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: '#ffd700', minWidth: 40 }}><Star /></ListItemIcon>
          <ListItemText 
            primary="Popular" 
            secondary="Fan favorites" 
            secondaryTypographyProps={{ sx: { color: '#666' } }} 
          />
        </ListItem>

        <ListItem 
          button 
          onClick={() => handleNavigation('/category/top_rated')}
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: '#46d369', minWidth: 40 }}><TrendingUp /></ListItemIcon>
          <ListItemText 
            primary="Top Rated" 
            secondary="Highest scores" 
            secondaryTypographyProps={{ sx: { color: '#666' } }} 
          />
        </ListItem>

        <ListItem 
          button 
          onClick={() => handleNavigation('/category/now_playing')}
          sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: '#4a90e2', minWidth: 40 }}><PlayArrow /></ListItemIcon>
          <ListItemText 
            primary="Now Playing" 
            secondary="In theaters now" 
            secondaryTypographyProps={{ sx: { color: '#666' } }} 
          />
        </ListItem>

        {user && (
          <>
            <Divider sx={{ bgcolor: '#2a2a2a', my: 2 }} />

            <Typography variant="caption" color="gray" sx={{ px: 2, mb: 1, fontWeight: 600 }}>
              MY COLLECTION
            </Typography>

            <ListItem 
              button 
              onClick={() => handleNavigation('/watch-later')}
              sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                <Badge badgeContent={user.preferences?.watchLater?.length || 0} color="error">
                  <BookmarkBorder />
                </Badge>
              </ListItemIcon>
              <ListItemText 
                primary="Watch Later" 
                secondary={`${user.preferences?.watchLater?.length || 0} movies`}
                secondaryTypographyProps={{ sx: { color: '#666' } }}
              />
            </ListItem>

            <ListItem 
              button 
              onClick={() => handleNavigation('/favorites')}
              sx={{ borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.1)' } }}
            >
              <ListItemIcon sx={{ color: '#e50914', minWidth: 40 }}>
                <Badge badgeContent={user.preferences?.favorites?.length || 0} color="error">
                  <FavoriteBorder />
                </Badge>
              </ListItemIcon>
              <ListItemText 
                primary="My Favorites" 
                secondary={`${user.preferences?.favorites?.length || 0} movies`}
                secondaryTypographyProps={{ sx: { color: '#666' } }}
              />
            </ListItem>
          </>
        )}

        <Divider sx={{ bgcolor: '#2a2a2a', my: 2 }} />

        {user && (
          <ListItem 
            button
            onClick={() => handleNavigation('/profile')}
            sx={{ borderRadius: 2, bgcolor: '#222', p: 2, '&:hover': { bgcolor: '#2a2a2a' } }}
          >
            <Avatar sx={{ bgcolor: '#e50914', mr: 2, fontWeight: 'bold' }}>
              {user.username[0].toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold">{user.username}</Typography>
              <Typography variant="caption" color="gray">{user.email}</Typography>
            </Box>
          </ListItem>
        )}
      </List>
    </Drawer>
  )
}
