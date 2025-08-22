import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Fade,
} from '@mui/material';
import { School as SchoolIcon, Grade as GradeIcon } from '@mui/icons-material';
import { sections } from '../constants/sectionData';
import InstitutionIcon from './InstitutionIcon';

const AcademicsSection = () => {
  
  const academicsData = sections.find(section => section.id === 'academics');

  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <Box
      id="academics"
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
            radial-gradient(circle at 60% 40%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
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
              04. Education
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
              Academic Journey
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {academicsData?.content.map((education, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Fade in={true} timeout={1200 + index * 300}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                    border: '2px solid rgba(100, 255, 218, 0.1)',
                    borderRadius: 4,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.03) 0%, rgba(255, 107, 107, 0.03) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      border: '2px solid rgba(100, 255, 218, 0.3)',
                      boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .institution-logo': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 5, position: 'relative', zIndex: 1 }}>
                    {/* Header with Institution Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                      <InstitutionIcon
                        imageUrl={education.imageUrl}
                        websiteUrl={education.websiteUrl}
                        title={education.title}
                        size={80}
                        borderColor="rgba(100, 255, 218, 0.3)"
                        className="institution-logo"
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1.4rem', md: '1.6rem' },
                            lineHeight: 1.2,
                          }}
                        >
                          {education.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }}
                        >
                          {education.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Academic Details */}
                    <Box sx={{ mb: 4 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Box
                            sx={{
                              p: 3,
                              borderRadius: 2,
                              backgroundColor: 'rgba(100, 255, 218, 0.05)',
                              border: '1px solid rgba(100, 255, 218, 0.1)',
                              textAlign: 'center',
                              height: '140px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <GradeIcon
                              sx={{
                                fontSize: '2rem',
                                color: 'primary.main',
                                mb: 1,
                              }}
                            />
                            <Typography
                              variant="h4"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                mb: 1,
                              }}
                            >
                              {education.gpa}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                              }}
                            >
                              GPA
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box
                            sx={{
                              p: 3,
                              borderRadius: 2,
                              backgroundColor: 'rgba(255, 107, 107, 0.05)',
                              border: '1px solid rgba(255, 107, 107, 0.1)',
                              textAlign: 'center',
                              height: '140px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <SchoolIcon
                              sx={{
                                fontSize: '2rem',
                                color: 'secondary.main',
                                mb: 1,
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.primary',
                                fontWeight: 600,
                                mb: 1,
                              }}
                            >
                              {formatDate(education.startDate)} - {formatDate(education.endDate)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                              }}
                            >
                              {education.location}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Key Subjects */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          mb: 3,
                          fontSize: '1.2rem',
                        }}
                      >
                        Key Subjects & Focus Areas:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {education.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            sx={{
                              backgroundColor: index === 0 
                                ? 'rgba(100, 255, 218, 0.1)' 
                                : 'rgba(255, 107, 107, 0.1)',
                              color: index === 0 ? 'primary.main' : 'secondary.main',
                              border: `1px solid ${index === 0 
                                ? 'rgba(100, 255, 218, 0.2)' 
                                : 'rgba(255, 107, 107, 0.2)'}`,
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              py: 1,
                              px: 2,
                              '&:hover': {
                                backgroundColor: index === 0 
                                  ? 'rgba(100, 255, 218, 0.2)' 
                                  : 'rgba(255, 107, 107, 0.2)',
                                transform: 'scale(1.05)',
                              },
                              transition: 'all 0.2s ease',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default React.memo(AcademicsSection);
