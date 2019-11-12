import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = ({children, disabled, typeColor, size, type = 'button'}) => {
  let cls = classNames({
    [classes.button]: true,
    [classes[typeColor]]: typeColor,
    [classes[size]]: size,
    [classes.disabled]: disabled
  });

  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  typeColor: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string
};

export default Button;
