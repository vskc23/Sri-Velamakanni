import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomCard } from "./Cards/CustomCard";
import { AchievementCard } from "./Cards/AchievementCard";
import { sections } from "../constants/sectionData";



const RightSection = ({ handleNavigation }: { handleNavigation: (sectionId: string) => void }) => {
  const theme = useTheme();
  return (
    <Box
    sx={{
      width: "100%",
      height: "100vh",
      overflow: "auto",
      backgroundColor: "#0F172ABF",
      padding: theme.spacing(5),
      boxSizing: "border-box",
      color: theme.palette.common.white,
      fontFamily: "'Roboto', sans-serif",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255,255,255,0.1)",
        outline: "1px solid slategrey",
      },
    }}
  >
{sections.map((section) => (
  <Typography
    key={section.id}
    variant="h6"
    component="section"
    id={section.id}
    gutterBottom
    sx={{
      marginBottom: theme.spacing(3),
    }}
  >
    {section.title}
    {section.isAchievement ? (
      <AchievementCard achievements={section.content as string[]} />
    ) : Array.isArray(section.content) ? (
      section.content.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            color: theme.palette.common.white,
            lineHeight: 1.8,
            textAlign: "justify",
            marginBottom: theme.spacing(3),
          }}
        >
          <CustomCard {...item} />
        </Typography>
      ))
    ) : (
      // Handle string content directly
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.common.white,
          lineHeight: 1.8,
          textAlign: "justify",
          marginBottom: theme.spacing(3),
        }}
      >
        {section.content}
      </Typography>
    )}
  </Typography>
))}

  </Box>
  );
};

export default RightSection;
