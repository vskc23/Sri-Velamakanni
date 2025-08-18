import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Slide,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academics', href: '#academics' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.label} 
            onClick={() => handleNavClick(item.href)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: 'text.primary',
                '& .MuiTypography-root': {
                  fontWeight: 500,
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={true}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled 
              ? 'rgba(26, 26, 46, 0.95)' 
              : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease-in-out',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : 'none',
            border: scrolled 
              ? '1px solid rgba(100, 255, 218, 0.1)' 
              : 'none',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                fontSize: '1.5rem',
              }}
              onClick={() => handleNavClick('#hero')}
            >
              Sri Velamakanni
            </Typography>

            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.slice(1).map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover:before': {
                        width: '80%',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            backgroundImage: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
