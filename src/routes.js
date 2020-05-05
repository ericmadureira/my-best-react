import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';

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
