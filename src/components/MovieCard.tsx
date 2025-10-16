import { Card, CardMedia, CardContent, Typography, Box, Chip, Rating } from '@mui/material'
import { Movie } from '../types/movie'
import { Star } from '@mui/icons-material'

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        bgcolor: '#1f1f1f',
        color: 'white',
        height: '100%',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 24px rgba(229,9,20,0.4)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={movie.posterUrl}
        alt={movie.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3.6em',
          }}
        >
          {movie.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Star sx={{ color: '#ffd700', fontSize: 20 }} />
          <Typography variant="body2" fontWeight="bold">
            {movie.rating.toFixed(1)}
          </Typography>
          <Typography variant="caption" color="gray">
            ({movie.voteCount.toLocaleString()})
          </Typography>
        </Box>

        <Typography variant="body2" color="gray" gutterBottom>
          {movie.year}
        </Typography>

        <Typography
          variant="body2"
          color="lightgray"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2,
          }}
        >
          {movie.overview || 'No description available'}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              size="small"
              sx={{
                bgcolor: '#e50914',
                color: 'white',
                fontSize: '0.7rem',
                height: 24,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
