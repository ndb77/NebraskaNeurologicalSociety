// src/components/HeroSection.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../files/space-7273891_1280.jpg'; // Adjusted path to go up one directory

function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#1976d2', // Fallback color
        color: 'white',
        py: 0,
        px: { xs: 2, sm: 4 }, // Responsive horizontal padding
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        height: { xs: 'calc(300px + 64px)', sm: 'calc(400px + 64px)' }, // Responsive height + navbar height
        display: 'flex', // Use flexbox for centering content
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack items vertically
        textAlign: 'center', // Center text for smaller screens
        paddingTop: '64px', // Add padding to account for the navbar
      }}
    >
      <Container sx={{ mt: { xs: 4, sm: 8 } }}> {/* Add margin top for better spacing */}
        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
          It's Time to Level Up Medical Training.
        </Typography>
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          The world is changing and so should medical training. The physicians of <span style={{ fontStyle: 'italic' }}>tomorrow</span> need competence with AI tools, <strong>today</strong>.
        </Typography>
        
        {/* Button */}
        <Button
          component={Link}
          to="/about"
          variant="contained"
          sx={{
            mt: 2, // Margin top for spacing
            bgcolor: 'rgba(25, 118, 210, 0.8)', // Match the theme color
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(25, 118, 210, 1)', // Darker on hover
            },
          }}
        >
          <Box component="span" sx={{ display: 'inline-block' }}>
            Click Here to learn
            <br />
            about the neuro curriculum
          </Box>
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
