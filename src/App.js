import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import UserList from './pages/UserList';
import Header from './components/Header';
import './App.scss';

export const Context = createContext({
  userList: [],
  setUserList: () => {},
});

const App = () => {
  const [userList, setUserList] = useState([]);
  const initialContext = { userList, setUserList };

  return (
  <Context.Provider value={initialContext}>
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
  </Context.Provider>
  );
};

export default App;
