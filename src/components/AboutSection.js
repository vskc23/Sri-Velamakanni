import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Fade,
} from '@mui/material';
import { sections } from '../constants/sectionData';

const AboutSection = () => {
  
  const aboutData = sections.find(section => section.id === 'about');
  
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Redux', 'TypeScript', 'Material-UI', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Spring Boot', 'Node.js', 'REST APIs', 'Microservices'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Hazelcast'] },
    { category: 'Cloud & DevOps', items: ['AWS S3', 'Jenkins', 'Docker', 'Git'] },
    { category: 'Languages', items: ['Java', 'JavaScript', 'Python', 'Scheme'] },
    { category: 'AI/ML', items: ['Machine Learning', 'NLP', 'TensorFlow', 'Data Analysis'] },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 70% 30%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontFamily: '"JetBrains Mono", monospace',
                mb: 2,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              01. About Me
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                mb: 4,
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(45deg, #ffffff 30%, #64ffda 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get to know me
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1200}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 4,
                  }}
                >
                  {aboutData?.content}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    What I'm passionate about:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      'Building scalable full-stack applications',
                      'Exploring Natural Language Processing and AI',
                      'Contributing to impactful open-source projects',
                      'Mentoring and teaching programming concepts',
                    ].map((passion, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            backgroundColor: 'primary.main',
                            borderRadius: '50%',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '1rem',
                          }}
                        >
                          {passion}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1400}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: 4,
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                  }}
                >
                  Technical Skills
                </Typography>
                <Grid container spacing={3}>
                  {skills.map((skillGroup, index) => (
                    <Grid item xs={12} sm={6} key={skillGroup.category}>
                      <Card
                        sx={{
                          height: '100%',
                          background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                          border: '1px solid rgba(100, 255, 218, 0.1)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                            boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 600,
                              mb: 2,
                              fontSize: '1.1rem',
                            }}
                          >
                            {skillGroup.category}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {skillGroup.items.map((skill, skillIndex) => (
                              <Chip
                                key={skillIndex}
                                label={skill}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                  color: 'text.primary',
                                  border: '1px solid rgba(100, 255, 218, 0.2)',
                                  fontSize: '0.8rem',
                                  '&:hover': {
                                    backgroundColor: 'rgba(100, 255, 218, 0.2)',
                                    transform: 'scale(1.05)',
                                  },
                                  transition: 'all 0.2s ease',
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        <Fade in={true} timeout={1600}>
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
              border: '1px solid rgba(100, 255, 218, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Currently Available
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontSize: '1.1rem',
              }}
            >
              I'm actively seeking full-time Software Engineering opportunities starting December 2024.
              Let's build something amazing together!
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                borderRadius: 2,
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#4ade80',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                }}
              >
                Available for hire
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
