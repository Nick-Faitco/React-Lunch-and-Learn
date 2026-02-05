import React from "react";
import { Paper, Typography, Stack, Divider } from "@mui/material";
import PointContainerCard from "../card/PointContainerCard";
import type {User as Voter} from "../models/User.model";

type PointcontainerProps = {
  handleCardClick: (card: string) => void;
  activeUser: Voter;
};

const PointContainer: React.FC<PointcontainerProps> = ({ handleCardClick, activeUser }) => {
  const cardList: string[] = ['.5', '1', '2', '3', '5', '8'];

  return (
    <Paper 
      elevation={0} 
      variant="outlined" 
      sx={{ 
        p: 2, 
        mt: 2, 
        borderRadius: 3, 
        backgroundColor: 'rgba(25, 118, 210, 0.02)',
        borderColor: 'divider'
      }}
    >
      <Typography 
        variant="overline" 
        sx={{ fontWeight: 'bold', display: 'block', mb: 1, textAlign: 'center', color: 'text.secondary' }}
      >
        Select Story Points
      </Typography>
      
      <Divider sx={{ mb: 2 }} />

      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="center" 
        alignItems="center"
        sx={{ 
          flexWrap: 'wrap',
          gap: 1 
        }}
      >
        {cardList.map((card, index) => (
          <PointContainerCard 
            key={index} 
            handleCardClick={handleCardClick} 
            card={card}
            isSelected={activeUser?.currentVote === parseFloat(card)}
          />
        ))}
      </Stack>
    </Paper>
  );
}

export default PointContainer;