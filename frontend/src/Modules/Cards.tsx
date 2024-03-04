import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';

// Define types for the props that the CustomCard will accept
interface CustomCardProps {
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

const CustomCard: React.FC<CustomCardProps> = ({ startDate, endDate, title, subtitle, description, skills }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#0F172ABF', color: 'white', margin: '20px', padding: '16px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`${startDate} - ${endDate}`}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {subtitle}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: '16px', flexWrap: 'wrap' }}>
          {skills.map(skill => (
            <Chip label={skill} key={skill} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '4px' }} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
