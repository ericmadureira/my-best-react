import React, { createContext, useMemo, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import CategoryContainer from './components/CategoryContainer';
import { Routes } from './routes';
import Breadcrumb from './components/Breadcrumb';
import './App.scss';

export const Context = createContext({});

const App = () => {
  const [userList, setUserList] = useState([]);
  const initialContext = { userList, setUserList };

  const routes = useMemo(() => (
    Routes.map(({path, component}, key) => (
      <Route exact key={key} path={path} component={component} />
    )
  )), []);

  return (
    <Context.Provider value={initialContext}>
      <Router>
        <div className='App'>
          <Header />
          <Breadcrumb />
          <CategoryContainer />
          <Switch>
            {routes}
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
