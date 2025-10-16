import { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, IconButton } from '@mui/material'
import { PlayArrow, InfoOutlined, ChevronLeft, ChevronRight, Add, Check } from '@mui/icons-material'
import { Movie } from '../types/movie'
import { useAuth } from '../context/AuthContext'

interface HeroSectionProps {
  movies: Movie[]
  loading: boolean
  onMovieClick: (movie: Movie) => void
}

export default function HeroSection({ movies, loading, onMovieClick }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { user, addToWatchLater, removeFromWatchLater } = useAuth()
  const currentMovie = movies[currentIndex]

  // Auto-rotate every 7 seconds
  useEffect(() => {
    if (movies && movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length)
      }, 7000)

      return () => clearInterval(interval)
    }
  }, [movies])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length)
  }

  const isInWatchLater = user?.preferences?.watchLater.includes(currentMovie?.id) || false

  const handleWatchLater = () => {
    if (currentMovie) {
      if (isInWatchLater) {
        removeFromWatchLater(currentMovie.id)
      } else {
        addToWatchLater(currentMovie.id)
      }
    }
  }

  if (loading || !currentMovie) {
    return (
      <Box
        sx={{
          height: '85vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), #0a0a0a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" color="white">Loading amazing movies...</Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        height: '85vh',
        backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.3)), url(${currentMovie.backdropUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        mb: 3,
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 650 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Playfair Display"
            color="white"
            gutterBottom
            sx={{ 
              textShadow: '3px 3px 12px rgba(0,0,0,0.9)',
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            {currentMovie.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, mb: 2, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h5" color="#ffd700" fontWeight="bold">
                ⭐ {currentMovie.rating.toFixed(1)}
              </Typography>
            </Box>
            <Typography variant="h6" color="white" fontWeight={500}>
              {currentMovie.year}
            </Typography>
            <Typography variant="h6" color="#46d369" fontWeight={500}>
              {currentMovie.voteCount.toLocaleString()} votes
            </Typography>
          </Box>

          <Typography
            variant="h6"
            color="white"
            sx={{ 
              mb: 3,
              textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.6,
            }}
          >
            {currentMovie.overview}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            {currentMovie.genres.slice(0, 4).map((genre, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: 'rgba(102, 126, 234, 0.8)',
                  backdropFilter: 'blur(10px)',
                  px: 2.5,
                  py: 0.8,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <Typography variant="body1" color="white" fontWeight={600}>
                  {genre}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                bgcolor: 'white',
                color: 'black',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.85)', transform: 'scale(1.05)' },
                transition: 'all 0.3s',
              }}
            >
              Watch Trailer
            </Button>
            
            <Button
              variant="contained"
              size="large"
              startIcon={<InfoOutlined />}
              onClick={() => onMovieClick(currentMovie)}
              sx={{
                bgcolor: 'rgba(109,109,110,0.7)',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backdropFilter: 'blur(10px)',
                '&:hover': { bgcolor: 'rgba(109,109,110,0.9)', transform: 'scale(1.05)' },
                transition: 'all 0.3s',
              }}
            >
              More Info
            </Button>

            {user && (
              <Button
                variant="outlined"
                size="large"
                startIcon={isInWatchLater ? <Check /> : <Add />}
                onClick={handleWatchLater}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 'bold',
                  px: 3,
                  py: 1.5,
                  backdropFilter: 'blur(10px)',
                  '&:hover': { 
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.3s',
                }}
              >
                {isInWatchLater ? 'In Watch Later' : 'Watch Later'}
              </Button>
            )}
          </Box>
        </Box>
      </Container>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.6)',
          color: 'white',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.6)',
          color: 'white',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {movies.slice(0, 5).map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: index === currentIndex ? 30 : 10,
              height: 10,
              bgcolor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              borderRadius: 5,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
