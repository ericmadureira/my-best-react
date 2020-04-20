import React, { useCallback, useContext } from 'react';

import { Context } from '../App';
import FormHelp from '../components/FormHelp';
import PageBar from '../components/PageBar';
import AddUserForm from '../components/AddUserForm';

const UserList = () => {
  const { userList, setUserList } = useContext(Context);

  const addUser = useCallback(removedId => {
    const confirm = window.confirm('Do you really want to delete this user?');
    if (confirm) setUserList(userList.filter(user => user.id !== removedId));
  }, [userList]);

  return (
    <div>
      <FormHelp />
      <PageBar
        hasSearchInput={false}
        label='Registration'
      />
      <AddUserForm addUser={addUser} />
    </div>
  );
}

export default UserList;
