import React from 'react';

import classes from './Input.module.scss';

const Input = ({type, name, id, value, onChange, placeholder}) => {
  return (
    <div className={classes.control}>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}/>
    </div>
  );
};

export default Input;
