import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { sections } from '../constants/sectionData';

const ProjectsSection = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projectsData = sections.find(section => section.id === 'projects');

  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
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
            radial-gradient(circle at 20% 30%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
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
              03. Projects
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
              Things I've Built
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {projectsData?.content.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Fade in={true} timeout={1200 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    borderRadius: 3,
                    cursor: 'pointer',
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
                      background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      border: '1px solid rgba(100, 255, 218, 0.4)',
                      boxShadow: '0 25px 50px rgba(100, 255, 218, 0.15)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .project-icon': {
                        transform: 'rotate(360deg) scale(1.1)',
                        color: 'primary.main',
                      },
                      '& .project-title': {
                        color: 'primary.main',
                      },
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    {/* Project Icon */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <CodeIcon
                        className="project-icon"
                        sx={{
                          fontSize: '2.5rem',
                          color: 'text.secondary',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                          size="small"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'primary.main',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'primary.main',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Project Title */}
                    <Typography
                      variant="h5"
                      className="project-title"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Date */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: '"JetBrains Mono", monospace',
                        mb: 3,
                        fontSize: '0.9rem',
                      }}
                    >
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: 3,
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: '1rem',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Skills */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: 'primary.main',
                            border: '1px solid rgba(100, 255, 218, 0.2)',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.2)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      ))}
                      {project.skills.length > 3 && (
                        <Chip
                          label={`+${project.skills.length - 3} more`}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 107, 107, 0.1)',
                            color: 'secondary.main',
                            border: '1px solid rgba(255, 107, 107, 0.2)',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0, position: 'relative', zIndex: 1 }}>
                    <Button
                      size="small"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Featured Project Highlight */}
        <Fade in={true} timeout={2000}>
          <Box
            sx={{
              mt: 8,
              p: 6,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
              border: '2px solid rgba(100, 255, 218, 0.2)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.03) 0%, rgba(255, 107, 107, 0.03) 100%)',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Featured: Skyward Analytics
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.1rem',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                My most comprehensive machine learning project that predicts flight delays with 83.09% accuracy 
                using advanced ensemble techniques and bird strike data integration. This project showcases 
                my expertise in data science, feature engineering, and model optimization.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: 'primary.light',
                    },
                  }}
                >
                  View Code
                </Button>
                <Button
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'background.default',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            borderRadius: 3,
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 2,
              }}
            >
              <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600 }}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={handleCloseDialog} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pb: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"JetBrains Mono", monospace',
                  mb: 3,
                }}
              >
                {formatDate(selectedProject.startDate)} - {formatDate(selectedProject.endDate)}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: 4,
                  fontSize: '1.1rem',
                }}
              >
                {selectedProject.description}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}
              >
                Technologies Used:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProject.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      color: 'primary.main',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                startIcon={<GitHubIcon />}
                sx={{ color: 'text.secondary' }}
              >
                View Code
              </Button>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.default',
                }}
              >
                Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;
