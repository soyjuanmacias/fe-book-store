import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {BookStorage} from './services';
import {Home} from './components';
import './App.scss';

export class App extends Component {
  constructor() {
    BookStorage.fetchBooksFromServer();
  }
  render() {
    return(
      <div className="vertical-fill app">
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}