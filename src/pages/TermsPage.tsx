import { Container, Typography, Box, Divider } from '@mui/material'

export default function TermsPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body2" color="gray" paragraph>
          Last Updated: October 16, 2025
        </Typography>

        <Divider sx={{ bgcolor: '#333', my: 4 }} />

        <Box sx={{ color: 'white', '& p': { mb: 3, lineHeight: 1.8 } }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            By accessing and using Watchly, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. These terms apply to all users, including browsers, registered users, and contributors of content.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            2. Use of Service
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly provides movie recommendation services powered by content-based filtering algorithms and TMDB API integration. You agree to use our service only for lawful purposes and in accordance with these terms. You must not use Watchly in any way that violates applicable laws or regulations.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            3. User Accounts
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            To access certain features of Watchly, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            4. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            All content on Watchly, including text, graphics, logos, images, and software, is the property of Watchly or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. Movie data and images are provided by TMDB and are subject to their respective terms and conditions.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            5. User Conduct
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            You agree not to engage in any of the following prohibited activities: copying, distributing, or disclosing any part of the service in any medium; using automated systems to access the service; attempting to interfere with or disrupt the service; or collecting or harvesting any personally identifiable information from the service.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            6. Disclaimer of Warranties
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free. Movie recommendations are generated algorithmically and may not always match your preferences.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            To the maximum extent permitted by law, Watchly shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount you paid to us in the last twelve months.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterbound>
            8. Termination
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We reserve the right to terminate or suspend your account and access to Watchly at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            9. Changes to Terms
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on this page. Your continued use of Watchly after such modifications constitutes your acceptance of the updated terms.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            10. Contact Information
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            If you have any questions about these Terms of Service, please contact us at:
            <br /><br />
            Email: legal@watchly.com<br />
            Address: Watchly Inc., 123 Movie Lane, Hollywood, CA 90028
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
