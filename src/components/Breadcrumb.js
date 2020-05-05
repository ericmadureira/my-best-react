import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom'

import style from './Breadcrumb.module.scss';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  let link = '';
  const menu = useMemo(() => pathname.split('/').map(part => {
    link.concat(`/${part}`);
    if (part === ''){
      return (
        <Link to={link} className={style.link}>
          <i className='fas fa-home' />
        </Link>
      );
    } else {
      return (
        <Link to={link} className={style.link}>
          <i className='fas fa-chevron-right' />
          <span>{part}</span>
        </Link>
      );
    }
  }), [link, pathname]);

  return (
    <div className={style.breadcrumb}>
      {menu}
    </div>
  );
};

export default Breadcrumb;
