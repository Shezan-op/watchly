import { useState } from 'react'
import { Container, Typography, Box, TextField, Button, Alert, Grid, Card, CardContent } from '@mui/material'
import { Email, Phone, LocationOn, Send, Instagram, Twitter, GitHub, LinkedIn } from '@mui/icons-material'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const contacts = JSON.parse(localStorage.getItem('watchly_contacts') || '[]')
    contacts.push({ name, email, subject, message, submittedAt: new Date().toISOString() })
    localStorage.setItem('watchly_contacts', JSON.stringify(contacts))
    
    setSuccess(true)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom textAlign="center">
          Get In Touch
        </Typography>
        <Typography variant="h6" color="gray" paragraph textAlign="center" sx={{ mb: 6 }}>
          Have questions? We'd love to hear from you. Send us a message!
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ bgcolor: '#1a1a1a', p: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                  Send Us a Message
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you! We'll get back to you within 24 hours.
                  </Alert>
                )}

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
                        color: 'white',
                        '& fieldset': { borderColor: '#333' },
                        '&:hover fieldset': { borderColor: '#e50914' },
                        '&.Mui-focused fieldset': { borderColor: '#e50914' },
                      },
                      '& label': { color: 'gray' },
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
                        color: 'white',
                        '& fieldset': { borderColor: '#333' },
                        '&:hover fieldset': { borderColor: '#e50914' },
                        '&.Mui-focused fieldset': { borderColor: '#e50914' },
                      },
                      '& label': { color: 'gray' },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: '#333' },
                        '&:hover fieldset': { borderColor: '#e50914' },
                        '&.Mui-focused fieldset': { borderColor: '#e50914' },
                      },
                      '& label': { color: 'gray' },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: '#333' },
                        '&:hover fieldset': { borderColor: '#e50914' },
                        '&.Mui-focused fieldset': { borderColor: '#e50914' },
                      },
                      '& label': { color: 'gray' },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      bgcolor: '#e50914',
                      fontWeight: 'bold',
                      '&:hover': { bgcolor: '#b20710' },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Card sx={{ bgcolor: '#1a1a1a' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ fontSize: 40, color: '#e50914' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="white">
                        Email
                      </Typography>
                      <Typography variant="body2" color="gray">
                        yourshezanspot@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ bgcolor: '#1a1a1a' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ fontSize: 40, color: '#46d369' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="white">
                        Phone
                      </Typography>
                      <Typography variant="body2" color="gray">
                        +91 9391165560
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ bgcolor: '#1a1a1a' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ fontSize: 40, color: '#4a90e2' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="white">
                        Location
                      </Typography>
                      <Typography variant="body2" color="gray">
                        Hyderabad, Telangana<br />
                        India
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ bgcolor: '#1a1a1a' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <a href="https://www.instagram.com/shortclipz.shezan/" target="_blank" rel="noopener noreferrer">
                      <Instagram sx={{ fontSize: 32, color: '#E1306C', '&:hover': { color: '#C13584' } }} />
                    </a>
                    <a href="https://x.com/UShezan4" target="_blank" rel="noopener noreferrer">
                      <Twitter sx={{ fontSize: 32, color: '#1DA1F2', '&:hover': { color: '#0d8bd9' } }} />
                    </a>
                    <a href="https://github.com/Shezan-op" target="_blank" rel="noopener noreferrer">
                      <GitHub sx={{ fontSize: 32, color: 'white', '&:hover': { color: '#e50914' } }} />
                    </a>
                    <a href="https://www.linkedin.com/in/shezanahmed29" target="_blank" rel="noopener noreferrer">
                      <LinkedIn sx={{ fontSize: 32, color: '#0077B5', '&:hover': { color: '#005582' } }} />
                    </a>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ bgcolor: '#1a1a1a' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                    Response Time
                  </Typography>
                  <Typography variant="body2" color="gray">
                    We typically respond within 24 hours during business days (Monday-Friday).
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
