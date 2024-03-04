import React from 'react';
import { Typography, List, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code'; 
import StarIcon from '@mui/icons-material/Star'; 

const LeftSection = () => {
  const handleNavigation = (sectionId:any) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#0F172ABF',
        padding: '20px 48px', // Increase the top and bottom padding
        boxSizing: 'border-box',
        color: '#EAEAEA',
        fontFamily: "'Roboto', sans-serif",
        display: 'flex',
        flexDirection: 'column', // Align children in a column
        justifyContent: 'center', // Center the content vertically
      }}
    >
      <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Sri Velamakanni
      </Typography>
      <Typography variant="h6" style={{ marginBottom: '1rem' }}>
      Hi there! I'm a graduate student at Pennsylvania State University, where I'm pursuing a master's degree in computer science. 
      </Typography>
      <List>
        <ListItemButton onClick={() => handleNavigation('#about')} disableRipple>
          <ListItemIcon>
            <InfoIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <SchoolIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Academics" />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <WorkIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <CodeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton onClick={() => handleNavigation('#skills')} disableRipple>
          <ListItemIcon>
            <StarIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <EmojiEventsIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Achievements" />
        </ListItemButton>
      </List>

      <div style={{ marginTop: '1rem' }}>
        <IconButton href="https://www.linkedin.com/asaasa/" target="_blank" style={{ color: 'white' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/asas" target="_blank" style={{ color: 'white' }}>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default LeftSection;
