import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const DefaultBar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', gap: 4, px: { xs: 0 } }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#1976d2' : '#666',
                borderBottom: isActive ? '2px solid #1976d2' : 'none',
                padding: '4px 0',
                transition: 'all 0.2s ease'
              })}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#1976d2' : '#666',
                borderBottom: isActive ? '2px solid #1976d2' : 'none',
                padding: '4px 0',
                transition: 'all 0.2s ease'
              })}
            >
              ABOUT
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default DefaultBar;