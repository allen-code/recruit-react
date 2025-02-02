import React from 'react';
import ReactDOM from 'react-dom';
// THEME
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
