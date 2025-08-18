import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ResponsiveAlert = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000); // Adjust the time as needed (3000 for 3 seconds, 5000 for 5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Center horizontally and place at the bottom
      sx={{
        // Increase the size of the Snackbar
        '& .MuiSnackbarContent-root': {
          minWidth: '50%', // Increase width
          maxWidth: '90%', // Ensure it doesn't get too wide on larger screens
          fontSize: '1.25rem', // Increase font size
        },
        // Adjust the positioning to ensure visibility on all screens
        '& .MuiPaper-root': {
          bottom: { xs: '10%', sm: '20%', md: '30%' }, // Adjust based on screen size for better visibility
        },
      }}
    >
      <Alert severity="info" onClose={() => setOpen(false)} sx={{ width: '100%' }}>
        Currently optimized for desktop. Mobile version coming soon.
      </Alert>
    </Snackbar>
  );
};

export default ResponsiveAlert;