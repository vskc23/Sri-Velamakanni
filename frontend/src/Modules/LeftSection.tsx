import React from "react";
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import {
  linkedInProfileLink,
  githubProfileLink,
  gmailEmailLink,
} from "../constants/envData";

const LeftSection = ({
  handleNavigation,
}: {
  handleNavigation: (sectionId: string) => void;
}) => {

  console.log("githubProfileLink", githubProfileLink);
  console.log("email", gmailEmailLink);
  console.log("linkedin", linkedInProfileLink);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#0F172ABF",
        padding: "20px 48px", // Increase the top and bottom padding
        boxSizing: "border-box",
        color: "#EAEAEA",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column", // Align children in a column
        justifyContent: "center", // Center the content vertically
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        style={{ fontWeight: "bold", marginBottom: "1rem" }}
      >
        Sri Velamakanni
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        Hi there! I'm a graduate student at Pennsylvania State University, where
        I'm pursuing a master's degree in computer science.
      </Typography>
      <List>
        <ListItemButton onClick={() => handleNavigation("about")} disableRipple>
          <ListItemIcon>
            <InfoIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigation("experience")}
          disableRipple
        >
          <ListItemIcon>
            <WorkIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigation("academics")}
          disableRipple
        >
          <ListItemIcon>
            <SchoolIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Academics" />
        </ListItemButton>

        <ListItemButton
          onClick={() => handleNavigation("projects")}
          disableRipple
        >
          <ListItemIcon>
            <CodeIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigation("achievements")}
          disableRipple
        >
          <ListItemIcon>
            <EmojiEventsIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Achievements" />
        </ListItemButton>
      </List>

      <div style={{ marginTop: "1rem" }}>
        <IconButton
          component="a"
          href={linkedInProfileLink}
          target="_blank"
          style={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href={githubProfileLink}
          target="_blank"
          style={{ color: "white" }}
        >
          
          <GitHubIcon />
        </IconButton>
        <IconButton
          href={`mailto:${gmailEmailLink}`}
          target="_blank"
          style={{ color: "white" }}
        >
          <EmailIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default LeftSection;
