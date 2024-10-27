import React from 'react';
import { Grid, Box, Typography, Link, Paper } from '@mui/material';

const GridExample = () => {
  const gridItems = [
    { title: 'AiDoc', description: 'An operating system and platform for an AI system that taps into patient health data and imaging to assist with medical insights, patient management, discharge planning, and more.', link: 'https://example.com/aidoc' },
    { title: 'Personalized Curriculum', description: 'Adaptive learning paths tailored to individual student needs and progress.', link: 'https://example.com/personalized-curriculum' },
    { title: 'Real-world Simulations', description: 'Immersive, AI-driven scenarios that mimic real clinical situations.', link: 'https://example.com/real-world-simulations' },
    { title: 'Advanced Diagnostics', description: 'Utilize AI algorithms to assist in complex neurological diagnoses and treatment planning.', link: 'https://example.com/advanced-diagnostics' },
    { title: 'Continuous Learning', description: 'Stay updated with the latest advancements in neurology through our AI-driven content delivery system.', link: 'https://example.com/continuous-learning' },
    { title: 'Collaborative Platform', description: 'Connect with peers and experts worldwide to share knowledge and experiences in neurological care.', link: 'https://example.com/collaborative-platform' },
    { title: 'Why NeuroAI?', description: 'NeuroAI combines the latest advancements in artificial intelligence with expert knowledge in neurology.', link: 'https://example.com/why-neuroai' },
    { title: 'Template Title 1', description: 'This is a placeholder description for the template tile. Customize it as needed.', link: 'https://example.com/template1' },
    { title: 'Template Title 2', description: 'This is another placeholder description for the template tile. Customize it as needed.', link: 'https://example.com/template2' },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {gridItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>
              <Link href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: '#3498db' }}>
                Visit Website
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridExample;
