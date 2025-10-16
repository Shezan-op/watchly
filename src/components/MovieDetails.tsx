import { useState, useEffect } from 'react'
import { Dialog, Box, Typography, IconButton, Button, Chip, Divider, LinearProgress, Tabs, Tab } from '@mui/material'
import { Close, PlayArrow, Add, Favorite, FavoriteBorder, Check, Star, ThumbUp, ThumbDown, Share, CalendarToday, Language, AccessTime } from '@mui/icons-material'
import { Movie } from '../types/movie'
import { useAuth } from '../context/AuthContext'

interface MovieDetailsProps {
  movie: Movie | null
  open: boolean
  onClose: () => void
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

export default function MovieDetails({ movie, open, onClose }: MovieDetailsProps) {
  const { user, addToWatchLater, addToFavorites, removeFromWatchLater, removeFromFavorites } = useAuth()
  const [tabValue, setTabValue] = useState(0)
  const [userRating, setUserRating] = useState<number | null>(null)

  useEffect(() => {
    if (movie) {
      const ratings = JSON.parse(localStorage.getItem('watchly_ratings') || '{}')
      setUserRating(ratings[movie.id] || null)
    }
  }, [movie])

  if (!movie) return null

  const isInWatchLater = user?.preferences?.watchLater.includes(movie.id) || false
  const isFavorite = user?.preferences?.favorites.includes(movie.id) || false

  const handleWatchLater = () => {
    if (isInWatchLater) {
      removeFromWatchLater(movie.id)
    } else {
      addToWatchLater(movie.id)
    }
  }

  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id)
    } else {
      addToFavorites(movie.id)
    }
  }

  const handleRating = (rating: number) => {
    const ratings = JSON.parse(localStorage.getItem('watchly_ratings') || '{}')
    ratings[movie.id] = rating
    localStorage.setItem('watchly_ratings', JSON.stringify(ratings))
    setUserRating(rating)
  }

  const ratingPercentage = (movie.rating / 10) * 100

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          bgcolor: '#0a0a0a',
          color: 'white',
          backgroundImage: 'none',
          m: { xs: 1, md: 2 },
          maxHeight: { xs: '98vh', md: '90vh' },
          borderRadius: { xs: 2, md: 3 },
          overflow: 'auto',
        },
      }}
    >
      {/* Scrollable Container */}
      <Box sx={{ 
        maxHeight: { xs: '98vh', md: '90vh' },
        overflowY: 'auto',
        '&::-webkit-scrollbar': { width: '8px' },
        '&::-webkit-scrollbar-track': { bgcolor: '#1a1a1a' },
        '&::-webkit-scrollbar-thumb': { bgcolor: '#e50914', borderRadius: '4px' },
      }}>
        
        <IconButton
          onClick={onClose}
          sx={{
            position: 'sticky',
            top: 8,
            right: 8,
            float: 'right',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 3,
            '&:hover': { bgcolor: '#e50914', transform: 'scale(1.1)' },
            transition: 'all 0.3s',
          }}
        >
          <Close />
        </IconButton>

        {/* Hero Section - Compact */}
        <Box
          sx={{
            height: { xs: 250, sm: 350, md: 400 },
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,1) 100%), url(${movie.backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: { xs: 2, md: 4 },
            position: 'relative',
          }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            fontFamily="Playfair Display" 
            gutterBottom 
            sx={{ 
              textShadow: '3px 3px 12px rgba(0,0,0,0.9)',
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            {movie.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ color: '#ffd700', fontSize: { xs: 20, md: 24 } }} />
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                {movie.rating.toFixed(1)}
              </Typography>
            </Box>
            
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333' }} />
            
            <Typography variant="body2" color="gray" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
              {movie.voteCount.toLocaleString()} votes
            </Typography>
            
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333' }} />
            
            <Typography variant="body2" fontWeight={600} sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
              {movie.year}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, mb: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size={window.innerWidth < 600 ? "small" : "medium"}
              startIcon={<PlayArrow />}
              sx={{
                bgcolor: '#e50914',
                color: 'white',
                fontWeight: 'bold',
                px: { xs: 2, md: 3 },
                py: { xs: 0.75, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#b20710' },
              }}
            >
              Trailer
            </Button>

            {user && (
              <>
                <Button
                  variant="outlined"
                  size={window.innerWidth < 600 ? "small" : "medium"}
                  startIcon={isInWatchLater ? <Check /> : <Add />}
                  onClick={handleWatchLater}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 'bold',
                    px: { xs: 2, md: 3 },
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      borderColor: '#e50914',
                      bgcolor: 'rgba(229, 9, 20, 0.2)',
                    },
                  }}
                >
                  {isInWatchLater ? 'Saved' : 'Save'}
                </Button>

                <IconButton
                  onClick={handleFavorite}
                  size="small"
                  sx={{
                    color: isFavorite ? '#e50914' : 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    border: '2px solid',
                    borderColor: isFavorite ? '#e50914' : 'white',
                    '&:hover': { 
                      bgcolor: 'rgba(229, 9, 20, 0.2)',
                    },
                  }}
                >
                  {isFavorite ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
                </IconButton>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {movie.genres.slice(0, 3).map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                size="small"
                sx={{
                  bgcolor: 'rgba(229, 9, 20, 0.8)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', md: '0.85rem' },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Content Section - Scrollable */}
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          
          {/* Rating Score */}
          <Box sx={{ mb: 3, bgcolor: '#141414', p: { xs: 2, md: 3 }, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Watchly Score
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#e50914" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                {ratingPercentage.toFixed(0)}%
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={ratingPercentage} 
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: '#222',
                '& .MuiLinearProgress-bar': {
                  bgcolor: ratingPercentage >= 70 ? '#46d369' : ratingPercentage >= 50 ? '#ffd700' : '#e50914',
                  borderRadius: 4,
                },
              }}
            />
          </Box>

          {/* User Rating */}
          {user && (
            <Box sx={{ mb: 3, bgcolor: '#141414', p: { xs: 2, md: 3 }, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Rate This Movie
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 2 }}>
                <IconButton
                  onClick={() => handleRating(1)}
                  sx={{ color: userRating === 1 ? '#46d369' : 'gray' }}
                >
                  <ThumbUp />
                </IconButton>
                <IconButton
                  onClick={() => handleRating(-1)}
                  sx={{ color: userRating === -1 ? '#e50914' : 'gray' }}
                >
                  <ThumbDown />
                </IconButton>
                {userRating !== null && (
                  <Typography variant="body2" color="gray">
                    Thanks!
                  </Typography>
                )}
              </Box>
            </Box>
          )}

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: '#222', mb: 2 }}>
            <Tabs 
              value={tabValue} 
              onChange={(e, newValue) => setTabValue(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': { 
                  color: 'gray',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  minWidth: { xs: 'auto', md: 120 },
                },
                '& .Mui-selected': { color: '#e50914' },
                '& .MuiTabs-indicator': { bgcolor: '#e50914', height: 3 },
              }}
            >
              <Tab label="Overview" />
              <Tab label="Details" />
            </Tabs>
          </Box>

          {/* Overview Tab */}
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
              Synopsis
            </Typography>
            <Typography 
              variant="body1" 
              color="lightgray" 
              paragraph 
              sx={{ 
                lineHeight: 1.8, 
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              {movie.overview || 'No description available for this movie.'}
            </Typography>
          </TabPanel>

          {/* Details Tab */}
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <Box sx={{ bgcolor: '#141414', p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CalendarToday sx={{ color: '#e50914', fontSize: { xs: 20, md: 24 } }} />
                  <Box>
                    <Typography variant="caption" color="gray">
                      Release Date
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {new Date(movie.releaseDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ bgcolor: '#141414', p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Star sx={{ color: '#ffd700', fontSize: { xs: 20, md: 24 } }} />
                  <Box>
                    <Typography variant="caption" color="gray">
                      Rating
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {movie.rating.toFixed(1)} / 10
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ bgcolor: '#141414', p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Language sx={{ color: '#4a90e2', fontSize: { xs: 20, md: 24 } }} />
                  <Box>
                    <Typography variant="caption" color="gray">
                      Language
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      English
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ bgcolor: '#141414', p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ThumbUp sx={{ color: '#46d369', fontSize: { xs: 20, md: 24 } }} />
                  <Box>
                    <Typography variant="caption" color="gray">
                      Status
                    </Typography>
                    <Typography variant="body2" fontWeight={600} color="#46d369">
                      Released
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          {!user && (
            <Box
              sx={{
                mt: 3,
                p: { xs: 2, md: 3 },
                background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.1) 0%, rgba(229, 9, 20, 0.05) 100%)',
                border: '2px solid #e50914',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                🎬 Want to Save This?
              </Typography>
              <Typography variant="body2" color="gray" paragraph sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}>
                Sign up to save movies and get personalized recommendations!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#e50914',
                  fontWeight: 'bold',
                  px: 3,
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  '&:hover': { bgcolor: '#b20710' },
                }}
              >
                Sign Up Now
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Dialog>
  )
}
