import { useState } from 'react'
import { Box, Container, TextField, Button, Typography, Paper, Alert } from '@mui/material'
import { MovieFilter as MovieIcon } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
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
    if (!success) {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={10} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <MovieIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Shezan's Movie Recommender
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover movies tailored to your taste
            </Typography>
          </Box>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, py: 1.5, background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)' }}
            >
              Login / Register
            </Button>
          </form>

          <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 3 }} color="text.secondary">
            Built with ❤️ by Shezan | Content-Based Filtering
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
