import React, { useMemo } from 'react';

import style from './MultiOptionInput.module.scss';

const MultiOptionInput = ({ label, name, options, registerField, type }) => {
  const inputOptions = useMemo(() => options.map(option => {
    const [value, label] = option;
    return (
      <div className={style.inputContainer}>
        <input type={type} name={name} value={value} ref={registerField} />
        <label htmlFor={value}>{label}</label>
      </div>
    );
  }), [name, options, type, registerField]);

  return (
    <div className={style.multiFieldContainer}>
      <span>{label}</span>
      <div>
        {inputOptions}
      </div>
    </div>
  );
};

export default MultiOptionInput;
