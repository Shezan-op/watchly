import { Box, Typography, Container, Link, IconButton, Divider } from '@mui/material'
import { GitHub, LinkedIn, Email, Twitter, Instagram, Favorite } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a0a0a',
        color: 'gray',
        pt: 8,
        pb: 3,
        mt: 'auto',
        borderTop: '2px solid #1a1a1a',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4, mb: 5 }}>
          {/* Brand Section */}
          <Box>
            <Typography variant="h5" fontWeight="bold" fontFamily="Playfair Display" sx={{
              color: '#e50914',
              mb: 2,
            }}>
              WATCHLY
            </Typography>
            <Typography variant="body2" color="gray" paragraph sx={{ lineHeight: 1.8 }}>
              Your ultimate destination for personalized movie recommendations powered by AI and content-based filtering.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton 
                size="small" 
                component="a" 
                href="https://www.instagram.com/shortclipz.shezan/" 
                target="_blank"
                sx={{ color: 'gray', '&:hover': { color: '#E1306C' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                size="small" 
                component="a" 
                href="https://x.com/UShezan4" 
                target="_blank"
                sx={{ color: 'gray', '&:hover': { color: '#1DA1F2' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                size="small" 
                component="a" 
                href="https://github.com/Shezan-op" 
                target="_blank"
                sx={{ color: 'gray', '&:hover': { color: 'white' } }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                size="small" 
                component="a" 
                href="https://www.linkedin.com/in/shezanahmed29" 
                target="_blank"
                sx={{ color: 'gray', '&:hover': { color: '#0077B5' } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          {/* Company Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link onClick={() => navigate('/about')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                About Us
              </Link>
              <Link onClick={() => navigate('/contact')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                Contact
              </Link>
              <Link onClick={() => navigate('/faq')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                FAQ
              </Link>
            </Box>
          </Box>

          {/* Legal Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link onClick={() => navigate('/privacy')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                Privacy Policy
              </Link>
              <Link onClick={() => navigate('/terms')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                Terms of Service
              </Link>
              <Link onClick={() => navigate('/cookies')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                Cookie Policy
              </Link>
              <Link onClick={() => navigate('/dmca')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                DMCA
              </Link>
            </Box>
          </Box>

          {/* Support Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link onClick={() => navigate('/help')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                Help Center
              </Link>
              <Link onClick={() => navigate('/api-docs')} underline="hover" color="gray" sx={{ cursor: 'pointer', '&:hover': { color: '#e50914' } }}>
                API Documentation
              </Link>
              <Link href="mailto:yourshezanspot@gmail.com" underline="hover" color="gray" sx={{ '&:hover': { color: '#e50914' } }}>
                Email Support
              </Link>
              <Link href="tel:+919391165560" underline="hover" color="gray" sx={{ '&:hover': { color: '#e50914' } }}>
                Call Support
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: '#1a1a1a', my: 4 }} />

        {/* Bottom Footer */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="gray" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            © {new Date().getFullYear()} Watchly. Made with <Favorite sx={{ fontSize: 14, color: '#e50914' }} /> by Shezan Ahmed
          </Typography>

          <Typography variant="caption" color="gray">
            Powered by TMDB API • Content-Based Filtering
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
