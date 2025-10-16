import { Container, Typography, Box, Grid, Card, CardContent, TextField, Button } from '@mui/material'
import { HelpOutline, Search, Email, Phone, QuestionAnswer, Settings, Security, Movie } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function HelpCenterPage() {
  const navigate = useNavigate()

  const helpTopics = [
    { icon: <Movie />, title: 'Getting Started', description: 'Learn the basics of using Watchly', color: '#e50914' },
    { icon: <Search />, title: 'Search & Discovery', description: 'Find movies using filters and search', color: '#4a90e2' },
    { icon: <Settings />, title: 'Account Settings', description: 'Manage your profile and preferences', color: '#46d369' },
    { icon: <Security />, title: 'Privacy & Security', description: 'Understand how we protect your data', color: '#ffd700' },
    { icon: <QuestionAnswer />, title: 'FAQ', description: 'Frequently asked questions', color: '#764ba2' },
    { icon: <Email />, title: 'Contact Support', description: 'Get help from our team', color: '#ff6b6b' },
  ]

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <HelpOutline sx={{ fontSize: 80, color: '#e50914', mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
            Help Center
          </Typography>
          <Typography variant="h6" color="gray" paragraph>
            How can we help you today?
          </Typography>

          <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <TextField
              fullWidth
              placeholder="Search for help..."
              InputProps={{
                startAdornment: <Search sx={{ color: 'gray', mr: 1 }} />,
              }}
              sx={{
                bgcolor: '#1a1a1a',
                borderRadius: 3,
                '& fieldset': { border: 'none' },
                '& input': { color: 'white', py: 2 },
              }}
            />
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {helpTopics.map((topic, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  bgcolor: '#1a1a1a', 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: `0 8px 24px ${topic.color}40`,
                  }
                }}
                onClick={() => {
                  if (topic.title === 'FAQ') navigate('/faq')
                  if (topic.title === 'Contact Support') navigate('/contact')
                  if (topic.title === 'Privacy & Security') navigate('/privacy')
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ fontSize: 60, color: topic.color, mb: 2 }}>
                    {topic.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                    {topic.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {topic.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ bgcolor: '#1a1a1a', p: 5, borderRadius: 3, border: '1px solid #2a2a2a' }}>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom textAlign="center">
            Need Personal Assistance?
          </Typography>
          <Typography variant="body1" color="gray" paragraph textAlign="center">
            Our support team is here to help you 24/7
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, bgcolor: '#222', borderRadius: 2 }}>
                <Email sx={{ fontSize: 50, color: '#e50914', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" color="white">
                  Email Support
                </Typography>
                <Typography variant="body2" color="gray" paragraph>
                  support@watchly.com
                </Typography>
                <Typography variant="caption" color="gray">
                  Response within 24 hours
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3, bgcolor: '#222', borderRadius: 2 }}>
                <Phone sx={{ fontSize: 50, color: '#46d369', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" color="white">
                  Phone Support
                </Typography>
                <Typography variant="body2" color="gray" paragraph>
                  +91 9391165560
                </Typography>
                <Typography variant="caption" color="gray">
                  Mon-Fri, 9 AM - 6 PM IST
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                bgcolor: '#e50914',
                px: 5,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#b20710' },
              }}
            >
              Contact Us Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
