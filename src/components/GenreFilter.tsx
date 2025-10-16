import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { genreMap } from '../utils/genreMap'

interface GenreFilterProps {
  selectedGenre: string
  onGenreChange: (genre: string) => void
}

export default function GenreFilter({ selectedGenre, onGenreChange }: GenreFilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onGenreChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel sx={{ color: 'gray' }}>Genre</InputLabel>
      <Select
        value={selectedGenre}
        label="Genre"
        onChange={handleChange}
        sx={{
          bgcolor: '#1f1f1f',
          color: 'white',
          '& fieldset': { borderColor: '#333' },
          '&:hover fieldset': { borderColor: '#e50914' },
          '&.Mui-focused fieldset': { borderColor: '#e50914' },
          '& .MuiSvgIcon-root': { color: 'white' },
        }}
      >
        <MenuItem value="all">All Genres</MenuItem>
        {Object.values(genreMap).map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
