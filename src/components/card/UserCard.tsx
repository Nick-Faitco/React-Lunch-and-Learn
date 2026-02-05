import React from "react";
import { Typography, Box, Paper, useTheme } from "@mui/material";
import type {User as Voter} from "../models/User.model";


type UserCardProps = {
  user: Voter;
  isRevealed: boolean;
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const {user, isRevealed} = props;
  const theme = useTheme();
  const cardWidth = "80px";
  const cardHeight = "120px";

  return (
    <Box
      sx={{
        perspective: "1000px",
        width: cardWidth,
        height: cardHeight,
        cursor: "pointer",
        m: 1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transformStyle: "preserve-3d",
          transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
            border: `2px solid ${theme.palette.primary.dark}`,
          }}
        >
        </Paper>
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: `2px solid ${theme.palette.secondary.main}`,
            transform: "rotateY(180deg)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.secondary.main,
            }}
          >
            {user.currentVote}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default UserCard;