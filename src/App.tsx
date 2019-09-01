import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import { TopBar, SideMenu } from './components';
import { Home } from './pages';
import { colors } from './constants';
import logo from './logo.svg';

/***************
 *  INTERFACE  *
 ***************/
interface DrowerProps {
  drawerOpen: boolean
}

/***************
 *  COMPONENT  *
 ***************/
const App: React.FC = () => {
  const [drawerState, setDrawerState] = useState<DrowerProps>({
    drawerOpen: false,
  });
  const toggleDrawerState = () => {
    setDrawerState({drawerOpen: !drawerState.drawerOpen});
  };
  return (
    <>
      <CssBaseline/>
      <TopBar toggleDrawerState={() => toggleDrawerState()} />
      <SideMenu drawerState={drawerState} toggleDrawerState={() => toggleDrawerState()} />
      <Home />
    </>
  );
}

export default App;
