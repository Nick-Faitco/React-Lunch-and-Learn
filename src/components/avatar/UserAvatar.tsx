import { Avatar, Box, Stack, Tooltip } from "@mui/material";
import UserCard from "../card/UserCard";
import type {User as Voter} from "../models/User.model";

type UserAvatarProps = {
  userList: Voter[];
  isRevealed: boolean;
}

function stringToColor(string: string) {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name: string) {
  const nameParts = name.split(' ');
  const initials = nameParts.length > 1 
    ? `${nameParts[0][0]}${nameParts[1][0]}` 
    : `${nameParts[0][0]}`;

  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 48, 
      height: 48,
      fontSize: '1rem',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.15)',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        zIndex: 1,
      }
    },
    children: initials,
  };
}

const UserAvatar = ({ userList, isRevealed }: UserAvatarProps) => {
  return (
    <Stack 
      direction="row" 
      spacing={3}
      sx={{ 
        justifyContent: 'center', 
        py: 2, 
        overflowX: 'auto',
        pb: 4 
      }}
    >
      {userList.map((user, index) => (
        <Box 
          key={index} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 1
          }}
        >
          <UserCard user={user} isRevealed={isRevealed}/>
          <Tooltip title={user.name} arrow placement="bottom">
            <Avatar {...stringAvatar(user.name)} />
          </Tooltip>
        </Box>
      ))}
    </Stack>
  );
}

export default UserAvatar;