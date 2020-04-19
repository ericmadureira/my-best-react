import React from 'react';

import style from './Header.module.scss';

const HeaderLogo = () => (
  <div className={style.logo}>
    <div className={style.logoSquare}>
      <i className='fas fa-question logoQuestion' />
    </div>
  </div>
);

export default HeaderLogo;
