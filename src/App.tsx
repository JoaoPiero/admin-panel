import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import './App.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function App() {
  const [leftOpen, setLeftOpen] = React.useState(false);

  const toggleLeftDrawer = () => {
    setLeftOpen(!leftOpen);
  };

  const list = (anchor: Anchor) => (
    <Box
      component="div" // Add the component prop here
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleLeftDrawer}
      onKeyDown={toggleLeftDrawer}
    >
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link to="/home">
                <ListItemText primary={'Home'} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon/>
              </ListItemIcon>
              <Link to="/table">
                <ListItemText primary={'Users table'} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <Drawer
          anchor="left" // Left drawer
          open={leftOpen} // Open state for left drawer
          onClose={toggleLeftDrawer} // Close the left drawer
        >
          {list('left')}
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleLeftDrawer} // Open the left drawer
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ width: '90vw', margin: '0 auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
