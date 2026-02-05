import { Box, Paper, Stack, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import type { TaskItem } from "../models/Task.model";

const PlanningTable = ({ activeTask, countdown }: { activeTask: TaskItem | null, countdown: number | null }) => {
  if (!activeTask) {
    return <Typography color="text.secondary">Select a task to begin voting...</Typography>;
  }

  return (
    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f0f7ff', border: '2px dashed #1976d2' }}>
      <Typography variant="overline">Currently Voting On:</Typography>
      <Typography variant="h6">{activeTask.title}</Typography>
      <Typography variant="body2">{activeTask.description}</Typography>
      <Box>
        {countdown !== null && (
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <TimerIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
          <Typography variant="h3" color="secondary.main" sx={{ fontWeight: 'bold' }}>
            {countdown}
          </Typography>
        </Stack>
        )}
      </Box>
    </Paper>
  );
}

export default PlanningTable;