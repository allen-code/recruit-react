import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import { TopBar } from './components';
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
    </>
  );
}

export default App;
