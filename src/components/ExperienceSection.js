import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Avatar,
  Fade,
} from '@mui/material';
import { Work as WorkIcon, LocationOn as LocationIcon } from '@mui/icons-material';
import { sections } from '../constants/sectionData';
import InstitutionIcon from './InstitutionIcon';

const ExperienceSection = () => {
  
  const experienceData = sections.find(section => section.id === 'experience');

  const formatDate = (dateStr) => {
    if (dateStr === 'Present') return 'Present';
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <Box
      id="experience"
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
            radial-gradient(circle at 30% 40%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)
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
              02. Experience
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
              My Professional Journey
            </Typography>
          </Box>
        </Fade>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #64ffda 0%, #ff6b6b 100%)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              zIndex: 1,
            }}
          />

          {experienceData?.content.map((experience, index) => (
            <Fade key={index} in={true} timeout={1200 + index * 200}>
              <Box
                sx={{
                  position: 'relative',
                  mb: 6,
                  display: 'flex',
                  flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  gap: { xs: 3, md: 6 },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '11px', md: '50%' },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      border: '4px solid',
                      borderColor: 'background.default',
                      boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)',
                    }}
                  />
                </Box>

                {/* Experience card */}
                <Box
                  sx={{
                    flex: 1,
                    ml: { xs: 5, md: 0 },
                    maxWidth: { xs: 'none', md: '45%' },
                  }}
                >
                  <Card
                    sx={{
                      background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                        boxShadow: '0 20px 40px rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                        <InstitutionIcon
                          imageUrl={experience.imageUrl}
                          websiteUrl={experience.websiteUrl}
                          title={experience.title}
                          size={60}
                          borderColor="rgba(100, 255, 218, 0.3)"
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 600,
                              mb: 1,
                              fontSize: { xs: '1.2rem', md: '1.4rem' },
                            }}
                          >
                            {experience.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 500,
                              mb: 2,
                              fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                          >
                            {experience.subtitle}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontFamily: '"JetBrains Mono", monospace',
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.9rem',
                              }}
                            >
                              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
                              >
                                {experience.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          mb: 3,
                          fontSize: '1rem',
                        }}
                      >
                        {experience.description}
                      </Typography>

                      {/* Skills */}
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 500,
                            mb: 2,
                          }}
                        >
                          Key Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {experience.skills.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(100, 255, 218, 0.2)',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                '&:hover': {
                                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
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
                </Box>

                {/* Spacer for desktop layout */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    flex: 1,
                    maxWidth: '45%',
                  }}
                />
              </Box>
            </Fade>
          ))}
        </Box>

        {/* Call to action */}
        <Fade in={true} timeout={2000}>
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
              Ready for the Next Challenge
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              With over 3 years of professional experience in software engineering and 
              a strong foundation in both frontend and backend technologies, I'm excited 
              to contribute to innovative projects and grow with a dynamic team.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default React.memo(ExperienceSection);
