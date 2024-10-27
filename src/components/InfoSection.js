// src/components/InfoSection.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import pdfFile from '../files/NeuroAI curriculum_10_2_24.pdf'; // Adjust the path to your PDF

function InfoSection() {
  return (
    <Box sx={{ py: 4, mt: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Making the case for a Neuro-AI curriculum
        </Typography>
        <Typography variant="body1">
        Medical data grows exponentially each year and neurology trainees have to interpret and apply an ever-growing body of knowledge.  Artificial intelligence (AI) and machine learning (ML) tools can harness this pool of data to streamline medical data summation, improve diagnostics, forecast clinical outcomes, and guide differential diagnosis and patient education plans. These tools are ubiquitous; necessitating the incorporation of AI/ML education in neurology residency programs to equip trainees with the education required to effectively integrate AI/ML in medical practice. 
        </Typography>

        {/* Embed the PDF */}

      </Container>
    </Box>
  );
}

export default InfoSection;
