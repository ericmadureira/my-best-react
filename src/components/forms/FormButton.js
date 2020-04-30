import React from 'react';

import style from './FormButton.module.scss';

const FormButton = ({ label, type }) => (
  <button
    type={type || 'button'}
    className={style[type]}
  >
    {label}
  </button>
);

export default FormButton;
