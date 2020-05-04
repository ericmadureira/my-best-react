import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

import style from './ListTable.module.scss';

const ListTable = ({ users }) => (
  <TableContainer className={style.tableContainer}>
    <Table aria-label='simple table'>
      <TableHead>
        <TableRow className={style.tableRow}>
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
    <Link to="/users/new">
      <button style={{ marginTop: '20px'}}>Add User</button>
    </Link>
  </TableContainer>
);

export default ListTable;
