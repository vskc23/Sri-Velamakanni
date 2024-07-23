import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { AchievementCardProps } from "../../types/types";


export const AchievementCard = ({ achievements }: AchievementCardProps) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2, backgroundColor: "#0F172ABF", color:"white"}}>
      <CardContent>
        {achievements?.map((achievement, index) => (
          <Box key={index} display="flex" alignItems="center" mb={1}>
            <StarIcon  />
            <Typography variant="body1" component="p" sx={{ marginLeft: 1 }}>
              {achievement}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
