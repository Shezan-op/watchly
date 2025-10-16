import { useState, useEffect } from 'react'
import { Box, Typography, Container } from '@mui/material'
import { FormatQuote } from '@mui/icons-material'

const movieQuotes = [
  { quote: "Here's looking at you, kid.", movie: "Casablanca (1942)" },
  { quote: "May the Force be with you.", movie: "Star Wars (1977)" },
  { quote: "I'll be back.", movie: "The Terminator (1984)" },
  { quote: "You talking to me?", movie: "Taxi Driver (1976)" },
  { quote: "Why so serious?", movie: "The Dark Knight (2008)" },
  { quote: "I see dead people.", movie: "The Sixth Sense (1999)" },
  { quote: "Houston, we have a problem.", movie: "Apollo 13 (1995)" },
  { quote: "Just keep swimming.", movie: "Finding Nemo (2003)" },
  { quote: "To infinity and beyond!", movie: "Toy Story (1995)" },
  { quote: "Life is like a box of chocolates.", movie: "Forrest Gump (1994)" },
  { quote: "I'm going to make him an offer he can't refuse.", movie: "The Godfather (1972)" },
  { quote: "Here's Johnny!", movie: "The Shining (1980)" },
  { quote: "You can't handle the truth!", movie: "A Few Good Men (1992)" },
  { quote: "I'm king of the world!", movie: "Titanic (1997)" },
  { quote: "My precious.", movie: "The Lord of the Rings (2001)" },
]

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % movieQuotes.length)
    }, 6000) // Changes every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        py: 4,
        borderTop: '1px solid #333',
        borderBottom: '1px solid #333',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 120,
            position: 'relative',
          }}
        >
          <FormatQuote sx={{ fontSize: 40, color: '#667eea', mb: 1 }} />
          <Typography
            variant="h5"
            fontFamily="Playfair Display"
            fontStyle="italic"
            textAlign="center"
            color="white"
            sx={{
              mb: 1,
              transition: 'opacity 0.5s',
              animation: 'fadeIn 0.5s',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            "{movieQuotes[currentQuote].quote}"
          </Typography>
          <Typography variant="body2" color="gray" fontWeight={500}>
            — {movieQuotes[currentQuote].movie}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
