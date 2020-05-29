import { lazy } from 'react';

const UserList = lazy(() => import('./pages/UserList'));
const UserRegistration = lazy(() => import('./pages/UserRegistration'));

export const Routes = [
  {
    path: '/users',
    component: UserList,
  },
  {
    path: '/users/new',
    component: UserRegistration,
  },
];
