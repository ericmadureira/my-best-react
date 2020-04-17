import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
