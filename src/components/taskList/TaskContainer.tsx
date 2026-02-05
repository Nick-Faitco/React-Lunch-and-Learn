import { Box, Typography, List, Container, Paper, useTheme } from "@mui/material";
import type { TaskItem } from "../models/Task.model";
import Task from "./Task";
import AddTaskForm from '../taskForm/AddTaskForm';

type TaskContainerProps = {
  taskItems: TaskItem[];
  setTaskItems: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  voteClick: (task: TaskItem) => void;
  activeTask: TaskItem | null;
}

const TaskContainer = ({ taskItems, setTaskItems, voteClick, activeTask }: TaskContainerProps) => {
  const theme = useTheme();

  const handleAddTask = (newTask: TaskItem) => {
    setTaskItems((prevTasks) => [newTask, ...prevTasks]);
  }

  return (
    <Container maxWidth="sm" sx={{ position: 'sticky', top: theme.spacing(3) }}>
      {/* <AddTaskForm onAddTask={handleAddTask} /> */}
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          backgroundColor: theme.palette.background.default, 
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(100vh - 100px)', 
          borderRadius: `${theme.shape.borderRadius}px`, 
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          align="center" 
          sx={{ 
            fontWeight: 'bold',
            color: theme.palette.primary.dark
          }}
        >
          Task List
        </Typography>
        
        <Box sx={{ 
          overflowY: 'auto', 
          flexGrow: 1,
          paddingRight: 1,
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '10px',
          }
        }}>
          <List sx={{ width: '100%', bgcolor: 'transparent' }}>
            {taskItems.map((item) => (
              <Task 
                key={item.id} 
                task={item} 
                voteClick={voteClick}
                isActive={activeTask?.id === item.id}
              />
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default TaskContainer;