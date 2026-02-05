import { Box, Container, Grid, Paper, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import PointContainer from "../../components/pointContainer/PointContainer";
import PlanningTable from "../../components/table/PlanningTable";
import User from "../../components/user/User";
import type { User as Voter } from "../../components/models/User.model";
import TaskContainer from "../../components/taskList/TaskContainer";
import type { TaskItem } from "../../components/models/Task.model";
import userData from '../../data/users.json';
import taskData from '../../data/tasks.json';

const Layout = () => {
  const theme = useTheme();
  const [userList, setUserList] = useState<Voter[]>([]);
  const [activeTask, setActiveTask] = useState<TaskItem | null>(null);
  const [activeUser, setActiveUser] = useState<Voter>();
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [taskItems, setTaskItems] = useState<TaskItem[]>(taskData as TaskItem[]);


  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsRevealed(true);
      setCountdown(null);

      if (activeTask) {
        setTaskItems((prevTasks) =>
          prevTasks.map((task) =>
            task.id === activeTask.id ? { ...task, completed: true } : task
          )
        );
      }
    }
  }, [countdown, activeTask]);

  useEffect(() => {
    getUsers();
    getActiveUser();
  }, []);

  useEffect(() => {
    console.log('userList', userList);
  }, [userList]);

  useEffect(() => {
    console.log('activeUser', activeUser);
  }, [activeUser]);

  useEffect(() => {
    setIsRevealed(false);
  }, [activeTask]);

  function getUsers() {
    setUserList(userData as Voter[]);
  };

  function getActiveUser() {
    const users: Voter[] = userData as Voter[];
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === 7) {
        setActiveUser(users[i]);
        return;
      };
    };
  };

  function handleCardClick(card: string) {
    if (!activeUser) return;

    const possibleVotes = [1, 2, 3];
    const updatedUser: Voter = {
      ...activeUser,
      currentVote: parseFloat(card),
      history: [...(activeUser.history ?? []), card]
    };
    setUserList((prevList) =>
      prevList.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          const randomVote = possibleVotes[Math.floor(Math.random() * possibleVotes.length)];
          return {
            ...user,
            currentVote: randomVote,
            history: [...(user.history ?? []), randomVote.toString()]
          };
        }
      })
    );
    setActiveUser(updatedUser);

    setUserList((prevList) =>
      prevList.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setCountdown(3);
  };

  const handleVoteClick = (task: TaskItem) => {
    setActiveTask(task);
  };

  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 2, backgroundColor: theme.palette.background.default,  border: `1px solid ${theme.palette.divider}` }}>
            <Box sx={{ mb: 4 }}>
              <User userList={userList} isRevealed={isRevealed} />
            </Box>
            <Box sx={{ mb: 4 }}>
              <PlanningTable activeTask={activeTask} countdown={countdown} />
            </Box>
            <Box>
              {activeUser && <PointContainer handleCardClick={handleCardClick} activeUser={activeUser} />}
            </Box>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <TaskContainer
            taskItems={taskItems}
            setTaskItems={setTaskItems}
            voteClick={handleVoteClick}
            activeTask={activeTask}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;