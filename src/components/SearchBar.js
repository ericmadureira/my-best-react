import React from 'react';

import style from './SearchBar.module.scss';

const SearchBar = ({ setSearchTerm }) => (
  <div className={style.searchBarContainer}>
    <span className={style.userLabel}>Users</span>
    <hr/>
    <input
      placeholder='&#xF002; Filter by name or username'
      type='text'
      className='fas'
      onChange={event => setSearchTerm(event.target.value.toLowerCase())}
    />
  </div>
);

export default SearchBar;
