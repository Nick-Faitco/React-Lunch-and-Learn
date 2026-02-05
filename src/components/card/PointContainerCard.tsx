import React from "react";
import { Typography, Box, Paper, useTheme } from "@mui/material";

type PointContainerCardProps = {
  card: string;
  handleCardClick: (card: string) => void;
  isSelected: boolean;
};

const PointContainerCard: React.FC<PointContainerCardProps> = ({ card, handleCardClick, isSelected }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={() => handleCardClick(card)}
      sx={{
        width: "70px",
        height: "100px",
        perspective: "1000px",
        cursor: 'pointer',
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px) scale(1.05)",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
    >
      <Paper
        elevation={isSelected ? 8 : 3}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          
          border: isSelected 
            ? `3px solid ${theme.palette.secondary.main}` 
            : `2px solid ${theme.palette.primary.light}`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: isSelected ? theme.palette.secondary.dark : theme.palette.primary.dark,
          }}
        >
          {card}
        </Typography>
      </Paper>
    </Box>
  );
}

export default PointContainerCard;