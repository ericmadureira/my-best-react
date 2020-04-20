import React from 'react';

import style from './CategoryContainer.module.scss';

const CategoryContainer = () => (
  <div className={style.categoryContainer}>

    <div className={style.listCategory}>
      <div className={style.categoryIcon}>
        <i className='fas fa-puzzle-piece' />
      </div>
      <div className={style.categoryDescription}>
        <span className={style.categoryLabel}>Sport type</span>
        <span className={style.category}>Cycling</span>
      </div>
    </div>

    <div className={style.listCategory}>
      <div className={style.categoryIcon}>
        <i className='fas fa-trophy categoryIcon' />
      </div>
      <div className={style.categoryDescription}>
        <span className={style.categoryLabel}>Mode</span>
        <span className={style.category}>Advanced</span>
      </div>
    </div>

    <div className={style.listCategory}>
      <div className={style.categoryIcon}>
        <i className='fas fa-map-signs categoryIcon' />
      </div>
      <div className={style.categoryDescription}>
        <span className={style.categoryLabel}>Route</span>
        <span className={style.category}>30 miles</span>
      </div>
    </div>

  </div>
);

export default CategoryContainer;
