import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core/';
import axios from 'axios';

import urls from '../constants/urls';
import dataParsers from '../shared/dataParsers';
import CategoryContainer from '../components/CategoryContainer';
import SearchBar from '../components/SearchBar';

import style from './UserList.module.scss';

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
        <TableRow
          className={style.tableRow}
          key={user.id}
        >
          <TableCell align='left'>{user.username}</TableCell>
          <TableCell align='right'>{user.name}</TableCell>
          <TableCell align='right'>{user.email}</TableCell>
          <TableCell align='right'>{user.city}</TableCell>
          <TableCell align='right'>{user.groupRideFrequency}</TableCell>
          <TableCell align='right'>{user.weekdaysRideFrequency}</TableCell>
          <TableCell align='right'>{user.posts}</TableCell>
          <TableCell align='right'>{user.albums}</TableCell>
          <TableCell align='right'>{user.photos}</TableCell>
          <TableCell align='right'>
            <span
              className={style.deleteIcon}
              onClick={() => removeUser(user.id)}
            >
              <i className='fas fa-trash' />
            </span>
          </TableCell>
        </TableRow>
      ))
  ), [userList, removeUser, searchTerm]);

  return (
    <div>
      <CategoryContainer />
      <SearchBar setSearchTerm={setSearchTerm} />

      <TableContainer className={style.tableContainer} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>E-mail</TableCell>
              <TableCell align='right'>City</TableCell>
              <TableCell align='right'>Ride in group</TableCell>
              <TableCell align='right'>Day of the week</TableCell>
              <TableCell align='right'>Posts</TableCell>
              <TableCell align='right'>Albums</TableCell>
              <TableCell align='right'>Photos</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;
