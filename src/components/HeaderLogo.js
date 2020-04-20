import React from 'react';

import style from './HeaderLogo.module.scss';

const HeaderLogo = () => (
  <div className={style.logo}>
    <div className={style.logoSquare}>
      <i className='fas fa-question' />
    </div>
  </div>
);

export default HeaderLogo;
