import { useState } from 'react'
import { Box } from '@mui/material'
import MovieSection from '../components/MovieSection'
import useMovies from '../hooks/useMovies'
import HeroSection from '../components/HeroSection'
import QuotesSection from '../components/QuotesSection'
import NewsletterSection from '../components/NewsletterSection'
import MovieDetails from '../components/MovieDetails'
import { Movie } from '../types/movie'

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  
  const { movies: trendingMovies, loading: trendingLoading } = useMovies({ category: 'trending' })
  const { movies: popularMovies, loading: popularLoading } = useMovies({ category: 'popular' })
  const { movies: topRatedMovies, loading: topRatedLoading } = useMovies({ category: 'top_rated' })
  const { movies: nowPlayingMovies, loading: nowPlayingLoading } = useMovies({ category: 'now_playing' })

  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section with Auto-Rotation */}
      <HeroSection 
        movies={trendingMovies.slice(0, 10)} 
        loading={trendingLoading}
        onMovieClick={setSelectedMovie}
      />

      {/* Quotes Section */}
      <QuotesSection />

      {/* Movie Sections */}
      <Box sx={{ pb: 5 }}>
        <MovieSection 
          title="🔥 Trending This Week" 
          movies={trendingMovies} 
          loading={trendingLoading}
          onMovieClick={setSelectedMovie}
        />
        
        <MovieSection 
          title="⭐ Top Rated Movies" 
          movies={topRatedMovies} 
          loading={topRatedLoading}
          onMovieClick={setSelectedMovie}
        />
        
        <MovieSection 
          title="🎬 Now Playing in Theaters" 
          movies={nowPlayingMovies} 
          loading={nowPlayingLoading}
          onMovieClick={setSelectedMovie}
        />
        
        <MovieSection 
          title="🍿 Popular on Watchly" 
          movies={popularMovies} 
          loading={popularLoading}
          onMovieClick={setSelectedMovie}
        />
      </Box>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Movie Details Modal */}
      <MovieDetails
        movie={selectedMovie}
        open={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </Box>
  )
}
