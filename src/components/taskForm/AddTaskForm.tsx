import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { TaskItem } from '../models/Task.model';

type AddTaskFormProps = {
  onAddTask: (newTask: TaskItem) => void;
};

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const theme = useTheme()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: TaskItem = {
      id: Date.now(),
      title: title,
      description: description,
    };

    onAddTask(newTask);
    
    setTitle('');
    setDescription('');
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        mb: 3, 
        borderRadius: `${theme.shape.borderRadius}px`,
        backgroundColor: theme.palette.background.default, 
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ color: theme.palette.primary.dark, fontWeight: 'bold' }}
      >
        Add New Task
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Task Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            startIcon={<AddIcon />}
            disabled={!title.trim()}
            sx={{ 
              py: 1.5, 
              fontWeight: 'bold',
              boxShadow: theme.shadows[4]
            }}
          >
            Add Task
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddTaskForm;