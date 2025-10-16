import { useState } from 'react'
import { Dialog, DialogContent, Box, Typography, Button, Chip, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { Movie, CheckCircle } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'
import { genreMap } from '../utils/genreMap'

interface OnboardingModalProps {
  open: boolean
  onClose: () => void
}

const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese', 'Korean', 'Chinese', 'Italian', 'Portuguese']

export default function OnboardingModal({ open, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(1)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [preferredLength, setPreferredLength] = useState<string>('any')
  const { user } = useAuth()

  const genres = Object.values(genreMap)

  const handleGenreToggle = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre))
    } else if (selectedGenres.length < 5) {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  const handleLanguageToggle = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== language))
    } else if (selectedLanguages.length < 3) {
      setSelectedLanguages([...selectedLanguages, language])
    }
  }

  const handleComplete = () => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          favoriteGenres: selectedGenres,
          preferredLanguages: selectedLanguages,
          preferredLength,
          onboardingCompleted: true,
          watchLater: user.preferences?.watchLater || [],
          favorites: user.preferences?.favorites || [],
        }
      }
      localStorage.setItem('watchly_user', JSON.stringify(updatedUser))
    }
    onClose()
  }

  const canProceed = () => {
    if (step === 1) return selectedGenres.length >= 3
    if (step === 2) return selectedLanguages.length >= 1
    if (step === 3) return preferredLength !== ''
    return false
  }

  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#141414',
          color: 'white',
          borderRadius: 3,
          border: '1px solid #333',
        },
      }}
    >
      <DialogContent sx={{ p: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Movie sx={{ fontSize: 70, color: '#e50914', mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" fontFamily="Playfair Display" gutterBottom>
            Welcome to Watchly!
          </Typography>
          <Typography variant="body1" color="gray">
            Let's personalize your movie experience
          </Typography>
        </Box>

        {/* Progress Indicator */}
        <Box sx={{ display: 'flex', gap: 1, mb: 4, justifyContent: 'center' }}>
          {[1, 2, 3].map((s) => (
            <Box
              key={s}
              sx={{
                width: step >= s ? 60 : 30,
                height: 8,
                bgcolor: step >= s ? '#e50914' : '#333',
                borderRadius: 2,
                transition: 'all 0.3s',
              }}
            />
          ))}
        </Box>

        {/* Step 1: Favorite Genres */}
        {step === 1 && (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What genres do you love?
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              Select at least 3 genres (up to 5)
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {genres.map((genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  onClick={() => handleGenreToggle(genre)}
                  icon={selectedGenres.includes(genre) ? <CheckCircle /> : undefined}
                  sx={{
                    bgcolor: selectedGenres.includes(genre) ? '#e50914' : '#2a2a2a',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    py: 2.5,
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: selectedGenres.includes(genre) ? '#b20710' : '#3a3a3a',
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography variant="caption" color="gray" sx={{ mt: 2, display: 'block' }}>
              Selected: {selectedGenres.length} / 5
            </Typography>
          </Box>
        )}

        {/* Step 2: Preferred Languages */}
        {step === 2 && (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Which languages do you prefer?
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              Select at least 1 language (up to 3)
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {languages.map((language) => (
                <Chip
                  key={language}
                  label={language}
                  onClick={() => handleLanguageToggle(language)}
                  icon={selectedLanguages.includes(language) ? <CheckCircle /> : undefined}
                  sx={{
                    bgcolor: selectedLanguages.includes(language) ? '#e50914' : '#2a2a2a',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    py: 2.5,
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: selectedLanguages.includes(language) ? '#b20710' : '#3a3a3a',
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography variant="caption" color="gray" sx={{ mt: 2, display: 'block' }}>
              Selected: {selectedLanguages.length} / 3
            </Typography>
          </Box>
        )}

        {/* Step 3: Movie Length Preference */}
        {step === 3 && (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What's your preferred movie length?
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              Choose your ideal runtime
            </Typography>
            <FormControl fullWidth sx={{ mt: 3 }}>
              <InputLabel sx={{ color: 'gray' }}>Movie Length</InputLabel>
              <Select
                value={preferredLength}
                label="Movie Length"
                onChange={(e: SelectChangeEvent) => setPreferredLength(e.target.value)}
                sx={{
                  bgcolor: '#2a2a2a',
                  color: 'white',
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#e50914' },
                  '&.Mui-focused fieldset': { borderColor: '#e50914' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#2a2a2a',
                      color: 'white',
                      '& .MuiMenuItem-root': {
                        '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.2)' },
                        '&.Mui-selected': { 
                          bgcolor: 'rgba(229, 9, 20, 0.3)',
                          '&:hover': { bgcolor: 'rgba(229, 9, 20, 0.4)' },
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="short">Short (Under 90 minutes)</MenuItem>
                <MenuItem value="medium">Medium (90-120 minutes)</MenuItem>
                <MenuItem value="long">Long (Over 120 minutes)</MenuItem>
                <MenuItem value="any">Any Length</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 5 }}>
          {step > 1 && (
            <Button
              variant="outlined"
              size="large"
              onClick={() => setStep(step - 1)}
              sx={{
                flex: 1,
                borderColor: '#666',
                color: 'white',
                fontWeight: 600,
                '&:hover': { 
                  borderColor: '#e50914', 
                  bgcolor: 'rgba(229, 9, 20, 0.1)' 
                },
              }}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            size="large"
            disabled={!canProceed()}
            onClick={() => {
              if (step === 3) {
                handleComplete()
              } else {
                setStep(step + 1)
              }
            }}
            sx={{
              flex: 1,
              bgcolor: '#e50914',
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': { bgcolor: '#b20710' },
              '&:disabled': { bgcolor: '#444', color: '#888' },
            }}
          >
            {step === 3 ? 'Start Watching' : 'Next'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
