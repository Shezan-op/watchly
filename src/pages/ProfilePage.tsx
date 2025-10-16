import { useState } from 'react'
import { Container, Box, Typography, Avatar, Card, CardContent, Grid, Button, TextField, Chip, Divider } from '@mui/material'
import { Edit, Save, BookmarkBorder, FavoriteBorder, Movie, TrendingUp, CalendarToday, Email, Person } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [username, setUsername] = useState(user?.username || '')
  const [email, setEmail] = useState(user?.email || '')

  if (!user) return null

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username,
      email,
    }
    localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    setEditing(false)
    window.location.reload()
  }

  const memberSince = new Date(user.loginTime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Profile Header */}
        <Card sx={{ bgcolor: '#1a1a1a', mb: 4, overflow: 'hidden' }}>
          <Box
            sx={{
              height: 200,
              background: 'linear-gradient(135deg, #e50914 0%, #b20710 100%)',
              position: 'relative',
            }}
          />
          <CardContent sx={{ mt: -8, position: 'relative' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3, flexWrap: 'wrap' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#e50914',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  border: '4px solid #1a1a1a',
                }}
              >
                {user.username[0].toUpperCase()}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                {editing ? (
                  <>
                    <TextField
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          bgcolor: '#0a0a0a',
                          '& fieldset': { borderColor: '#333' },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          bgcolor: '#0a0a0a',
                          '& fieldset': { borderColor: '#333' },
                        },
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
                      {user.username}
                    </Typography>
                    <Typography variant="body1" color="gray">
                      {user.email}
                    </Typography>
                  </>
                )}
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Chip
                    icon={<CalendarToday />}
                    label={`Member since ${memberSince}`}
                    sx={{ bgcolor: '#222', color: 'white' }}
                  />
                  <Chip
                    label="Premium"
                    sx={{ bgcolor: '#e50914', color: 'white', fontWeight: 'bold' }}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {editing ? (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<Save />}
                      onClick={handleSave}
                      sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b20710' } }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setEditing(false)}
                      sx={{ borderColor: 'white', color: 'white' }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={() => setEditing(true)}
                    sx={{ borderColor: 'white', color: 'white' }}
                  >
                    Edit Profile
                  </Button>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                bgcolor: '#1a1a1a',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#222' },
              }}
              onClick={() => navigate('/watch-later')}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <BookmarkBorder sx={{ fontSize: 50, color: '#e50914', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="white">
                  {user.preferences?.watchLater?.length || 0}
                </Typography>
                <Typography variant="body2" color="gray">
                  Watch Later
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                bgcolor: '#1a1a1a',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#222' },
              }}
              onClick={() => navigate('/favorites')}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <FavoriteBorder sx={{ fontSize: 50, color: '#e50914', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="white">
                  {user.preferences?.favorites?.length || 0}
                </Typography>
                <Typography variant="body2" color="gray">
                  Favorites
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#1a1a1a' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Movie sx={{ fontSize: 50, color: '#46d369', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="white">
                  {(user.preferences?.watchLater?.length || 0) + (user.preferences?.favorites?.length || 0)}
                </Typography>
                <Typography variant="body2" color="gray">
                  Total Saved
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: '#1a1a1a' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 50, color: '#ffd700', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="white">
                  {Object.keys(JSON.parse(localStorage.getItem('watchly_ratings') || '{}')).length}
                </Typography>
                <Typography variant="body2" color="gray">
                  Movies Rated
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Preferences */}
        <Card sx={{ bgcolor: '#1a1a1a', mb: 4 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
              My Preferences
            </Typography>
            <Divider sx={{ bgcolor: '#333', my: 2 }} />
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="gray" gutterBottom>
                Favorite Genres
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {user.preferences?.favoriteGenres?.map((genre, index) => (
                  <Chip
                    key={index}
                    label={genre}
                    sx={{ bgcolor: '#e50914', color: 'white' }}
                  />
                )) || <Typography color="gray">No preferences set</Typography>}
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="gray" gutterBottom>
                Preferred Languages
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {user.preferences?.preferredLanguages?.map((lang, index) => (
                  <Chip
                    key={index}
                    label={lang}
                    sx={{ bgcolor: '#222', color: 'white' }}
                  />
                )) || <Typography color="gray">No preferences set</Typography>}
              </Box>
            </Box>

            <Box>
              <Typography variant="body2" color="gray" gutterBottom>
                Preferred Movie Length
              </Typography>
              <Chip
                label={user.preferences?.preferredLength || 'Any'}
                sx={{ bgcolor: '#222', color: 'white', mt: 1 }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card sx={{ bgcolor: '#1a1a1a', border: '1px solid #e50914' }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" color="#e50914" gutterBottom>
              Danger Zone
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              Once you logout, you'll need to sign in again to access your saved content.
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={logout}
              sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b20710' } }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
