import React from 'react';

import style from './PageBar.module.scss';

const SearchBar = ({ hasSearchInput, label, setSearchTerm }) => (
  <div className={style.searchBarContainer}>
    <span className={style.userLabel}>{label}</span>
    <hr/>
    {hasSearchInput && <input
      placeholder='&#xF002; Filter by name or username'
      type='text'
      className='fas'
      onChange={event => setSearchTerm(event.target.value.toLowerCase())}
    />}
  </div>
);

export default SearchBar;
