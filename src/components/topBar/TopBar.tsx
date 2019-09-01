import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { colors } from '../../constants';

/***************
 *  INTERFACE  *
 ***************/
interface TopBarProps {
  toggleDrawerState: Function
}

/***************
 *  COMPONENT  *
 ***************/
const TopBar = ({ toggleDrawerState }: TopBarProps) => (
    <AppBar style={{background: colors.DARK_COLOR}} position='static'>
      <Toolbar>
        <IconButton onClick={() => toggleDrawerState()} edge="start" color="inherit" aria-label="menu">
          <MenuIcon color='primary' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );

export default TopBar;