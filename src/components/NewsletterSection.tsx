import { useState } from 'react'
import { Box, Container, Typography, TextField, Button, Alert } from '@mui/material'
import { Email as EmailIcon, Send } from '@mui/icons-material'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subscribers = JSON.parse(localStorage.getItem('watchly_newsletter') || '[]')
    subscribers.push({ email, subscribedAt: new Date().toISOString() })
    localStorage.setItem('watchly_newsletter', JSON.stringify(subscribers))
    
    setSuccess(true)
    setEmail('')
    
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e50914 0%, #b20710 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <EmailIcon sx={{ fontSize: 60, color: 'white', mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" color="white" gutterBottom fontFamily="Playfair Display">
            Get Personalized Recommendations
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.9)" paragraph>
            Subscribe and receive weekly curated movie suggestions!
          </Typography>

          {success && (
            <Alert 
              severity="success" 
              sx={{ 
                mb: 3, 
                maxWidth: 500, 
                mx: 'auto',
                bgcolor: 'rgba(255,255,255,0.95)',
                fontWeight: 600
              }}
            >
              🎉 Successfully subscribed! Check your inbox.
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: 600,
              mx: 'auto',
              mt: 4,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: 'white',
                  borderRadius: 2,
                  '& input': { 
                    py: 2,
                    px: 2,
                    fontSize: '1rem',
                    color: '#000',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{
                bgcolor: '#141414',
                color: 'white',
                px: 4,
                py: 2,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                fontSize: '1rem',
                '&:hover': { bgcolor: '#000' },
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Typography variant="caption" color="rgba(255,255,255,0.8)" sx={{ mt: 2, display: 'block' }}>
            No spam. Unsubscribe anytime. We respect your privacy.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
