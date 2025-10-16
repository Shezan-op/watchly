import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Box, Typography, Grid, CircularProgress } from '@mui/material'
import useMovies, { MovieCategory } from '../hooks/useMovies'
import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/MovieDetails'
import { Movie } from '../types/movie'

export default function CategoryPage() {
  const { type } = useParams<{ type: string }>()
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const categoryMap: { [key: string]: { title: string; emoji: string; category: MovieCategory } } = {
    trending: { title: 'Trending Movies', emoji: '🔥', category: 'trending' },
    popular: { title: 'Popular Movies', emoji: '⭐', category: 'popular' },
    top_rated: { title: 'Top Rated Movies', emoji: '🏆', category: 'top_rated' },
    now_playing: { title: 'Now Playing', emoji: '🎬', category: 'now_playing' },
  }

  const categoryInfo = categoryMap[type || 'popular']
  const { movies, loading } = useMovies({ category: categoryInfo.category })

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', pt: 3, pb: 8 }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          color="white" 
          fontWeight="bold" 
          fontFamily="Playfair Display" 
          gutterBottom
        >
          {categoryInfo.emoji} {categoryInfo.title}
        </Typography>
        <Typography variant="body1" color="gray" paragraph sx={{ mb: 4 }}>
          Discover the best movies in this category
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress sx={{ color: '#e50914' }} />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} onClick={() => setSelectedMovie(movie)} />
              </Grid>
            ))}
          </Grid>
        )}

        <MovieDetails
          movie={selectedMovie}
          open={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </Container>
    </Box>
  )
}
