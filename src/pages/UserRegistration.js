import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import urls from '../constants/urls';
import dataParsers from '../shared/dataParsers';
import CategoryContainer from '../components/CategoryContainer';
import PageBar from '../components/PageBar';
import ListTable from '../components/ListTable';
import ListRow from '../components/ListRow';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUserList = useCallback(async () => {
    try {
      const { data: userInfo } = await axios.get(urls.fetchUserInfo);
      const { data: posts } = await axios.get(urls.fetchPosts);
      const { data: albums } = await axios.get(urls.fetchAlbums);
      const { data: photos } = await axios.get(urls.fetchPhotos);
      const parsedList = dataParsers.parseUserList(userInfo, posts, albums, photos);
      setUserList(parsedList);
    } catch (e) {
      console.log('Error while fetching data.');
    };
  }, []);

  const removeUser = useCallback(removedId => {
    const confirm = window.confirm('Do you really want to delete this user?');
    if (confirm) setUserList(userList.filter(user => user.id !== removedId));
  }, [userList]);

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
      <CategoryContainer />
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
