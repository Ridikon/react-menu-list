import React from 'react';

import classes from './Button.module.scss';

const Button = ({children, disabled, type, size}) => {
  let cls = [classes.button, classes[type], classes[size]];

  if (disabled) {
    cls.push(classes.disabled)
  }

  return (
    <button disabled={disabled} className={cls.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
