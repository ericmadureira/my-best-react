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
      <div style={{ margin: '10px 0'}}>
        <span>Users</span>
        <hr style={{ display: 'inline-block', width: '700px', margin: '0 10px' }}/>
        <input
          placeholder='&#xF002; Filter by name or username'
          type='text'
          className='fas'
          onChange={event => setSearchTerm(event.target.value.toLowerCase())}
        />
      </div>

      <div style={{ display: 'flex', padding: '20px 10px', backgroundColor: '#BAEBE1'}}>
        <div style={{ display: 'flex', margin: '0 10px' }}>
          <i className='fas fa-puzzle-piece' />
          <div>
            <span>Sport type</span>
            <br />
            <span>Cycling</span>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '0 10px' }}>
          <i className='fas fa-trophy' />
          <div>
            <span>Mode</span>
            <br />
            <span>Advanced</span>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '0 10px' }}>
          <i className='fas fa-map-signs' />
          <div>
            <span>Route</span>
            <br />
            <span>30 miles</span>
          </div>
        </div>
      </div>

      <TableContainer component={Paper}>
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
