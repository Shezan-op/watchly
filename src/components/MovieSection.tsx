import { Box, Typography, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Movie } from '../types/movie'
import MovieCard from './MovieCard'
import { useRef, useState } from 'react'

interface MovieSectionProps {
  title: string
  movies: Movie[]
  loading?: boolean
  onMovieClick: (movie: Movie) => void
}

export default function MovieSection({ title, movies, loading, onMovieClick }: MovieSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -900 : 900
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      
      setTimeout(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
          setShowLeftArrow(scrollLeft > 0)
          setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }
      }, 300)
    }
  }

  if (loading) {
    return (
      <Box sx={{ px: 4, mb: 5 }}>
        <Typography variant="h5" color="white" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="gray">Loading amazing movies...</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ px: 4, mb: 6, position: 'relative' }}>
      <Typography 
        variant="h5" 
        color="white" 
        fontWeight="bold" 
        gutterBottom 
        sx={{ mb: 3, fontFamily: 'Poppins' }}
      >
        {title}
      </Typography>

      {showLeftArrow && movies.length > 4 && (
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(0,0,0,0.8)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.95)' },
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>
      )}

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2.5,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          pb: 2,
        }}
      >
        {movies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              minWidth: 280,
              maxWidth: 280,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.08)' },
            }}
          >
            <MovieCard movie={movie} onClick={() => onMovieClick(movie)} />
          </Box>
        ))}
      </Box>

      {showRightArrow && movies.length > 4 && (
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(0,0,0,0.8)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.95)' },
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>
      )}
    </Box>
  )
}
