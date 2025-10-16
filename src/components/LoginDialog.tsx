import { useState } from 'react'
import { Dialog, DialogContent, Box, Typography, TextField, Button, IconButton, Alert } from '@mui/material'
import { Close, Movie } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'

interface LoginDialogProps {
  open: boolean
  onClose: () => void
}

export default function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (username.length < 3) {
      setError('Username must be at least 3 characters')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    const success = login(username, email, password)
    if (success) {
      onClose()
    } else {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#141414',
          color: 'white',
          borderRadius: 3,
          p: 2,
          border: '1px solid #333',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
          bgcolor: 'rgba(255,255,255,0.1)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
        }}
      >
        <Close />
      </IconButton>

      <DialogContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Movie sx={{ fontSize: 60, color: '#e50914', mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" fontFamily="Playfair Display" gutterBottom>
            Welcome to Watchly
          </Typography>
          <Typography variant="body1" color="gray">
            Login to unlock personalized recommendations and save your favorites!
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                bgcolor: '#1a1a1a',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#e50914' },
                '&.Mui-focused fieldset': { borderColor: '#e50914' },
              },
              '& label': { color: 'gray' },
              '& label.Mui-focused': { color: '#e50914' },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                bgcolor: '#1a1a1a',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#e50914' },
                '&.Mui-focused fieldset': { borderColor: '#e50914' },
              },
              '& label': { color: 'gray' },
              '& label.Mui-focused': { color: '#e50914' },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                bgcolor: '#1a1a1a',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#e50914' },
                '&.Mui-focused fieldset': { borderColor: '#e50914' },
              },
              '& label': { color: 'gray' },
              '& label.Mui-focused': { color: '#e50914' },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              mt: 3, 
              py: 1.5, 
              bgcolor: '#e50914',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#b20710' },
            }}
          >
            Login / Register
          </Button>
        </Box>

        <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 3 }} color="gray">
          New users will be automatically registered
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
