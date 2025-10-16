import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

interface MoodFilterProps {
  selectedMood: string
  onMoodChange: (mood: string) => void
}

const moodToGenres: { [key: string]: string[] } = {
  happy: ['Comedy', 'Family', 'Animation', 'Music'],
  sad: ['Drama', 'Romance'],
  excited: ['Action', 'Adventure', 'Science Fiction'],
  scared: ['Horror', 'Thriller', 'Mystery'],
  relaxed: ['Documentary', 'Romance', 'Music'],
  adventurous: ['Adventure', 'Fantasy', 'Action'],
  thoughtful: ['Drama', 'Documentary', 'Mystery'],
}

export default function MoodFilter({ selectedMood, onMoodChange }: MoodFilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onMoodChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel sx={{ color: 'gray' }}>Mood</InputLabel>
      <Select
        value={selectedMood}
        label="Mood"
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
        <MenuItem value="all">All Moods</MenuItem>
        <MenuItem value="happy">😊 Happy</MenuItem>
        <MenuItem value="sad">😢 Sad</MenuItem>
        <MenuItem value="excited">🤩 Excited</MenuItem>
        <MenuItem value="scared">😱 Scared</MenuItem>
        <MenuItem value="relaxed">😌 Relaxed</MenuItem>
        <MenuItem value="adventurous">🧗 Adventurous</MenuItem>
        <MenuItem value="thoughtful">🤔 Thoughtful</MenuItem>
      </Select>
    </FormControl>
  )
}

export { moodToGenres }
