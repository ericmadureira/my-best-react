import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';
import Header from './components/Header';
import CategoryContainer from './components/CategoryContainer';
import './App.scss';

export const Context = createContext({});

const App = () => {
  const [userList, setUserList] = useState([]);
  const initialContext = { userList, setUserList };

  return (
  <Context.Provider value={initialContext}>
    <Router>
      <div className='App'>
        <Header />
        <CategoryContainer />
        <Switch>
          <Route path='/users/new'>
            <UserRegistration />
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
