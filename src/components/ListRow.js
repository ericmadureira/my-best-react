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
    <TableCell align='right'>
      <span className={style.highlighted}>{user.email}</span>
    </TableCell>
    <TableCell align='right'>
      <span className={style.highlighted}>{user.city}</span>
    </TableCell>
    <TableCell align='right'>{user.groupRideFrequency}</TableCell>
    <TableCell align='right'>{user.weekdaysRideFrequency}</TableCell>
    <TableCell align='right'>
      <span className={style.highlighted}>{user.posts}</span>
    </TableCell>
    <TableCell align='right'>
      <span className={style.highlighted}>{user.albums}</span>
    </TableCell>
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
