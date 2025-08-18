import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  KeyboardArrowDown as ArrowDownIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'CS Graduate Student',
    'Problem Solver',
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex, roles]);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/vskc23', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/sri-velamakanni', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:sri.velamakanni@example.com', label: 'Email' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={1000}>
              <Box>
                <Slide direction="up" in={true} timeout={800}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontFamily: '"JetBrains Mono", monospace',
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    Hi, my name is
                  </Typography>
                </Slide>

                <Slide direction="up" in={true} timeout={1000}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                      background: 'linear-gradient(45deg, #ffffff 30%, #64ffda 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Sri Velamakanni
                  </Typography>
                </Slide>

                <Slide direction="up" in={true} timeout={1200}>
                  <Box sx={{ height: { xs: '60px', md: '80px' }, mb: 3 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 600,
                        color: 'text.secondary',
                        fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                        minHeight: { xs: '60px', md: '80px' },
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      I'm a{' '}
                      <Box
                        component="span"
                        sx={{
                          color: 'primary.main',
                          ml: 1,
                          position: 'relative',
                          '&::after': {
                            content: '"|"',
                            animation: 'blink 1s infinite',
                            '@keyframes blink': {
                              '0%, 50%': { opacity: 1 },
                              '51%, 100%': { opacity: 0 },
                            },
                          },
                        }}
                      >
                        {displayText}
                      </Box>
                    </Typography>
                  </Box>
                </Slide>

                <Slide direction="up" in={true} timeout={1400}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      maxWidth: '600px',
                      lineHeight: 1.7,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    I'm a passionate software engineer with expertise in full-stack development,
                    currently pursuing my Master's in Computer Science at Penn State. I love
                    building exceptional digital experiences and solving complex problems.
                  </Typography>
                </Slide>

                <Slide direction="up" in={true} timeout={1600}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleScrollToAbout}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          borderColor: 'primary.light',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Learn More About Me
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      href="mailto:sri.velamakanni@example.com"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'background.default',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Get In Touch
                    </Button>
                  </Box>
                </Slide>

                <Slide direction="up" in={true} timeout={1800}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((link, index) => (
                      <Button
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          minWidth: 'auto',
                          p: 1.5,
                          borderRadius: '50%',
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            transform: 'translateY(-3px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {link.icon}
                      </Button>
                    ))}
                  </Box>
                </Slide>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={2000}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: '300px', md: '400px' },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '250px', md: '300px' },
                    height: { xs: '250px', md: '300px' },
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '90%',
                      height: '90%',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: 'primary.main',
                      zIndex: 1,
                      position: 'relative',
                    }}
                  >
                    {'</>'}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '40%': { transform: 'translateX(-50%) translateY(-10px)' },
            '60%': { transform: 'translateX(-50%) translateY(-5px)' },
          },
        }}
        onClick={handleScrollToAbout}
      >
        <ArrowDownIcon
          sx={{
            fontSize: '2rem',
            color: 'primary.main',
            '&:hover': {
              color: 'primary.light',
            },
            transition: 'color 0.3s ease',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
