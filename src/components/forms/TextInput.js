import React from 'react';

import style from './TextInput.module.scss';

const TextInput = ({ label, instructions, optional }) => (
  <div className={style.fieldContainer}>
    {/* <span className={style.fieldLabel}>{label}</span> */}
    <div className={style.fieldLabel}>
      <span>{label}</span>
      {optional && <span>optional</span>}
    </div>
    <input type='text' />
    <span className={style.fieldInstructions}>{instructions}</span>
  </div>
);

export default TextInput;
