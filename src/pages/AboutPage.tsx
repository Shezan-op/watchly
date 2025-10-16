import { Container, Typography, Box, Divider, Grid, Card, CardContent } from '@mui/material'
import { EmojiObjects, Speed, Favorite, Security } from '@mui/icons-material'

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom textAlign="center">
          About Watchly
        </Typography>
        <Typography variant="h6" color="gray" paragraph textAlign="center" sx={{ mb: 6 }}>
          Your Intelligent Movie Discovery Platform
        </Typography>

        <Divider sx={{ bgcolor: '#333', my: 4 }} />

        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            At Watchly, we believe that discovering your next favorite movie should be effortless and exciting. Our mission is to revolutionize how people find movies by combining cutting-edge content-based filtering algorithms with an intuitive, Netflix-style user interface. We analyze movie metadata, genres, ratings, and user preferences to deliver personalized recommendations that match your unique taste.
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            Founded in 2025 by Shezan, Watchly was born from a passion for both cinema and technology. We noticed that while there are countless movies available, finding the right one can be overwhelming. That's why we created Watchly – to cut through the noise and help you discover hidden gems and popular favorites tailored specifically to your mood and preferences.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Typography variant="h4" fontWeight="bold" color="white" gutterBottom sx={{ mb: 4 }}>
          Why Choose Watchly?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <EmojiObjects sx={{ fontSize: 50, color: '#667eea', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                  Smart Recommendations
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ lineHeight: 1.8 }}>
                  Our advanced content-based filtering algorithm analyzes movie characteristics including genres, ratings, popularity, and user behavior to suggest films you'll genuinely enjoy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Speed sx={{ fontSize: 50, color: '#764ba2', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                  Lightning Fast
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ lineHeight: 1.8 }}>
                  Browse thousands of movies with instant search results and smooth Netflix-style horizontal scrolling. No lag, no delays – just pure movie discovery.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Favorite sx={{ fontSize: 50, color: '#e50914', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                  Personalized Experience
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ lineHeight: 1.8 }}>
                  Create your watchlist, save favorites, and get mood-based recommendations. Filter by genre, discover trending movies, and never miss a great film again.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Security sx={{ fontSize: 50, color: '#46d369', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                  Privacy Focused
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ lineHeight: 1.8 }}>
                  Your data is stored securely and never shared with third parties. Browse anonymously or create an account – the choice is yours.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Technology Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Technology Behind Watchly
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            Watchly is built using modern web technologies including React, TypeScript, and Material-UI for a responsive and beautiful user interface. Our recommendation engine uses content-based filtering algorithms that analyze movie metadata from the TMDB (The Movie Database) API, which provides comprehensive information on over 500,000 movies and TV shows.
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            Unlike collaborative filtering that requires large amounts of user data, our content-based approach focuses on movie characteristics and your explicit preferences, ensuring accurate recommendations even for new users. The system continuously learns from your interactions to improve suggestion quality over time.
          </Typography>
        </Box>

        {/* Team Section */}
        <Box>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            Watchly is developed and maintained by Shezan, a passionate developer dedicated to creating exceptional user experiences. With a background in machine learning and web development, the team combines technical expertise with a love for cinema to build a platform that movie enthusiasts truly love.
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph sx={{ lineHeight: 1.8 }}>
            We're constantly working on new features and improvements. Have feedback or suggestions? We'd love to hear from you at contact@watchly.com!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
