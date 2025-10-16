import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <TextField
      fullWidth
      value={query}
      onChange={handleChange}
      placeholder="Search for movies..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'white' }} />
          </InputAdornment>
        ),
        sx: {
          bgcolor: '#1f1f1f',
          color: 'white',
          '& fieldset': { borderColor: '#333' },
          '&:hover fieldset': { borderColor: '#e50914' },
          '&.Mui-focused fieldset': { borderColor: '#e50914' },
        },
      }}
      sx={{
        '& input': { color: 'white' },
        '& input::placeholder': { color: 'gray' },
      }}
    />
  )
}
