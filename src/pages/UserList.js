import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Context } from '../App';
import PageBar from '../components/PageBar';
import ListTable from '../components/ListTable';
import ListRow from '../components/ListRow';
import Api from '../services/api';

const UserList = () => {
  const { userList, setUserList } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUserList = useCallback(async () => {
    try {
      const emptyUserList = Array.isArray(userList) && !userList.length;
      if (emptyUserList){
        const parsedList = await Api.userListService();
        setUserList(parsedList);
      }
    } catch (e) {
      console.log('Error while fetching data.');
    };
  }, [setUserList, userList]);

  const removeUser = useCallback(removedId => {
    const confirm = window.confirm('Do you really want to delete this user?');
    if (confirm) setUserList(userList.filter(user => user.id !== removedId));
  }, [userList, setUserList]);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  const users = useMemo(() => (
    userList
      .filter(user =>
        user.name.toLowerCase().includes(searchTerm)
        || user.username.toLowerCase().includes(searchTerm))
      .map(user => (
        <ListRow user={user} removeUser={removeUser} />
      ))
  ), [userList, removeUser, searchTerm]);

  return (
    <div>
      <PageBar
        hasSearchInput={true}
        label='Users'
        setSearchTerm={setSearchTerm}
      />
      <ListTable users={users} />
    </div>
  );
}

export default UserList;
