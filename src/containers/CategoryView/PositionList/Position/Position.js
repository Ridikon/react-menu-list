import React from 'react';
import PropTypes from 'prop-types';

import classes from './Position.module.scss';

const Position = ({position: {id, title, coast} = {}, deletePosition}) => {

  return (
    <div className={classes.position}>
      <span>{title} coast - {coast}</span>
      <span onClick={() => deletePosition(id)} className={classes.delete}>Delete</span>
    </div>
  );
};

Position.propTypes = {
  position: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    coast: PropTypes.number
  }),
  deletePosition: PropTypes.func
};

export default Position;
