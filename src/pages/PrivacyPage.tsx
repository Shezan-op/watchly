import { Container, Typography, Box, Divider } from '@mui/material'

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" fontFamily="Playfair Display" color="white" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="gray" paragraph>
          Last Updated: October 16, 2025
        </Typography>

        <Divider sx={{ bgcolor: '#333', my: 4 }} />

        <Box sx={{ color: 'white', '& p': { mb: 3, lineHeight: 1.8 } }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            At Watchly, we collect information that you provide directly to us when you create an account, subscribe to our newsletter, or interact with our platform. This includes your name, email address, and viewing preferences. We also automatically collect certain information about your device and how you interact with our services through cookies and similar technologies.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We use the information we collect to provide, maintain, and improve our services, including personalizing your movie recommendations based on your viewing history and preferences. We may also use your information to communicate with you about updates, new features, and promotional content. Your data helps us understand user behavior and enhance the overall Watchly experience.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            3. Data Sharing and Disclosure
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you. We may also disclose your information when required by law or to protect our rights and safety.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            5. Your Rights and Choices
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            You have the right to access, update, or delete your personal information at any time. You can also opt-out of receiving promotional communications from us. To exercise these rights, please contact us at privacy@watchly.com. We will respond to your request within 30 days.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            6. Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We use cookies and similar tracking technologies to enhance your experience on Watchly. These technologies help us remember your preferences, understand how you use our platform, and provide personalized content. You can control cookie settings through your browser preferences.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            7. Children's Privacy
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            Watchly is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            8. Changes to This Policy
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of Watchly after changes are posted constitutes your acceptance of the updated policy.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            9. Contact Us
          </Typography>
          <Typography variant="body1" color="lightgray" paragraph>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br /><br />
            Email: privacy@watchly.com<br />
            Address: Watchly Inc., 123 Movie Lane, Hollywood, CA 90028
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
