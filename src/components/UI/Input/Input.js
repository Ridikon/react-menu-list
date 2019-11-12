import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
