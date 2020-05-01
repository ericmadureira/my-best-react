import React from 'react';

import style from './TextInput.module.scss';

const TextInput = ({ label, instructions, name, optional, registerField }) => (
  <div className={style.fieldContainer}>
    <div className={style.fieldLabel}>
      <span>{label}</span>
      {optional && <span>optional</span>}
    </div>
    <input
      name={name}
      ref={registerField}
      type='text'
    />
    <span className={style.fieldInstructions}>{instructions}</span>
  </div>
);

export default TextInput;
