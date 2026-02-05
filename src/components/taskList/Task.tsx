import {
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  Stack,
  Box
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { TaskItem } from "../models/Task.model";

type TaskProps = {
  task: TaskItem;
  voteClick: (task: TaskItem) => void;
  isActive: boolean;
}

const Task = ({ task, voteClick, isActive }: TaskProps) => {
  const theme = useTheme();

  const handleVoteClick = () => {
    if (!task.completed) {
      voteClick(task);
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 1,
        ml: 1,
        transition: 'all 0.3s ease',
        backgroundColor: task.completed
          ? theme.palette.action.hover
          : isActive
            ? 'rgba(25, 118, 210, 0.08)'
            : 'white',
        borderColor: task.completed
          ? theme.palette.success.light
          : isActive
            ? theme.palette.primary.main
            : 'divider',

        borderWidth: (isActive || task.completed) ? '2px' : '1px',
        opacity: task.completed ? 0.8 : 1,
        transform: isActive && !task.completed ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1.2,
                color: task.completed
                  ? theme.palette.success.main
                  : isActive ? theme.palette.primary.main : 'inherit'
              }}
            >
              {task.title}
            </Typography>
          </Box>
          {task.completed && (
            <CheckCircleIcon color="success" sx={{ fontSize: 28 }} />
          )}
        </Stack>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          {task.description}
        </Typography>
        <Button
          variant={isActive ? "contained" : "outlined"}
          fullWidth
          onClick={handleVoteClick}
          disabled={isActive || task.completed}
          color={task.completed ? "success" : "primary"}
        >
          {task.completed ? "Completed" : isActive ? "Currently Voting" : "Vote"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Task;