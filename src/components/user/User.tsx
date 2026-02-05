import { Box, Typography } from "@mui/material";
import UserAvatar from "../avatar/UserAvatar";
import type {User as Voter} from "../models/User.model";

type UserProps = {
  userList: Voter[];
  isRevealed: boolean;
}

const User = ({ userList, isRevealed }: UserProps) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase' }}>
        Active Team Members
      </Typography>
      <UserAvatar userList={userList} isRevealed={isRevealed}/>
    </Box>
  );
}

export default User;