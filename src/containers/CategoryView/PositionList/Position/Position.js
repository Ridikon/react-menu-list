import React from 'react';
import PropTypes from 'prop-types';

const Position = ({position: {title, coast}} = {}) => {

  return (
    <div>
      <span>{title} coast - {coast}</span>
    </div>
  );
};

Position.propTypes = {
  position: PropTypes.shape({
    title: PropTypes.string,
    coast: PropTypes.number
  })
};

export default Position;
