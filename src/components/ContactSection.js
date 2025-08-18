import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
  Fade,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'sri.velamakanni@example.com',
      href: 'mailto:sri.velamakanni@example.com',
      color: 'primary.main',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sri-velamakanni',
      href: 'https://linkedin.com/in/sri-velamakanni',
      color: '#0077b5',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'github.com/vskc23',
      href: 'https://github.com/vskc23',
      color: '#333',
    },
    {
      icon: <LocationIcon />,
      label: 'Location',
      value: 'State College, PA',
      href: null,
      color: 'secondary.main',
    },
  ];

  return (
    <Box
      id="contact"
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
            radial-gradient(circle at 30% 30%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
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
              06. Contact
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
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.2rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6} alignItems="stretch">
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Fade in={true} timeout={1200}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: 4,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Get In Touch
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        component={info.href ? 'a' : 'div'}
                        href={info.href}
                        target={info.href ? '_blank' : undefined}
                        rel={info.href ? 'noopener noreferrer' : undefined}
                        sx={{
                          background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                          border: '1px solid rgba(100, 255, 218, 0.1)',
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          cursor: info.href ? 'pointer' : 'default',
                          textDecoration: 'none',
                          '&:hover': info.href ? {
                            transform: 'translateY(-3px)',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                            boxShadow: '0 8px 25px rgba(100, 255, 218, 0.1)',
                          } : {},
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Box
                              sx={{
                                p: 2,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {React.cloneElement(info.icon, {
                                sx: { fontSize: '1.5rem', color: info.color },
                              })}
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: 'text.primary',
                                  fontWeight: 600,
                                  mb: 0.5,
                                }}
                              >
                                {info.label}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  fontSize: '1rem',
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Quick Actions */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Quick Actions
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      startIcon={<EmailIcon />}
                      href="mailto:sri.velamakanni@example.com"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          borderColor: 'primary.light',
                        },
                      }}
                    >
                      Send Email
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<LinkedInIcon />}
                      href="https://linkedin.com/in/sri-velamakanni"
                      target="_blank"
                      sx={{
                        backgroundColor: '#0077b5',
                        '&:hover': {
                          backgroundColor: '#005885',
                        },
                      }}
                    >
                      Connect on LinkedIn
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Fade in={true} timeout={1400}>
              <Card
                sx={{
                  background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 4,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Send a Message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(100, 255, 218, 0.05)',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputBase-input': {
                              color: 'text.primary',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(100, 255, 218, 0.05)',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputBase-input': {
                              color: 'text.primary',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(100, 255, 218, 0.05)',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputBase-input': {
                              color: 'text.primary',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<SendIcon />}
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'background.default',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: 2,
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
