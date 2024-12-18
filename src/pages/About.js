import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider, Button } from '@mui/material';

function About() {
  // Function to handle scrolling to a specific grid item
  const scrollToGridItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About Our Curriculum
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Aiming to revolutionize medical training with cutting-edge AI technology
        </Typography>

        {/* Curriculum Guide Section */}
        <Box sx={{ mt: 6, p: 4, backgroundColor: '#ffffff', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          
          <Divider sx={{ mb: 4, backgroundColor: '#ecf0f1' }} />

          <Typography variant="h6" paragraph sx={{ color: '#3498db' }}>
            Week 1: Neurosurgery and AI in MRI Analysis
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
            <ul>
              <li><strong>Morning (Clinics):</strong> Neurosurgery clinic exposure as planned.</li>
              <li><strong>Afternoon (Case Identification and AI Integration):</strong>
                <ul>
                  <li><strong>AI Tool Integration:</strong> Introduce residents to <strong onClick={() => scrollToGridItem('aidoc')} style={{ cursor: 'pointer', color: 'blue' }}>AiDoc</strong> and <strong onClick={() => scrollToGridItem('zebra-medical-vision')} style={{ cursor: 'pointer', color: 'blue' }}>Zebra Medical Vision</strong> for MRI analysis. After selecting a case in the clinic that involves MRI imaging (e.g., a patient with a brain tumor or hydrocephalus), residents will use the AI tools to analyze the MRI and compare the results with manual interpretations. They will be encouraged to explore how AI models help identify brain anomalies and expedite urgent case reviews.</li>
                  <li><strong>Hands-on Training:</strong> Residents will perform MRI reviews using <strong onClick={() => scrollToGridItem('aidoc')} style={{ cursor: 'pointer', color: 'blue' }}>Aidoc</strong> and <strong onClick={() => scrollToGridItem('zebra-medical-vision')} style={{ cursor: 'pointer', color: 'blue' }}>Zebra Medical Vision</strong> and <strong onClick={() => scrollToGridItem('qure-ai')} style={{ cursor: 'pointer', color: 'blue' }}>Qure.ai</strong> to detect abnormalities such as brain tumors, mass effects, or structural issues. They will document how AI flagged key findings compared to manual analysis.</li>
                  <li><strong>Objective:</strong> Understand the role of AI in improving speed and accuracy in MRI interpretation, reducing human error, and prioritizing critical cases.</li>
                </ul>
              </li>
            </ul>
          </Typography>

          <Divider sx={{ mb: 4, backgroundColor: '#ecf0f1' }} />

          <Typography variant="h6" paragraph sx={{ color: '#3498db' }}>
            Week 2: Genetics and AI in Genomic Evaluation
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
            <ul>
              <li><strong>Morning (Clinics):</strong> Genetics clinics as planned.</li>
              <li><strong>Afternoon (Case Identification and AI Integration):</strong>
                <ul>
                  <li><strong>AI Tool Integration:</strong> Residents will be introduced to AI tools like <strong onClick={() => scrollToGridItem('deepvariant')} style={{ cursor: 'pointer', color: 'blue' }}>DeepVariant</strong>, <strong onClick={() => scrollToGridItem('fabric-genomics')} style={{ cursor: 'pointer', color: 'blue' }}>Fabric Genomics</strong>, and <strong onClick={() => scrollToGridItem('illumina-draggen-bio-it-platform')} style={{ cursor: 'pointer', color: 'blue' }}>Illumina DRAGEN Bio-IT Platform</strong>. They will use these tools to assist in analyzing genomic data for patients with rare diseases or genetic syndromes seen in the clinic. AI tools can automate variant calling and classification, aiding in diagnosis.</li>
                  <li><strong>Hands-on Training:</strong> Residents will be given patient genetic data (from clinic cases) to run through platforms like <strong onClick={() => scrollToGridItem('deepvariant')} style={{ cursor: 'pointer', color: 'blue' }}>DeepVariant</strong> and <strong onClick={() => scrollToGridItem('fabric-genomics')} style={{ cursor: 'pointer', color: 'blue' }}>Fabric Genomics</strong>. They will identify potential variants and understand how these tools support diagnosing rare conditions.</li>
                  <li><strong>Objective:</strong> Learn how AI streamlines genomic evaluation, accelerates variant interpretation, and improves the accuracy of diagnosing genetic disorders. Residents will compare traditional manual sequencing interpretations with AI-augmented approaches.</li>
                </ul>
              </li>
            </ul>
          </Typography>

          <Divider sx={{ mb: 4, backgroundColor: '#ecf0f1' }} />

          <Typography variant="h6" paragraph sx={{ color: '#3498db' }}>
            Week 3: Neurology and Neuroradiology – AI in EEG and MRI
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
            <ul>
              <li><strong>Morning (Clinics):</strong> Neurology and neuroradiology clinics as planned.</li>
              <li><strong>Afternoon (Case Identification and AI Integration):</strong>
                <ul>
                  <li><strong>EEG AI Tools:</strong> Introduce residents to <strong onClick={() => scrollToGridItem('persyst-eeg-analysis-software')} style={{ cursor: 'pointer', color: 'blue' }}>Persyst EEG Analysis Software</strong> and <strong onClick={() => scrollToGridItem('epilog')} style={{ cursor: 'pointer', color: 'blue' }}>Epilog</strong> to help analyze EEG data. When seeing a neurology case (e.g., epilepsy or abnormal brain activity), residents will upload EEG recordings into the AI tool, which can detect seizures, spikes, and abnormal activity more efficiently.</li>
                  <li><strong>Hands-on Training:</strong> Residents will run EEG recordings through <strong onClick={() => scrollToGridItem('persyst')} style={{ cursor: 'pointer', color: 'blue' }}>Persyst</strong>, then evaluate how AI-automated results compare to their manual interpretations.</li>
                  <li><strong>Objective:</strong> Understand the potential of AI in real-time EEG interpretation and how it enhances seizure detection and spike analysis, especially in long-term monitoring or during video EEG evaluations.</li>
                  <li><strong>MRI AI Tools:</strong> Continue using AI tools from Week 1 (<strong onClick={() => scrollToGridItem('aidoc')} style={{ cursor: 'pointer', color: 'blue' }}>Aidoc</strong> and <strong onClick={() => scrollToGridItem('qure-ai')} style={{ cursor: 'pointer', color: 'blue' }}>Qure.ai</strong>) for neuroradiology cases to identify neurological abnormalities on MRI scans (e.g., stroke, multiple sclerosis lesions, or structural brain abnormalities).</li>
                  <li><strong>Hands-on Training:</strong> Focus on applying <strong onClick={() => scrollToGridItem('qure-ai')} style={{ cursor: 'pointer', color: 'blue' }}>Qure.ai</strong> in neuroradiology, comparing AI-driven interpretations of MRIs with resident’s own evaluations.</li>
                </ul>
              </li>
            </ul>
          </Typography>

          <Divider sx={{ mb: 4, backgroundColor: '#ecf0f1' }} />

          <Typography variant="h6" paragraph sx={{ color: '#e74c3c' }}>
            Week 4: Case Synthesis and Presentation
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
            <ul>
              <li><strong>Morning (Clinics):</strong> Continuation of clinic participation with the specialties as in previous weeks, finalizing case selection.</li>
              <li><strong>Afternoon (Case Review and Presentation Preparation):</strong>
                <ul>
                  <li><strong>Case Pooling:</strong> Residents will choose 4 representative cases that demonstrate the integration of AI tools across EEG, MRI, and genomic evaluation. They will explain the differences between AI-augmented and traditional clinical practice, showcasing the specific tools they used.</li>
                  <li><strong>Pediatric Grand Rounds Presentation:</strong> The presentation will highlight:
                    <ol>
                      <li>EEG Case: How <strong onClick={() => scrollToGridItem('persyst')} style={{ cursor: 'pointer', color: 'blue' }}>Persyst</strong> or <strong onClick={() => scrollToGridItem('epilog')} style={{ cursor: 'pointer', color: 'blue' }}>Epilog</strong> assisted in identifying seizure activity, improving diagnosis and management in epilepsy.</li>
                      <li>MRI Case in Neurosurgery and Neuroradiology: How <strong onClick={() => scrollToGridItem('aidoc')} style={{ cursor: 'pointer', color: 'blue' }}>Aidoc</strong> flagged an urgent brain lesion, leading to quicker surgical intervention.</li>
                      <li>Genomic Case: How <strong onClick={() => scrollToGridItem('deepvariant')} style={{ cursor: 'pointer', color: 'blue' }}>DeepVariant</strong> or <strong onClick={() => scrollToGridItem('fabric-genomics')} style={{ cursor: 'pointer', color: 'blue' }}>Fabric Genomics</strong> accelerated the diagnosis of a genetic disorder in a pediatric patient, improving the treatment plan.</li>
                      <li>Neurology Case: How AI-enhanced MRI readings with <strong onClick={() => scrollToGridItem('qure-ai')} style={{ cursor: 'pointer', color: 'blue' }}>Qure.ai</strong> helped identify subtle signs of early multiple sclerosis or stroke.</li>
                    </ol>
                  </li>
                  <li><strong>Objective:</strong> By presenting these cases, residents will demonstrate their ability to integrate AI tools into clinical workflows, highlight improved diagnostic accuracy, and reflect on the limitations and ethical considerations of AI in patient care.</li>
                </ul>
              </li>
            </ul>
          </Typography>

          <Divider sx={{ mb: 4, backgroundColor: '#ecf0f1' }} />

          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
            Additional Resources for Self-Learning:
            <ul>
              <li><strong>Online Modules:</strong> Residents will be provided with access to online learning modules and tutorials from these AI platforms for further exploration.</li>
              <li><strong>Mentor-Led Workshops:</strong> Weekly seminars with specialists in neurosurgery, neurology, and genetics to discuss AI’s role in their fields.</li>
            </ul>
          </Typography>
        </Box>

        {/* Grid Section */}
        <Typography id="bottom-section" variant="h4" align="center" color="text.primary" sx={{ mt: 6, mb: 4 }}>
          Learn About the Technologies We Like
        </Typography>
        <Grid container spacing={4}>
          {gridItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} id={item.title.toLowerCase().replace(/\s+/g, '-')}>
              <Paper sx={{
                padding: 2,
                textAlign: 'center',
                color: 'text.secondary',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography paragraph>
                  {item.description}
                </Typography>
                {item.link && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2 }}
                  >
                    Visit Website
                  </Button>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const gridItems = [
  {
    title: "AiDoc",
    description: "An operating system and platform for an AI system that taps into patient health data and imaging to assist with medical insights, patient management, discharge planning, and more.",
    link: "https://www.aidoc.com/solutions/neuro/"
  },
  {
    title: "Zebra Medical Vision(Now part of Nano-X Imaging) ",
    description: "Provides an AI suite of algorithms that augments CT readings to provide early detection and treatment. ",
    link: "https://www.nanox.vision/#nanox-ecosystem"
  },
  {
    title: "Qure.ai",
    description: "An software platform that uses AI to provide medical decision support, care coordination, and efficent workflows.",
    link: "https://www.qure.ai/product/qer"
  },
  {
    title: "DeepVariant",
    description: "Takes aligned reads (in BAM or CRAM format) and helps to determine variants in the DNA sequence by treating pileups as an image classification probelm. This approach improves precision of variant detection, which is essential for applications in genomics like disease research, personalized medicine, and evolutionary studies",
    link: "https://github.com/google/deepvariant"
  },
  {
    title: "Fabric Genomics",
    description: "A gene sequencing company that uses AI to enhance the reliability and speed of the rare diseases panels they offer, among many other gene sequencing services.",
    link: "https://fabricgenomics.com/products/applications/"
  },
  {
    title: "Illumina DRAGEN Bio-IT Platform",
    description: "A manufacturer of gene sequencing and array-based molecular diagnostic instruments. Offers a high speed bioinformatics platform for genetic sequencing, transcriptomics, and digital PCR.",
    link: "https://www.illumina.com/systems/sequencing-platforms.html"
  },
  {
    title: "Persyst EEG Analysis Software",
    description: "A software for EEG analysis that uses AI to help with the detection of seizures and other neurological disorders.",
    link: "https://www.persyst.com/products/eeg-analysis-software/"
  },
  {
    title: "Epilog",
    description: "A software for EEG analysis that uses AI to help with the detection of seizures and other neurological disorders.",
    link: "https://www.epilog.care/"
  },
];

export default About;
