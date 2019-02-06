import React from 'react';
import { render } from 'react-dom';

export default function App() {
  return <>Hello world! Hmr test</>;
}

render(<App />, document.querySelector('#root'));

if (module.hot) module.hot.accept();
