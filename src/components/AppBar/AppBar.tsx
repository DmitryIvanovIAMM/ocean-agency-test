import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export interface ButtonAppBarProps {
  isUserLoggedIn: boolean;
}
const ButtonAppBar = ({ isUserLoggedIn }: ButtonAppBarProps) => {
  console.log('ButtonAppBar()  isUserLoggedIn: ', isUserLoggedIn);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ocean Agency Test App
          </Typography>
          <Button color="inherit">{isUserLoggedIn ? 'Logout' : 'Login'}</Button>
        </Toolbar>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              <ListItemButton>
                <ListItem key="login-audit-item">
                  <ListItemText primary="Login Audit" />
                </ListItem>
              </ListItemButton>
              <ListItemButton>
                <ListItem key="user-info">
                  <ListItemText primary="User Info" />
                </ListItem>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};
export default ButtonAppBar;
