import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import AcademicsSection from "./components/AcademicsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#9cffff',
      dark: '#14cba8',
    },
    secondary: {
      main: '#ff6b6b',
      light: '#ff9999',
      dark: '#cc5555',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(145deg, #1e1e2e 0%, #2a2a3e 100%)',
          border: '1px solid rgba(100, 255, 218, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AcademicsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
