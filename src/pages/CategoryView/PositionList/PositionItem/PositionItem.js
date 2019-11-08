import React from 'react';

const PositionItem = ({position: {title, coast}}) => {

  return (
    <div>
      <span>{title} coast - {coast}</span>
    </div>
  );
};

export default PositionItem;
