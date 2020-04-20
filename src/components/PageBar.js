import React from 'react';

import style from './PageBar.module.scss';

const PageBar = ({ hasSearchInput, label, setSearchTerm }) => (
  <div className={style.pageBarContainer}>
    <span className={style.userLabel}>{label}</span>
    <hr className={style.separationLine} />
    {
      hasSearchInput &&
      <input
        placeholder='&#xF002; Filter by name or username'
        type='text'
        className={`fas ${style.searchBarInput}`}
        onChange={event => setSearchTerm(event.target.value.toLowerCase())}
      />
    }
  </div>
);

export default PageBar;
