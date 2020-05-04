import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Context } from '../App';
import FormHelp from '../components/FormHelp';
import PageBar from '../components/PageBar';
import AddUserForm from '../components/AddUserForm';
import parsers from '../shared/dataParsers';

const UserList = () => {
  const { handleSubmit, register, reset } = useForm();
  const { userList, setUserList } = useContext(Context);
  let history = useHistory();

  const addUser = data => {
    const newUser = parsers.parseNewUserData(data);
    const newList = userList.concat(newUser);
    setUserList(newList);
    alert('The form has been submitted. Thanks for your contact.');
    reset();
    history.push('/users');
  };

  return (
    <div>
      <PageBar
        hasSearchInput={false}
        label='Registration'
      />
      <FormHelp />
      <AddUserForm
        handleSubmit={handleSubmit}
        addUser={addUser}
        register={register}
      />
    </div>
  );
}

export default UserList;
