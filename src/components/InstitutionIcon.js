import React, { useState } from 'react';
import { Box, Avatar, IconButton, Tooltip } from '@mui/material';
import { Launch as LaunchIcon, Work as WorkIcon } from '@mui/icons-material';

const InstitutionIcon = ({ 
  imageUrl, 
  websiteUrl, 
  title, 
  size = 80, 
  showLaunchIcon = true,
  borderColor = 'rgba(100, 255, 218, 0.3)' 
}) => {
  const [imgError, setImgError] = useState(false);
  
  const handleClick = () => {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = () => {
    setImgError(true);
  };

  // High-quality SVG fallback icons for each institution
  const getSvgIcon = (institutionName) => {
    const name = institutionName?.toLowerCase();
    
    if (name?.includes('penn') || name?.includes('psu')) {
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#041E42"/>
          <text x="50" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PENN</text>
          <text x="50" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">STATE</text>
          <circle cx="50" cy="70" r="8" fill="#FFFFFF"/>
        </svg>
      );
    }
    
    if (name?.includes('dbs')) {
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#E31837"/>
          <text x="50" y="40" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">DBS</text>
          <rect x="20" y="55" width="60" height="4" fill="white"/>
          <text x="50" y="75" textAnchor="middle" fill="white" fontSize="8">BANK</text>
        </svg>
      );
    }
    
    if (name?.includes('gitam')) {
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#FF6B35"/>
          <text x="50" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">GITAM</text>
          <circle cx="50" cy="65" r="12" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="50" cy="65" r="4" fill="white"/>
        </svg>
      );
    }
    
    if (name?.includes('idrbt')) {
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#1B4D72"/>
          <text x="50" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">IDRBT</text>
          <rect x="25" y="45" width="50" height="20" fill="none" stroke="white" strokeWidth="2"/>
          <text x="50" y="80" textAnchor="middle" fill="white" fontSize="6">RESEARCH</text>
        </svg>
      );
    }
    
    if (name?.includes('walmart')) {
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="100" height="100" fill="#0071CE"/>
          <circle cx="50" cy="50" r="25" fill="#FFC220"/>
          <text x="50" y="55" textAnchor="middle" fill="#0071CE" fontSize="12" fontWeight="bold">W</text>
        </svg>
      );
    }
    
    // Default fallback
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100" height="100" fill="#64ffda"/>
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
          {title?.charAt(0) || '?'}
        </text>
      </svg>
    );
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Tooltip title={`Visit ${title}`} arrow placement="top">
        <Avatar
          src={imageUrl}
          onError={handleImageError}
          onClick={handleClick}
          sx={{
            width: size,
            height: size,
            border: `3px solid ${borderColor}`,
            cursor: websiteUrl ? 'pointer' : 'default',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 25px rgba(100, 255, 218, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': websiteUrl ? {
              transform: 'scale(1.1) rotate(5deg)',
              border: `3px solid rgba(100, 255, 218, 0.6)`,
              boxShadow: '0 15px 35px rgba(100, 255, 218, 0.4)',
              '& .launch-icon': {
                opacity: 1,
                transform: 'scale(1)',
              },
            } : {},
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': websiteUrl ? {
              opacity: 1,
            } : {},
          }}
        >
          {(!imageUrl || imgError) ? getSvgIcon(title) : null}
        </Avatar>
      </Tooltip>
      
      {websiteUrl && showLaunchIcon && (
        <IconButton
          className="launch-icon"
          onClick={handleClick}
          sx={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 24,
            height: 24,
            backgroundColor: 'primary.main',
            color: 'background.default',
            opacity: 0,
            transform: 'scale(0.8)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'scale(1.1)',
            },
            boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)',
          }}
        >
          <LaunchIcon sx={{ fontSize: '0.8rem' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default React.memo(InstitutionIcon);
