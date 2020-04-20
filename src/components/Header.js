import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from './HeaderLogo';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to='/' className={style.brand}>
        <HeaderLogo />
        <span className={style.companyNameLabel}>Venturus Sports</span>
      </Link>

      <div className={style.menu}>
        <div className={style.photo}>
          EM
        </div>
        <span className={style.userNameLabel}>Eric Madureira</span>
        <i className='fas fa-chevron-down' />
      </div>
    </header>
  );
};

export default Header;
