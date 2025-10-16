import { Container, Typography, Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function CookiePolicyPage() {
  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
          Cookie Policy
        </Typography>
        <Typography variant="body2" color="gray" paragraph>
          Last Updated: October 16, 2025
        </Typography>

        <Divider sx={{ bgcolor: '#333', my: 4 }} />

        <Box sx={{ color: 'white', '& p': { mb: 3, lineHeight: 1.8 } }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            What Are Cookies?
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Watchly uses cookies to enhance your browsing experience, remember your preferences, and analyze site traffic.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            How We Use Cookies
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly uses cookies for several purposes:
          </Typography>
          <Box component="ul" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as user authentication and security.</li>
            <li><strong>Preference Cookies:</strong> These cookies remember your settings and preferences (like genre preferences, language selection) to personalize your experience.</li>
            <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website, helping us improve functionality and user experience.</li>
            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser, used to maintain your session state.</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Types of Cookies We Use
          </Typography>
          <TableContainer component={Paper} sx={{ my: 3, bgcolor: '#1a1a1a' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#2a2a2a' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Cookie Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Purpose</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: 'lightgray' }}>watchly_user</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Stores user authentication and preferences</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Persistent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: 'lightgray' }}>watchly_popup_shown</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Tracks if email popup has been shown</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Session</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: 'lightgray' }}>watchly_subscribers</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Stores newsletter subscription data</TableCell>
                  <TableCell sx={{ color: 'lightgray' }}>Persistent</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Third-Party Cookies
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly uses TMDB API to fetch movie data. TMDB may set their own cookies when loading movie images and data. We do not control these third-party cookies. Please refer to TMDB's privacy policy for information about their cookie practices.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Managing Cookies
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            You can control and manage cookies in several ways:
          </Typography>
          <Box component="ul" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings. However, blocking essential cookies may affect website functionality.</li>
            <li><strong>Clear Cookies:</strong> You can delete cookies stored on your device at any time through your browser settings.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of analytics cookies while still using essential cookies for core functionality.</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Browser-Specific Instructions
          </Typography>
          <Box component="ul" sx={{ color: 'lightgray', pl: 4, mb: 3 }}>
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Updates to This Policy
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of significant changes by posting the updated policy on this page with a new "Last Updated" date.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            If you have questions about our use of cookies, please contact us:
            <br /><br />
            Email: privacy@watchly.com<br />
            Phone: +91 9391165560
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
