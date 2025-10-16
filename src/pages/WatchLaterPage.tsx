import { useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, Button } from '@mui/material'
import { BookmarkBorder, DeleteOutline } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'
import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/MovieDetails'
import { Movie } from '../types/movie'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default function WatchLaterPage() {
  const { user, removeFromWatchLater } = useAuth()
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      if (!user?.preferences?.watchLater?.length) {
        setLoading(false)
        return
      }

      try {
        const moviePromises = user.preferences.watchLater.map(async (id) => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
          )
          return {
            id: response.data.id,
            title: response.data.title,
            genres: response.data.genres?.map((g: any) => g.name) || [],
            rating: response.data.vote_average || 0,
            year: response.data.release_date?.split('-')[0] || 'N/A',
            overview: response.data.overview || '',
            posterUrl: response.data.poster_path
              ? `https://image.tmdb.org/t/p/w500${response.data.poster_path}`
              : 'https://via.placeholder.com/500x750?text=No+Poster',
            backdropUrl: response.data.backdrop_path
              ? `https://image.tmdb.org/t/p/original${response.data.backdrop_path}`
              : 'https://via.placeholder.com/1920x1080?text=No+Backdrop',
            releaseDate: response.data.release_date || '',
            popularity: response.data.popularity || 0,
            voteCount: response.data.vote_count || 0,
          }
        })

        const fetchedMovies = await Promise.all(moviePromises)
        setMovies(fetchedMovies)
      } catch (error) {
        console.error('Error fetching watch later movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [user])

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all movies from Watch Later?')) {
      user?.preferences?.watchLater?.forEach(id => removeFromWatchLater(id))
      setMovies([])
    }
  }

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <BookmarkBorder sx={{ fontSize: 40, color: '#e50914' }} />
              <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white">
                Watch Later
              </Typography>
            </Box>
            <Typography variant="body1" color="gray">
              {movies.length} movies saved for later viewing
            </Typography>
          </Box>
          
          {movies.length > 0 && (
            <Button
              variant="outlined"
              startIcon={<DeleteOutline />}
              onClick={handleClearAll}
              sx={{
                borderColor: '#e50914',
                color: '#e50914',
                '&:hover': { borderColor: '#b20710', bgcolor: 'rgba(229, 9, 20, 0.1)' },
              }}
            >
              Clear All
            </Button>
          )}
        </Box>

        {loading ? (
          <Typography variant="h6" color="gray" textAlign="center" sx={{ py: 10 }}>
            Loading your saved movies...
          </Typography>
        ) : movies.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <BookmarkBorder sx={{ fontSize: 100, color: '#333', mb: 2 }} />
            <Typography variant="h5" color="white" gutterBottom>
              Your Watch Later list is empty
            </Typography>
            <Typography variant="body1" color="gray">
              Start adding movies you want to watch later!
            </Typography>
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
