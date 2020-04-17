import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">Venturus Sports</Link>
      </div>
      <div className={style.menu}>
        Menu
      </div>
    </header>
  );
};

export default Header;