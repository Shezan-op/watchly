import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Movie } from '../types/movie'
import { genreMap } from '../utils/genreMap'
import { moodToGenres } from '../components/MoodFilter'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const reverseGenreMap: { [key: string]: number } = Object.entries(genreMap).reduce(
  (acc, [id, name]) => ({ ...acc, [name]: parseInt(id) }),
  {}
)

export type MovieCategory = 'popular' | 'top_rated' | 'now_playing' | 'trending'

interface UseMoviesProps {
  searchQuery?: string
  genre?: string
  category?: MovieCategory
  mood?: string
}

export default function useMovies({ searchQuery, genre, category, mood }: UseMoviesProps = {}) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const formatMovie = useCallback((movie: any): Movie => ({
    id: movie.id,
    title: movie.title,
    genres: movie.genre_ids?.map((id: number) => genreMap[id] || 'Unknown') || [],
    rating: movie.vote_average || 0,
    year: movie.release_date?.split('-')[0] || 'N/A',
    overview: movie.overview || '',
    posterUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Poster',
    backdropUrl: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : 'https://via.placeholder.com/1920x1080?text=No+Backdrop',
    releaseDate: movie.release_date || '',
    popularity: movie.popularity || 0,
    voteCount: movie.vote_count || 0,
  }), [])

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      setError(null)

      try {
        let url = ''
        const params: any = {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        }

        // Search query has priority
        if (searchQuery) {
          url = `${BASE_URL}/search/movie`
          params.query = searchQuery
        } else if (category === 'trending') {
          url = `${BASE_URL}/trending/movie/week`
        } else if (category) {
          url = `${BASE_URL}/movie/${category}`
        } else {
          url = `${BASE_URL}/discover/movie`
          params.sort_by = 'popularity.desc'
        }

        // Add genre filter
        if (genre && genre !== 'all') {
          const genreId = reverseGenreMap[genre]
          if (genreId) {
            params.with_genres = genreId
          }
        }

        // Add mood filter (converts mood to genres)
        if (mood && mood !== 'all' && moodToGenres[mood]) {
          const moodGenreIds = moodToGenres[mood]
            .map(g => reverseGenreMap[g])
            .filter(id => id)
            .join(',')
          
          if (moodGenreIds) {
            params.with_genres = moodGenreIds
          }
        }

        const response = await axios.get(url, { params })
        const formattedMovies = response.data.results.map(formatMovie)
        setMovies(formattedMovies)
      } catch (err) {
        setError(err as Error)
        console.error('Error fetching movies:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [searchQuery, genre, category, mood, formatMovie])

  return { movies, loading, error }
}
