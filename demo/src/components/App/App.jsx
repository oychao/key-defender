import React from 'react';
import {
  HashRouter, Route, Redirect, Link
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import List from '../List';

import './style.less';

const App = () => (
  <div className="app">
    <h1>React</h1>
    <HashRouter>
      <div>
        <ul className="app__router">
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" render={() => <Redirect to="/list" />} />
        <Route exact path="/list" component={List.view} />
      </div>
    </HashRouter>
  </div>
);

export default hot(module)(App);
