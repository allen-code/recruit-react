import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

/***************
 *  INTERFACE  *
 ***************/
interface SideMenuProps {
  drawerState: {
    drawerOpen: boolean
  },
  toggleDrawerState: Function
}

/***************
 *  COMPONENT  *
 ***************/
const SideMenu = ({ drawerState, toggleDrawerState }: SideMenuProps) => (
    <Drawer open={drawerState.drawerOpen} onClose={() => toggleDrawerState()}>
      <IconButton onClick={() => toggleDrawerState()} edge="start" color="inherit" aria-label="menu">
        <KeyboardBackspaceIcon color='primary' />
      </IconButton>
    </Drawer>
  );

export default SideMenu;