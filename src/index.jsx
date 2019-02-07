import React from 'react';
import { render } from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import App from './components/container/App';

import './index.css';

function Root() {
  return (
    <MuiThemeProvider>
      <div className="container">
        <CssBaseline />
        <App />
      </div>
    </MuiThemeProvider>
  );
}

render(<Root />, document.querySelector('#root'));

if (module.hot) module.hot.accept();
