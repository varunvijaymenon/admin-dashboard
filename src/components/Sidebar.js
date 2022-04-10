import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <List>
            <ListItem button key={'SB ADMIN'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'SB ADMIN'} />
            </ListItem>
        </List>

        <Divider />

        <List>
            <ListItem button key={'Dashboard'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
        </List>

        <Divider />

        <List>
        <Typography sx={{ minWidth: 100 }}>Interface</Typography>
            <ListItem button key={'Components'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Components'} />
              <ChevronRightIcon/>
            </ListItem>

            <ListItem button key={'Utilities'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Utilities'} />
              <ChevronRightIcon/>
            </ListItem>
        </List>

        <Divider />

        <List>
        <Typography sx={{ minWidth: 100 }}>Addons</Typography>
            <ListItem button key={'Pages'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Pages'} />
              <ChevronRightIcon/>
            </ListItem>

            <ListItem button key={'Charts'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Charts'} />
            </ListItem>

            <ListItem button key={'Tables'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Tables'} />
            </ListItem>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}