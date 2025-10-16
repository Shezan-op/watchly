import { useState } from 'react'
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore, HelpOutline } from '@mui/icons-material'

const faqs = [
  {
    question: 'What is Watchly?',
    answer: 'Watchly is an AI-powered movie recommendation platform that uses content-based filtering algorithms to suggest movies based on your preferences, viewing history, and mood. We analyze movie metadata including genres, ratings, popularity, and more to provide personalized recommendations.'
  },
  {
    question: 'Is Watchly free to use?',
    answer: 'Yes! Watchly is completely free. You can browse movies, get recommendations, and use all features without any subscription or payment. We believe everyone should have access to great movie discovery tools.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No, account creation is optional. You can browse and discover movies without signing up. However, creating an account unlocks personalized features like saving movies to your Watch Later list, marking favorites, and getting tailored recommendations based on your preferences.'
  },
  {
    question: 'How does the recommendation system work?',
    answer: 'Watchly uses content-based filtering, which analyzes movie characteristics (genres, ratings, cast, plot keywords, etc.) to find similar movies. Unlike collaborative filtering, our system doesn\'t require large amounts of user data and can provide accurate recommendations immediately based on movie content and your explicit preferences.'
  },
  {
    question: 'Where do you get movie data from?',
    answer: 'We use The Movie Database (TMDB) API, which provides comprehensive information on over 500,000 movies and TV shows. All movie posters, ratings, descriptions, and metadata come from TMDB, ensuring accurate and up-to-date information.'
  },
  {
    question: 'Can I watch movies on Watchly?',
    answer: 'No, Watchly is a movie discovery and recommendation platform, not a streaming service. We help you find movies to watch, and you can use the information to watch them on your preferred streaming platform like Netflix, Amazon Prime, Disney+, etc.'
  },
  {
    question: 'How do mood-based recommendations work?',
    answer: 'Our mood filter maps emotional states to specific movie genres. For example, if you select "Happy," we recommend comedies, family movies, and feel-good films. "Excited" brings action and adventure movies, while "Thoughtful" suggests dramas and documentaries.'
  },
  {
    question: 'How often is movie data updated?',
    answer: 'Movie data is fetched in real-time from TMDB API, so you always get the latest information including new releases, updated ratings, and trending movies. The database is continuously updated by TMDB\'s community of contributors.'
  },
  {
    question: 'Can I delete my account?',
    answer: 'Yes, you have full control over your data. To delete your account, go to your profile settings or contact us at privacy@watchly.com. All your personal data will be permanently removed from our system within 30 days.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. We take privacy seriously. Your data is stored locally in your browser using localStorage, and we never share your information with third parties. We only collect minimal data necessary to provide personalized recommendations. Read our Privacy Policy for complete details.'
  },
  {
    question: 'Why do some movies not have posters or information?',
    answer: 'This happens when movie data is incomplete in the TMDB database. We display placeholder images for missing posters and indicate when information is unavailable. You can help improve the database by contributing to TMDB.org.'
  },
  {
    question: 'Can I suggest features or report bugs?',
    answer: 'Yes! We love user feedback. Contact us at support@watchly.com with your suggestions, bug reports, or feature requests. We actively read all feedback and prioritize improvements based on user needs.'
  },
  {
    question: 'Does Watchly have a mobile app?',
    answer: 'Currently, Watchly is a web application optimized for both desktop and mobile browsers. We\'re considering native mobile apps in the future. You can add Watchly to your phone\'s home screen for a app-like experience.'
  },
  {
    question: 'How can I contact Watchly support?',
    answer: 'You can reach us via email at support@watchly.com, call us at +91 9391165560, or use the contact form on our Contact page. We typically respond within 24 hours during business days.'
  },
  {
    question: 'What browsers are supported?',
    answer: 'Watchly works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, we recommend using the latest version of your browser.'
  }
]

export default function FAQPage() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <HelpOutline sx={{ fontSize: 70, color: '#e50914', mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" color="gray">
            Everything you need to know about Watchly
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                bgcolor: '#1a1a1a',
                color: 'white',
                mb: 2,
                borderRadius: 2,
                '&:before': { display: 'none' },
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#e50914' }} />}
                sx={{
                  '&:hover': { bgcolor: '#222' },
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: '1px solid #2a2a2a', pt: 3 }}>
                <Typography variant="body1" color="lightgray" sx={{ lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ mt: 6, p: 4, bgcolor: '#1a1a1a', borderRadius: 3, textAlign: 'center', border: '1px solid #2a2a2a' }}>
          <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
            Still have questions?
          </Typography>
          <Typography variant="body1" color="gray" paragraph>
            Can't find the answer you're looking for? Contact our support team.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
            <Typography variant="body2" color="white">
              📧 support@watchly.com
            </Typography>
            <Typography variant="body2" color="white">
              📞 +91 9391165560
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
