import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import UserList from './pages/UserList';
import Header from './components/Header';
import './App.scss';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/">
          <UserList />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
