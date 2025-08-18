import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Group as GroupIcon,
  Nature as EcoIcon,
  Sports as SportsIcon,
  Star as StarIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { sections } from '../constants/sectionData';

const AchievementsSection = () => {
  const theme = useTheme();
  
  const achievementsData = sections.find(section => section.id === 'achievements');

  const achievementIcons = [
    <GroupIcon />,
    <GroupIcon />,
    <EcoIcon />,
    <SportsIcon />,
    <StarIcon />,
    <SchoolIcon />,
  ];

  const achievementColors = [
    { bg: 'rgba(100, 255, 218, 0.1)', border: 'rgba(100, 255, 218, 0.2)', icon: 'primary.main' },
    { bg: 'rgba(255, 107, 107, 0.1)', border: 'rgba(255, 107, 107, 0.2)', icon: 'secondary.main' },
    { bg: 'rgba(76, 222, 128, 0.1)', border: 'rgba(76, 222, 128, 0.2)', icon: '#4ade80' },
    { bg: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.2)', icon: '#fbbf24' },
    { bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.2)', icon: '#a855f7' },
    { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.2)', icon: '#3b82f6' },
  ];

  return (
    <Box
      id="achievements"
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
            radial-gradient(circle at 40% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
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
              05. Achievements
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
              Leadership & Recognition
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {achievementsData?.content.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={1200 + index * 150}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                    border: `1px solid ${achievementColors[index % achievementColors.length].border}`,
                    borderRadius: 3,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: achievementColors[index % achievementColors.length].bg,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      border: `2px solid ${achievementColors[index % achievementColors.length].border}`,
                      boxShadow: `0 15px 35px ${achievementColors[index % achievementColors.length].bg}`,
                      '&::before': {
                        opacity: 1,
                      },
                      '& .achievement-icon': {
                        transform: 'scale(1.2) rotate(10deg)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    {/* Achievement Icon */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          backgroundColor: achievementColors[index % achievementColors.length].bg,
                          border: `2px solid ${achievementColors[index % achievementColors.length].border}`,
                          transition: 'all 0.3s ease',
                        }}
                        className="achievement-icon"
                      >
                        {React.cloneElement(achievementIcons[index % achievementIcons.length], {
                          sx: {
                            fontSize: '2.5rem',
                            color: achievementColors[index % achievementColors.length].icon,
                          },
                        })}
                      </Avatar>
                    </Box>

                    {/* Achievement Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: 400,
                      }}
                    >
                      {achievement}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Achievement Stats */}
        <Fade in={true} timeout={2000}>
          <Box
            sx={{
              mt: 10,
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
              border: '1px solid rgba(100, 255, 218, 0.2)',
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
                  mb: 6,
                  textAlign: 'center',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Impact & Recognition
              </Typography>
              
              <Grid container spacing={4}>
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <TrophyIcon
                      sx={{
                        fontSize: '3rem',
                        color: '#fbbf24',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#fbbf24',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      1,200+
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      Students Mentored
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <StarIcon
                      sx={{
                        fontSize: '3rem',
                        color: 'primary.main',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      Multiple
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      Awards Won
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <EcoIcon
                      sx={{
                        fontSize: '3rem',
                        color: '#4ade80',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#4ade80',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      Green
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      Initiatives Led
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <SchoolIcon
                      sx={{
                        fontSize: '3rem',
                        color: 'secondary.main',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      Top 10%
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      Academic Rank
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AchievementsSection;
