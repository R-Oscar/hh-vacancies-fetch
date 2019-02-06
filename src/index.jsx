import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default function App() {
  return (
    <MuiThemeProvider>
      <>
        <CssBaseline />
        Hello world! Hmr test
      </>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#root'));

if (module.hot) module.hot.accept();
