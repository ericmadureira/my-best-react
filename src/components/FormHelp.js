import React from 'react';

import style from './FormHelp.module.scss';

const FormHelp = () => (
  <div className={style.formHelp}>

    <div className={style.helpSession}>
      <span>Need help?</span>
      <div className={style.help}>
        <i className='far fa-life-ring' />
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
      </div>
    </div>

    <div className={style.helpSession}>
      <span>Why register?</span>
      <div className={style.help}>
        <i className='fas fa-heartbeat' />
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
      </div>
    </div>

    <div className={style.helpSession}>
      <span>What people are saying...</span>
      <div className={style.help}>
      <i className='far fa-smile' />
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
      </div>
    </div>

  </div>
);

export default FormHelp;
