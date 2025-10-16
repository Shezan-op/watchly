import { Container, Typography, Box, Divider } from '@mui/material'
import { Gavel } from '@mui/icons-material'

export default function DMCAPage() {
  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Gavel sx={{ fontSize: 80, color: '#e50914', mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
            DMCA Policy
          </Typography>
          <Typography variant="h6" color="gray">
            Digital Millennium Copyright Act Compliance
          </Typography>
        </Box>

        <Typography variant="body2" color="gray" paragraph>
          Last Updated: October 16, 2025
        </Typography>

        <Divider sx={{ bgcolor: '#333', my: 4 }} />

        <Box sx={{ color: 'white', '& p': { mb: 3, lineHeight: 1.8 } }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Copyright Infringement Notification
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly respects the intellectual property rights of others and expects its users to do the same. We respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA) and other applicable intellectual property laws.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Content Policy
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly is a movie discovery and recommendation platform. We do not host, store, or stream any copyrighted content. All movie information, images, and metadata are sourced from The Movie Database (TMDB) API, which is licensed and authorized for use.
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We display:
          </Typography>
          <Box component="ul" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li>Movie titles, descriptions, and ratings (factual information)</li>
            <li>Official movie posters and promotional images from TMDB</li>
            <li>Links to legitimate streaming platforms where content can be legally viewed</li>
          </Box>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly does not provide or facilitate illegal downloads or streaming of copyrighted content.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            DMCA Takedown Procedure
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            If you believe that content available on Watchly infringes your copyright, please provide our designated Copyright Agent with the following information in writing:
          </Typography>
          <Box component="ol" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li>A physical or electronic signature of the copyright owner or authorized representative</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing, with sufficient detail for us to locate it</li>
            <li>Your contact information (address, telephone number, and email address)</li>
            <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner</li>
            <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Designated Copyright Agent
          </Typography>
          <Box sx={{ bgcolor: '#1a1a1a', p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="body1" color="lightgray">
              <strong>DMCA Agent: Shezan Ahmed</strong><br />
              Email: dmca@watchly.com<br />
              Phone: +91 9391165560<br />
              Address: Watchly Inc., 123 Movie Lane, Hollywood, CA 90028, United States
            </Typography>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Counter-Notification
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            If you believe that content you posted was removed or disabled by mistake or misidentification, you may file a counter-notification with our Copyright Agent. The counter-notification must include:
          </Typography>
          <Box component="ol" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li>Your physical or electronic signature</li>
            <li>Identification of the material that was removed and its location before removal</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
            <li>Your name, address, and telephone number, and consent to jurisdiction of the federal court</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterbound>
            Response Timeline
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Upon receiving a valid DMCA notice, we will:
          </Typography>
          <Box component="ul" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li>Acknowledge receipt within 24 hours</li>
            <li>Investigate the claim within 48 hours</li>
            <li>Remove or disable access to allegedly infringing material if claim is valid</li>
            <li>Notify the user who posted the content</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Repeat Infringer Policy
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly maintains a policy of terminating, in appropriate circumstances, users who are repeat infringers of intellectual property rights.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Fair Use Consideration
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Before submitting a DMCA notice, please consider whether the use of copyrighted material falls under fair use. Watchly displays factual information and promotional materials for the purpose of film criticism, commentary, and discovery, which may be protected under fair use doctrine.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            False Claims
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing may be subject to liability for damages, including costs and attorneys' fees.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            For all DMCA-related inquiries and notices:
            <br /><br />
            Email: dmca@watchly.com<br />
            Phone: +91 9391165560<br />
            Address: Watchly Inc., 123 Movie Lane, Hollywood, CA 90028
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
