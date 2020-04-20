import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
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
        <Route path='/users/new'>
          <UserList />
        </Route>
        <Route path='/users'>
          <UserList />
        </Route>
        <Route path='/'>
          <Redirect to={{ pathname: '/users' }} />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
