import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core/';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const UserList = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{ margin: '10px 0'}}>
        <span>Users</span>
        <hr style={{ display: 'inline-block', width: '700px', margin: '0 10px' }}/>
        <input
          style={{
            background: 'url(images/comment-author.gif) no-repeat scroll 7px 7px',
            paddingLeft: '30px',
            fontFamily: 'Arial, FontAwesome',
          }}
          placeholder='&#xF002; Filter user name'
          type='text'
          className='fas'
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
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;