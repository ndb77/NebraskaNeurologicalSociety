// src/pages/Contact.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 10 }}> 
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions, feel free to reach out to us at:
      </Typography>
      <Typography variant="h6" gutterBottom>
Noah Bastola, MS3      </Typography>
      <Typography variant="body1">

        Email: nobastola@unmc.edu
      </Typography>
      <Typography variant="h6" gutterBottom>
Drew Thodeson, MD      </Typography>
      <Typography variant="body1">

        Phone: 402-955-5372 (Children's Nebraska)
      </Typography>
    </Container>
  );
}

export default Contact;
