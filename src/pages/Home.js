import { Box, Container, Typography } from '@mui/material';
import InfoSection from './InfoSection';

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Welcome to Our Medical Tech Startup
        </Typography>

        {/* Info Section */}
        <Box sx={{ backgroundColor: '#ffffff', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', p: 4 }}>
          <InfoSection />
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
