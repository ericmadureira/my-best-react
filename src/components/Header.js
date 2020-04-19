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
        Menu
      </div>
    </header>
  );
};

export default Header;
