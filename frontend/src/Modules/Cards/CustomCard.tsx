import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { CustomCardProps } from "../../types/types";
export const CustomCard = (props: CustomCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 2,
        padding: 2,
        backgroundColor: "#0F172ABF",
        color: "#EAEAEA",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {props.isProject ? (
            <img
              src={props.imageUrl}
              alt={props.title}
              style={{ width: "25%", objectFit: "cover" }}
            />
          ) : (
            <Avatar
              src={props.imageUrl}
              alt={props.title}
              sx={{ marginRight: 2 }}
            />
          )}

          <Box>
            <Typography variant="h6" color="common.white" sx={{ margin: 0 }}>
              {props.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="common.white"
              sx={{ margin: 0 }}
            >
              {props.subtitle}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="common.white"
            sx={{ textAlign: "right" }}
          >
            {props.startDate} - {props.endDate}
          </Typography>
          <Typography
            variant="body2"
            color="common.white"
            sx={{ textAlign: "right" }}
          >
            {props.location}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        {props?.description?.split("\n")?.map((paragraph: string, index: number) => (
          <Typography
            key={index}
            variant="body2"
            color="common.white"
            sx={{ textAlign: "justify", marginBottom: 2 }}
          >
            {paragraph}
          </Typography>
        ))}
        <Stack direction="row" spacing={1} mt={1}>
          {props?.skills?.map((skill: string, index: number) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                bgcolor: "#2DD4BF",
                color: "#8B4513",
                fontWeight: "medium",
                "& .MuiChip-label": {
                  padding: "4px 12px",
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
