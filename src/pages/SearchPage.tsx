import { useState } from 'react'
import { Container, Box, Typography, Grid, CircularProgress } from '@mui/material'
import SearchBar from '../components/SearchBar'
import GenreFilter from '../components/GenreFilter'
import MoodFilter from '../components/MoodFilter'
import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/MovieDetails'
import useMovies from '../hooks/useMovies'
import { Movie } from '../types/movie'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedMood, setSelectedMood] = useState('all')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const { movies, loading, error } = useMovies({
    searchQuery,
    genre: selectedGenre !== 'all' ? selectedGenre : undefined,
    mood: selectedMood !== 'all' ? selectedMood : undefined,
  })

  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', pt: 3, pb: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" color="white" fontWeight="bold" fontFamily="Playfair Display" gutterBottom>
          Discover Movies
        </Typography>
        <Typography variant="body1" color="gray" paragraph>
          Search by title, filter by genre, or discover based on your mood
        </Typography>

        {/* Search and Filters */}
        <Box sx={{ mb: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 2 }}>
            <SearchBar onSearch={setSearchQuery} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <MoodFilter selectedMood={selectedMood} onMoodChange={setSelectedMood} />
          </Box>
        </Box>

        {/* Results */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" textAlign="center" variant="h6">
            Error loading movies. Please try again later.
          </Typography>
        ) : movies.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="white" gutterBottom>
              No movies found
            </Typography>
            <Typography variant="body1" color="gray">
              Try adjusting your search or filters
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h6" color="white" gutterBottom sx={{ mb: 3 }}>
              Found {movies.length} amazing movies for you
            </Typography>
            <Grid container spacing={3}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                  <MovieCard movie={movie} onClick={() => setSelectedMovie(movie)} />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {/* Movie Details Modal */}
        <MovieDetails
          movie={selectedMovie}
          open={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </Container>
    </Box>
  )
}
