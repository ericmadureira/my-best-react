import React from 'react';
import { TableCell, TableRow } from '@material-ui/core/';

import style from './ListRow.module.scss';

const ListRow = ({ user, removeUser }) => (
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
);

export default ListRow;
