import { useState } from 'react'
import { Dialog, DialogContent, Box, Typography, TextField, Button, IconButton, Alert } from '@mui/material'
import { Close, Email as EmailIcon } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'

interface EmailPopupProps {
  open: boolean
  onClose: () => void
}

export default function EmailPopup({ open, onClose }: EmailPopupProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subscribers = JSON.parse(localStorage.getItem('watchly_subscribers') || '[]')
    subscribers.push({ email, name, subscribedAt: new Date().toISOString() })
    localStorage.setItem('watchly_subscribers', JSON.stringify(subscribers))
    
    login(name, email, 'watchly123')
    
    setSuccess(true)
    setTimeout(() => {
      onClose()
    }, 2000)
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
          background: 'linear-gradient(135deg, #e50914 0%, #b20710 100%)',
          color: 'white',
          borderRadius: 3,
          p: 2,
          border: '2px solid rgba(229, 9, 20, 0.3)',
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
          bgcolor: 'rgba(0,0,0,0.3)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <Close />
      </IconButton>

      <DialogContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <EmailIcon sx={{ fontSize: 70, mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" fontFamily="Playfair Display" gutterBottom>
            🎬 Join Watchly Today!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            Get personalized movie recommendations, exclusive content, and trending updates!
          </Typography>
        </Box>

        {success ? (
          <Alert 
            severity="success" 
            sx={{ 
              mb: 2,
              bgcolor: 'rgba(255,255,255,0.95)',
              '& .MuiAlert-icon': { color: '#46d369' }
            }}
          >
            🎉 Welcome to Watchly! You're all set!
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255,255,255,0.95)',
                  '& fieldset': { border: 'none' },
                },
                '& label': { color: 'rgba(0,0,0,0.7)', fontWeight: 600 },
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255,255,255,0.95)',
                  '& fieldset': { border: 'none' },
                },
                '& label': { color: 'rgba(0,0,0,0.7)', fontWeight: 600 },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                py: 1.8,
                bgcolor: '#141414',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                '&:hover': { bgcolor: '#000' },
              }}
            >
              Get Started Now
            </Button>
          </form>
        )}

        <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 2, opacity: 0.9 }}>
          🔒 We respect your privacy. Unsubscribe anytime.
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
