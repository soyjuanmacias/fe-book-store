import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

const TEXT_ERROR_LOADING_APP = 'Can\'t find app div for render React. Check index.html';

const loadApp = (rootDiv) => {
  ReactDOM.render(<App />, rootDiv);
}
const rootDiv = document.getElementById('root');
if(rootDiv) {
  loadApp(rootDiv);
} else {
  throw new Error(TEXT_ERROR_LOADING_APP);
}