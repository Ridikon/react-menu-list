import React from 'react';

import PositionItem from './PositionItem';

const PositionList = ({positions}) => {
  return (
    <div>
      {positions.length ? positions.map(p => <PositionItem key={p.id} position={p}/>) : <span>No positions</span>}
    </div>
  );
};

export default PositionList;
