import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/vskc23', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/sri-velamakanni', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:sri.velamakanni@example.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          {/* Back to top button */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
                mb: 3,
              }}
            >
              <ArrowUpIcon />
            </IconButton>
          </Box>

          {/* Main footer content */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sri Velamakanni
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Software Engineer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </Typography>

            {/* Social links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: 'rgba(100, 255, 218, 0.3)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(100, 255, 218, 0.1)', mb: 3 }} />

          {/* Copyright and credits */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} Sri Velamakanni. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.9rem',
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              Built with React & Material-UI
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Footer;
