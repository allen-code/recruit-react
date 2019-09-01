import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { SideMenuContainer } from './SideMenu.styled';

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
      <SideMenuContainer>
        <IconButton onClick={() => toggleDrawerState()} edge="start" color="inherit" aria-label="menu">
          <KeyboardBackspaceIcon color='primary' />
        </IconButton>
      </SideMenuContainer>
    </Drawer>
  );

export default SideMenu;