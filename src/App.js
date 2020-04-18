import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import List from './pages/List';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
