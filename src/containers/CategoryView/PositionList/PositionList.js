import React from 'react';
import PropTypes from 'prop-types';

import Position from './Position';

const PositionList = ({positions = []}) => {
  const renderPositions = () => {
    return positions.map(p => <Position key={p.id} position={p}/>)
  };

  return (
    <div>
      {positions.length ? renderPositions() : <span>No positions</span>}
    </div>
  );
};

PositionList.propTypes = {
  positions: PropTypes.array
};

export default PositionList;
